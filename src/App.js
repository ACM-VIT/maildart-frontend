import {useState} from 'react'
function App() {
  const [service, setservice] = useState('')
  return (
    <>
    <div className="App">
      <p class="bg-red-500">Something is here</p>
    </div>
    <div className="mailing-form">
      <h3>Please Choose Mailing Service</h3>
      <form className="radio-form">
            <span>
              <input type="radio" value="Listmonk" id="Listmonk" name="mail" onChange={()=>{setservice('Listmonk')}} checked={service==='Listmonk'}/>
              <label for="listmonk">Listmonk</label>
            </span>
            <span>
              <input type="radio" value="Nodemailer" id="Nodemailer" name="mail" onChange={()=>{setservice('Nodemailer')}} checked={service==='Nodemailer'}/>
              <label for="Nodemailer">Nodemailer</label>
            </span>
            <span>
              <input type="radio" value="Mailgun" id="Mailgun" name="mail" onChange={()=>{setservice('Mailgun')}} checked={service==='Mailgun'}/>
              <label for="Mailgun">Mailgun</label>
            </span>
            <span>
              <input type="radio" value="SendGrid" id="SendGrid" name="mail" onChange={()=>{setservice('SendGrid')}} checked={service==='SendGrid'}/>
              <label for="SendGrid">SendGrid</label>
            </span>
      </form>
      {service && <h3>You have Chosen {service}</h3>}
      {service && <button onClick={()=>{setservice('')}}>Clear Selection</button>}
    </div>
    </>
  );
}

export default App;
