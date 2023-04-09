import React from 'react';
import {useFormik} from 'formik';

function App() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: values =>{
      console.log('form:', values);
    }
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>Name</div>
        <input id="name" type="text" onChange={formik.handleChange} values={formik.values.name}/>
        <div>Email</div>
        <input id="email" type="text" onChange={formik.handleChange} values={formik.values.email}/>
        <div>Password</div>
        <input id="password" type="text" onChange={formik.handleChange} values={formik.values.password}/>
        <button type="submit">Submit</button>
      </form>
    </div>  
  );
}

export default App;
