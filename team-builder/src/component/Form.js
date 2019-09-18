import React, { useState } from "react";
import styled from "styled-components";

const Input = styled.input`
  margin-top: 20px;
  margin-left: 20px;
  height: 40px;
  width: 200px;
  border: 3px solid #34495e;
  background-color:#808B96 ;
  color:white;
  
`;

const Div = styled.div`
  background-color: #095ba7;
  height: 400px;
  width: 700px;
  margin-left: 250px;
  border: 3px solid #34495e;
  border-radius: 5%;
 
`;

const Item = styled.div`
margin-left:160px;
margin-top:20px;
`
const Button = styled.button`
margin-left:240px;
margin-top:20px;
height: 40px;
width: 150px;
border-radius: 30%;
background-color:#34495e;
color:white;
`

const H2 = styled.h2`
margin-left:200px;
color:white;
`

const Form = props => {
  const [member, setMember] = useState({ name: " ", email: " ", role: " " });

  const handleChanges = e => {
    console.log(member);
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ member: "", email: "", role: "" });
  };

  return (
    <Div>
      <H2>Team Member Form</H2>
      <form onSubmit={submitForm}>
        <Item>
          <lable>Name:</lable>
          <Input
            id="name"
            type="text"
            name="name"
            onChange={handleChanges}
            value={member.name}
            placeholder="name"
          />
        </Item>
        <Item>
          <lable>Email:</lable>
          <Input
            id="email"
            type="email"
            name="email"
            onChange={handleChanges}
            value={member.email}
          />
        </Item>
        <Item>
          <lable>Role:</lable>
          <Input
            id="role"
            type="text"
            name="role"
            onChange={handleChanges}
            value={member.role}
          />
        </Item>
        <div>
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Div>
  );
};

export default Form;
