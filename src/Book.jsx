import * as React from 'react';
import {useEffect, useState} from "react";
import "./components/SearchBarre.css"
import Portrait from './components/Potrait.png'
import like from './components/006-love 1.png'
import share from './components/007-share 1.png'


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
        <div className='book-main-box'>
            <section className='book-section-1'>
                <div className='book-image-block'>
                    <img src={Portrait} alt='Portrait de Maria Strovensky' className='img-dim'/>
                </div>
                <div className='book-description-block'>
                    <div className='book-description-block-top'>
                        <div className='book-description-block-top-right'>
                            <h1 className='book-description-block-top-right-h3'>
                                Éducation, Histoire
                            </h1>
                            <h2 className='book-description-block-top-right-title'>
                                Biographie de Maria Strovensky
                            </h2>
                            <div className='book-description-block-top-right-text'>
                                L'histoire de la vie de Maria Strovensky, une personne remarquable dont l'impact sur la société et le monde n'est pas largement connu, et la découverte du parcours de Maria, depuis ses débuts modestes jusqu'à la réussite de sa carrière et de sa vie personnelle. Le livre explore les réalisations, les luttes et les triomphes de Maria, offrant un aperçu de son caractère, de ses valeurs et de son héritage.
                            </div>
                            <div className='book-description-block-top-right-characteristics-list'>
                                <div className='book-description-block-top-right-characteristics-list-column'>
                                    <div className='book-description-block-top-right-characteristics-list-column-title'>
                                        Autheur
                                    </div>
                                    <div className='book-description-block-top-right-characteristics-list-column-text'>
                                        Collin James
                                    </div>
                                </div>
                                <div className='book-description-block-top-right-characteristics-list-column'>
                                    <div className='book-description-block-top-right-characteristics-list-column-title'>
                                        Année
                                    </div>
                                    <div className='book-description-block-top-right-characteristics-list-column-text'>
                                        2011
                                    </div>
                                </div>
                                <div className='book-description-block-top-right-characteristics-list-column'>
                                    <div className='book-description-block-top-right-characteristics-list-column-title'>
                                        Format
                                    </div>
                                    <div className='book-description-block-top-right-characteristics-list-column-text'>
                                        Paperback
                                    </div>
                                </div>
                                <div className='book-description-block-top-right-characteristics-list-column'>
                                    <button className='book-description-block-top-right-characteristics-list-column-button'>
                                        Populaire
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className='book-description-block-top-left'>
                            <button className='book-description-block-top-left-button' onClick={() => togleBook()}>{!isAdd ? 'Ajouter au' : 'Retirer du'} panier</button>
                            <button className='book-description-block-top-left-button'>
                                <img src={like} alt='J'aime/>
                            </button>
                            <button className='book-description-block-top-left-button'>
                                <img src={share} alt='Partager'/>
                            </button>
                        </div>
                    </div>
                    <div className='book-description-block-bottom'>
                        <button className='book-description-block-bottom-button'>
                            Imprimer
                        </button>
                    </div>
                </div>
            </section>
            <section className='book-section-2'>
                <div className='book-section-2-box-top'>
                    Description
                </div>
                <div className='book-section-2-box-bottom'>
                    <div className='book-section-2-box-bottom-line'>
                        <div className='book-section-2-box-bottom-line-title'>
                            Format du livre :
                        </div>
                        <div className='book-section-2-box-bottom-line-text'>
                            Livre de poche | 436 pages
                        </div>
                    </div>
                    <div className='book-section-2-box-bottom-line'>
                        <div className='book-section-2-box-bottom-line-title'>
                            Dimensions :
                        </div>
                        <div className='book-section-2-box-bottom-line-text'>
                            126mm x 194mm x 28mm | 300g
                        </div>
                    </div>
                    <div className='book-section-2-box-bottom-line'>
                        <div className='book-section-2-box-bottom-line-title'>
                            Date de publication :
                        </div>
                        <div className='book-section-2-box-bottom-line-text'>
                            Maison d'édition Sunset
                        </div>
                    </div>

                    <div className='book-section-2-box-bottom-line'>
                        <div className='book-section-2-box-bottom-line-title'>
                            Impression :
                        </div>
                        <div className='book-section-2-box-bottom-line-text'>
                            Groupe Sunset
                        </div>
                    </div>
                    <div className='book-section-2-box-bottom-line'>
                        <div className='book-section-2-box-bottom-line-title'>
                            Ville/pays de publication :
                        </div>
                        <div className='book-section-2-box-bottom-line-text'>
                            Londres, Royaume-Uni
                        </div>
                    </div>
                    <div className='book-section-2-box-bottom-line'>
                        <div className='book-section-2-box-bottom-line-title'>
                            Langue :
                        </div>
                        <div className='book-section-2-box-bottom-line-text'>
                            Anglais
                        </div>
                    </div>
                </div>
            </section>
            <section>

            </section>
        </div>
    );
};