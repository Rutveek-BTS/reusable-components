export interface InputTypes {
  inpLbl: any;
  inpType?: any;
  inpName?: any;
  inpValue?: any;
  inpPlaceholder?: any;
  isRequired?: any;
  inpMinLen?: any;
  inpMaxLen?: any;
  inpMinNum?: any;
  inpMaxNum?: any;
  inpReadOnly?: any;
  // inpMultipleFiles?: any;
  inpSize?: any;
  // inpAccept?: any;
  inpChange?: any;
  classes?: any;
}

export interface InpCheckTypes {
  chkType: string;
  chkName: string;
  chkLblVal: string[];
  chkReadOnly?: boolean;
  chkChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  groupClass?: string;
  chkClass?: string;
  chkHorizon?: boolean;
  showCheckBox?: boolean;
  isChecked: (value: string) => boolean;
}

export interface InpFileTypes {
  inpLbl: string;
  inpName: string;
  inpValue?: any[];
  isRequired?: boolean;
  inpReadOnly?: boolean;
  inpMultipleFiles?: boolean;
  inpAccept?: any;
  inpChange?: () => void;
  classes?: string;
  isDisabled?: boolean;
}
