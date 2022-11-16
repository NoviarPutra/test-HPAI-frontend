import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { register } from "../../config/providers";
import FormInput from "../atoms/FormInput";
import Gap from "../atoms/Gap";
import ErrorMessages from "./ErrorMessages";
import "./FormSignIn.css";

const FormSignUp = () => {
  const [data, setData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState(null);
  const navigate = useNavigate();
  const roles = ["ADMIN", "USER"];
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    register(data)
      .then((response) => {
        navigate("/signin");
        setIsError(true);
        setErrMessage(response.message);
        setTimeout(() => {
          setIsError(false);
        }, 3000);
      })
      .catch((err) => console.log(err));
    setData({});
  };

  return (
    <React.Fragment>
      <ErrorMessages isError={isError} errMessage={errMessage} />
      <div className='card'>
        <div className='card-body'>
          <form onSubmit={handleSubmit}>
            <FormInput
              type='text'
              onChange={handleChange}
              value={data.name || ""}
              name='name'
              placeholder='Name'
            />
            <Gap className='mt-3' />
            <FormInput
              type='text'
              onChange={handleChange}
              value={data.email || ""}
              name='email'
              placeholder='Email'
            />
            <Gap className='mt-3' />
            <FormInput
              type='password'
              onChange={handleChange}
              value={data.password || ""}
              name='password'
              placeholder='Password'
            />
            <Gap className='mt-3' />
            <select
              className='form-select form-select-sm'
              onChange={handleChange}
              name='role'
              value={data.role || ""}>
              <option>Role</option>
              {roles.map((role, index) => (
                <option key={index} value={role}>
                  {role}
                </option>
              ))}
            </select>
            <Gap className='mt-3' />
            <small className='link-signup'>Already have an account?</small>
            <LinkContainer to='/signin'>
              <small className='target-link'> Click here !</small>
            </LinkContainer>
            <Gap className='mt-3' />
            <button type='submit' className='btn btn-primary btn-sm'>
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormSignUp;
