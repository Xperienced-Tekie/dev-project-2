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
import Image from 'next/image';

const P2ChatSearchLightmode = () => {
  return (
    <>
      
        <div
          className="flex justify-items-center m-auto pt-4"
          style={{ width: '446px', height: '93px', backgroundColor: '#EEE8FD' }}
        >
          <Image src={searchImg} width={85} height={81} alt="searchImg" />
          <h3 className="text-xl text-black pl-8">
            <span className="font-bold">Tomi</span>wa Philip
          </h3>
        </div>
      
    </>
  );
};

export default P2ChatSearchLightmode;
