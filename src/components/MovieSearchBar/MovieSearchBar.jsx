import { Field, Form, Formik } from "formik";

const MovieSearchBar = () => {
  const initialValues = {
    query: "",
  };

    const handleSubmit = value => {
        console.log(values);
/*     setSearchParams({ query: value });
 */  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form>
          <Field name="query" />
          <button>Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieSearchBar;
