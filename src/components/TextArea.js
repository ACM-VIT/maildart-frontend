
import React, { useState } from 'react';

export default function TextArea() {
    const [text, setText] = useState(' ');
    const [subject, setSubject] = useState(' ');
    const [credentials, setCredentials] = useState(' ');
    const [file, setFile] = useState('');
    const [emailText, setEmailText] = useState('there will be some email content');


    return (
        <div className="bg-black text-white flex p-1 h-full">
        <div className='h-full flex-1'>
            <h1 className='text-white m-2'>Subject</h1>
            <input
                type="text"
                value={subject}
                onChange={event => {
                    setSubject(event.target.value)
                }}
                className=' m-2 w-11/12 h-10 border p-0.5 rounded-md'
            />

            <h1 className='text-white m-2'>Recipients File</h1>
            <div className='bg-white m-2 w-11/12 h-10 border p-0.5 rounded-md flex items-end justify-end'>
            <label
                class=" mr-3 text-black px-4 py-1 bg-gray-400 rounded-md shadow-md tracking-wide  cursor-pointer ease-linear ">
                <i class="fas fa-cloud-upload-alt fa-3x"></i>
                <span class="mt-2 text-base leading-normal">Choose file</span>
                <input type='file' value ={file} class="hidden" />
            </label>
            </div>

            <h1 className='text-white m-2'>Auth Key/Credentials</h1>
            <input
                type="text"
                value={credentials}
                onChange={event => {
                    setCredentials(event.target.value)
                }}
                className=' m-2 w-11/12 h-10 border p-0.5 rounded-md'
            />

            <h1 className='text-white m-2'>Email Template</h1>
            <textarea
                type={'text'}
                value={text}
                placeholder={' '}
                onChange={event => {
                    setText(event.target.value)
                }} className=' m-2 w-11/12 h-72 border p-0.5 rounded-md' >
            </textarea>

           <div className='m-2 w-11/12 flex items-end justify-end'>
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded  ">
                SEND
            </button>
            </div>





            </div>
            <div className='flex-1'>
                <div className='Notes m-2 mt-10 bg-gray-100 w-11/12 h-auto text-gray-400  px-4  pb-12 text-align: center; '  >
                 
                
                    <div className='EmailText m-2 mt-0 bg-white h-auto text-black py-2 px-4' >
                        {emailText}
                    </div>

                    <p className='flex items-center justify-center px-4 py-4'>
                        Don't like these emails?     
                         <button className='underline pl-2'>  Unsubscribe.</button>
                    </p>
                    
                   <p className='flex items-center justify-center'>
                        Powered by HTML email.
                    </p>
                   
                </div>
            </div>
        </div>
        
       
        
        )





}
