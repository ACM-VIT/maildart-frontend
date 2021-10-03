import React,{useState} from 'react'

const Radio = () => {
    const [service, setservice] = useState('')
    return (
        <div className="bg-red-500 flex-row p-10">
      <h3>Please Choose Mailing Service</h3>
      <form>
          <ul>
            <li>
              <input type="radio" value="Listmonk" id="Listmonk" name="mail" onChange={()=>{setservice('Listmonk')}} checked={service==='Listmonk'}/>
              <label for="listmonk">Listmonk</label>
            </li>
            <li>
              <input type="radio" value="Nodemailer" id="Nodemailer" name="mail" onChange={()=>{setservice('Nodemailer')}} checked={service==='Nodemailer'}/>
              <label for="Nodemailer">Nodemailer</label>
            </li>
            <li>
              <input type="radio" value="Mailgun" id="Mailgun" name="mail" onChange={()=>{setservice('Mailgun')}} checked={service==='Mailgun'}/>
              <label for="Mailgun">Mailgun</label>
            </li>
            <li>
              <input type="radio" value="SendGrid" id="SendGrid" name="mail" onChange={()=>{setservice('SendGrid')}} checked={service==='SendGrid'}/>
              <label for="SendGrid">SendGrid</label>
            </li>
            </ul>
      </form>
      {service && <h3>You have Chosen {service}</h3>}
      {service && <button className="bg-white p-2 m-2 border-1 rounded hover:bg-gray-300" onClick={()=>{setservice('')}}>Clear Selection</button>}
    </div>
    )
}

export default Radio
