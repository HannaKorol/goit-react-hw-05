import React from "react";
import { Field, Form, Formik } from "formik";

const MovieSearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    handleChangeQuery(values.query);             //receive objects
    /*     setSearchParams({ query: value });
     */
    };
    
    

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieSearchBar;
