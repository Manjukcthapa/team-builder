import React, { useState } from "react";
import TeamMembers from "./component/TeamMembers";
import Form from "./component/Form";
import './App.css';
function App() {
const [members, setMembers] = useState([
  {id: 0, name: "Tyler Thompson", email: "Tyler34@gmail.com", role: "TL"},
    {id: 1, name: "sabrina", email: "sabrina@scottbeeker", role: "student"},
    {id: 2, name: "james bond", email: "itsme@bond", role: "student"},
    {id: 3, name: "greenland jones", email: "itsme@mikejones", role: "student"},
]);

const addNewMember = member => {
  const newMember = {
    id:Date.now(),
    name:member.name,
    email:member.email,
    role:member.role

  };
  setMembers([...members, newMember]);
}

  return(
    <div>
     <TeamMembers members={members}/>
     <Form addNewMember={addNewMember}/>
    </div>
  )
}

export default App;
