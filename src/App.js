import React from 'react';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values) =>{
      alert("Login Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.name) errors.name = "field required";
      if (!values.email) errors.email = "field required";
      if (!values.password) errors.password = "field required";
      return errors;
    }
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange} values={formik.values.name}/>
        <div>Email</div>
        <input 
          id="email" 
          type="text" 
          onChange={formik.handleChange}
          values={formik.values.email}
        />
        {formik.errors.email ? (
          <div id="emailError" style={{ color: "red" }}>
            {formik.errors.email}
          </div>
        ) : null}
        <div>Password</div>
        <input
         id="password"
         type="text"
         onChange={formik.handleChange}
         values={formik.values.password}
        />
        <br />
        {formik.errors.password ? (
          <div id="pswError" style={{ color: "red" }}>
            {formik.errors.password}
          </div>
        ) : null}
        <button id="submitBtn" type="submit">
          Submit
        </button>
      </form>
    </div>  
  );
}

export default App;
