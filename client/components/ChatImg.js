import ChatNav from './ChatNav';
import Message from './Message';
import Messagesfooter from './Messagesfooter';
import avater from '@/public/asset/Rectangle.png';
import imgSend from '@/public/asset/Image.png';
import infoIcon from '@/public/asset/icon-info.png';
import ellipse from '@/public/asset/Ellipse 16.png';
import emoji from '@/public/asset/icon-meh.png';
import sendIcon from '@/public/asset/icon-send.png';
import plusIcon from '@/public/asset/icon-plus.png';
import Image from 'next/image';

const ChatImg = () => {
  return (
    <div
      className="text-white w-10/12 m-auto rounded-lg pt-4"
      style={{ width: '516px', height: '741px', backgroundColor: '#2D3648' }}
    >
      <ChatNav name={'Tomiwa Philips'} img={avater} width={59} height={52} />

      <div
        className="my-5 px-8 py-8 ml-10 font-bold"
        style={{
          width: '346px',
          height: '73px',
          backgroundColor: '#FFBF00',
          borderRadius: '87px',
        }}
      >
        <Message message={'Hi! Send me your pic!'} />
      </div>

      <div className="ml-32 my-5">
                <Image src={imgSend} alt='sentImage' width={319} height={413} />
                
            </div>

      <Messagesfooter />
    </div>
  );
};

export default ChatImg;
