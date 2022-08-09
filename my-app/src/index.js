import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

function GithubUser({login}){
const[data, setData] = useState(null);
useEffect(()=>{
  fetch(`https://api.github.com/users/${login}`)
   .then (res =>res.json())
   .then(setData)
   .catch(console.error);
}, []);


if(data){
  return(
    <div>
      <h1>
        {data.login}
      </h1>
      <img src={data.avatar_url} width ={200}></img>
    </div>
  )
}

}

function App(){
  return <GithubUser login="madhavijaival"/>;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App/>
);



