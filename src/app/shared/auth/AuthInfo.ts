export class AuthInfo {
  constructor(private uid$: string){

  }

  isLoggedIn() {
    return !!this.uid$;
  }
}
