import React, { useState } from "react";

function FormDetails() {
  const [fullName, SetFullName] = useState({
    fName: "",
    lName: "",
  });

  const inputEvent = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    const value = e.target.value;
    const name = e.target.name;

    SetFullName((preValue) => {
      if (name === "Fname") {
        return {
          fName: value,
          lName: preValue.lName,
        };
      } else {
        return {
          fName: preValue.fName,
          lName: value,
        };
      }
    });
  };

  const onSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <form>
        <div className="Heading_Container">
          
            Hello {fullName.fName} {fullName.lName}
          
        </div>
        <div className="input_container">
          <input
            onChange={inputEvent}
            name="Fname"
            type="text"
            value={fullName.fName}
            placeholder="Enter your First Name"
          />
          <br />
          <br />
          <input
            onChange={inputEvent}
            name="Lname"
            type="text"
            value={fullName.lName}
            placeholder="Enter your Last Name"
          />
        </div>
        
        <br />
        <br />
        <div className="button_container">
          <button onClick={onSubmit}>Click me</button>
        </div>
      </form>
    </>
  );
}

export default FormDetails;
