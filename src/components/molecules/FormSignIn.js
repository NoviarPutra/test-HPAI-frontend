import React from "react";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { login } from "../../config/providers";
import FormInput from "../atoms/FormInput";
import Gap from "../atoms/Gap";
import ErrorMessages from "./ErrorMessages";
import "./FormSignIn.css";

const FormSignIn = () => {
  const [data, setData] = React.useState([]);
  const [isError, setIsError] = React.useState(false);
  const [errMessage, setErrMessage] = React.useState(null);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(data)
      .then((response) => {
        if (response.accessToken) {
          localStorage.setItem("token", response.accessToken);
          navigate("/");
        } else {
          setIsError(true);
          setErrMessage(response.message);
          setTimeout(() => {
            setIsError(false);
          }, 3000);
        }
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
            <small className='link-signup'>Don't have an account?</small>
            <LinkContainer to='/signup'>
              <small className='target-link'> Click here !</small>
            </LinkContainer>
            <Gap className='mt-3' />
            <button type='submit' className='btn btn-primary btn-sm'>
              Sign In
            </button>
          </form>
        </div>
      </div>
    </React.Fragment>
  );
};

export default FormSignIn;
