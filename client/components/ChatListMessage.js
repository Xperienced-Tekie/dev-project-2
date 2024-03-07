import ChatNav from './ChatNav';
import Message from './Message';
import Messagesfooter from './Messagesfooter';
import avater from '@/public/images/Rectangle.png';
import messageIcon from '@/public/images/Chattie Logo.png';
import infoIcon from '@/public/images/icon-info.png';
import ellipse from '@/public/images/Ellipse 16.png';
import emoji from '@/public/images/icon-meh.png';
import sendIcon from '@/public/images/icon-send.png';
import plusIcon from '@/public/images/icon-plus.png';
import searchImg from '@/public/images/images.png';
import searchIcon from '@/public/images/Shape.png';
import navIcon from '@/public/images/Nav.png';
import Image from 'next/image';

export default function ChatListMsg(props) {
  return (
    <div
      className="flex justify-items-center m-auto mb-4 pl-16"
      style={{ width: '446px' }}
    >
      <div className="flex justify-items-center">
        <Image src={props.img} width={59} height={52} alt="searchImg" />
        <div className='px-4'>
          <div className="flex justify-between">
            <h3 className="text-lg" >{props.name}</h3>
            <span className='text-xs'>2:15 PM</span>
          </div>
          <p className=' text-xs'>Please can you help me with some imp...</p>
        </div>
      </div>
    </div>
  );
}
