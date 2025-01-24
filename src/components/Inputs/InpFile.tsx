import { InpFileTypes } from "./inputType";

const InpFile = ({
  inpLbl,
  inpName,
  inpValue,
  isRequired,
  inpReadOnly,
  inpMultipleFiles,
  inpAccept,
  inpChange,
  classes,
  isDisabled,
}: InpFileTypes) => {
  return (
    <div>
      <label htmlFor={inpName}>{inpLbl}</label>
      <div>
        <input
          type="file"
          name={inpName}
          value={inpValue}
          required={isRequired}
          readOnly={inpReadOnly}
          multiple={inpMultipleFiles}
          accept={inpAccept}
          onChange={inpChange}
          disabled={isDisabled}
          className={classes}
        />
      </div>
    </div>
  );
};

export default InpFile;
