import React, {useRef} from 'react';

function Form(props) {
    const field = useRef(null);
    const update = props.onSubmit
    const addColor = (e) =>{
        e.preventDefault();
        if (field.current.value.length > 0) {
        update(field.current.value);
        field.current.value="";
        }
        else {
         
            field.current.focus();
        }

    }

    return (<form method="post" onSubmit={addColor}>
        <label htmlFor="color">Color:</label>
        <input ref={field} type="text" name="color" id="color"/>

        <input type="submit" name="add" value="Add"></input>
    </form>)
}

export default Form