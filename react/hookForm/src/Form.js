import React from 'react';

const Form = props => {
    const {state, update,errors, setError} = props;
    console.log(state);

const error = f =>{
    return errors[f]["error"];
}
const change = e => {
    const field = e.target.name;
    const {validation, msg} = errors[field]

    update( {...state, [e.target.name]: e.target.value})
    
    if (!validation(e.target.value,state)) {

        
        setError({...errors, [field]: {validation: validation, 
                                            msg: msg, "error": msg}}) 


    } else {
        setError({...errors, [field]: {validation: validation, msg:msg, "error": ""}}) 

    }

   
};
    return (
        <form>
        <div>        
        <input  onChange={change} type="text" name="first" placeholder="First Name" />
       <p> {error("first")}</p>
        </div>

        <div><input  onChange={change} type="text" name="last"  placeholder="Last Name"/>
        <p> {error("last")}</p>
        </div>
        <div><input  onChange={change} type="text" name="email"  placeholder="Email"/>
        <p> {error("email")}</p>
        </div>
        <div>    
        <input onChange={change}  type="password" name="password"  placeholder="Password"/>
        <p> {error("password")}</p>
        </div>
        <div><input  onChange={change} type="password" name="confirm"   placeholder="Password Confirmation"/>       
        <p> {error("confirm")}</p> 
        </div>

        </form>

    )

}

export default Form;