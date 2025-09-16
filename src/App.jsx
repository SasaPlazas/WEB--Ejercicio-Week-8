import Input from "./Components/input";
import Profile from "./Components/profile";
import ProfileChild from "./Components/profileChild";
import GrandChild from "./Components/grandChild";
import Footer from "./Components/footer";
import "./App.css";
import { InputProvider } from "./Context/inputContext";

function App() {
  return (
    <>
      <h4>Hi, write your name</h4>
      <InputProvider>
        <Input />
        <Profile />
        <ProfileChild />
        <GrandChild />
        <Footer />
      </InputProvider>
    </>
  );
}

export default App;
