import React, { useEffect, useState } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './Home';
import Result from './Result';
import Book from './Book';
import SearchBarre from './components/SearchBarre';
import Out from './Out';
import NaveBarre from './components/NaveBarre';
import Footer from './components/Footer';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

function App() {
    const [search, setSearch] = useState("");
    const location = useLocation(); // Utilisez `useLocation` ici pour l'ajouter à la dépendance de `useEffect`
    const query = useQuery();

    useEffect(() => {
        const searchParam = query.get('search');
        if (searchParam) {
            setSearch(searchParam);
        }
    }, [location]); // Ajoutez `location` à la dépendance

    return (
        <div className="App">
            <NaveBarre />
            <SearchBarre searchParam={search}/>
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/result" element={<Result />} />
                    <Route path="/book/:id" element={<Book />} />
                    <Route path="/out" element={<Out />} />
                </Routes>
            </main>
            <Footer />
        </div>
    );
}

export default App;
