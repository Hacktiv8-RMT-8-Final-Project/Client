import React from 'react'

function LoginUser () {
  return (
    <div className="">
      <div className="font-sans">
        <div className="relative min-h-screen flex flex-col sm:justify-center items-center">
          <div className="relative sm:max-w-sm w-full">
            <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6"></div>
            <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6"></div>
            <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
              <p for="" className="block text-xl text-gray-700 text-center font-semibold">
                  Login
              </p>
              <form className="mt-10">
                <div>
                    <input type="email" placeholder="Email" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-md shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 py-2 px-3" />
                </div>

                <div className="mt-7">                
                    <input type="password" placeholder="Password" className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-md shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 py-2 px-3" />                           
                </div>

                <div className="mt-7">
                  <button className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-md hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                      Login
                  </button>
                </div>

                <div className="flex mt-7 items-center text-center">
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                  <label className="block font-medium text-sm text-gray-700 w-full">
                      Or Login with
                  </label>
                  <hr className="border-gray-300 border-1 w-full rounded-md" />
                </div>

                  <div className="flex mt-7 justify-center w-full">
                    <button className="bg-red-500 border-none px-4 py-2 rounded-xl cursor-pointer text-white shadow-xl hover:shadow-inner transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                        Google
                    </button>
                  </div>

                  <div className="mt-7">
                    <div className="flex justify-center items-center">
                      <label className="w-full text-sm text-gray-600">Don't have any account?</label>
                      <a href="#pablo" className="w-full text-blue-500 transition duration-500 ease-in-out  transform hover:-translate-x hover:scale-105">
                          Register here
                      </a>
                    </div>
                  </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginUser