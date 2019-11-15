import { observable, runInAction, action } from 'mobx';
import {STORAGEKEY} from '../../../constants/storageKey';



export interface IAuthenticationStore {
    loggedIn: boolean;
    userName: string;
    logInFacebook(): Promise<number>;
    logInGoogle(): Promise<number>;
    logOut(): Promise<boolean>;
    picture: string;
}

export interface IAuthentication {
  googleSignIn(): Promise<number>;
  facebookSignIn(): Promise<number>;
  isLoggedIn(): Promise<boolean>;
  getDisplayName(): string;
  getEmail(): string;
  getPictureURL(): string;
  logOut(): Promise<boolean>;
}

class AuthenticationStore implements IAuthenticationStore  {
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
  async logInFacebook() {
    try{
      const result = await  this.authentication.facebookSignIn();
      if(result === 1) {
        runInAction(() => {
          this.loggedIn = true;
          this.picture = this.authentication.getPictureURL();
          this.userName = this.authentication.getDisplayName();
        });
      } 
      return result;
    } catch(Error) {
      return 0;
    }
  }

  @action
  async logInGoogle() {
    try{
      const result = await this.authentication.googleSignIn();
      if(result === 1) {
        runInAction(() => {
          this.loggedIn = true;
          this.picture = this.authentication.getPictureURL();
          this.userName = this.authentication.getDisplayName();
        });
      }
       
      return result;
    } catch(Error) {
      return 0;
    }
  }

  @action
  async logOut() {
    try {
      const result = await this.authentication.logOut();
      if(result) {
        runInAction(() => {
          this.loggedIn = false;
          this.picture = '';
          this.userName = '';
          localStorage.removeItem(STORAGEKEY.loginMethodKey);
        });
      }
      return result;
    } catch(Error) {
      return false;;
    }
  }

  async setAuthenticationFromPreviousSession() {
     await this.authentication.isLoggedIn().then(isLoggedIn => {
      this.loggedIn = isLoggedIn;
      if(this.loggedIn) {
        this.userName = this.authentication.getDisplayName();
        this.picture = this.authentication.getPictureURL();
      }
    })
  }
}


export default AuthenticationStore;
