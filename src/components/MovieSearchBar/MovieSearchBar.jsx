import React from "react";
import { Field, Form, Formik } from "formik";
import s from "./MovieSearchBar.module.css"; 

const MovieSearchBar = ({ handleChangeQuery }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values) => {
   // console.log(values);
    handleChangeQuery(values.query);             //receive objects
    /*     setSearchParams({ query: value });
     */
    };
    
    

  return (
    <div className={s.container}>
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
