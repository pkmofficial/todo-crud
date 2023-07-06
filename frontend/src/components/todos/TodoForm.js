import axios from 'axios';
import React, { useState } from 'react'

function TodoForm( {fetchUserTodos, BASE_URL} ) {

      const [title, setTitle] = useState("")
      const token = sessionStorage.getItem("token");
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`  
      console.log(title);

          

     const handleTitleSubmit = async (e) => {
      e.preventDefault();

      const data = {
        Title: title
      }

      const resp = await axios.post(`${BASE_URL}/api/todo/`, data)
        console.log(resp);
        setTitle("");
        fetchUserTodos();

     }


     





  return (
    <>
      <h1 className="my-7 text-center text-2xl font-extrabold leading-9 tracking-tight text-blue-900 ">
            Todo CRUD Application
      </h1>
      <div className='text-center '>  
        <form  onSubmit={handleTitleSubmit}   className='todoForm flex flex-col text-center items-center justify-center  rounded-[1rem] bg-[#ffffff]  '>
          
          <input type="text" placeholder="Enter your Todo-Item" className='w-10.5 mb-3 border-black border-2 px-4 rounded-[0.5rem] placeholder:italic  placeholder:relative placeholder:text-center h-[3rem] focus:outline-none focus:ring-[0.3rem] focus:ring-blue-400 ' 
          
          value={title}
          onChange= {(e)=> setTitle(e.target.value)}
          ></input>
          
          <button type='submit' className='text-white bg-[#2c44ff] px-[3rem] py-[0.5em] rounded-[0.5rem] pointer-cursor font-bold active:bg-violet-700 active:text-white' >Submit</button>
        </form>


      </div>
    </>
  )
}

export default TodoForm