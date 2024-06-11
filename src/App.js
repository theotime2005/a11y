import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Result from "./Result";
import Book from "./Book";
import SearchBarre from "./components/SearchBarre";
import Out from "./Out";
import NaveBarre from "./components/NaveBarre";

function App() {
  return (
      <div className="App">
          <NaveBarre/>
          <SearchBarre/>
        <main>
            <Routes>
                <Route path={"/"} element={<Home/>} />
                <Route path={"/results"} element={<Result/>} />
                <Route path={"/book/:id"} element={<Book/>}/>
                <Route path="/out" element={<Out/>}/>
            </Routes>
        </main>
      </div>
  );
}

export default App;
