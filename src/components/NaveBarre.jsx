import * as React from 'react';
import {Link} from "react-router-dom";

export default function NaveBarre() {
    return (
        <header className="navbar">
            <img
                alt="Logo du site"
                src="attach_cmsUpload_2d5bb7c3-cd5d-40a5-a3a4-36a9f1dea02f%201.png"
            />
            <nav aria-label="Menu principal" className="div-2">
                <Link to="/">Accueil</Link>
                <Link to="/out">EN LIGNE</Link>
                <Link to="/out">PRÊT NUMÉRIQUE</Link>
                <Link to="/out">AGENDA</Link>
            </nav>
            <div>
                <img
                    alt="Description de l'image"
                    className="img-2"
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/9a50a6a83be9fd4af6113efdde28be0d74ef5eb66596adcffbe34f2312fcc1be?"
                />
                <img alt="Description de l'image" src="Component%201.png"/>
            </div>
        </header>
    );
};