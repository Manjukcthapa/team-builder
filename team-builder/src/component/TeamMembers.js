import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  height: 500px;
`;

const Item = styled.div`
  height: 200px;
  border: 3px solid #34495e;
  width: 200px;
  margin-left: 80px;
  text-align: center;
  margin-top: 30px;
  background-color: #d6dbdf;
  border-radius: 10%;
`;
const H1 = styled.h1`
  text-align: center;
  color: white;
`;
const FirstDiv = styled.div`
  height: 600px;
  width: 1000px;
  border: 3px solid #34495e;
  margin-bottom: 200px;
  margin-left: 130px;
  background-color: #2e86c1;
  border-radius: 5%;
`;

const TeamMembers = props => {
  return (
    <FirstDiv>
      <H1>Our Team</H1>
      <Div className="note-list">
        {props.members.map(member => (
          <Item className="note" key={member.id}>
            <p>{member.name}</p>
            <p>{member.email}</p>
            <p>{member.role}</p>
            <button onClick={() => props.deleteMember(member.id)}>
              Delete
            </button>
            <button >Edit</button>
          </Item>
        ))}
      </Div>
    </FirstDiv>
  );
};

export default TeamMembers;
