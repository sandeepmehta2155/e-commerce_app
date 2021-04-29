import axios from "axios";
import { useEffect, useState } from "react";

export function PrivateRoute() {
  const [usersFromDataBase, setUsersFromDataBase] = useState("");
  const [userInput, setUserInput] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [userExists, setUserExists] = useState("no");
  const [loginStatus, setloginStatus] = useState("no");

  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/login")
      .then((response) => setUsersFromDataBase(response.data.users));
  }, []);

  function CheckAuth() {
    if (usersFromDataBase)
      usersFromDataBase.find(({ username, password }) => {
        switch (username) {
          case userInput:
            setUserExists("none");
            break;
          default:
            break;
        }
        switch (password) {
          case passwordInput:
            setloginStatus("yes");
            break;
          default:
            break;
        }
      });

    console.log(loginStatus, userExists);

    userExists === "none" ? setUserExists("none") : setUserExists("block");
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
        {userInput && (
          <small style={{ color: "red", display: userExists }}>
            User doesn't exists
          </small>
        )}
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
      <button
        className="btn btn-primary"
        onClick={() => {
          CheckAuth();
        }}
      >
        Subscribe
      </button>
    </div>
  );
}
