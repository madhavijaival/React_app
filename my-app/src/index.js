import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';



/* function Lake({name}){
  return(
  <h1>{name}</h1>
  );
} */

const lakeList=["Lake Tahoe", "Lonar", "Salt Lake"];

function App({lakes}){
  // return(
  // <div>
  // <Lake name = "Lake Tahoe" />
  // <Lake name = "Lonar" />
  // </div>
  // );
  return(
    <ul>
      {lakes.map(lake =>(
        <li>{lake}</li>
      ))}
    </ul>
  );

}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App lakes ={lakeList}></App>


);



