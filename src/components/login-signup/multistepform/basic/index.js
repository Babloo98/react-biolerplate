import React from "react";
import InputBox from "../../../../common/InputBox/index";

class Basic extends React.Component {
  defaultForm = () => ({
    userName: "",
    password: "",
    email: "",
  });

  state = {
    formData: this.defaultForm(),
  };

  onChange = (name, value) => {
    const { formData } = this.state;
    const updatedFormData = { ...formData };
    updatedFormData[name] = value;
    this.setState({
      formData: updatedFormData,
    });
  };

  next = () => {
    const { formData } = this.state;
    const { parentCalback } = this.props;
    parentCalback("basicInfo", formData);
  };

  resetForm = () => {
    this.setState({
      formData: this.defaultForm(),
    });
  };

  render() {
    const {
      formData: { email, userName, password },
    } = this.state;
    return (
    <>
    <h2 className='standard-heading'>
        Basic Information
    </h2>    
      <div className="form">
        <InputBox
          value={email}
          name="email"
          onChange={this.onChange}
          placeholder="EMAIL"
        />
        <InputBox
          value={password}
          name="password"
          InputType="password"
          onChange={this.onChange}
          placeholder="PASSWORD"
        />
        <InputBox
          value={userName}
          name="userName"
          onChange={this.onChange}
          placeholder="USERNAME"
        />
        <div>
          <button className="btn primary-btn" onClick={() => this.next()}>
            Next
          </button>
        </div>
      </div>
    </>  
    );
  }
}

export default Basic;