import React from 'react';
import './form.scss';

const FormInput= ({handeleChange,label,...otherprops}) => (
    <div className='group'>
    <input className='form-input' onChange={handeleChange}{...otherprops}/>
    { label ?
        (<label className={`${otherprops.value.length ? 'shrink' : ''} form-input-lable`}>
       
        {label}

        </label>) : null }
    


    </div>
);
export default FormInput;