import { useState } from "react";

export default function App() {
  const [input, setInput] = useState("");
  const [answer, setAnswer] = useState();

  const update = (e) => {
    setInput((prev) => {
      return prev + e.target.innerText;
    });
  };
  return (
    <div className="container">
      <h1>React Calculator</h1>
      <input type="text" defaultValue={input} />
      {answer != 0 && typeof answer ? (
        <div className="answer">{answer}</div>
      ) : null}
      <div className="keyContainer">
        <div className="keypad">
          <button onClick={update} className="key">
            7
          </button>
          <button onClick={update} className="key">
            8
          </button>
          <button onClick={update} className="key">
            9
          </button>
          <button onClick={update} className="key">
            +
          </button>

          <button onClick={update} className="key">
            4
          </button>
          <button onClick={update} className="key">
            5
          </button>
          <button onClick={update} className="key">
            6
          </button>
          <button onClick={update} className="key">
            -
          </button>

          <button onClick={update} className="key">
            1
          </button>
          <button onClick={update} className="key">
            2
          </button>
          <button onClick={update} className="key">
            3
          </button>
          <button onClick={update} className="key">
            *
          </button>

          <button
            onClick={() => {
              setInput("");
              setAnswer(0);
            }}
            className="key"
          >
            C
          </button>
          <button onClick={update} className="key">
            0
          </button>
          <button
            onClick={() => {
              if (input.length <= 0) {
                setAnswer("Error");
              } else {
                let ans = eval(input);
                console.log(typeof ans);
                setAnswer(ans);
              }
            }}
            className="key"
          >
            =
          </button>
          <button onClick={update} className="key">
            /
          </button>
        </div>
      </div>
    </div>
  );
}