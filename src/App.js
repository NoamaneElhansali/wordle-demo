import React, { useState } from "react";
import Auth from "./Auth";
import AuthContext from "./Auth-context";
import submit from './submit'
import { useEffect } from "react";
const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [inp, setinp] = useState([]);
  const [out, setout] = useState([]);
  const [secret, setsecret] = useState([]);
  const [I, setI] = useState(0);
  useEffect(()=>{
    setsecret(getWord())
    setinp([...inp,secret.map((p,i)=>i===0?p:'')])
    setout([...out,secret.map((p,i)=>'')])
  },[])
  return (
    <>
      {inp.map((inp,i)=>{
        return(
          <>
          {
            inp.map((p,j)=>{
              <input value={p} style={{background:out[i][j],width:'20px',height:'20px'}}/>
            })

          }{setI(i)}<br/>
          </>
        )
      })}
      <input className="btn btn-primart" onClick={()=>submit(I,setI,inp,setinp,out,setout,secret,setsecret)} value={'ajoute'}/>
    </>
  );
};
export default App;
