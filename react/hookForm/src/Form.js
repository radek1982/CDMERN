import React from 'react';

const Form = props => {
    const {state, update} = props;
    console.log(state);

    
const change = e => {
    update( {...state, [e.target.name]: e.target.value})
};
    return (
        <form>
        <div>        
        <input  onChange={change} type="text" name="first" placeholder="First Name" />
        </div>

        <div><input  onChange={change} type="text" name="last"  placeholder="Last Name"/></div>
        <div><input  onChange={change} type="text" name="email"  placeholder="Email"/></div>
        <div>
            
            <input onChange={change}  type="password" name="password"  placeholder="Password"/>
        </div>
        <div><input  onChange={change} type="password" name="confirm"   placeholder="Password Confirm"/>        </div>

        </form>

    )

}

export default Form;