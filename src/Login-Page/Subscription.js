import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useAuth } from "./auth-context";

export function Subscription() {
  const [firstNameAndLastName, setFirstNameAndLastName] = useState("");
  const [passwordReInput, setpasswordReInput] = useState("");
  const [userName, setUserName] = useState("");
  const [passwordInput, setUserPassword] = useState("");
  const [emailInput, setEmailInput] = useState("");

  const [emailExists, setEmailExists] = useState("none");
  const [userExists, setUserExists] = useState("none");

  const [type, setType] = useState("password");
  const [usersFromDataBase, setUsersFromDataBase] = useState("");

  const reg = /([0-9])/;

  useEffect(() => {
    axios
      .get("https://e-commerce.sandeepmehta215.repl.co/login")
      .then((response) => setUsersFromDataBase(response.data.users));
  }, []);

  function CheckAuth() {
    if (usersFromDataBase)
      usersFromDataBase.find(({ username, email }) => {
        setUserExists("none");
        setEmailExists("none");
        switch (username) {
          case userName:
            setUserExists("block");
            break;
          default:
            break;
        }
        switch (email) {
          case emailInput:
            setEmailExists("block");
            break;
          default:
            break;
        }
      });
  }

  async function PostData() {
    setTimeout(() => {
      if (
        firstNameAndLastName &&
        emailExists === "none" &&
        userExists === "none" &&
        reg.test(passwordInput) &&
        passwordInput === passwordReInput
      )
        console.log("Signup");
      else console.log("Data not added");
    }, 3000);
  }
  return (
    <div className="modalForSubscription">
      <h2 style={{ color: "coral" }}>Subscribe</h2>
      {/* {console.log("user exists in 52 : ", userExists)} */}
      {/* {console.log(
        "email : ",
        emailExists,
        " | user exists in 56 : ",
        userExists,
        "| type : ",
        type
      )} */}
      <label>Enter your name : </label>
      <input
        type="text"
        id="txt"
        placeholder="    First-name Last-name"
        onChange={(e) => setFirstNameAndLastName(e.target.value)}
      />
      <br />
      <br />
      <br />
      <label>Enter your user-name : </label>
      <input
        type="text"
        id="txt"
        placeholder="    User name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <br />

      <small style={{ color: "red", display: userExists }}>
        {"                    "}User exists
      </small>

      <br />
      <label>Enter your e-mail : </label>

      <input
        type="email"
        id="txt"
        placeholder="    E-mail"
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <br />
      <small style={{ color: "red", display: emailExists }}>Email exists</small>
      <br />
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
      <label>Re-enter your password : </label>
      <input
        id="email"
        type={type}
        placeholder="     Password"
        onChange={(e) => setpasswordReInput(e.target.value)}
      />
      <br />
      <br />
      <br />
      <label id="shpass">Show password</label>
      <input
        id="check"
        type="checkbox"
        onClick={() => {
          if (type === "password") setType("text");
          else setType("password");
        }}
      />

      <br />
      <br />
      <br />
      {!reg.test(passwordInput) && (
        <div style={{ color: "red" }}>Password should contain a number </div>
      )}
      <br />
      {passwordReInput && (
        <div>
          {passwordReInput !== passwordInput && (
            <div style={{ color: "red" }}> Error! Try matching password </div>
          )}
        </div>
      )}
      <br />
      <Link to="/login">
        <button className="btn btn-primary">Back to Login</button>
      </Link>
      <button
        className="btn btn-primary"
        onClick={() => {
          PostData();
          CheckAuth();
        }}
      >
        Sign Up
      </button>
    </div>
  );
}
