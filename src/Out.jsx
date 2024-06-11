import * as React from 'react';
import {Link} from "react-router-dom";
import {useEffect} from "react";

export default function Out() {
    useEffect(() => {
        document.title="Hors parcour |  Bibliothèque de Marseille";
    }, []);
    return (
        <div>
            <h1>Hors du parcour</h1>
            <p>Vous êtes sorti du parcours prévu pour ce concours. Nous vous proposons de revenir sur la page d'accueille.</p>
            <Link to="/">Revenir à l'accueil</Link>
        </div>
    );
};