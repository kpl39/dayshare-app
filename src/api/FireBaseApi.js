import { AccessToken, LoginManager } from 'react-native-fbsdk';
import firebase from 'react-native-firebase';

export const facebookLogin = () => {
    console.log('Facebook Login called');
    return new Promise(resolve => {
        LoginManager
        .logInWithReadPermissions(['public_profile', 'email'])
        .then((result) => {
            if (!result.isCancelled) {
                console.log(`Login success with permissions: ${result.grantedPermissions.toString()}`)
                return AccessToken.getCurrentAccessToken()
            }
        })
        .then((data) => {
            if (data) {
                const credential = firebase.auth.FacebookAuthProvider.credential(data.accessToken);
                resolve(firebase.auth().signInWithCredential(credential));
            }
        })
        .then((currentUser) => {
            if (currentUser) {
                console.info(JSON.stringify(currentUser.toJSON()))
            }
        })
        .catch((error) => {
            return error;
        })
    });
    
}


export const getAuthState = () => {
    return new Promise(resolve => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('On Auth State Change', user);
            resolve(user);
        })
    });
}




// After Facebook Login navigate to profile page
// Make a Profile Component that calls the Get parents by user id action on componentWillLoad