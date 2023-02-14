import React, { ReactElement } from "react";
import Person from "./Person";

interface IProps {
  people: {
    name: string;
    url: string;
    age: number;
    note?: string;
  }[];
}
function List({ people }: IProps): ReactElement<IProps> {
  return (
    <div className="md:w-2/4 flex flex-col justify-center items-center rounded-lg bg-gray-50">
      {people.map((person, index) => (
        <Person person={person} key={index} />
      ))}
    </div>
  );
}

export default List;
