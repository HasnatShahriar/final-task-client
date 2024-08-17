import React, { useRef, useState } from 'react';
import {  signInWithEmailAndPassword , GoogleAuthProvider, signInWithPopup} from "firebase/auth";
;
import { Link } from 'react-router-dom';
import auth from '../AuthProvider/fire-base-confiq';

const Login = () => {
    const [sucessful,SetSucessful]=useState('')
    const [error,setError]=useState('')
    const useReff=useRef(null)
    
    
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleAuthProvider)
            .then((result) => {
                const user = result.user;
                console.log('User signed in:', user);
                setSuccessful('Google sign-in successful');
            })
            .catch((error) => {
                console.error('Error during Google sign-in:', error.message);
                setError('Failed to sign in with Google: ' + error.message);
            });
    };
    const submitHandle =e =>{
        e.preventDefault()
        setError('')
        SetSucessful('')
        
        
       
        const email =e.target.email.value
        const password= e.target.password.value

           
        signInWithEmailAndPassword(auth,email,password)
        .then((result)=>{
            const user= result.user
            console.log(user)
            // if(!user.emailVerified){
            //     alert('plese verifay your email')
            //     return
            // }
            SetSucessful('Login Sucessful')
        })
        .catch((error)=>{
            const errorMsg=error.message
            setError(errorMsg)

        })
     
    }
    const reseHandle=()=>{
       const email =useReff.current.value
      sendPasswordResetEmail(auth,email)
      .then(()=>{
        alert('passwort reset sent your email')
        SetSucessful('Password reset secessful')
      })
      .catch((error)=>{
        const errormsg=error.code
        setError(errormsg)
      })
    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-[#8025E4] text-gray-100 lg:w-1/2 mx-auto mt-5">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign in</h1>
            <p className="text-sm text-white">Sign in to access your account</p>
        </div>
        <form onSubmit={submitHandle} action="" className="space-y-12">
            <div className="space-y-4">
                <div>
                    <label for="email" className="block mb-2 text-sm -ml-48  lg:-ml-72">Email address</label>
                    <input type="email" ref={useReff} name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label for="password" className="text-sm">Password</label>
                        <a onClick={reseHandle} rel="noopener noreferrer" href="#" className="text-xs hover:underline text-white">Forgot password?</a>
                    </div>
                    <input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" />
                </div>
            </div>
            {sucessful && <p className='text-green-600'>{sucessful}</p>}
            {error && <p className='text-red-700'>{error}</p>}
            <div className="space-y-2">
                <div>
                    <input className="w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900" type="submit" value="Sign in" />
                </div>
                <p className="px-6 text-sm text-center text-white">Don't have an account yet?
                    <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-400"><Link className='text-black ml-2' to='/regester'>Sign up</Link></a>
                </p>
            </div>
        </form>
        <button onClick={handleGoogleSignIn} className="mx-auto mb-4 mt-8 block rounded-md border px-5 py-2 shadow-lg duration-200 hover:bg-zinc-400/10 dark:border-zinc-700 dark:hover:bg-zinc-700 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="mr-2 inline-block h-5 w-5 fill-current"><path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path></svg>
                        Continue with Google
                    </button>
    </div>
    );
};

export default Login;