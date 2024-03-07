import P2ChatSearchDarkmode from './P2ChatSearchDarkmode';
import ChatSearchBar from './ChatSearchBar';
import searchImg from '@/public/images/Images.png';
import navIcon from '@/public/images/Nav.png';
import Image from 'next/image';

const ChatSearchDarkmode = () => {
  return (
    <>
    <div className='justify-between md:flex  lg:flex sm:flex-wrap' style={{ backgroundColor: '#1A202C' }}>
      <div
        className="text-white w-10/12 m-auto rounded-lg sm:w-11/12"
        style={{ width: '516px', height: '741px', backgroundColor: '#2D3648' }}
      >
        
        <ChatSearchBar />
        <div
          className="flex justify-items-center m-auto"
          style={{ width: '446px', height: '93px' }}
        >
          <Image src={searchImg} width={85} height={81} alt="searchImg" />
          <h3 className="text-xl text-white pl-8">
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

export default ChatSearchDarkmode;
