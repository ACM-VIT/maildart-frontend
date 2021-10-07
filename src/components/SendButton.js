import React from "react";


const SendButton =()=>{
    return(
       <div className="flex flex-col justify-center items-center my-10">
       <button className="bg-transparent hover:bg-black text-black-700 font-semibold hover:text-white py-2 px-4 border border-black-500 hover:border-transparent rounded">
        Send
      </button>
      </div>
    );
}

export default SendButton;