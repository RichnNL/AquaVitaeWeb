import { observable, action } from 'mobx'


export interface IAuthenticationStore {
    loggedIn: boolean;
    userName: string;
    logInFacebook(): any;
    logInGoogle(): any;
    logOut(): any;
    picture: string;
}

export interface IAuthentication {
  googleSignIn(): Promise<boolean>;
  facebookSignIn(): Promise<boolean>;
  isLoggedIn(): Promise<boolean>;
  getDisplayName(): string;
  getEmail(): string;
  getPictureURL(): string;
  logOut(): Promise<boolean>;
}

export class AuthenticationStore implements IAuthenticationStore  {
  authentication: IAuthentication;
  constructor(authentication: IAuthentication) {
    this.authentication = authentication;
    this.setAuthenticationFromPreviousSession();
  }

  @observable
  picture = "";

  
  @observable
  loggedIn = false;

  @observable
  userName = "";

  @action
  logInFacebook() {
      this.authentication.facebookSignIn().then( action("signedIn", result => {
        if(result) {
          this.loggedIn = true;
          this.picture = this.authentication.getPictureURL();
          this.userName = this.authentication.getDisplayName();
          } 
        }
      )
    )
  }

  @action
  logInGoogle() {
    this.authentication.googleSignIn().then( action("success" , result => {
      if(result) {
        this.loggedIn = true;
        this.picture = this.authentication.getPictureURL();
        this.userName = this.authentication.getDisplayName();
      }
    }))
  }

  @action
  logOut() {
    this.authentication.logOut();
  }

  async setAuthenticationFromPreviousSession() {
     await this.authentication.isLoggedIn().then(isLoggedIn => {
      this.loggedIn = isLoggedIn;
      console.log(this.loggedIn);
      if(this.loggedIn) {
        this.userName = this.authentication.getDisplayName();
        this.picture = this.authentication.getPictureURL();
      }
    })
  }
}


