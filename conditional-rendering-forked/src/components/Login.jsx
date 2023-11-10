import React from "react";
import inputValues from "../input";
import Input from "./Input";

export default function Login(props) {
  return (
    <form className="form">
      {inputValues.map((input) => (
        <Input
          key={input.id}
          type={input.type}
          placeholder={input.placeholder}
        />
      ))}
      {props.userRegister === false && (
        <Input type="password" placeholder="Confirm Password" />
      )}
      <button type="submit">{props.userRegister ? "Login" : "Register"}</button>
    </form>
  );
}
