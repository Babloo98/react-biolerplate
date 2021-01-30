import React from "react";
import "./style.scss";
import Logo from "../../assets/logo.png";
import Signup from "./signup/index";
import Login from "./login/index";

class Home extends React.Component {
  state = {
    signup: true,
  };

  onLoginClick = () => {
    this.setState({
      signup: false,
    });
  };

  onSignupClick = () => {
    this.setState({
      signup: true,
    });
  };

  render() {
    const { signup } = this.state;
    return (
      <div className="home-wrapper">
        <div className="form-container">
          <div className="login-signup-form">
            {!signup ? <Signup /> : <Login />}
            <div className="d-flex justify-content-center">
              {!signup ? (
                <span
                  onClick={() => this.onSignupClick()}
                  className="basic-text mr-3"
                >
                  Login
                </span>
              ) : (
                <span
                  onClick={() => this.onLoginClick()}
                  className="basic-text mr-3"
                >
                  Signup
                </span>
              )}
              <span className="basic-text">Forgot Password ?</span>
            </div>
          </div>
          <div className="company-logo">
            <img className="logo" alt="Companion" src={Logo}></img>
          </div>
        </div>
      </div>
    );
  }
};

export default Home;