import React from "react";
import { CenterLayout } from "./util";
import { useSignupOrLogin } from "../custom-hooks";
import { FormField, Error } from "./styled";

export default function SignupOrLogin() {
  const { h1, error, handleSubmit, handleChange, formFields } =
    useSignupOrLogin();

  return (
    <CenterLayout>
      <h1>{h1}</h1>
      {error && (
        <Error>
          <div>
            <i className="material-icons-outlined">error</i>
            <span>{error.name}</span>
          </div>
          <div>{error.message}</div>
        </Error>
      )}
      <form onSubmit={handleSubmit}>
        {formFields.map(({ type, name, label, value }, idx) => (
          <FormField key={idx}>
            <label>{label}</label>
            <input
              type={type}
              name={name}
              value={value}
              onChange={handleChange}
            />
          </FormField>
        ))}
        <input type="submit" value="Submit" />
      </form>
    </CenterLayout>
  );
}
