import { forwardRef } from "react";
import { StyleInputs } from "./StyleInputs";
export const Inputs = forwardRef(({ label, error, ...rest }, ref) => {
  return (
    <StyleInputs>
      <label> {label}</label>
      <input ref={ref} {...rest} />
      {error ? <p>{error.message}</p> : null}
    </StyleInputs>
  );
});
