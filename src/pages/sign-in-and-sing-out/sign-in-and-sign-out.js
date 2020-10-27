import React from 'react';
import Signin from '../../components/sign-in/sign-in';
import Signup from '../../components/signup/signup-components';
import './sign-in-and-sign-out.scss';

const Sinin = () =>(
    <div className='sign-in-and-sign-up'>
   <Signin/>
   <Signup/>
    </div>
);
export default Sinin;