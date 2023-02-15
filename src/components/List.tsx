import React, { ReactElement } from "react";
import Person from "./Person";
import { IState as IProps } from "../App";

function List({ people }: IProps): ReactElement<IProps> {
  return (
    <div className="md:w-2/4 flex flex-col justify-center items-center rounded-lg bg-gray-50">
      {people.map((person, index) => (
        <Person person={person} key={index} />
      ))}
      <hr />
    </div>
  );
}

export default List;
