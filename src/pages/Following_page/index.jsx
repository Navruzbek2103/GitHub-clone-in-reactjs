import React, {useState, useEffect} from "react";
import Following from "./../../UI/Following"
import {API} from "./../../api/api"
import SpinnerGif from "./../../assets/images/Fidget-spinner.gif"
import "./style.scss"

const index = () => {
  const [following, setFollowing] = useState([])
  useEffect(() => {
    API.getFollowing().then(result => {
      setFollowing(result.data)
    })
  }, [])


  return (
    <ul className="followers-list w-100 position-relative">
      {following.length > 0 ? following.map((element, i) => {
        return <Following data={element} key={i}/>
      }) : <img src={SpinnerGif} className="spinner-gif"/>}
    </ul>
  )
}

export default index;