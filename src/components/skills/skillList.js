import React from "react";

const skillList = ["HTML", "CSS", "JavaScript", "React"];

export default function SkillList() {
  return (
    <div>
      {skillList.map(skill => {
        return <li>{skill}</li>;
      })}
    </div>
  );
}
