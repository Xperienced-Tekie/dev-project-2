import ChatNav from './ChatNav';
import Message from './Message';
import Messagesfooter from './Messagesfooter';
import avater from '@/public/images/Rectangle.png';
import infoIcon from '@/public/images/icon-info.png';
import ellipse from '@/public/images/Ellipse 16.png';
import emoji from '@/public/images/icon-meh.png';
import sendIcon from '@/public/images/icon-send.png';
import plusIcon from '@/public/images/icon-plus.png';
import Image from 'next/image';

const ChatDarkmode = () => {
  return (
    <div
      className="text-white w-10/12 m-auto rounded-lg pt-4"
      style={{ width: '516px', height: '741px', backgroundColor: '#2D3648' }}
    >
      <ChatNav name={'Tomiwa Philips'} img={avater} width={59} height={52} />


      <div className="my-10 px-8 py-8 ml-10 font-bold" style= {{ width: '346px', height: '73px', backgroundColor: '#FFBF00', borderRadius: '87px' }}>
      <Message
        message={'Hi! How are you doing?'}
        
      />
      </div>

      <div className="pl-10 pr-12 py-8 my-10 ml-32 font-bold" style= {{ width: '369px', height: '148px', backgroundColor: '#00286B', borderRadius: '87px'}}>
        <div >
      <Message
        message={
          'Lorem ipsum dolor sit amet consectetur. Quam pellentesque arcu ac sit risus suspendisse. Molestie volutpat urna pellentesque enim duis convallis dictumst nibh varius.'
        }
        
      />
      </div>
      </div>

      <div className="my-10 px-8 py-8 ml-10 font-bold" style= {{ width: '346px', height: '73px', backgroundColor: '#FFBF00', borderRadius: '87px' }}>
      <Message
        message={'Hi! How are you doing?'}
        
      />
      </div>

      <div className="px-8 py-8 ml-32 my-10 font-bold" style= {{ width: '346px', height: '73px', backgroundColor: '#00286B', borderRadius: '87px'}}>
      <Message
        message={'Hi! How are you doing?'}
        
      />
      </div>
    
    <Messagesfooter />  

    
      


    </div>
  );
};

export default ChatDarkmode;
