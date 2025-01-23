import { InputTypes } from "./inputType";

// The Components Works for type: name, password, email, number, tel
const Input = ({
  inpLbl,
  inpType,
  inpName,
  inpValue,
  inpPlaceholder,
  isRequired = false,
  inpMinLen,
  inpMaxLen,
  inpMinNum,
  inpMaxNum,
  inpReadOnly = false,
  inpSize,
  inpChange,
  classes,
}: InputTypes) => {
  return (
    <div>
      <label htmlFor={inpName}>{inpLbl}</label>
      <br />
      {inpType == "text" ? (
        <input
          type={inpType}
          name={inpName}
          value={inpValue}
          placeholder={inpPlaceholder}
          required={isRequired}
          minLength={inpMinLen}
          maxLength={inpMaxLen}
          readOnly={inpReadOnly}
          size={inpSize}
          onChange={inpChange}
          className={classes}
        />
      ) : inpType == "password" ? (
        <input
          type={inpType}
          name={inpName}
          value={inpValue}
          placeholder={inpPlaceholder}
          required={isRequired}
          minLength={inpMinLen}
          maxLength={inpMaxLen}
          readOnly={inpReadOnly}
          size={inpSize}
          onChange={inpChange}
          className={classes}
        />
      ) : inpType == "email" ? (
        <input
          type={inpType}
          name={inpName}
          value={inpValue}
          placeholder={inpPlaceholder}
          required={isRequired}
          readOnly={inpReadOnly}
          size={inpSize}
          onChange={inpChange}
          className={classes}
        />
      ) : inpType == "number" ? (
        <input
          type={inpType}
          name={inpName}
          value={inpValue}
          placeholder={inpPlaceholder}
          required={isRequired}
          min={inpMinNum}
          max={inpMaxNum}
          readOnly={inpReadOnly}
          size={inpSize}
          onChange={inpChange}
          className={classes}
        />
      ) : inpType == "tel" ? (
        <input
          type={inpType}
          name={inpName}
          value={inpValue}
          placeholder={inpPlaceholder}
          required={isRequired}
          readOnly={inpReadOnly}
          size={inpSize}
          onChange={inpChange}
          className={classes}
        />
      ) : (
        <>Component valid only for type:[text, password, email, number, tel]</>
      )}
    </div>
  );
};

export default Input;
