import { useState } from "react";
import { useNavigate } from "react-router-dom";


function JoinForm() {
  const [room, setRoom] = useState("");
  const [name, setName] = useState("");

  // const navigate = useNavigate();


  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   navigate("/homepage");
  // };

  return (
    <form>
      <h1>Join Quiz</h1>
      <input
        type="text"
        placeholder="Room"
        value={room}
        onChange={(e) => setRoom(e.target.value)}
      />
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Join</button>
    </form>

  );
}

export default JoinForm;
