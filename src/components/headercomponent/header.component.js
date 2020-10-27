import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo} from '../assite/crown.svg';
import {auth} from '../../firebase/firebase.utils';
import './header.scss';


const HEADER =({currentuser}) =>(
    
    <div className='header'>
    <Link className='logo-container' to='/'>
      <Logo className='logo' />
    </Link>
    <div className='options'>
      <Link className='option' to='/shop'>
        SHOP
      </Link>
      <Link className='option' to='/shop'>
        CONTACT
      </Link>
      
       { currentuser ?(
        <div className='option' onClick={() =>auth.SignOut()}>SIGN OUT</div>
        ):
<Link className='option' to='/signin'>SIGN IN</Link>      }
    </div>
  </div>
);
export default HEADER;