import React, {Component} from 'react'
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app'
import 'firebase/auth'
import FirebaseConfig from './Firebase'

const firebaseApp = firebase.initializeApp(FirebaseConfig)

class Login extends Component {
    render(){
        const { user, signOut, signInWithGoogle} = this.props;
        return(
            <div>
                {
                    user?<p>
                        Hola, {user.displayName}
                    </p>
                    :<p>Por favor, logueate</p> 
                }
                {
                    user?<button onClick={signOut}>Salir</button>
                    :<button onClick={signInWithGoogle}>Log in con Google</button>
                }
            </div>
        )
    }
}

const firebaseAppAuth = firebase.auth()
const providers = {
    googleProvider : new firebase.auth.GoogleAuthProvider(),
}

export default withFirebaseAuth({
    providers,
    firebaseAppAuth,
})(Login)