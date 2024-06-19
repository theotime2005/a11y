import * as React from 'react';
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.title="Accueil | Bibliothèque de Marseille";
    }, []);
    return (
        <div>
            <div className="news">
                <h2>NEWS</h2>
                <div className="slider">
                    <img alt="Description de l'image 1" src="image1.jpg"/>
                    <img alt="Description de l'image 2" src="image2.jpg"/>
                    <img alt="Description de l'image 3" src="image3.jpg"/>
                </div>
            </div>
            <div className="navigation">
                <h2>NAVIGATION</h2>
                <div className="navcard">
                    <div>
                        <h3>Nos Services</h3>
                    </div>
                    <div>
                        Plus
                        <img alt="Plus" src="Polygon%202.png"/>
                    </div>
                </div>
                <div className="navcard">
                    <div>
                        <h3>FAQ</h3>
                    </div>
                    <div>
                        Plus
                        <img alt="Plus" src="Polygon%202.png"/>
                    </div>
                </div>
                <div className="navcard">
                    <div>
                        <h3>Notre Réseau</h3>
                    </div>
                    <div>
                        Plus
                        <img alt="Plus" src="Polygon%202.png"/>
                    </div>
                </div>
                <div className="navcard">
                    <div>
                        <h3>Audio Livres</h3>
                    </div>
                    <div>
                        Plus
                        <img alt="Plus" src="Polygon%202.png"/>
                    </div>
                </div>
                <div className="navcard">
                    <div>
                        <h3>La Presse</h3>
                    </div>
                    <div>
                        Plus
                        <img alt="Plus" src="Polygon%202.png"/>
                    </div>
                </div>
                <div className="navcard">
                    <div>
                        <h3>Expo</h3>
                    </div>
                    <div>
                        Plus
                        <img alt="Plus" src="Polygon%202.png"/>
                    </div>
                </div>
            </div>
            <div className="tops">
                <h2>A LA UNE</h2>
                <div>
                    <div>
                        <img alt="Description de l'image" src="Photo%20Here.png"/>
                        <div>
                            <div>
                                Bibliothèque des Cinq Avenues
                            </div>
                            <div>
                                Jeudi 23 mai
                            </div>
                        </div>
                        <h3>RENCONTRE AVEC JEAN-PAUL DELFINO</h3>
                        <div>
                            Venez rencontrer l’auteur Jean Paul Delfino, lauréat des Prix Amerigo Vespucci et Antoine de
                            Saint-Exupéry ..
                        </div>
                        <div>
                            <div>Lire Plus</div>
                            <img alt="Lire Plus" src="Polygon%202.png"/>
                        </div>
                    </div>
                    <!-- Répétez le bloc ci-dessus pour chaque élément -->
                </div>
            </div>
            <div className="new_achievement">
                <h2>LES NOUVEAUTÉS</h2>
                <div>
                    <div>
                        <img alt="Description de l'image" src="marissa-rodriguez-2mKYEVGA4jE-unsplash%201.png"/>
                        <h3>Langage ment</h3>
                        <div>Le Collège de France</div>
                        <div>2023 | Music CD</div>
                        <div>
                            <div>Plus</div>
                            <img alt="Plus" src="Polygon%202.png"/>
                        </div>
                    </div>
                    <!-- Répétez le bloc ci-dessus pour chaque élément -->
                </div>
            </div>
            <div className="howitworks">
                <h2>COMMENT ÇA MARCHE</h2>
                <div></div>
                <div>
                    <div>CHOISISSEZ VOS FAVORIS DÈS MAINTENANT</div>
                    <button>Choisir le livre</button>
                </div>
                <div>
                    <div>
                        <img alt="Titres" src="TITLES%201.png"/>
                        <div>
                            6,592
                        </div>
                        <div>
                            Titre
                        </div>
                    </div>
                    <div>
                        <img alt="Revues" src="Sold%201.png"/>
                        <div>
                            345,768
                        </div>
                        <div>
                            Revues
                        </div>
                    </div>
                    <div>
                        <img alt="Lecteur" src="Cust%201.png"/>
                        <div>
                            101,357
                        </div>
                        <div>
                            Lecteur
                        </div>
                    </div>
                    <div>
                        <img alt="Pages" src="Revenue%201.png"/>
                        <div>
                            3.5B
                        </div>
                        <div>
                            Pages
                        </div>
                    </div>
                    <div>
                        <img alt="Auteur" src="Authors%201.png"/>
                        <div>
                            235
                        </div>
                        <div>
                            Auteur
                        </div>
                    </div>
                </div>
            </div>
            <div className="faq">
                <h2>Questions Générales</h2>
                <div>
                    <div>
                        <div>
                            <div>
                                <div>
                                    Comment accéder à son dossier d'abonné ?
                                </div>
                                <img alt="Accès au dossier" src="Button.png"/>
                            </div>
                            <div>
                                Connectez-vous à votre dossier en haut à droite : rentrez votre numéro de carte et votre
                                mot de
                                passe.
                                Cliquez sur votre nom ou sur "Mon compte" pour entrer dans votre dossier.
                            </div>
                        </div>
                        <!-- Répétez le bloc ci-dessus pour chaque question -->
                    </div>
                    <button>Plus de FAQ</button>
                </div>
            </div>
        </div>
    );
};