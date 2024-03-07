import P2ChatSearchDarkmode from './P2ChatSearchDarkmode';
import ChatSearchBar from './ChatSearchBar';
import ChatNav from './ChatNav';
import Message from './Message';
import Messagesfooter from './Messagesfooter';
import avater from '@/public/asset/Rectangle.png';
import messageIcon from '@/public/asset/Chattie Logo.png';
import infoIcon from '@/public/asset/icon-info.png';
import ellipse from '@/public/asset/Ellipse 16.png';
import emoji from '@/public/asset/icon-meh.png';
import sendIcon from '@/public/asset/icon-send.png';
import plusIcon from '@/public/asset/icon-plus.png';
import searchImg from '@/public/asset/images.png';
import searchIcon from '@/public/asset/Shape.png';
import navIcon from '@/public/asset/Nav.png';
import Image from 'next/image';

const ChatSearchLightmode = () => {
  
  return (
    <>
    <div className='justify-between md:flex  lg:flex sm:flex-wrap' style={{ backgroundColor: '#EEE8FD' }}>
      <div
        className="text-white w-10/12 m-auto rounded-lg pt-4 sm:w-11/12"
        style={{ width: '516px', height: '741px', backgroundColor: '#EEE8FD' }}
      >
        <ChatSearchBar />

        <div
          className="flex justify-items-center m-auto"
          style={{ width: '446px', height: '93px' }}
        >
          <Image src={searchImg} width={85} height={81} alt="searchImg" />
          <h3 className="text-xl text-black pl-8">
            <span className="font-bold">Tomi</span>wa Philip
          </h3>
        </div>

        <div className="flex justify-end mt-80 mr-8">
          <Image src={navIcon} width={80} height={76} alt="navIcon" />
        </div>
      </div>

      <P2ChatSearchDarkmode />
      </div>
    </>
  );
};

export default ChatSearchLightmode;
