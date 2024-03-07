import imgSend from '@/public/asset/Image.png';
import infoIcon from '@/public/asset/icon-info.png';
import ellipse from '@/public/asset/Ellipse 16.png';
import emoji from '@/public/asset/icon-meh.png';
import sendIcon from '@/public/asset/icon-send.png';
import plusIcon from '@/public/asset/icon-plus.png';
import Image from 'next/image';
import { useState } from 'react';

const Messagesfooter = () => {
    const [userInput, setUserInput] = useState ({
        message: ""
    });

    function handleChange(event) {
        setUserInput((prevMessage) => {
            return {
                ...prevMessage, 
                [event.target.name] : event.target.value
            }
        })
    }

  return (
    <footer className="flex justify-center items-center">
      <div
        className="rounded-full flex justify-center items-center mr-2"
        style={{ width: '65px', height: '62px', backgroundColor: '#00286B' }}
      >
        <Image
          className="text-center"
          src={plusIcon}
          width={42}
          height={42}
          alt="plusIcon"
        />
      </div>
      <div
        className="rounded-lg flex justify-between items-center px-4"
        style={{
          width: '382px',
          height: '62px',
          backgroundColor: '#F9C631',
          borderRadius: '87px',
        }}
      >
        <Image src={emoji} width={42} height={42} alt="emoji" />
        <label htmlFor='message'></label>
        <textarea
          className="placeholder:italic placeholder:text-slate-400 block bg-transparent w-full border-none outline-none focus:ring-0 rounded-md pt-6 ml-2"
          type="text"
          id='message'
          name="message"
          onChange={handleChange}
          value={userInput.message}
          placeholder="Your Message..."
          style={{ border: 'none' }}
        ></textarea>
        <Image src={sendIcon} width={39} height={39} alt="sendIcon" />
      </div>
    </footer>
  );
};

export default Messagesfooter;
