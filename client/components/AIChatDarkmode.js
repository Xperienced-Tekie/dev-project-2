import ChatNav from './ChatNav';
import Message from './Message';
import avater from '@/public/images/Rectangle.png';
import Messagesfooter from './Messagesfooter';
// import Image from 'next/image';

const AIChatDarkmode = () => {
  return (
    <div
      className="text-white w-10/12 m-auto rounded-lg pt-4"
      style={{ width: '516px', height: '741px', backgroundColor: '#2D3648' }}
    >
      <ChatNav name={'Chattie AI - Bi'} img={avater} width={59} height={52} />

      <div
        className="my-10 px-8 py-8 ml-10 font-bold"
        style={{
          width: '346px',
          height: '73px',
          backgroundColor: '#FFBF00',
          borderRadius: '87px',
        }}
      >
        <Message message={'Hi! How are you doing?'} />
      </div>

      <div
        className="text-center px-8 py-8 my-10 ml-32 font-bold"
        style={{
          width: '369px',
          height: '148px',
          backgroundColor: '#00286B',
          borderRadius: '87px',
        }}
      >
        <Message
          message={
            'Lorem ipsum dolor sit amet consectetur. Quam pellentesque arcu ac sit risus suspendisse. Molestie volutpat urna pellentesque enim duis convallis dictumst nibh varius.'
          }
        />
      </div>

      <div
        className="my-10 px-8 py-8 ml-10 font-bold"
        style={{
          width: '346px',
          height: '73px',
          backgroundColor: '#FFBF00',
          borderRadius: '87px',
        }}
      >
        <Message message={'Hi! How are you doing?'} />
      </div>

      <div
        className="px-8 py-8 ml-32 my-10 font-bold"
        style={{
          width: '346px',
          height: '73px',
          backgroundColor: '#00286B',
          borderRadius: '87px',
        }}
      >
        <Message message={'Hi! How are you doing?'} />
      </div>

      <Messagesfooter />
    </div>
  );
};

export default AIChatDarkmode;
