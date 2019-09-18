import React, { useState } from "react";

const Form = props => {
    const [member, setMember] = useState({});
  return (
    <form>
      <input id="name" type="text" name="name" />
      <input id="email" type="email" name="email" />
      <input id="role" type="text" name="role" />
    </form>
  );
};

export default Form;