import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Details from './components/Details';
import { useReducer } from 'react';
import { initialState, reducer } from './reducers/Reducers';
import NewPet from './components/NewPet';

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <Router>
      <div className="App" style={{ backgroundColor: "white" }}>
      <Routes>
        <Route path="/" element={<Home state={state} dispatch={dispatch} />} />
        <Route path="/pet/:id" element={<Details state={state} dispatch={dispatch} />} />
        <Route path="/create" element={<NewPet state={state} dispatch={dispatch} />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
