import * as React from 'react';
import {useEffect} from "react";

export default function Result() {
    useEffect(() => {
        document.title="Résultat de recherche pour";
    }, []);
    return (
        <div>
            <h1>Résultats de recherches pour</h1>
            <p>à Compléter</p>
        </div>
    );
};