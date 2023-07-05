import axios from 'axios';
import React,{useState} from 'react';
import {NavLink,useNavigate} from "react-router-dom";
import { useCookies} from "react-cookie"


function Login({BASE_URL}) {
  const navigateTo = useNavigate();
  const [email,setEmail] = useState("");
  const [password, setPassword] =useState("");

  const submitLogin = async (e) =>{
      
    try {
      e.preventDefault();
      const data = {
        email,
        password
      };
      const resp = await axios.post(`${BASE_URL}/api/u/login`, data, {withCredentials : true});
      console.log(resp);
      // save token in session storage
      sessionStorage.setItem("token", resp.data.token);
      if (resp.data.success === true) {
      navigateTo("/dashboard");
        
      console.log(resp.data.token);
      window.alert("Login Successfull!");
      } 
      
      
      if(resp.status === 400 || resp.status === 401){
      alert("Invalid Crenditals!")
      }
    } catch (error) {
      console.log(error);
      alert("Invalid Credentials!")
    }
        
      
  }


  return (
    <>
      {/* new code */}
      <section class="bg-gray-50 dark:bg-gray-900">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                Todo Application    
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form class="space-y-4 md:space-y-6" onSubmit={submitLogin} className="space-y-6" action="#" method="POST">
                        <div>
                            <label htmlFor="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                            <input id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            required 
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div>
                            <label htmlFor="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                            <input id="password"
                            name="password"
                            type="password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e)=>{setPassword(e.target.value)}}
                            required
                            class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Sign In</button>
                        <p class="text-sm font-light text-gray-500 ">
                            Don’t have an account yet? <a href="/signup" class="font-medium text-primary-600 hover:underline dark:text-primary-500">Register</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
      </section>
      
    </>
  )
}

export default Login