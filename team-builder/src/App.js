import React, { useState } from "react";
import TeamMembers from "./component/TeamMembers";
import Form from "./component/Form";
import './App.css';
function App() {
const [member, setMember] = useState([
  {id: 0, name: "Tyler Thompson", email: "Tyler34@gmail.com", role: "TL"},
    {id: 1, name: "sabrina", email: "sabrina@scottbeeker", role: "student"},
    {id: 2, name: "james bond", email: "itsme@bond", role: "student"},
    {id: 3, name: "greenland jones", email: "itsme@mikejones", role: "student"},
]);

  return(
    <div>
     <TeamMembers members={member}/>
     <Form/>
    </div>
  )
}

export default App;
