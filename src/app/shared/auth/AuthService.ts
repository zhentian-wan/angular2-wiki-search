
import {AuthProviders, FirebaseAuthState, FirebaseAuth, AuthMethods} from "angularfire2";
import {Injectable} from "@angular/core";
import {Subject, BehaviorSubject} from "rxjs";
import {AuthInfo} from "./AuthInfo";

@Injectable()
export class AuthService {

  static UNKNOW_USER = new AuthInfo(null);

  private authState: FirebaseAuthState = null;
  public authInfo$: BehaviorSubject<AuthInfo> = new BehaviorSubject<AuthInfo>(AuthService.UNKNOW_USER);

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

  signUp(email, password){
    return this.fromFirebaseAuthPromise(this.auth$.createUser(
      {email, password}
    ));
  }

  login(email, password) {

    return this.fromFirebaseAuthPromise(this.auth$.login({
      email, password
    },{
      method: AuthMethods.Password,
      provider: AuthProviders.Password
    }));
  }

  logout(){
    this.auth$.logout();
    this.authInfo$.next(AuthService.UNKNOW_USER);
  }

  fromFirebaseAuthPromise(promise) {
    const subject = new Subject<any>();

    promise.then((res) => {
      const uid = this.authState.uid;
      const authInfo = new AuthInfo(uid);
      this.authInfo$.next(authInfo);
      subject.next(res);
      subject.complete();
    }, err => {
      this.authInfo$.error(err);
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
