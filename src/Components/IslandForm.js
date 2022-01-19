import { useState } from "react/cjs/react.development";

export default function IslandForm({ island }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const phoneChanger = (event) => setPhone(event.target.value);
  const nameChanger = (event) => setName(event.target.value);

  const PHONE_NUMBER = phone;
  const NAME = name;
  const ISLAND_NAME = island.name;

  return (
    <div className="form">
      <h2>{island.name}</h2>
      <img src={island.img} alt={island.name} />
      <h3>Book a trip to {island.name} island</h3>
      <input placeholder="Type Full Name" onChange={nameChanger} required />
      <input
        placeholder="Type Phone Number"
        type="tel"
        onChange={phoneChanger}
        required
      />
      <button
        className="book"
        onClick={(event) =>
          window.confirm(
            `Are you sure you want to book to ${ISLAND_NAME} with the Name: ${NAME}, phone: ${PHONE_NUMBER}`
          )
        }
      >
        Book for today!
      </button>
    </div>
  );
}
