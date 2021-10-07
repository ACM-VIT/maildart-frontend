
import React, { useState } from 'react';


const Input = ({ title, type }) => {
    const [text, setText] = useState(' ');
    return (
        <div className='h-full py-4'  >
            <h6 className='mx-2 py-0'>{title}</h6>
            <input

                type={type}
                value={text}



                placeholder={' '}
                onChange={event => {
                    setText(event.target.value)
                }} className='mx-2  w-2/4 
            border
        p-0.5'>

            </input>
        </div >)
}


export default function InputFields() {

    return (
        <div className='mx-5 my-5'>
            <Input title='Subject' type='text' />
            <h6 className='mx-2'>Recipients File</h6>
            <input className=' mx-2 w-2/4 
            border
       p-0.5' type="file"
                onChange={(event) => {
                    this.readFile(event)
                }}
                onClick={(event) => {
                    event.target.value = null
                }}

            />
            <Input title='Authkey/Credentials' type='text' />
        </div>)
}


