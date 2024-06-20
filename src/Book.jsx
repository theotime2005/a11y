import * as React from 'react';
import { useEffect, useState } from "react";
import Portrait from './components/Potrait.png';
import like from './components/006-love 1.png';
import share from './components/007-share 1.png';

export default function Book() {
    const [isAdd, setIsAdd] = useState(false);

    useEffect(() => {
        document.title = "Biographie de Maria Strovensky | Bibliothèque de Marseille";
    }, []);

    const addToWishList = () => {
        setIsAdd(true);
        window.alert("Le document a été ajouté au panier.");
    }

    const removeToWishList = (force = false) => {
        if (force) {
            window.alert("Le document a été retiré du panier.");
            setIsAdd(false);
            return;
        }
        const confirmation = window.confirm("Souhaitez-vous retirer le document du panier ?");
        if (confirmation) {
            return removeToWishList(true);
        }
    }

    const toggleBook = () => {
        if (!isAdd) {
            addToWishList();
        } else {
            removeToWishList(false);
        }
    }

    return (
        <div className="max-w-5xl mx-auto p-6 bg-white">
            <section className="flex flex-col md:flex-row mb-8">
                <div className="md:w-1/3 mb-4 md:mb-0">
                    <img src={Portrait} alt='Portrait de Maria Strovensky' className="rounded-lg shadow-lg" />
                </div>
                <div className="md:w-2/3 md:pl-8">
                    <div className="mb-4">
                        <h1 className="text-2xl font-semibold text-blue-600 mb-2">Éducation, Histoire</h1>
                        <h2 className="text-3xl font-bold mb-4">Biographie de Maria Strovensky</h2>
                        <p className="text-gray-700 mb-6">
                            L'histoire de la vie de Maria Strovensky, une personne remarquable dont l'impact sur la société et le monde n'est pas largement connu, et la découverte du parcours de Maria, depuis ses débuts modestes jusqu'à la réussite de sa carrière et de sa vie personnelle. Le livre explore les réalisations, les luttes et les triomphes de Maria, offrant un aperçu de son caractère, de ses valeurs et de son héritage.
                        </p>
                        <div className="grid grid-cols-2 gap-4 mb-4">
                            <div>
                                <div className="text-gray-500">Auteur</div>
                                <div className="text-gray-900">Collin James</div>
                            </div>
                            <div>
                                <div className="text-gray-500">Année</div>
                                <div className="text-gray-900">2011</div>
                            </div>
                            <div>
                                <div className="text-gray-500">Format</div>
                                <div className="text-gray-900">Paperback</div>
                            </div>
                            <div>
                                <button className="bg-blue-600 text-white px-4 py-2 rounded-md">Populaire</button>
                            </div>
                        </div>
                    </div>
                    <div className="flex space-x-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-md" onClick={toggleBook}>
                            {!isAdd ? 'Ajouter au panier' : 'Retirer du panier'}
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                            <img src={like} alt='J\'aime' className="h-6 w-6"/>
                        </button>
                        <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">
                            <img src={share} alt='Partager' className="h-6 w-6"/>
                        </button>
                    </div>
                </div>
            </section>
            <section className="mb-8">
                <h3 className="text-xl font-semibold mb-4">Description</h3>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <div className="text-gray-500">Format du livre :</div>
                        <div className="text-gray-900">Livre de poche | 436 pages</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Dimensions :</div>
                        <div className="text-gray-900">126mm x 194mm x 28mm | 300g</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Date de publication :</div>
                        <div className="text-gray-900">Maison d'édition Sunset</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Impression :</div>
                        <div className="text-gray-900">Groupe Sunset</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Ville/pays de publication :</div>
                        <div className="text-gray-900">Londres, Royaume-Uni</div>
                    </div>
                    <div className="flex justify-between">
                        <div className="text-gray-500">Langue :</div>
                        <div className="text-gray-900">Anglais</div>
                    </div>
                </div>
            </section>
            <section>
                <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-md">Imprimer</button>
            </section>
        </div>
    );
};
