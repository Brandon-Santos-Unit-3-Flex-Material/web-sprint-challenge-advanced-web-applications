import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const initialFormValues = {
  username: "Lambda School", //so i can just be logged in
  password: "i<3Lambd4",
};
const Login = () => {
  const [formValues, setFormValues] = useState(initialFormValues);
  const { push } = useHistory();

  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route
  const handleChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/api/login", formValues)
      .then((res) => {
        localStorage.setItem("token", res.data.payload);
        push("/bubbles");
        console.log("Res in Login Post:", res);
      })
      .catch((err) => {
        console.log("error logging in:", err);
      });
  };

  return (
    <>
      <h1>Welcome to the Bubble App!</h1>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Username...."
        ></input>
        <label>Username</label>
        <input
          name="password"
          type="password"
          value={formValues.username}
          onChange={handleChange}
          placeholder="Password...."
        ></input>
        <button>Login</button>
      </form>
    </>
  );
};

export default Login;

//Task List:
//1. Build a form containing a username and password field.
//2. Add whatever state nessiary for form functioning.
//3. MAKE SURE THAT FORM INPUTS INCLUDE THE LABEL TEXT "username" and "password" RESPECTIVELY.
//4. If either the username or password is not displaied display EXACTLY the following words: Username or Password not valid.
//5. If the username / password is equal to Lambda School / i<3Lambd4, save that token to localStorage.
