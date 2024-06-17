import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Result() {
    const [title, setTitle] = useState('');
    const location = useLocation();
    const query = useQuery();
    const [isExact, setIsExact] = useState(false);

    useEffect(() => {
        const searchTitle = query.get('search');
        if (searchTitle) {
            setTitle(searchTitle);
            if (searchTitle.toUpperCase().includes("BIOGRAPHIE") || searchTitle.toUpperCase().includes("MARIA")) {
                setIsExact(true);
            }
        }
    }, [location.search]);

    useEffect(() => {
        if (title) {
            document.title = `Résultat de recherche pour ${title}`;
        }
    }, [title]);

    return (
        <div>
            <h1>Résultats de recherche pour {title}</h1>
            {isExact ? (
                <div>
                    <h2><Link to="/book/1">Biographie de Maria Strovensky</Link></h2>
                    <p>Auteur : Collin James</p>
                </div>
            ) : (
                <p>Aucun document trouvé.</p>
            )}
        </div>
    );
};
