import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { MenuNavigation, Home, TicTacToe, Hangman, MemoryGame } from "./pages";

function App() {
  return (
    <Router>
      <MenuNavigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Hangman" element={<Hangman />} />
        <Route path="/TicTacToe" element={<TicTacToe />} />
        <Route path="/Memory" element={<MemoryGame />} />
      </Routes>
    </Router>
  );
}

export default App;
