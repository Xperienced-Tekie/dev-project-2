import Image from 'next/image'
import infoIcon from '@/public/images/icon-info.png'


const ChatNav = (props) => {
    return (
        <nav className='flex justify-between items-center m-auto px-8 sm: w-full' style={{ width: '463px', height: '69px', backgroundColor: '#00286B' }} >
            <Image src={props.img} width={props.width} height={props.height} alt={props.name} />
            <h3 className='text-xl font-bold'>{props.name}</h3>
            <Image src={infoIcon} width={42} height={41} alt="infoIcon" />
        </nav>
    )
}

export default ChatNav