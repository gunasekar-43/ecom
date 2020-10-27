import React from 'react';
import FormInput from '../form-input/form-input';
import Custombutton from '../custom-button/custom-button';
import {auth,createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.scss'

class Signup extends React.Component{
    constructor(){
        super();
        this.state = {
            displayName:'',
            email:'',
            password:'',
            confirmpassword:''
        
        }
    }
    handleSubmit = async event =>{
        event.preventDefault();
        const {displayName,email,password, confirmpassword}= this.state;
        if (password !== password){
            alert('password is worng'); return;

        }
        
        try{
            const {user} = await auth.createUserwithEmailAndPassword(
                email,
                password
            );
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName:'',
            email:'',
            password:'',
            confirmpassword:''

             } )
        }catch(error){
            console.error(error);
        }
    };
        handleChange = event =>{
            const {name,value} = event.target;

            this.setState({ [name]:value });
        };
    
    render() {
        const {displayName,email,password, confirmpassword }= this.state;
        return(
            <div className='sign-up'>
            <h2 className='title'>I do not have a Account</h2>
            <span>signup with your email and password</span>
            <form className='sign-up-form' onSubmit={this.handleSubmit}>
             <FormInput
                 type='text'
                 placeholder='displayName'
                 name='displayName'
                 value={displayName}
                 onChange={this.handleChange}
                 label='displayName'
                 required
             />
              <FormInput
                 type='email'
                 placeholder='email'
                 name='email'
                 value={email}
                 handleChange={this.handleChange}
                 label='email'
                
                 required
             />
              <FormInput
                 type='password'
                 placeholder='password'
                 name='password'
                 value={password}
                 onChange={this.handleChange}
                 label='password'
                 required
             />
              <FormInput
                 type='password'
                 placeholder='confirmpassword'
                 name='confirmpassword'
                 value={confirmpassword}
                 onChange={this.handleChange}
                 label='confirmpassword'
                 required
             />
             <Custombutton type='submit'> SIGN UP </Custombutton>
            </form>

            </div>
        )
    }
}
export default Signup;
