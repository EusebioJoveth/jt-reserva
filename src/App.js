import {
  BrowserRouter,
  Routes,
  Route,
  
}from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Hotel from './pages/hotel/Hotel';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home />} />
      <Route path="/hoteis" element={ <List />} />
      <Route path="/hoteis/:id" element={ <Hotel />} />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
