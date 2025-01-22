// The code below is for the actual Button Component

import { btnProp } from "./buttonType";

const Button = ({
  children,
  classes,
  clickFunc,
  btnType,
  btnName,
  isDisabled,
}: btnProp) => {
  return (
    <button
      type={btnType}
      name={btnName}
      disabled={isDisabled}
      className={classes}
      onClick={clickFunc}
    >
      {children}
    </button>
  );
};

export default Button;
