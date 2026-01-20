import React from "react";
import contacts from "./../data/contacts";

const Contact = () => {
  return (
    <div
      id="contacts"
      className="px-35 flex flex-col items-center gap-10 bg-gray-100 py-30"
    >
      <h2 className="text-4xl font-bold">My Contacts</h2>
      <div className="flex flex-row gap-15">
        {contacts.map((c, i) => (
          <a
            key={i}
            className="w-60 h-75 bg-gray-200 flex justify-center items-center flex-col gap-5 hover:-translate-y-1 transition-all duration-300 ease-out"
            href={c.link}
          >
            <img src={c.image} alt={c.name} />
            <p>{c.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
