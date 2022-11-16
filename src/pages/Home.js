import React from "react";
import jwt_decode from "jwt-decode";
import { Gap, ListTableUsers } from "../components";

const Home = () => {
  const [user, setUser] = React.useState([]);
  const decode = () => {
    const decoded = jwt_decode(localStorage.getItem("token"));
    setUser(decoded);
  };
  React.useEffect(() => {
    decode();
  }, []);
  return (
    <div className='container mt-2'>
      <h4>Welcome, {`${user.name} ( ${user.role} )`} </h4>
      <Gap className='mt-3' />
      <ListTableUsers user={user} />
    </div>
  );
};

export default Home;
