import React from 'react';
import FormInput from '../form-input/form-input';
import  Custombutton from '../custom-button/custom-button';
import {signInwithGoogle } from '../../firebase/firebase.utils';
import './sign-in.scss';

class Signin extends React.Component {
    constructor(props) {
        super(props);
         
        this.state={
            email:'',
            password:''

        };
    }
    
        handleSubmit = event => {
            event.preventDefault();

            this.setState=({ email:'',password:'' });
        };
        handleChange = event => {
            const { value,name } = event.target;
            this.setState({[name]: value});
        };


    
    render(){
        return(
            <div className='sign-in'>
            <h2>I already have an account </h2>
            <span>Sign in with your email and password</span>
            <form onSubmit={this.handleSubmit}>
                <FormInput name='email' type='email'placeholder='email' handeleChange={this.handleChange} value={this.state.email} label='email' required/>
                
                <FormInput name='password' text='password' placeholder='password'  type='password' value={this.state.password} handeleChange={this.handleChange} label='password'  required/>
               <div className="button-style">
                <Custombutton  type='submit' > Sign In</Custombutton>
                <Custombutton type='submit' onClick={signInwithGoogle} isGoogleSignIn> SigninGoogle</Custombutton>
                </div>
            </form>

            </div>
        );
    }

}
export default Signin;

