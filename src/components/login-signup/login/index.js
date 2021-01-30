import React from 'react';
import './style.scss';
import InputBox from "../../../common/InputBox/index";
import history from '../../../Utils/history';
import { withRouter } from "react-router";

class Login extends React.Component{
    
    defaultForm = () => ({
        password: "",
        email : ""
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

    handleLogin = () =>{
        localStorage.setItem('roles',JSON.stringify(['ADMIN']));
        console.log('>>>>>>>',this.props)
        this.props.history.push('/Dashboard')
    }

    render(){
        const { formData: { email, password } } = this.state;
        return(
            <div className='login-form'>
                <h2 className='standard-heading'>
                    Login
                </h2>
                <InputBox
                    value={email}
                    name="email"
                    onChange={this.onChange}
                    placeholder = 'EMAIL'
                />
                <InputBox
                    value={password}
                    name="password"
                    InputType="password"
                    onChange={this.onChange}
                    placeholder = 'PASSWORD'
                />
                <button className='btn primary-btn' onClick = {()=>this.handleLogin()}>Login</button>
            </div>
        )
    }
};

export default withRouter(Login);