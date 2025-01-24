import { useState } from "react";
// import Button from "./components/Buttons/Button";
// import Input from "./components/Inputs/Input";
// import InpCheck from "./components/Inputs/InpCheck";
// import InpFile from "./components/Inputs/InpFile";

// Implementation of Button Component

// const App = () => {
//   return (
//     <div>
//       <Button
//         classes={"bg-primary cursor-pointer"}
//         btnType="submit"
//         btnName=""
//         isDisabled="false"
//         clickFunc={() => alert("Hello World!!!")}
//       >
//         Click Me
//       </Button>
//     </div>
//   );
// };

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implementation of Input Component

// function App() {
//   const [formData, setFormData] = useState({ fName: "", lName: "" });

//   const handleChange = (e: any) => {
//     let { name, value } = e.target;

//     setFormData((prev) => ({ ...prev, [name]: value }));
//     console.log(value);
//   };

//   const fNameProp = {
//     classes: "border-primary border-2",
//     inpLbl: "First Name",
//     inpType: "text",
//     inpName: "fName",
//     inpValue: formData.fName,
//     inpPlaceholder: "Enter First Name",
//     isRequired: true,
//     inpReadOnly: false,
//     inpMultipleFiles: false,
//     inpSize: 25,
//     inpAccept: "",
//     inpChange: handleChange,
//   };
//   return (
//     <div>
//       <Input {...fNameProp} />
//       {/* <Input {...lNameProp} /> */}
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Implementation of Input Checkbox Component

// const App = () => {
//   const [checks, setChecks] = useState<string[]>([]);
//   const [selectedValue, setSelectedValue] = useState("");

//   const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value, checked } = e.target;
//     setChecks((prev) =>
//       checked ? [...prev, value] : prev.filter((item) => item !== value)
//     );
//   };

//   const handleRadioChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { value } = e.target;
//     setSelectedValue(value);
//   };

//   const inpChkProp = {
//     chkType: "checkbox",
//     chkName: "Brand",
//     chkLblVal: ["Audi", "BMW", "Benz", "Ferrari", "Lambo"],
//     chkReadOnly: false,
//     chkChange: handleCheckChange,
//     groupClass: "",
//     chkClass: "w-1/4 rounded-md border-secondary border-2 m-2",
//     chkHorizon: false,
//     isChecked: (value: string) => checks.includes(value),
//     showCheckBox: false,
//   };

//   const inpRadProp = {
//     chkType: "radio",
//     chkName: "Gender",
//     chkLblVal: ["Male", "Female", "L", "G", "B", "T", "Q"],
//     chkReadOnly: false,
//     chkChange: handleRadioChange,
//     groupClass: "",
//     chkClass: "w-1/4 rounded-md border-secondary border-2 m-2",
//     chkHorizon: true,
//     isChecked: (value: string) => selectedValue === value,
//     showCheckBox: false,
//   };
//   return (
//     <div className="w-1/2 h-96 bg-slate-100">
//       <label htmlFor="">Check Box</label>
//       <InpCheck {...inpChkProp} />
//       <label htmlFor="">Radio</label>
//       <InpCheck {...inpRadProp} />
//     </div>
//   );
// };

// const App = () => {
//   const handleChange = () => {};

//   const fileProp = {
//     inpLbl: "User Documents",
//     inpName: "userDocs",
//     inpValue: [],
//     isRequired: true,
//     inpReadOnly: false,
//     inpMultipleFiles: false,
//     inpAccept: "",
//     inpChange: handleChange,
//     classes: "",
//     isDisabled: false,
//   };
//   return (
//     <>
//       <InpFile {...fileProp} />
//     </>
//   );
// };

export default App;
