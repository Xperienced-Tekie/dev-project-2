'use client';

import React, { useState } from 'react';

function UserOnboardingForm() {
  const [username, setUsername] = useState('');
  const [bio, setBio] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleBioChange = (event) => {
    setBio(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, like sending data to server or performing other actions
    console.log('Username:', username);
    console.log('Bio:', bio);
  };

  return (
    <div className="flex justify-center w-full h-screen items-center">
      <div className="w-full md:w-[30rem] h-[35rem] border-2 border-blue-900 relative rounded-md">
        <div className="w-[10rem] h-[8rem] bg-blue-900 rounded-br-full">
          <div className="w-[10rem] h-[8rem] bg-yellow-300 absolute bottom-0 right-0 rounded-tl-full" />
        </div>
        <div className="text-center relative z-10">
          <h1 className="text-lg font-bold text-blue-900">
            Complete Your Profile
          </h1>
        </div>
        <div className="flex flex-col items-center ml-4 pt-8"></div>
        <div className="flex mt-4  items-center">
          <input
            type="file"
            accept="image/*"
            className="appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            onChange={(e) => console.log(e.target.files[0])}
          />
          <p className="text-blue-900 mr-4">Upload Your Picture</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-4 left-2">
            <label
              htmlFor="username"
              className="block text-gray-700 font-bold mb-2"
            >
              Username:
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              // className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              className="border-2 border-blue-900 rounded-md py-2 px-4 mt-1 w-full md:w-72 focus:outline-none"
              required
            />
          </div>
          <div className="mb-4 ">
            <label
              htmlFor="bio"
              className="block border-5 border-blue-900 rounded-md font-bold mb-2"
            >
              Short Bio:
            </label>
            <textarea
              id="bio"
              value={bio}
              onChange={handleBioChange}
              className="  w-[20rem] h-[5rem]  px-2 py-2 rounded  border-5 border-blue-900"
              // className="shadow appearanceh-32-none  w-[300] py-3 px-3 text-blue-900 "
              // className="block border-5 border-blue-900 font-bold mb-4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            // className="bg-blue-900 hover:bg-blue-700 text-white font-bold py-4 px-4 rounded focus:outline-none focus:shadow-outline mr-6"
            className="bg-blue-950 hover:bg-blue-500 text-white left-4 z-20 bottom-16 font-bold py-2 px-4 mt-5 md:py-2.5 md:px-12 rounded w-full md:w-72 "
          >
            Save and Continue
          </button>
        </form>
        {/* <div>
          <p>Username: {username}</p>
          <p> Short Bio :{bio}</p>
        </div> */}
      </div>
    </div>
  );
}

export default UserOnboardingForm;
