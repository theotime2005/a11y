import * as React from 'react';
import {useEffect, useState} from "react";

export default function Book() {
    const [isAdd, setIsAdd] = useState(false)
    useEffect(() => {
        document.title="Biographie de Maria Strovensky | Bibliothèque de Marseille"
    }, []);
    const addToWishList = () => {
        setIsAdd(true);
        window.alert("Le document a été ajouté au panier.");
    }

    const removeToWishList = (force=false) => {
        if (force) {
            window.alert("Le document a été retiré du panier.");
            setIsAdd(false);
            return
        }
        const confirmation = window.confirm("Souhaitez-vous retirer le document du panier ?");
        if (confirmation) {
            return removeToWishList(true);
        }
    }

    const togleBook = () => {
        if (!isAdd) {
            addToWishList();
        } else {
            removeToWishList(false);
        }
    }

    return (
        <div>
            <h1>Biographie de Maria Strovensky</h1>
            <div>
                <h2>Résumé</h2>
                <p>L'histoire de la vie de Maria Strovensky, une personne remarquable dont l'impact sur la société et le
                    monde n'est pas largement connu, et la découverte du parcours de Maria, depuis ses débuts modestes
                    jusqu'à la réussite de sa carrière et de sa vie personnelle. Le livre explore les réalisations, les
                    luttes et les triomphes de Maria, offrant un aperçu de son caractère, de ses valeurs et de son
                    héritage.</p>
            </div>
            <div>
                <h2>A propos du livre</h2>
                <ul aria-label="Informations sur l'ouvrage">
                    <li>Auteur : Collin James</li>
                    <li>Année : 2011</li>
                    <li>Format : Papier</li>
                </ul>
            </div>
            <button onClick={() => togleBook()}>{isAdd ? 'Retirer du ' : 'Ajouter au '} panier</button>
        </div>
    );
};