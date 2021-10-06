
import React, { useState } from 'react';

export default function TextArea() {
    const [text, onChange] = useState(' ');
    return (
        <div >
            <h1>Email Template</h1>
            <textarea className=' m-2
        border
        p-0.5'>
                <input onChange={onChange}
                    value={text}></input>
            </textarea>






        </div>)





}

