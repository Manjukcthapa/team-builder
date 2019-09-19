import React, { useState, useEffect } from "react";
import TeamMembers from "./component/TeamMembers";
import Form from "./component/Form";
import styled from "styled-components";

import "./App.css";

const Input = styled.input`
height:40px;
width:200px;
border: 3px solid #34495e;
margin-top:30px;
margin-bottom:50px;
`
const Label = styled.label`
margin-left:400px;
margin-top:20px;


`

function App() {
  const [members, setMembers] = useState([
    { id: 0, name: "Tyler Thompson", email: "Tyler34@gmail.com", role: "TL" },
    { id: 1, name: "sabrina", email: "sabrina@scottbeeker", role: "student" },
    { id: 2, name: "james bond", email: "itsme@bond", role: "student" },
    {
      id: 3,
      name: "greenland jones",
      email: "itsme@mikejones",
      role: "student"
    }
  ]);
  const [memberToEdit] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      name: member.name,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember]);
  };

  const deleteMember = id => {
    setMembers(members.filter(member => member.id !== id));
    console.log(id);
  };

  useEffect(() => {
    const results = members.filter(member =>
      member.name.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [members]);

  const handleChange = event => {
    const searchTerm = event.target.value;
    setSearchTerm(searchTerm);
    setSearchResults(members.filter(member => member.name.match(searchTerm)));
  };

  return (
    <div>
      <Label for="name">Search:</Label>
      <Input
        id="name"
        type="text"
        name="textfield"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />

      <TeamMembers members={searchResults.length ? searchResults: members} deleteMember={deleteMember} />

      <Form addNewMember={addNewMember} membertoEdit={memberToEdit} />
    </div>
  );
}

export default App;
