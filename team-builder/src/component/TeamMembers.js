import React from "react";

const TeamMembers = props => {
  return (
    <div className="note-list">
      {props.members.map(member => (
        <div className="note" key={member.id}>
          <p>{member.name}</p>
          <p>{member.email}</p>
          <p>{member.role}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;