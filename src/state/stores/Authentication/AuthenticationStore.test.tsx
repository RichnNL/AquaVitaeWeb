import AuthenticationStore from './AuthenticationStore';
import MockAuthentication from './AuthenticationMock';

describe("AuthenticationStore", () => {

    it("LoginGoogle ", async() => {
        const mockauthentication = new MockAuthentication();
        const store = new AuthenticationStore(mockauthentication);
        expect(store.loggedIn).toBe(false);
        //First Log in attempt fails
        await store.logInGoogle();
        expect(store.loggedIn).toBe(false);

        // Second Succeed
        await store.logInGoogle();
        expect(store.loggedIn).toBe(true);
        expect(store.picture).toBe('TestPicture');
        expect(store.userName).toBe('TestName');

        await store.logOut();
        expect(store.loggedIn).toBe(false);
        expect(store.picture).toBe('');
        expect(store.userName).toBe('');
    })

    it("LoginFacebook ", async() => {
        const mockauthentication = new MockAuthentication();
        const store = new AuthenticationStore(mockauthentication);
        expect(store.loggedIn).toBe(false);
        //First Log in attempt fails
        await store.logInFacebook();
        expect(store.loggedIn).toBe(false);

        // Second Succeed
        await store.logInFacebook();
        expect(store.loggedIn).toBe(true);
        expect(store.picture).toBe('TestPicture');
        expect(store.userName).toBe('TestName');

        await store.logOut();
        expect(store.loggedIn).toBe(false);
        expect(store.picture).toBe('');
        expect(store.userName).toBe('');
    })

  })