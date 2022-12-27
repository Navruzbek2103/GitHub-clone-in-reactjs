import React, {useState, useEffect} from "react";
import Following from "./../../UI/Following"
import {API} from "./../../api/api"



const index = () => {
  const [following, setFollowing] = useState([])
  useEffect(() => {
    API.getFollowing().then(result => {
      setFollowing(result.data)
    })
  }, [])


  return (
    <ul className="followers-list w-100">
      {following.length > 0 ? following.map((element, i) => {
        return <Following data={element} key={i}/>
      }) : <h2>Not Found</h2>}
    </ul>
  )
}

export default index;