import React, { ReactElement, useState } from "react";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}
const Form: React.FC<IProps> = ({ people, setPeople }) => {
  const [person, setPerson] = useState({
    name: "",
    url: "",
    age: "",
    note: "",
  });

  const handleChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLTextAreaElement
  > = (e): void => {
    setPerson({
      ...person,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = (): void => {
    if (!person.name || !person.age || !person.url) {
      return;
    }
    setPeople([
      ...people,
      {
        name: person.name,
        url: person.url,
        age: parseInt(person.age),
        note: person.note,
      },
    ]);
    setPerson({
      name: "",
      url: "",
      age: "",
      note: "",
    });
  };
  return (
    <div className=" mt-5 md:w-2/4 flex flex-col justify-center items-center rounded-lg bg-gray-50">
      <h2 className="text-lg mt-3"> Add Friend to your list</h2>
      <div className="flex w-full items-center justify-center p-6 flex-col">
        <div className="flex items-center gap-2 w-full">
          <input
            type="text"
            name="name"
            value={person.name}
            onChange={handleChange}
            placeholder="enter the name "
            className=" p-2 mb-2 w-full h-10 text-black focus:outline-none focus:ring-2 focus:border-none focus:ring-indigo-500 border-2 border-gray-400 rounded-md"
          />
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={person.age}
            placeholder="enter the age "
            className=" p-2 mb-2 w-full h-10 text-black focus:outline-none focus:ring-2 focus:border-none focus:ring-indigo-500 border-2 border-gray-400 rounded-md"
          />
        </div>

        <input
          name="url"
          type="text"
          onChange={handleChange}
          value={person.url}
          placeholder="enter the image url  "
          className=" p-2 mb-2 w-full h-10 text-black focus:outline-none focus:ring-2 focus:border-none focus:ring-indigo-500 border-2 border-gray-400 rounded-md"
        />

        <textarea
          name="note"
          value={person.note}
          onChange={handleChange}
          placeholder="enter any note "
          className=" p-2 mb-2 w-full h-10 text-black focus:outline-none focus:ring-2 focus:border-none focus:ring-indigo-500 border-2 border-gray-400 rounded-md"
        />
        <div className="flex items-center justify-center ">
          <button
            onClick={handleClick}
            type="submit"
            className="rounded-lg flex items-center justify-center bg-indigo-900 h-10 text-white font-semibold px-5 mt-2"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default Form;
