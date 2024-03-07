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
import AIPic from '@/public/asset/Rectangle (1).png';
import Image from 'next/image';

const P2AIChatLightmode = () => {
  return (
    <>

<div
      className="text-white w-10/12 m-auto rounded-lg pt-4"
      style={{ width: '516px', height: '741px', backgroundColor: '#EEE8FD' }}
    > 
      
      <div className="m-auto text-center px-36 py-64 w-full">
          <Image src={AIPic} width={''} height={''} alt="messageIcon" />
        </div>

        <div className="flex justify-end mr-8">
          <Image src={navIcon} width={80} height={76} alt="navIcon" />
        </div>

        </div>
    </>
  );
};

export default P2AIChatLightmode;
