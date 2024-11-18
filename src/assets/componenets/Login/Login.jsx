
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../fiabase/firebase.init";
import { useState } from "react";
const Login = () => {

    const [user,setUser]=useState(null)
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn=()=>{
        signInWithPopup(auth,provider)
        .then(result=>{
           setUser(result.user);
        })
        .catch(err=>{
           setUser(null);
           console.log(err);
        })

    }
   
    return (
        <div>
            <button onClick={handleGoogleSignIn}>Login With Google</button>
            {
                user && <h4>
                    {user.displayName}
                </h4>
            }
        </div>
    );
};

export default Login;