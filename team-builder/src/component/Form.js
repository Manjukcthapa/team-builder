import React, { useState } from "react";

const Form = props => {
  const [member, setMember] = useState({name: " ", email: " ", role:" "});


 const  handleChanges = e => {
    console.log(member);
    setMember({ ...member, [e.target.name]: e.target.value });
 }

 const submitForm = e  => {
    e.preventDefault();
 }

  return (
    <form onSubmit={submitForm}>
      <input
        id="name"
        type="text"
        name="name"
        onChange={handleChanges}
        value={member.name}
      />
      <input
        id="email"
        type="email"
        name="email"
        onChange={handleChanges}
        value={member.email}
      />
      <input
        id="role"
        type="text"
        name="role"
        onChange={handleChanges}
        value={member.role}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
