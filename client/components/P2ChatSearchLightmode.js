
import searchImg from '@/public/images/images.png';
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
