import {useState,useEffect} from 'react';


export const useFetch = (url) =>{
  const [data,setData] = useState([])

useEffect(()=>{
fetch(url)
.then(res => res.json())
.then(data1 => setData(data1))
.catch(err => {console.log(err)})
},[url])

return data;
}




// export const useFetch = async ({url})=>{
//   const [data,setData] = useState([])

// useEffect(()=>{
//   fetch(url)
//   .then(res => res.json())
//   .then(data => setData(data))
//   .catch(err => console.log(err))
// },[url])
   
// return data;
// }

// try{
//   const response = await fetch(url);
//   const  data = await response.json()

//   }catch(err){
//     console.log('error:',err)
//   }
  