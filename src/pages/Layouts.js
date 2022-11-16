import React from "react";
import { Outlet } from "react-router-dom";
import { Navigation } from "../components";

const Layouts = () => {
  return (
    <React.Fragment>
      <div className='row'>
        <div className='col-md-2'>
          <Navigation />
        </div>
        <div className='col-md-10'>
          <Outlet />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Layouts;
