import Landing from "./pages/Landing";
import styled from "styled-components";

const Button = styled.button`
  background: green;
  color: white;
  font-size: 2rem;
`;

function App() {
  return (
    <div>
      <Button>Edit</Button>
      <Landing />
    </div>
  );
}

export default App;
