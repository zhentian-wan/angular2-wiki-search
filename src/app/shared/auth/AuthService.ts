
import {AuthProviders, FirebaseAuthState, FirebaseAuth, AuthMethods} from "angularfire2";
import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class AuthService {

  private authState: FirebaseAuthState = null;

  constructor(public auth$: FirebaseAuth) {
    auth$.subscribe((state: FirebaseAuthState) => {
      this.authState = state;
    });
  }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  get id(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  login(email, password) {

    return this.fromFirebaseAuthPromise(this.auth$.login({
      email, password
    },{
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    }));
  }

  fromFirebaseAuthPromise(promise) {
    const subject = new Subject<any>();

    promise.then((res) => {
      subject.next(res);
      subject.complete();
    }, err => {
      subject.error(err);
      subject.complete();
    });

    return subject.asObservable();
  }

  signIn(provider: number): firebase.Promise<FirebaseAuthState> {
    return this.auth$.login({provider, method: AuthMethods.Popup})
      .catch(error => console.log('ERROR @ AuthService#signIn() :', error));
  }

  signInWithGithub(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Github)
  }

  signInWithGoogle(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Google);
  }

  signInWithTwitter(): firebase.Promise<FirebaseAuthState> {
    return this.signIn(AuthProviders.Twitter);
  }

  signOut(): void {
    this.auth$.logout();
  }
}
