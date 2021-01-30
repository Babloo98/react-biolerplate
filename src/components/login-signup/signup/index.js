import React from "react";
import MultiStepForm from  '../multistepform/index';

class Signup extends React.Component {
  defaultForm = () => ({
    userName: "",//
    password: "",
    firstName: "",//
    lastName: "",//
    dateOfBirth: "",
    number : "",//
    email : "", //
    gender : '',//////
  });

  state = {
    formData: this.defaultForm(),
  };

  onChange = (name, value) => {
    const { formData } = this.state;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    this.setState({
        formData: updatedFormData
    })
  };

  render() {

    return (
      <div className="signup-form">
          <MultiStepForm />
      </div>
    );
  }
};

export default Signup;