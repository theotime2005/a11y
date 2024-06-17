import * as React from 'react';
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.title="Accueil | Bibliothèque de Marseille";
    }, []);
    return (
        <div className="text-center">
            <h1 className="text-2xl font-bold">Page d'accueil</h1>
            <p>C'est la page d'accueil</p>
        </div>
    );
};