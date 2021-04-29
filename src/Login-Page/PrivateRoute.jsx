import axios from "axios";
import { useEffect, useState } from "react";

export function PrivateRoute() {
  const [usersFromDataBase, setUsersFromDataBase] = useState("");
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/login")
      .then((response) => setUsersFromDataBase(response.data.users));
  }, []);

  function CheckAuth() {
    usersFromDataBase.find(({ username }) =>
      username === userInput ? console.log("yes") : console.log("no")
    );
    return <div> </div>;
  }

  return (
    <div className="modal1">
      <h2 style={{ color: "coral" }}>Subscribe</h2>

      <body>
        <label>Enter your user-name : </label>
        <input
          type="text"
          id="txt"
          placeholder="    User name"
          onChange={(e) => setUserInput(e.target.value)}
        />
        <br />
        <br />
        <label>Enter your password : </label>
        <input
          type="password"
          id="email"
          placeholder="     Password"
          onChange={(e) => setUserPassword(e.target.value)}
        />
      </body>
      <br />
      <button className="btn btn-primary" onClick={() => CheckAuth()}>
        Subscribe
      </button>
    </div>
  );
}
