import React, { useState, useEffect } from "react";
import "./style.scss";
import Card from "./../../UI/Card";
import { API } from "../../api/api";

const index = () => {
  const [repo, setRepo] = useState([])
  useEffect(() => {
    API.getRepos().then(result => {
      setRepo(result.data)
    })
  }, [])
  const popularRepo = repo.filter((element) => element.stargazers_count !== 0)
  popularRepo.splice(6)
  // console.log(popularRepo)

  return (
      <div className="repositories">
        <h2 className="repositories-title mb-2">Popular repositories</h2>
        <ul className="repo-list d-flex w-100 flex-wrap">
          {popularRepo.length > 0 ? popularRepo.map((repos, i) => {
            return <li key={i} className="repo-list-item rounded-2">
                    <Card  repo={repos}/>
                  </li>
          }) : <h1>Not Found</h1>}
        </ul>
      </div>
  );
};

export default index;
