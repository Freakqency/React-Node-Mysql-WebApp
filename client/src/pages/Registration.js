import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";

function Registration() {
  const initialValues = {
    Name: "",
    Password: "",
    Type: "",
  };

  const validationSchema = Yup.object().shape({
    Name: Yup.string().required(),
    Password: Yup.string().required(),
    Type: Yup.string().required(),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/auth", data).then(() => {
      console.log(data);
    });
  };
  return (
    <div>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className="formContainer">
          <label>UserName: </label>
          <ErrorMessage name="Name" component="span" />
          <Field
            id="inputCreateProject"
            name="Name"
            placeholder="Please enter username"
          />
          <label>Password: </label>
          <ErrorMessage name="Password" component="span" />
          <Field
            id="inputCreateProject"
            type="password"
            name="Password"
            e
            placeholder="Please enter a password"
          />
          <label>Type: </label>
          <ErrorMessage name="Type" component="span" />
          <Field
            id="inputCreateProject"
            name="Type"
            placeholder="Please select user type"
          />
          <button type="submit"> Register </button>
        </Form>
      </Formik>
    </div>
  );
}

export default Registration;
