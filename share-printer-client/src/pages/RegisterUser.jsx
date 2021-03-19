import React from 'react'
import { Link } from 'react-router-dom'

function RegisterUser () {
  return (
    <div>
      <div class="relative mx-6 mx-auto w-1/2 lg:w-1/4 z-20 mt-20">
        <div class="shadow-lg bg-white rounded-lg p-8">     
          <h1 class="text-center text-2xl text-green-500">Register</h1>      
          <form class="pt-6 pb-2 my-2">
            <label class="block text-sm font-bold mb-2" for="password">
              Email
            </label> 
            <div class="relative flex w-full flex-wrap items-stretch mb-6">
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i class="material-icons">email</i>
              </span>
              <input type="text" placeholder="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 pl-10"/>
            </div>
            <label class="block text-sm font-bold mb-2" for="password">
              Username
            </label> 
            <div class="relative flex w-full flex-wrap items-stretch mb-6">
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i class="material-icons">person</i>
              </span>
              <input type="text" placeholder="username" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 pl-10"/>
            </div>
            <label class="block text-sm font-bold mb-2" for="password">
              Password
            </label> 
            <div class="relative flex w-full flex-wrap items-stretch mb-6">
              <span class="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i class="material-icons">lock</i>
              </span>
              <input type="text" placeholder="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 mb-3 pl-10"/>
            </div>
            <div class="block md:flex items-center justify-between">
              <div>
                <button
                  class="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded border-b-4 border-green-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105"
                  type="button"
                >
                  Register
                </button>
              </div>      
              <div class="mt-4 md:mt-0">
                <Link to="/loginUser" class="text-green no-underline hover: color-blue-500">Login Here</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default RegisterUser