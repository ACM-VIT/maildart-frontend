
import React, { useState } from 'react';


const Input = ({ title }) => {
    const [text, setText] = useState(' ');
    return (
        <div className='h-full'>
            <h1>{title}</h1>
            <input

                type={'text'}
                value={text}
                placeholder={' '}
                onChange={event => {
                    setText(event.target.value)
                }} className=' m-2 w-2/4 
        border
        p-0.5'>

            </input>






        </div>)
}

export default function InputFields() {
    return (
        <div>
            <Input title='Subject' />
            <Input title='Recipients File' />
            <Input title='Authkey/Credentials' />
        </div>)
}


