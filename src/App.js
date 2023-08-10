import { useEffect, useState } from "react";

export default function App(){

  const [advice, setAdvice] = useState("");
  const  [count, setCount] = useState(-2);

async function getAdvice(){
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();
  setAdvice(data.slip.advice);
  setCount((c)=>c+1);


}
useEffect(function(){
  getAdvice();
},[])

  return (<div>
  <h1>Click on the button below to get advice</h1>
  <button onClick = {getAdvice}> Click Me </button>
    <Message count = {count} />
  <h2> {advice} </h2>

  </div>
  );
}

function Message(props){
  return (
  <p>You clicked the button {props.count} times  </p>);
}