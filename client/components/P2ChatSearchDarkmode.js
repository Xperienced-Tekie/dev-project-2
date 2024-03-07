
import messageIcon from '@/public/images/Chattie Logo.png';
import Image from 'next/image';

const P2ChatSearchDarkmode = () => {
  return (
    <>
    

      <div
        className="text-white w-10/12 m-auto rounded-lg pt-4"
        style={{ width: '516px', height: '741px', backgroundColor: '#2D3648' }}
      >
        <div className="m-auto text-center px-36 py-64">
          <Image src={messageIcon} width={255} height={249} alt="messageIcon" />
        </div>


      </div>
    </>
  );
};

export default P2ChatSearchDarkmode;
