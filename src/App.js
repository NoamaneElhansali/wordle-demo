import React, { useState } from "react";
// import Auth from "./Auth";
// import AuthContext from "./Auth-context";
import submit from "./submit";
import getWord from "./data";
import { useEffect } from "react";
const App = () => {
  //using the state to dynamicallly pass the values to the context

  const [secret, setsecret] = useState(() => getWord());
  const [inp, setinp] = useState(() => [
    secret.map((p, i) => (i === 0 ? p : "")),
  ]);
  const [out, setout] = useState(() => [secret.map((p, i) => "")]);

  return (
    <>
      {inp.map((row, i) => {
        console.log(row);

        return (
          <div key={i}>
            {row.map((p, j) => (
              <input
                key={j}
                value={p}
                onChange={(e) =>
                  setinp([
                    ...inp.slice(0, i),
                    [...row.slice(0, j), e.target.value, ...row.slice(j + 1)],
                    ...inp.slice(i + 1),
                  ])
                }
                disabled={out[i][j] === "" ? "" : "disabled"}
                style={{ background: out[i][j] === "r" ? "red" : out[i][j] === "g" ? "green" : out[i][j] === "y" ? "yellow" : "", width: "20px", height: "20px" }}
              />
            ))}
            <br />
          </div>
        );
      })}
      <button
        className="btn btn-primart"
        onClick={() => submit(inp, setinp, out, setout, secret, setsecret)}
      >
        ajoute
      </button>
    </>
  );
};
export default App;
