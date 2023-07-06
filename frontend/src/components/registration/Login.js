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
      {/* <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
            <a href="#" class="flex items-center mb-6 text-2xl font-semibold text-white-900 ">
                <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                Todo Application    
            </a>
            <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                    <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                        Sign in to your account
                    </h1>
                    <form  onSubmit={submitLogin} className="space-y-6" action="#" method="POST">
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
      </section> */}

      {/* new */}
      <h1 className="mt-7 text-center text-2xl font-extrabold leading-9 tracking-tight text-blue-900 ">
            Todo CRUD Application
      </h1>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">

          {/* <img
            className="mx-auto h-10 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt="Your Company"
          /> */}
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-blue-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={submitLogin} action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-blue-700">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder='sample@test.com'
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-blue-700">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Already have an account?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e)=>{setPassword(e.target.value)}}
                  placeholder='enter password'
                  required
                  className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="/signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Register Now.
            </a>
          </p>
        </div>
      </div>
      
    </>
  )
}

export default Login