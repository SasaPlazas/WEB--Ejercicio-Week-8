import { useContext } from "react";
import { InputContext } from "../Context/inputContext";

const Input = () => {
  const { input, setInput } = useContext(InputContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your name..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
