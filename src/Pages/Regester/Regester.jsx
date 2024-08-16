import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword ,sendEmailVerification,updateProfile} from "firebase/auth";

import { Link } from 'react-router-dom';
import auth from '../../AuthProvider/fire-base-confiq';


const Regester = () => {
    const [errorRg,setError]=useState('')
     const [success, setSucess]=useState('')   
    
    const  regHandle = e =>{
        setSucess('')
        setError('')
       e.preventDefault()
       const name=e.target.name.value
        const email =e.target.email.value
        const password =e.target.password.value
        const accpted = e.target.terms.checked

        
        

        if(password.length < 6){
            setError(' plese provide 6 charecter password')
            return
        }
        else if(! accpted){
            setError('pleace accpet terms and condition')
            return
        }
    
       
        createUserWithEmailAndPassword(auth, email, password)
        .then((result)=>
         {
          const user =result.user
         setSucess('Sucessfuly create Your account')
         updateProfile(result.user,{
            displayName:name
         })
         .then()
         .catch()
        //  sendEmailVerification( result.user)
        //  .then(()=>{
        //     alert('email verification sent')
        //  })
         }
        )
        .catch((error)=>{
        
          const errorMsg=error.message
          setError(errorMsg)
        })
      
    }
    return (
        <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-900 text-gray-100 lg:w-1/2 mx-auto mt-5">
        <div className="mb-8 text-center">
            <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
            <p className="text-sm text-gray-400">Sign Up to access your account</p>
        </div>
        <form onSubmit={regHandle}  action="" className="space-y-12">
            <div className="space-y-4">
            <div>
                    <label for="email" className="block mb-2 text-sm -ml-48  lg:-ml-72">Name</label>
                    <input type="text" name="name" id="name" placeholder="Your Name"  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                </div>
                <div>
                    <label for="email" className="block mb-2 text-sm -ml-48  lg:-ml-72">Email address</label>
                    <input type="email" name="email" id="email" placeholder="leroy@jenkins.com "  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required />
                </div>
                <div>
                    <div className="flex justify-between mb-2">
                        <label for="password" className="text-sm " >Password</label>
                        
                    </div>
                   
                    <input  type="password" name="password" id="password" placeholder="*****"  className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100" required/>
                </div>
                { errorRg && <p className='text-red-700'>{errorRg}</p>}
                { success && <p className='text-green-600'>{success}</p>}
            </div>
            <div>
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms"> terms and condition</label>
            </div>
            <div className="space-y-2">
                <div className="">
                <input className='w-full px-8 py-3 font-semibold rounded-md bg-violet-400 text-gray-900' type="submit" value="Suubmit" />
                </div>
                <p className="px-6 text-sm text-center text-gray-400">Don't have an account yet?
                    <a rel="noopener noreferrer" href="#" className="hover:underline text-violet-400"><Link to='/login'>Sign in</Link></a>.
                </p>
            </div>
        </form>
    </div>
    );
};

export default Regester;