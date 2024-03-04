import React from 'react';

const Friends = () => {
  return (
    <div className="bg-[#EEEBFD] min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-3xl text-blue-900 absolute top-0 left-0 mt-4 ml-4 font-bold">
        Search for someone you know to start chatting
      </h1>

      <div className="p-4 rounded-lg mt-4">
        <input
          type="text"
          className="w-full py-2 px-4 md:px-20 mb-4 border-[3px] border-blue-950 rounded-lg focus:outline-none"
          placeholder="Tomiwa"
        />
      </div>

      <div className="mt-4 flex flex-col items-center">
        <img src="/images/rectangle.png" alt="Rectangle" className="w-24" />
        <p className='mt-2'>Tomiwa Phillip</p>
      </div>
    </div>
  );
};

export default Friends;
