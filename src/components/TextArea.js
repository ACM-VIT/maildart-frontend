
import React, { useState } from 'react';

export default function TextArea() {
    const [text, onChange] = useState('enter here');
    return (
        <div >
            <h1>Email Template</h1>
            <textarea className='justify-center margin: 12  
        borderWidth: 1
        padding: 10'>
                <input onChange={onChange}
                    value={text}></input>
            </textarea>






        </div>)





}
