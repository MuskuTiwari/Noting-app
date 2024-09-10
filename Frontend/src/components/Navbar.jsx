import React, { useState } from "react";
import SearchBar from "./searchbar/SearchBar";
import ProfileInfo from "./cards/ProfileInfo";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios"; // Make sure Axios is imported
import {
  signInFailure,
  signInsuccess,
  signoutFailure,
  signoutStart,
} from "../redux/userSlice/userSlice";

function Navbar({ userInfo }) {
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearch = () => {};
  const onClearSearch = () => {
    setSearchQuery("");
  };

  const OnLogout = async () => {
    try {
      dispatch(signoutStart());

      const res = await axios.get("http://localhost:3000/api/auth/signout", {
        withCredentials: true,
      });

      if (res.data.success === false) {
        dispatch(signoutFailure(res.data.message));
        return;
      }

      dispatch(signInsuccess()); 
      navigate("/login"); 
    } catch (error) {

      dispatch(signoutFailure(error.message));
    }
  };

  return (
    <>
      <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
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

        <ProfileInfo userInfo={userInfo} OnLogout={OnLogout} />
      </div>
    </>
  );
}

export default Navbar;
