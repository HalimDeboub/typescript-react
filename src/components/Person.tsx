import React, { ReactElement } from "react";

interface IPerson {
  person: {
    name: string;
    url: string;
    age: number;
    note?: string;
  };
}
type PersonProps = { person: IPerson["person"] };
function Heading({ person }: PersonProps): ReactElement {
  return (
    <div className="w-full flex items-center justify-between ">
      <div className="flex items-center gap-3 p-4">
        <img
          src={person.url}
          alt=""
          className="w-12 h-12 rounded-full object-cover"
        />
        <h6>{person.name}</h6>
      </div>
      <h2>{person.age}</h2>
      <p className="mr-3">{person.note}</p>
    </div>
  );
}

export default Heading;
