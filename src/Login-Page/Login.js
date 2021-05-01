import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth-context";

export function Login() {
  const [checkUsersFromDataBase, setResponseFromDataBase] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [userExists, setUserExists] = useState("none");
  const [usersDB, setUsersDB] = useState();

  const { isUserLoggedIn, LogOut, setUserLogin } = useAuth();

  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/login")
      .then((response) => setUsersDB(response.data.users));
  }, []);

  function CheckAuth() {
    if (userExists)
      usersDB.map((obj) =>
        obj.username === userName
          ? setUserExists("none")
          : setUserExists("block")
      );
    if (userExists === "none")
      axios
        .post("https://e-commerce.sandeepmehta215.repl.co/userauth", {
          username: userName,
          password: passwordInput
        })
        .then((response) => {
          response.data.message === "auth worked for user"
            ? setUserLogin(true)
            : setUserLogin(false);
          return setResponseFromDataBase(response);
        });
  }

  return (
    <div className="modalForLogin">
      <h2 style={{ color: "coral" }}>Login</h2>

      <label>Enter your user-name : </label>
      <input
        type="text"
        id="txt"
        placeholder="    User name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />
      <br />
      <small style={{ color: "red", display: userExists }}>
        User doesn't exists
      </small>
      <br />
      <label>Enter your password : </label>
      <input
        type="password"
        id="email"
        placeholder="     Password"
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <br />
      <br />
      {checkUsersFromDataBase.data?.message ===
        "auth didn't worked for user" && (
        <small style={{ color: "red" }}>Enter Correct Password</small>
      )}
      <br />
      <br />
      <br />
      {/* {console.log("login password : ", loginStatus)} */}

      {!isUserLoggedIn && (
        <button
          className="btn btn-primary"
          onClick={() => {
            CheckAuth();
          }}
        >
          Login
        </button>
      )}
      {isUserLoggedIn && (
        <button className="btn btn-primary" onClick={() => LogOut()}>
          {" "}
          LogOut{" "}
        </button>
      )}

      <Link to="/subscription">
        <button className="btn btn-primary">Sign Up</button>
      </Link>
    </div>
  );
}
