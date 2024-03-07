'use client';

import ChatListLightmode from '@/components/ChatListLightMode';
import ChatListDarkmode from '@/components/ChatListDarkmode';
import P2ChatSearchDarkmode from '@/components/P2ChatSearchDarkmode';
// import P2ChatSearchLightmode from '@/components/P2ChatSearchDarkmode';
import ChatSearchDarkmode from '@/components/ChatSearchDarkmode';
import ChatSearchLightmode from '@/components/ChatSearchLightmode';
import AIChatDarkmode from '@/components/AIChatDarkmode';
import P2AIChatDarkmode from '@/components/P2AIChatDarkmode';
import AIChatLightmode from '@/components/AIChatLightmode';
import P2AIChatLightmode from '@/components/P2AIChatLightmode';
import ChatDarkmode from '@/components/ChatDarkmode';
import ChatLightmode from '@/components/ChatLightmode';
import ChatImg from '@/components/ChatImg';
import ChatVid from '@/components/ChatVid';

const Chat = () => {
  return (
    <div>
      <ChatSearchLightmode />

      <div className="my-44"></div>

      {/* <P2ChatSearchLightmode /> */}

      <div className="my-44"></div>
      <P2ChatSearchDarkmode />
      <div className="my-44"></div>

      <ChatSearchDarkmode />

      <div className="my-44"></div>

      <P2ChatSearchDarkmode />
      <div className="my-44"></div>

      <ChatDarkmode />
      <div className="my-44"></div>

      <ChatListLightmode />
      <div className="my-44"></div>

      <ChatListDarkmode />

      <div className="my-44"></div>

      <ChatLightmode />

      <div className="my-44"></div>

      <P2AIChatDarkmode />

      <div className="my-44"></div>

      <AIChatDarkmode />

      <div className="my-44"></div>

      <P2AIChatLightmode />

      <div className="my-44"></div>

      <AIChatLightmode />

      <div className="my-44"></div>

      <ChatImg />

      <div className="my-44"></div>

      <ChatVid />
    </div>
  );
};


export default Chat