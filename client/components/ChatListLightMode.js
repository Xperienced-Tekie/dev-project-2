import navIcon from '@/public/images/Nav.png';
import searchIcon from '@/public/images/Shape.png';
import searchImg from '@/public/images/Images.png';
import avatarMan2 from '@/public/images/Images (1).png';
import avatarWoman2 from '@/public/images/Images (2).png';
import Image from 'next/image';
import ChatListMsg from './ChatListMessage';
import ChatLightmode from './ChatLightmode';

const ChatListLightmode = () => {
  return (
    <div className='justify-between md:flex  lg:flex sm:flex-wrap'>
    <div
      className="text-black w-10/12 m-auto rounded-lg sm:w-11/12"
      style={{ width: '516px', height: '741px', backgroundColor: '#EEE8FD' }}
    >
      <div className="py-10">
        <div
          className="rounded-md border-4 text-center  bg-white  m-auto w-72 py-2 px-4"
          style={{ borderColor: '#00286B' }}
        >
          <label className="flex justify-items-center ">
            <input
              className="placeholder:italic placeholder:text-slate-400  w-full"
              placeholder="Tomi"
              type="text"
              name="search"
            ></input>
            <Image src={searchIcon} width={28} height={25} alt="searchIcon" />
          </label>
        </div>
      </div>

      <ChatListMsg img={searchImg} name="Tomiwa Philip" />

      <ChatListMsg img={avatarMan2} name="Dickson James" />

      <ChatListMsg img={avatarWoman2} name="Fred Lam" />

      <ChatListMsg img={searchImg} name="Fgis Jammy" />

      <ChatListMsg img={avatarWoman2} name="Jose Munroe" />

      <ChatListMsg img={avatarMan2} name="Martin Pearl" />
      <ChatListMsg img={searchImg} name="Freaking Drey" />

      <ChatListMsg 
            img={avatarWoman2}
            name="Pet Rose" /> 

      <div className="flex justify-end mr-8">
        <Image src={navIcon} width={80} height={76} alt="navIcon" />
      </div>
    </div>
    
    <ChatLightmode />
    </div>
  );
};

export default ChatListLightmode;
