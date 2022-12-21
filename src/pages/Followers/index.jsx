import React, {useState, useEffect} from "react";
import "./style.scss";
import Follower from "./../../UI/Follower"
import {API} from "./../../api/api"



const index = () => {
  const [follower, setFollower] = useState([])
  useEffect(() => {
    API.getFollowers().then(result => {
      setFollower(result.data)
    })
  }, [])

  // console.log(follower)

  return (
    <ul className="followers-list w-100">
      {follower.length > 0 ? follower.map((element, i) => {
        return <Follower data={element} key={i}/>
      }) : <h2>Not Found</h2>}
    </ul>
  )
}

export default index;