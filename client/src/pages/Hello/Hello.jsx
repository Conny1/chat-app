import { useState } from "react";
import { Link } from "react-router-dom";
import "./hello.css";

export const Hello = () => {
  const [name, setname] = useState("");
  const [room, setroom] = useState("");

  return (
    <div>
      <form>
        <div>
          <input
            onChange={(e) => setname(e.target.value)}
            type="text"
            name="name"
            id="room"
            placeholder="Name"
          />
        </div>

        <div>
          <input
            onChange={(e) => setroom(e.target.value)}
            type="text"
            name="name"
            id="room"
            placeholder="Room"
          />
        </div>

        <Link
          className="joinBtn"
          onClick={(e) => (!name || !room ? e.preventDefault : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          join
        </Link>
        <button onClick={(e) => e.preventDefault()}>signin</button>
      </form>
    </div>
  );
};
