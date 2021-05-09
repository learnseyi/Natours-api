import React ,{useState}from 'react';
import MyNav from './components/HomePage/MyNav';
import MyJumbotron from './components/HomePage/MyJumbotron';
import Deals from './components/HomePage/Deals';
import {useFetch} from './components/CustomHooks/useFetch'


function App() {
  const [text,setText] = useState('');
  const data = useFetch('https://express-1.slim147.repl.co');
  
  

  const getInfo = (e)=>{
    setText(e.target.value)
     const it = data.filter((info)=> info.name.includes(text))
    console.log(it)
  }
  return (<>
 <MyNav/>
 <MyJumbotron func={getInfo}/>
 <Deals/>
  </>);
}

export default App;
