import {IAuthentication} from '../Authentication/AuthenticationStore';
import ERRORCODE from '../../../constants/errorCode';
class MockAuthentication implements IAuthentication {
    mockSignIn = jest.fn();
    constructor() {
        this.mockSignIn.mockReturnValueOnce(ERRORCODE.signIn.loginFailed.code)
        .mockReturnValueOnce(1);
    }
        
    googleSignIn(): Promise<number> {
        const result = this.mockSignIn();
        return new Promise<number>(resolve => {
            return resolve(result);
        });
    }    
    facebookSignIn(): Promise<number> {
        const result = this.mockSignIn();
        return new Promise<number>(resolve => {
            return resolve(result);
        });
    }
    isLoggedIn(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            return resolve(false);
        });
    }
    getDisplayName(): string {
        return 'TestName';
    }
    getEmail(): string {
        return 'TestEmail';
    }
    getPictureURL(): string {
        return 'TestPicture';
    }
    logOut(): Promise<boolean> {
        return new Promise<boolean>(resolve => {
            return resolve(true);
        });
    }


}

export default MockAuthentication;