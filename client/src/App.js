import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreateProject from "./pages/CreateProject";
import Project from "./pages/Project";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Tasks from "./pages/Tasks";
import TaskUpdate from "./pages/TaskUpdate";

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createproject"> Create Project</Link>
          <Link to="/login"> Login </Link>
          <Link to="/registration"> Registration </Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/createproject" exact component={CreateProject}></Route>
          <Route path="/project/:id" exact component={Project}></Route>
          <Route path="/registration" exact component={Registration}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/taskForm/:id" exact component={Tasks}></Route>
          <Route
            path="/taskUpdate/:id/:AssignedTo/:Status/:TaskName/:tid"
            exact
            component={TaskUpdate}
          ></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
