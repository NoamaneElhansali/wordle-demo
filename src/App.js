import React, { useState } from "react";
// import Auth from "./Auth";
// import AuthContext from "./Auth-context";
import submit from './submit'
import getWord from './data'
import { useEffect } from "react";
const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [inp, setinp] = useState([]);
  const [out, setout] = useState([]);
  const [secret, setsecret] = useState([]);
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
              <input  value={p} disabled={out[i][j]===""?"disabled":""} style={{background:out[i][j],width:'20px',height:'20px'}}/>
            })

          }<br/>
          </>
        )
      })}
      <input className="btn btn-primart" onClick={()=>submit(inp,setinp,out,setout,secret,setsecret)} value={'ajoute'}/>
    </>
  );
};
export default App;
