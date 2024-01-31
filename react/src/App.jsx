import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const postAxios = async () => {
    let m = document.querySelector('#mensaje').value; console.log(m);
    const url = 'https://msgapi.teams.live.com/v1/users/ME/conversations/19%3Auni01_7vyqopkhnyt3o657z3asd6yenjxbktnolbien7gfuvc7sgk3w6qa%40thread.v2/messages';
    const body = {
      "content": "<p>"+m+"</p>",
      "messagetype": "RichText/Html",
      "contenttype": "text",
      "amsreferences": [],
      "clientmessageid": "1501958664907830129",
      "imdisplayname": "Memo Multiportal",
      "properties": {
          "importance": "",
          "subject": ""
      }
  };
    //const token = '';
    const config = {
      //method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Skypetoken': 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjYwNUVCMzFEMzBBMjBEQkRBNTMxODU2MkM4QTM2RDFCMzIyMkE2MTkiLCJ4NXQiOiJZRjZ6SFRDaURiMmxNWVZpeUtOdEd6SWlwaGsiLCJ0eXAiOiJKV1QifQ.eyJpYXQiOjE3MDY1NDM5NjgsImV4cCI6MTcwNjYzMDM2Nywic2t5cGVpZCI6ImxpdmU6bXVsdGlwb3J0YWwiLCJzY3AiOjk1NiwiY3NpIjoiMTcwNjU0Mzk2NyIsImNpZCI6ImM3ZmY0NzQ0ODkxNzQ5M2IiLCJhYXQiOjE3MDY1NDM5NDksImFhZF9hcHBpZCI6bnVsbH0.dBtjoKvSJEkTkCydckRobh469Ht_M83oGNl4NpETDRmTZkyuetPaqrOTbftfXZ5Ia5uOwoY8CM_IN9NH6ctPWY06kckbUk6aYTlpO59FnwwlaSvJHMU738nvOxOhno3Cg4UaLw-8re5RyzZ-Xw7ppYebc1pP3sLkkw9uko8Egcoh3QdxP89XZwPjWuI_lweXT3mLUOH6M1uSt1q5-gTmW9O2roGNv-ILKT3xueXqv0R9FEUhj0A46IB_SlqwRtVM6B6dqOwTwm5nu9C1qHPwEoW1jT0rSVCIax1rVQgkEBIsDtrqtM4Fzpgm3wHLJmumi4HPF0-avkWSnHmlRP5fbg'
      }
    };
  
    const response = await axios.post(url, body, config);
    const {data} = response; console.log(data);
    return data;
  }

  function btnC(){
    let m = document.querySelector('#mensaje').value; 
    if(m){
      console.log(m);
      //postMsj();
      postAxios();
    }else{
      console.log('Error: Vacio');
    }
  }

  const [btn, setBtn] = useState(0);
  useEffect(() => {
    console.log(btn);
    if(btn==1){btnC();setBtn(0);}
  },[btn]);

  return (
    <>
      <textarea id="mensaje" name="mensaje"></textarea>
      <div>
        <button onClick={()=>{setBtn(1)}}>Enviar</button>
      </div>
    </>
  )
}

export default App
