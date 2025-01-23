import { InpCheckTypes } from "./inputType";

const InpCheck = ({
  chkName,
  chkLblVal,
  chkReadOnly,
  chkChange,
  groupClass,
  chkClass,
  chkHorizon,
  isChecked,
  showCheckBox,
  chkType,
}: InpCheckTypes) => {
  if (chkType == "checkbox") {
    return (
      <div
        className={`${groupClass} ${
          chkHorizon ? "flex items-center flex-wrap" : ""
        } w-full`}
      >
        {chkLblVal &&
          chkLblVal.map((lblVal, index) => (
            <div key={index} className={`${chkClass}`}>
              <label
                htmlFor={`${chkName}-${index}`}
                className={`${
                  showCheckBox ? "" : isChecked(lblVal) ? "bg-secondary" : ""
                } ${showCheckBox ? "" : "justify-center"} flex items-center`}
              >
                <input
                  type={chkType}
                  name={chkName}
                  id={`${chkName}-${index}`}
                  value={lblVal}
                  readOnly={chkReadOnly}
                  onChange={chkChange}
                  className={`${showCheckBox ? "" : "hidden"}`}
                  checked={isChecked(lblVal)}
                />
                &nbsp;
                {lblVal}
              </label>
            </div>
          ))}
      </div>
    );
  } else if (chkType == "radio") {
    return (
      <div
        className={`${groupClass} ${
          chkHorizon ? "flex items-center flex-wrap" : ""
        } w-full`}
      >
        {chkLblVal &&
          chkLblVal.map((lblVal, index) => (
            <div key={index} className={`${chkClass}`}>
              <label
                htmlFor={`${chkName}-${index}`}
                className={`${
                  showCheckBox ? "" : isChecked(lblVal) ? "bg-secondary" : ""
                } ${showCheckBox ? "" : "justify-center"} flex items-center`}
              >
                <input
                  type={chkType}
                  name={chkName}
                  id={`${chkName}-${index}`}
                  value={lblVal}
                  readOnly={chkReadOnly}
                  onChange={chkChange}
                  className={`${showCheckBox ? "" : "hidden"}`}
                  checked={isChecked(lblVal)}
                />
                &nbsp;
                {lblVal}
              </label>
            </div>
          ))}
      </div>
    );
  }
};

export default InpCheck;
