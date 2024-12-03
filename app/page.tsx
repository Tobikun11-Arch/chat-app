"use client"
import React, { useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Page = () => {
  const [ username, setUsername ] = useState<string>('');
  const [ register, setRegister ] = useState<boolean>(false)

  const handleSubmit = (userType: string) => {
    console.log("user want to: ", userType)
    console.log({ username });
  };

    return (
        <div className='h-screen flex justify-center items-center bg-white dark:bg-black px-3 cursor-default font-bold'>
            <form className="flex flex-col gap-1 custom-sm:w-[350px] w-full p-5 border border-[#3333] text-black dark:text-white">
              <label htmlFor="username" className="font-bold">Username</label>
              <input
                type="username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="p-2 border rounded text-black outline-none" 
                placeholder="egx..shirauni24"
              />

              <h1 className='flex justify-center mt-6'>or {register ? 'sign up' : 'sign in'} with</h1>
              <div className="flex gap-5 self-center mt-6">
                  <FcGoogle className='w-10 h-10'/>
                  <FaGithub className='w-10 h-10'/>
              </div>
            

              <div className='mt-6'>
                {register ? <p className='text-xs text-black dark:text-white font-normal'>Already have an account? <span className='text-blue-800' onClick={()=> setRegister(false)}>Sign in</span></p> : <p className='text-xs text-black dark:text-white font-normal'>Don't have an account yet? <span className='text-blue-800' onClick={()=> setRegister(true)}>Register</span></p>}
                <button
                  type="submit"
                  className="p-2 bg-black dark:bg-blue-700 w-full dark:border mt-1 text-white rounded hover:bg-black transition" onClick={register ? ()=> handleSubmit('Register') : ()=> handleSubmit('Login')}>
                  {register ? 'Register' : 'Login'}
                </button>
              </div>
            </form>
        </div>
    )
}

export default Page
