import React,{useState} from 'react'

const Radio = () => {
    const [service, setservice] = useState('')
    return (
  <div className="bg-black text-white flex p-1">
    <div className="flex-1">
      <form >
        <span className="p-4">
              <input data-testid={"listmonk"} className="m-1" type="radio" value="Listmonk" id="Listmonk" name="mail" onChange={()=>{setservice('Listmonk')}} checked={service==='Listmonk'}/>
              <label  for="listmonk">Listmonk</label>
        </span>
        <span className="p-4">
              <input data-testid={"nodemailer"} className="m-1" type="radio" value="Nodemailer" id="Nodemailer" name="mail" onChange={()=>{setservice('Nodemailer')}} checked={service==='Nodemailer'}/>
              <label data-testid={"nm"} for="Nodemailer">Nodemailer</label>
        </span>
        <span className="p-4">
              <input data-testid={"mailgun"} title="mailgun" className="m-1" type="radio" value="Mailgun" id="Mailgun" name="mail" onChange={()=>{setservice('Mailgun')}} checked={service==='Mailgun'}/>
              <label for="Mailgun">Mailgun</label>
        </span>
        <span className="p-4">
              <input data-testid={"sendgrid"} className="m-1" type="radio" value="SendGrid" id="SendGrid" name="mail" onChange={()=>{setservice('SendGrid')}} checked={service==='SendGrid'}/>
              <label data-testid={"sg"} for="SendGrid">SendGrid</label>
        </span>
      </form>
      </div>
      <div className="flex-1">
            <h1 className="flex-1 text-lg">PREVIEW</h1>
      </div>
    </div>
    )
}

export default Radio
