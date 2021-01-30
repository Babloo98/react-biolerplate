import React from "react";

//stylesheet Import
import "./style.scss";

//Moduels for Multipe steps
import Personal from "./personal/index";
import Basic from "./basic/index";

class MultiStepForm extends React.Component {
  state = {
    pageToRender: "personal",
    detailedFormData: {},
  };

  handleCallback = (toRenderPage, formData) => {
    const { detailedFormData } = this.state;
    let UpdatedFormData = { ...detailedFormData };
    for (let key in formData) {
      UpdatedFormData[key] = formData[key];
    }
    this.setState({
      pageToRender: toRenderPage,
      detailedFormData: UpdatedFormData,
    });
  };

  renderSwitch = () => {
    const { pageToRender } = this.state;
    switch (pageToRender) {
      case "personal":
        return <Personal parentCalback={this.handleCallback} />;
      case "basicInfo":
        return <Basic parentCalback={this.handleCallback} />;
      default:
        return <Personal parentCalback={this.handleCallback} />;
    }
  };

  render() {
    return <div>{this.renderSwitch()}</div>;
  }
}

export default MultiStepForm;