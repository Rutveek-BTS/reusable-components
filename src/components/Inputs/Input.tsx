import { inputTypes } from "./inputType";

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
  inpMultipleFiles = false,
  inpSize,
  inpAccept,
  inpChange,
  classes,
}: inputTypes) => {
  return (
    <div>
      <label htmlFor={inpName}>{inpLbl}</label>
      <br />
      <input
        type={inpType}
        name={inpName}
        value={inpValue}
        placeholder={inpPlaceholder}
        required={isRequired}
        minLength={inpMinLen}
        maxLength={inpMaxLen}
        min={inpMinNum}
        max={inpMaxNum}
        readOnly={inpReadOnly}
        multiple={inpMultipleFiles}
        size={inpSize}
        accept={inpAccept}
        onChange={inpChange}
        className={classes}
      />
    </div>
  );
};

export default Input;
