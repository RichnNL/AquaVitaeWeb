import app from 'firebase/app';
import 'firebase/auth';
import {IAuthentication} from '../../state/stores/AuthenticationStore';

const config = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGEBUCKETT,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGINGSENDER_ID,
  };


 class Firebase implements IAuthentication {
        constructor() {
            app.initializeApp(config);
            app.auth().setPersistence(app.auth.Auth.Persistence.LOCAL);
        }
        googleSignIn(): Promise<boolean> {
           const googleProvider =  new app.auth.GoogleAuthProvider();
           return app.auth().signInWithPopup(googleProvider).then(signedInUser => {
            const user = signedInUser.additionalUserInfo!;
            if(user.isNewUser){
              console.log("Is new user");
            } else {
              console.log("Not new user");
            }
            return true;
        }).catch(error => {
            return false;
        });
        }
        facebookSignIn(): Promise<boolean> {
            const facebookProvider   = new app.auth.FacebookAuthProvider();
            return app.auth().signInWithPopup(facebookProvider).then(signedInUser => {
                const user = signedInUser.additionalUserInfo!;
                if(user.isNewUser){
                  console.log("Is new user");
                } else {
                  console.log("Not new user");
                }
                return true;
            }).catch(error => {
                return false;
            });
        }
        isLoggedIn(): Promise<boolean> {
            return new Promise<boolean>( resolve => {
      
                app.auth().onAuthStateChanged(( user => {
                    if(user) {
                        console.log(user!.uid);
                        resolve(true)
                    } else {
                        resolve(false);
                    }
                }))
            })   
        }
        getDisplayName(): string {
            if(app.auth().currentUser) {
                const name = app.auth().currentUser!.displayName;
                if(name) {
                    return name;
                } else {
                    return "";
                }
            }
            return "";
        }
        getEmail(): string {
            if(app.auth().currentUser) {
                const email = app.auth().currentUser!.email;
                if(email) {
                    return email;
                } else {
                    return "";
                }
            }
            return "";
        }
        getPictureURL(): string {
            if(app.auth().currentUser) {
                const url = app.auth().currentUser!.photoURL;
                if(url){
                    return url;
                } else {
                    return "";
                }
            }
            return "";   
        }
        logOut(): Promise<boolean> {
           return app.auth().signOut().then( ()=> {
                return true;
            }).catch( ()=> {
                return false;
            });
        }
 }

 export default new Firebase();