import React from "react";
import InputBox from "../../../../common/InputBox/index";

class Personal extends React.Component {
  defaultForm = () => ({
    firstName: "",
    lastName: "",
    dateOfBirth: "",
    number: "",
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
      formData: { firstName, lastName, dateOfBirth, number },
    } = this.state;
    return (
      <>
        <h2 className='standard-heading'>
          Personal information
        </h2>
        <div className="form">
          <InputBox
            value={firstName}
            name="firstName"
            onChange={this.onChange}
            placeholder="FIRST NAME"
          />
          <InputBox
            value={lastName}
            name="lastName"
            onChange={this.onChange}
            placeholder="LAST NAME"
          />
          <InputBox
            value={dateOfBirth}
            name="dateOfBirth"
            onChange={this.onChange}
            placeholder="DOB"
          />
          <InputBox
            value={number}
            name="number"
            onChange={this.onChange}
            placeholder="NUMBER"
            InputType="number"
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

export default Personal;