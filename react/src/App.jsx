import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  
  const postAxios = async () => {
    let m = document.querySelector('#mensaje').value; console.log(m);
    const url = 'https://amer.ng.msg.teams.microsoft.com/v1/users/ME/conversations/19%3Aa6b68a05-d4fc-427e-a84d-98410bfc059d_c05b1b5e-ab28-4889-b4a9-b46c1fc70f69%40unq.gbl.spaces/messages';
    const body = {
      "id": "-1",
      "type": "Message",
      "conversationid": "19:a6b68a05-d4fc-427e-a84d-98410bfc059d_c05b1b5e-ab28-4889-b4a9-b46c1fc70f69@unq.gbl.spaces",
      "conversationLink": "blah/19:a6b68a05-d4fc-427e-a84d-98410bfc059d_c05b1b5e-ab28-4889-b4a9-b46c1fc70f69@unq.gbl.spaces",
      "from": "8:orgid:a6b68a05-d4fc-427e-a84d-98410bfc059d",
      "composetime": "2024-01-23T15:22:32.959Z",
      "originalarrivaltime": "2024-01-23T15:22:32.959Z",
      "content": "<p>"+m+"</p>",
      "messagetype": "RichText/Html",
      "contenttype": "Text",
      "imdisplayname": "Guillermo Jiménez (Contractor)",
      "clientmessageid": "367865243378439780",
      "callId": "",
      "state": 0,
      "version": "0",
      "amsreferences": [],
      "properties": {
          "importance": "",
          "subject": "",
          "title": "",
          "cards": "[]",
          "links": "[]",
          "mentions": "[]",
          "onbehalfof": null,
          "files": "[]",
          "policyViolation": null
      },
      "crossPostChannels": []
    };
    const token = 'eyJ0eXAiOiJKV1QiLCJub25jZSI6InRGXzNWR0N1OEY2SWhPekpUeEtoV01QNlVocG13T1pSaWF4dFNjbGFKRnMiLCJhbGciOiJSUzI1NiIsIng1dCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSIsImtpZCI6IjVCM25SeHRRN2ppOGVORGMzRnkwNUtmOTdaRSJ9.eyJhdWQiOiJodHRwczovL2ljMy50ZWFtcy5vZmZpY2UuY29tIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvMzQ2YTFkMWQtZTc1Yi00NzUzLTkwMmItNzRlZDYwYWU3N2ExLyIsImlhdCI6MTcwNjAyMTMzOCwibmJmIjoxNzA2MDIxMzM4LCJleHAiOjE3MDYxMDgwMzgsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84VkFBQUFKSlV6SXN6cnNVcjBOdk9aYk15d0MxV2hzRjU2NVNSTDFmWnUrS0lyeWJ0bS82cCtQcTl4andjRElrSW1BZmJrIiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6IjVlM2NlNmMwLTJiMWYtNDI4NS04ZDRiLTc1ZWU3ODc4NzM0NiIsImFwcGlkYWNyIjoiMCIsImZhbWlseV9uYW1lIjoiSmltw6luZXogKENPTlRSQUNUT1IpIiwiZ2l2ZW5fbmFtZSI6Ikd1aWxsZXJtbyIsImlwYWRkciI6IjIwMDE6MTI2MDoyMDM6OTU0ODozZDEzOmVmYjE6ZDc1OToyODEyIiwibmFtZSI6Ikd1aWxsZXJtbyBKaW3DqW5leiAoQ29udHJhY3RvcikiLCJvaWQiOiJhNmI2OGEwNS1kNGZjLTQyN2UtYTg0ZC05ODQxMGJmYzA1OWQiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtNDAwODg1MzM5MC0xNDgyNjA5NzEzLTkxMTc4NTE4NC0xNDkxODUxIiwicHVpZCI6IjEwMDMyMDAyQUJDOEExMTMiLCJyaCI6IjAuQVZjQUhSMXFORnZuVTBlUUszVHRZSzUzb1ZUd3FqbWxnY2RJcFBnQ2t3RWdsYm5iQUlVLiIsInNjcCI6IlRlYW1zLkFjY2Vzc0FzVXNlci5BbGwiLCJzdWIiOiJabFprSGlpMG5QQ1VzZ2J4OWtNTFJETHRiS0l4VXJqZ2FKZmZYeGw3WmtFIiwidGlkIjoiMzQ2YTFkMWQtZTc1Yi00NzUzLTkwMmItNzRlZDYwYWU3N2ExIiwidW5pcXVlX25hbWUiOiJndWlsbGVybW8uamltZW5lekBtYWlsLnVuaXRlYy5teCIsInVwbiI6Imd1aWxsZXJtby5qaW1lbmV6QG1haWwudW5pdGVjLm14IiwidXRpIjoiMHNRd21za1o3a3lJcjNvSlpvQ0lBQSIsInZlciI6IjEuMCIsInhtc19jYyI6WyJDUDEiXSwieG1zX3NzbSI6IjEifQ.x-qsdmytUZ9lzymirPr6jz2_7-Q_fa38vBsoJK8i3pao0eXIPfhc5XvnouwcoelVccnj-MR_5ma4sObb_tCPPGCUR1dNZZIJHvRdtUXQSar-ixCqvYf996KXOQQu7NjlN9f4l2dTid3ucbitRUv3R54GGqfEFgs1wNnBYJljc3XDfZldI5QvBmVTUUvaKAKetfQEp1hpBU2R3oSztYYNsJc51WuyZy_LARLE5zFf-7ANFHLKaMzWh4N7rD7qgH8OCRe7o1X3jKIiNJbz7lndysfp160gG8cSlkNU374cGMBiykIZE-YnE8FRjMxJp-OweHGZeQ5JGoosvMnvc-Az1Q';
    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer {token}'
      }
    };
  
    const response = await axios(url, body, config);
    const data = await response.json(); //console.log(data);
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
