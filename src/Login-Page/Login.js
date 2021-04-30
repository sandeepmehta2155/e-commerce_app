import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth-context";

export function Login() {
  const [usersFromDataBase, setUsersFromDataBase] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [userExists, setUserExists] = useState("none");
  const [loginStatus, setloginStatus] = useState("no");

  const { isUserLoggedIn, setUserLogin } = useAuth();
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/login")
      .then((response) => setUsersFromDataBase(response.data.users));
  }, []);

  function CheckAuth() {
    if (usersFromDataBase)
      usersFromDataBase.find(({ username, password }) => {
        switch (username) {
          case userName:
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

    setUserLogin((isUserLoggedIn) => !isUserLoggedIn);
    navigate(state?.from ? state.from : "/");
  }
  return (
    <div className="modalForLogin">
      <h2 style={{ color: "coral" }}>Login</h2>
      {/* {console.log("user exists in 44 : ", userExists, loginStatus)} */}
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
      <br />
      {/* {console.log("login password : ", loginStatus)} */}
      <button
        className="btn btn-primary"
        onClick={() => {
          setUserExists("block");
          setloginStatus("no");
          CheckAuth();
        }}
      >
        {isUserLoggedIn ? "logout" : "login"}
      </button>
      <Link to="/subscription">
        <button className="btn btn-primary">Sign Up</button>
      </Link>
    </div>
  );
}
