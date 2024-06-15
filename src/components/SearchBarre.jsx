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
        <form onSubmit={handleSubmit}>
            <label htmlFor="search">Rechercher dans la bibliothèque</label>
            <input
                type="search"
                id="search"
                required
                value={searchBarre} // Corrected here
                onChange={onChange}
                name="searching"
            />
            <button type="submit">Lancer la recherche</button>
        </form>
    );
};
