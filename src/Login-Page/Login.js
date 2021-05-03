import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./auth-context";

export function Login() {
  const [checkResponseFromDataBase, setResponseFromDataBase] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [userExists, setUserExists] = useState("none");
  const [checkPassword, setCheckPassword] = useState("none");

  const { isUserLoggedIn, LogOut, setUserLogin } = useAuth();

  useEffect(() => {
    setUserExists("block");
    checkResponseFromDataBase === "user not found"
      ? setUserExists("block")
      : setUserExists("none");

    checkResponseFromDataBase === "wrong password"
      ? setCheckPassword("block")
      : setCheckPassword("none");
    checkResponseFromDataBase === "user auth successful"
      ? setUserLogin(true)
      : setUserLogin(false);
  }, [checkResponseFromDataBase]);

  async function CheckAuth() {
    await axios
      .post("https://e-commerce.sandeepmehta215.repl.co/userauth", {
        username: userName,
        password: passwordInput
      })
      .then((response) => {
        setResponseFromDataBase(response.data?.message);
      });
  }

  return (
    <div className="modalForLogin">
      <h2 style={{ color: "coral" }}>Login</h2>
      {console.log(checkResponseFromDataBase, userExists)}
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

      <small style={{ color: "red", display: checkPassword }}>
        Enter Correct Password
      </small>

      <br />

      {!isUserLoggedIn && (
        <button
          className="btn btn-primary"
          onClick={() => {
            CheckAuth();
            // SetStatus();
          }}
        >
          Login
        </button>
      )}
      {isUserLoggedIn && (
        <button className="btn btn-primary" onClick={() => LogOut()}>
          LogOut
        </button>
      )}

      <Link to="/subscription">
        <button className="btn btn-primary">Sign Up</button>
      </Link>
      <br />
      {isUserLoggedIn && (
        <span style={{ color: "green" }}>
          {" "}
          User Logged in successfully{" "}
          <span role="img" aria-labelledby="emoji">
            ✅
          </span>
        </span>
      )}
    </div>
  );
}
