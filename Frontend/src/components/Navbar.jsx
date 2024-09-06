import React, { useState } from 'react'
import SearchBar from './searchbar/SearchBar'
import ProfileInfo from './cards/ProfileInfo';
import { useNavigate } from 'react-router-dom';
import { Link } from "react-router-dom";
function Navbar() {
    const [searchQuery, setSearchQuery] = useState("")

    const navigate = useNavigate()



const handleSearch =()=>{

}
const onClearSearch = () =>{
    setSearchQuery("")
}
const OnLogout = () =>{
    navigate("/login")
}

  return (
    <>
      <div className="bg-white flex  items-center justify-between px-6 py-2 drop-shadow">
        <Link to={"/"}>
          <h2 className="text-xl font-medium text-black py-2">
            <span className="text-slate-500">Notes</span>
            <span className="text-slate-900">4you</span>
          </h2>
        </Link>

        <SearchBar
          value={searchQuery}
          onChange={({ target }) => setSearchQuery(target.value)}
          handleSearch={handleSearch}
          onClearSearch={onClearSearch}
        />
        <ProfileInfo OnLogout={OnLogout} />
      </div>
    </>
  );
}

export default Navbar