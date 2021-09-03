import React from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function TaskUpdate() {
  let { id, AssignedTo, Status, TaskName, tid } = useParams();
  let history = useHistory();

  const initialValues = {
    TaskName: TaskName,
    AssignedTo: AssignedTo,
    Status: Status,
  };

  const validationSchema = Yup.object().shape({
    TaskName: Yup.string().required(),
    AssignedTo: Yup.string().required(),
    Status: Yup.string().required(),
  });

  const onSubmit = (data) => {
    data.ProjectProjectId = id;
    data.id = tid;
    axios.post("http://localhost:3001/tasks/update", data).then((response) => {
      history.goBack();
    });
  };

  return (
    <div className="createProjectPage">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>TaskName: </label>
          <ErrorMessage name="TaskName" component="span" />
          <Field
            id="inputCreateProject"
            name="TaskName"
            placeholder="(Example name)"
          />
          <label>AssignedTo: </label>
          <ErrorMessage name="AssignedTo" component="span" />
          <Field
            id="inputCreateProject"
            name="AssignedTo"
            placeholder="(Example name)"
          />
          <label>Status: </label>
          <ErrorMessage name="Status" component="span" />
          <Field
            id="inputCreateProject"
            name="Status"
            placeholder="(Example name)"
          />
          <button type="submit"> Create Project </button>
        </Form>
      </Formik>
    </div>
  );
}

export default TaskUpdate;
