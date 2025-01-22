import Button from "./components/Buttons/Button";
import { useState } from "react";
import Input from "./components/Inputs/Input";

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
//     inpMinLen: undefined,
//     inpMaxLen: undefined,
//     inpMinNum: undefined,
//     inpMaxNum: undefined,
//     inpReadOnly: false,
//     inpMultipleFiles: false,
//     inpSize: 25,
//     inpAccept: "",
//     inpChange: handleChange,
//   };

//   const lNameProp = {
//     classes: "border-primary border-2",
//     inpLbl: "Last Name",
//     inpType: "text",
//     inpName: "lName",
//     inpValue: formData.lName,
//     inpPlaceholder: "Enter Last Name",
//     isRequired: true,
//     inpMinLen: undefined,
//     inpMaxLen: undefined,
//     inpMinNum: undefined,
//     inpMaxNum: undefined,
//     inpReadOnly: false,
//     inpMultipleFiles: false,
//     inpSize: 25,
//     inpAccept: "",
//     inpChange: handleChange,
//   };
//   return (
//     <div>
//       <Input {...fNameProp} />
//       <Input {...lNameProp} />
//     </div>
//   );
// }

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const App = () => {
  return <div>App</div>;
};

export default App;
