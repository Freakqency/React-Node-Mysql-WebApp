import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

function Home() {
  const [listOfProjects, setListOfProjects] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get("http://localhost:3001/projects").then((response) => {
      setListOfProjects(response.data);
    });
  }, []);

  return (
    <div className="App">
      {listOfProjects.map((value, key) => {
        return (
          <div
            key={key}
            className="project"
            onClick={() => {
              history.push(`/project/${value.ProjectId}`);
            }}
          >
            <div className="id"> {value.ProjectId} </div>
            <div className="task">
              <p> Click to View Tasks </p>
            </div>
            <div className="name"> {value.Name} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
