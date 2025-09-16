import { useContext, useState} from "react";
import { InputContext } from "../Context/inputContext";


const Input = () => {
  const { setInput } = useContext(InputContext);
  const [submittedName, setSubmittedName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setInput(submittedName);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Write your name..."
          value={submittedName}
          onChange={(e) => setSubmittedName(e.target.value)}
        />
        <button  onClick={handleSubmit} type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Input;
