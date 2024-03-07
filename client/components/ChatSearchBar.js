import searchIcon from '@/public/asset/Shape.png';
import Image from 'next/image';
import { useState } from 'react';

const ChatSearchBar = () => {
    const [searchInput, setSearchInput] = useState({
        search: ""
      })
    
      function handleChange(event) {
    
        setSearchInput((prevInput) => {
    
          return {      
          ...prevInput,
          [event.target.name] : event.target.value
        }
        })
        
      }
    return (
    <div className="py-10">
          <div
            className="rounded-md border-4 text-center  bg-white  m-auto w-72 py-2 px-4"
            style={{ borderColor: '#00286B' }}
          >
            <label htmlFor='search' className="flex justify-items-center ">
              <input
                className="placeholder:italic placeholder:text-slate-400 border-none w-full text-black"
                placeholder="Tomi"
                type="text"
                id="search"
                name="search"
                value={searchInput.search}
                onChange={handleChange}
              />
              <Image src={searchIcon} width={28} height={25} alt="searchIcon" />
            </label>
          </div>
        </div>

    )
}

export default ChatSearchBar