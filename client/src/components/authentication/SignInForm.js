import React, { useState } from "react";
import config from "../../config";
import FormError from "../layout/FormError";
import { Link } from "react-router-dom";

const SignInForm = () => {
  const [userPayload, setUserPayload] = useState({ email: "", password: "" });
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [errors, setErrors] = useState({});
  const [credentialsErrors, setCredentialsErrors] = useState("")

  const validateInput = (payload) => {
    setErrors({});
    const { email, password } = payload;
    const emailRegexp = config.validation.email.regexp.emailRegex;
    let newErrors = {};
    if (!email.match(emailRegexp)) {
      newErrors = {
        ...newErrors,
        email: "is invalid",
      };
    }

    if (password.trim() === "") {
      newErrors = {
        ...newErrors,
        password: "is required",
      };
    }

    setErrors(newErrors);
    if (Object.keys(newErrors).length === 0) {
      return true
    }
    return false
  };

  const onSubmit = async (event) => {
    event.preventDefault()
    if (validateInput(userPayload)) {
      try {
        if (Object.keys(errors).length === 0) {
          const response = await fetch("/api/v1/user-sessions", {
            method: "post",
            body: JSON.stringify(userPayload),
            headers: new Headers({
              "Content-Type": "application/json",
            })
          })
          if(!response.ok) {
            if (response.status === 401) {
              const serverErrors = await response.json()
              setCredentialsErrors(serverErrors.message)
            }
            const errorMessage = `${response.status} (${response.statusText})`
            const error = new Error(errorMessage)
            throw(error)
          }
          const userData = await response.json()
          setShouldRedirect(true)
        }
      } catch(err) {
        console.error(`Error in fetch: ${err.message}`)
      }
    }
  }

  const onInputChange = (event) => {
    setUserPayload({
      ...userPayload,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  if (shouldRedirect) {
    location.href = "/";
  }


  return (
    <div className="grid-container sign-in-border">
      <h1 className="sign-in-top-text" >Welcome Back</h1>
      {credentialsErrors ? <p className="callout alert">{credentialsErrors}</p> : null}
      <form onSubmit={onSubmit}>
        <div>
          <label className="sign-in-bar-text">
            Email
            <input type="text" name="email" value={userPayload.email} onChange={onInputChange} />
            <FormError error={errors.email} />
          </label>
        </div>
        <div>
          <label className="sign-in-bar-text">
            Password
            <input 
              type="password"
              name="password"
              value={userPayload.password}
              onChange={onInputChange}
            />
            <FormError error={errors.password} />
          </label>
        </div>
        <div>
          <input type="submit" className="user-buttons" value="Sign In" />
        </div>
        <Link className="sign-in-link-text" to="/users/new">Don't have an account? Sign up!</Link>
      </form>
    </div>
  );
};

export default SignInForm;