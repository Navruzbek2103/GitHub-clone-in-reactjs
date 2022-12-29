import React, {useState, useEffect} from "react";
import "./style.scss";
import Follower from "./../../UI/Follower"
import {API} from "./../../api/api"
import SpinnerGif from "./../../assets/images/Fidget-spinner.gif"


const index = () => {
  const [follower, setFollower] = useState([])
  useEffect(() => {
    API.getFollowers().then(result => {
      setFollower(result.data)
    })
  }, [])


  return (
    <ul className="followers-list w-100 position-relative">
      {follower.length > 0 ? follower.map((element, i) => {
        return <Follower data={element} key={i}/>
      }) : <img src={SpinnerGif} className="spinner-gif"/>}
    </ul>
  )
}

export default index;