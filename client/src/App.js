import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Homepage from "./pages/Homepage";
import "./App.css";

function App() {
  
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
