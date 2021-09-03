import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

function Tasks() {
  let history = useHistory();
  let { id } = useParams();

  const initialValues = {
    TaskName: "",
    AssignedTo: "",
    Status: "",
  };

  const validationSchema = Yup.object().shape({
    TaskName: Yup.string().required(),
    AssignedTo: Yup.string().required(),
    Status: Yup.string().required(),
  });

  const onSubmit = (data) => {
    data.ProjectProjectId = id;
    console.log(data);
    axios
      .post("http://localhost:3001/tasks", data, {
        headers: {
          accessToken: sessionStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) console.log(response.data.error);
        else history.goBack();
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
          <button type="submit"> Create Task </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Tasks;
