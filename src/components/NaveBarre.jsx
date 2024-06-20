import * as React from 'react';
import {Link} from "react-router-dom";

export default function NaveBarre() {
    return (
        <header className="navbar flex flex-col items-center justify-center py-4 bg-white">
            <img
                alt="Logo du site"
                src="/images/siteLogo - Edited.png"
                className="h-16 w-auto"
            />
            <nav aria-label="Menu principal" className="div-2 flex items-center space-x-4">
                <Link to="/" className="text-blue-600">Accueil</Link>
                <Link to="/out" className="text-blue-600">EN LIGNE</Link>
                <Link to="/out" className="text-blue-600">PRÊT NUMÉRIQUE</Link>
                <Link to="/out" className="text-blue-600">AGENDA</Link>
            </nav>
            <div className="flex flex-col items-center mt-4">
                <img
                    alt="Description de l'image"
                    className="img-2"
                    loading="lazy"
                    src="/images/0205c7a4-7ff1-4bda-bee2-1d84c059fa93.png"
                />
                <img alt="Description de l'image" 
                src="/images/homeBackground - Edited.png"
                style={{ marginLeft: "auto" }}/>
                
            </div>
        </header>
    );
};