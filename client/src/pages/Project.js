import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import axios from "axios";

function Project() {
  let { id } = useParams();
  const [projectObject, setProjectObject] = useState({});
  const [task, setTask] = useState([]);
  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3001/projects/byId/${id})`).then((response) => {
      setProjectObject(response.data);
    });

    axios.get(`http://localhost:3001/tasks/${id})`).then((response) => {
      setTask(response.data);
    });
  }, []);

  return (
    <div className="projectPage">
      <div className="leftSide">
        <div className="project" id="individual">
          <div className="id"> {projectObject.ProjectId} </div>
          <div className="task"> {projectObject.Name}</div>
        </div>
      </div>
      <div className="rightSide">
        <div className="addTaskContainer">
          <button
            onClick={() => {
              history.push(`/taskForm/${projectObject.ProjectId}`);
            }}
          >
            Add Tasks
          </button>
        </div>
        <div className="listOfTasks">
          {task.map((task, key) => {
            return (
              <div key={key} className="task">
                {task.TaskName}
                <button
                  onClick={() => {
                    history.push(
                      `/taskUpdate/${projectObject.ProjectId}/${task.AssignedTo}/${task.Status}/${task.TaskName}/${task.id}`
                    );
                  }}
                >
                  Edit{" "}
                </button>
                <label className="assigned">{task.AssignedTo}</label>
                <label className="status">{task.Status}</label>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Project;
