import * as React from 'react';
import {useEffect, useState} from "react";
import {useLocation} from "react-router-dom";

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Result() {
    const [title, setTitle] = useState()
    const location = useLocation();
    const query = useQuery();
    useEffect(() => {
        if (query().get('search')) {
            setTitle(query().get('search'));
        }
        document.title=`Résultat de recherche pour ${title}`;
    }, [location]);
    return (
        <div>
            <h1>Résultats de recherche pour {title}</h1>
            <p>à Compléter</p>
        </div>
    );
};