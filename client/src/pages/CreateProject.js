import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useHistory } from "react-router-dom";

function CreateProject() {
  let history = useHistory();
  const initialValues = {
    ProjectId: "",
    Name: "",
  };

  const validationSchema = Yup.object().shape({
    ProjectId: Yup.number().required(),
    Name: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/projects", data).then((response) => {
      history.push("/");
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
          <label>ProjectId: </label>
          <ErrorMessage name="ProjectId" component="span" />
          <Field
            id="inputCreateProject"
            name="ProjectId"
            placeholder="(Example Id)"
          />
          <label>Name: </label>
          <ErrorMessage name="Name" component="span" />
          <Field
            id="inputCreateProject"
            name="Name"
            placeholder="(Example name)"
          />
          <button type="submit"> Create Project </button>
        </Form>
      </Formik>
    </div>
  );
}

export default CreateProject;
