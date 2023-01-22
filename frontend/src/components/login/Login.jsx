import React from "react";
import { FcGoogle } from "react-icons/fc";
import { server } from "../../redux/store";

const Login = () => {

    const loginHandler=()=> {
      window.open(`${server}/googlelogin`,"_self");
    }

  return (
    <section className="login">
      <button onClick={
        loginHandler
      }>
        login with google
        <FcGoogle />
      </button>
    </section>
  );
};

export default Login;
