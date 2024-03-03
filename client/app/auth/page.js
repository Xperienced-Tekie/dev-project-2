import React from 'react';

const Auth = () => {
  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-[30rem] h-[35rem] border-2 border-blue-900 relative rounded-md">
        <div className="w-[5rem] h-[5rem] bg-blue-900 rounded-br-full">
          <div className="w-[10rem] h-[8rem] bg-yellow-300 absolute bottom-0 right-0 rounded-tl-full" />
        </div>
        <div className="text-center relative z-10">
          <p className="text-lg font-bold text-blue-900">
            Sign up or sign in <br />
            to use chattie
          </p>
        </div>
        <div className="flex flex-col items-center pt-8">
          <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Sign Up With Google
          </button>
          <button className="bg-slate-300 hover:bg-blue-700 text-black font-bold py-2 px-4 rounded mt-2">
            Sign Up with Facebook
          </button>
        </div>
        <hr className="border-blue-900 w-3/5 ml-28 my-3" />
        <div className="text-center mt-4">
          <form>
            <label htmlFor="email" className="block text-black-500 font-bold">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border-2 border-blue-900 rounded-md py-2 px-4 mt-1 w-72 focus:outline-none"
              required
            />
            <label
              htmlFor="passkey"
              className="block text-black-500 font-bold mt-4"
            >
              Passkey
            </label>
            <input
              type="password"
              id="passkey"
              name="passkey"
              className="border-2 border-blue-900 rounded-md py-2 px-4 mt-1 w-72 focus:outline-none"
              required
            />
            <br />
            <div class="absolute bottom-16 left-4 z-20 w-full text-center">
              <button class="bg-blue-950 hover:bg-blue-500 text-white font-bold py-2.5 px-12 rounded w-64">
                Sign Up
              </button>
            </div>
          </form>
          <div class="absolute bottom-4 left-4 z-20 w-full text-center">
            <p class="text-[10px] mt-5">
              By signing up you agree with <br />
              our <span class="text-blue-500">terms and conditions</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
