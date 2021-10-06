
import React, { useState } from 'react';

export default function TextArea() {
    const [text, setText] = useState(' ');
    return (
        <div className='h-full'>
            <h1>Email Template</h1>
            <textarea

                type={'text'}
                value={text}
                placeholder={' '}
                onChange={event => {
                    setText(event.target.value)
                }} className=' m-2 w-2/4 h-72
        border
        p-0.5'>

            </textarea>






        </div>)





}
