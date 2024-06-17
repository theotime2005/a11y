import * as React from 'react';
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";


export default function SearchBarre({searchParam}) {
    const navigate = useNavigate();
    const [searchBarre, setSearchBarre] = useState("");

    useEffect(() => {
        if (searchParam) {
            setSearchBarre(searchParam);
        }
    }, [searchParam]);

    const onChange = (e) => {
        const searching = e.target.value;
        setSearchBarre(searching);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`/result?search=${searchBarre}`);
    }

    return (
        <form onSubmit={handleSubmit} className="flex items-center justify-center">
            <label htmlFor="search" className="mr-2">Rechercher dans la bibliothèque</label>
            <input
                type="search"
                id="search"
                required
                value={searchBarre} 
                onChange={onChange}
                name="searching"
                className="border border-gray-300 rounded px-2 py-1 focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="ml-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Lancer la recherche</button>
        </form>
    );
};
