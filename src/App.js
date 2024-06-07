import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Result from "./Result";
import Book from "./Book";

function App() {
  return (
      <div className="App">
        <Routes>
            <Route path={"/"} element={<Home/>} />
            <Route path={"/results"} element={<Result/>} />
            <Route path={"/book/:id"} element={<Book/>}/>
        </Routes>
      </div>
  );
}

export default App;
