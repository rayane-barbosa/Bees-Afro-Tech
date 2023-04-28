import React from "react";
import { useState } from 'react';
import './Input.css';



function Input(props) {
    const [value, setValue] = useState(props.defaultText);

    function handleChange(event) {
        setValue(event.target.value);
    }

    return (
        <div className="post">
            <input type="text" value={value} onChange={handleChange}/>
        </div>
    );
}

export default Input;