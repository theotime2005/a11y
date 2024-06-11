import * as React from 'react';
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.title="Accueil | Bibliothèque de Marseille";
    }, []);
    return (
        <div>
            <h1>Page d'accueil</h1>
            <p>C'est la page d'accueil</p>
        </div>
    );
};