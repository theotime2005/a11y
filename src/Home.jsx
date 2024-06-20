import React, { useEffect } from 'react';
import './home.css';

export default function Home() {
    useEffect(() => {
        document.title = "Accueil | Bibliothèque de Marseille";
    }, []);

    const newsImages = [
        { src: "image1.jpg", alt: "Description de l'image 1" },
        { src: "assets/image2.jpg", alt: "Description de l'image 2" },
        { src: "assets/image3.jpg", alt: "Description de l'image 3" }
    ];

    const navCards = [
        { title: "Nos Services", imgSrc: "assets/Polygon%202.png" },
        { title: "FAQ", imgSrc: "assets/Polygon%202.png" },
        { title: "Notre Réseau", imgSrc: "assets/Polygon%202.png" },
        { title: "Audio Livres", imgSrc: "assets/Polygon%202.png" },
        { title: "La Presse", imgSrc: "assets/Polygon%202.png" },
        { title: "Expo", imgSrc: "assets/Polygon%202.png" }
    ];

    const topEvents = [
        {
            title: "RENCONTRE AVEC JEAN-PAUL DELFINO",
            imgSrc: "assets/Photo%20Here.png",
            location: "Bibliothèque des Cinq Avenues",
            date: "Jeudi 23 mai",
            description: "Venez rencontrer l’auteur Jean Paul Delfino, lauréat des Prix Amerigo Vespucci et Antoine de Saint-Exupéry ..",
            readMore: "Lire Plus"
        },
        // Ajoutez d'autres événements ici
    ];

    const newAchievements = [
        {
            title: "Langage ment",
            imgSrc: "assets/marissa-rodriguez-2mKYEVGA4jE-unsplash%201.png",
            publisher: "Le Collège de France",
            year: 2023,
            type: "Music CD",
            more: "Plus"
        },
        // Ajoutez d'autres nouveautés ici
    ];

    const stats = [
        { imgSrc: "assets/TITLES%201.png", count: "6,592", label: "Titre" },
        { imgSrc: "assets/Sold%201.png", count: "345,768", label: "Revues" },
        { imgSrc: "assets/Cust%201.png", count: "101,357", label: "Lecteur" },
        { imgSrc: "assetsRevenue%201.png", count: "3.5B", label: "Pages" },
        { imgSrc: "assets/Authors%201.png", count: "235", label: "Auteur" }
    ];

    const faqQuestions = [
        {
            question: "Comment accéder à son dossier d'abonné ?",
            answer: "Connectez-vous à votre dossier en haut à droite : rentrez votre numéro de carte et votre mot de passe. Cliquez sur votre nom ou sur 'Mon compte' pour entrer dans votre dossier.",
            imgSrc: "assets/Button.png"
        },
        // Ajoutez d'autres questions ici
    ];

    return (
        <div>
            <div className="news">
                <h2>NEWS</h2>
                <div className="slider">
                    {newsImages.map((image, index) => (
                        <img key={index} alt={image.alt} src={image.src} />
                    ))}
                </div>
            </div>
            <div className="navigation">
                <h2>NAVIGATION</h2>
                {navCards.map((card, index) => (
                    <div className="navcard" key={index}>
                        <div>
                            <h3>{card.title}</h3>
                        </div>
                        <div>
                            Plus
                            <img alt="Plus" src={card.imgSrc} />
                        </div>
                    </div>
                ))}
            </div>
            <div className="tops">
                <h2>A LA UNE</h2>
                {topEvents.map((event, index) => (
                    <div key={index}>
                        <img alt="Description de l'image" src={event.imgSrc} />
                        <div>
                            <div>{event.location}</div>
                            <div>{event.date}</div>
                        </div>
                        <h3>{event.title}</h3>
                        <div>{event.description}</div>
                        <div>
                            <div>{event.readMore}</div>
                            <img alt="Lire Plus" src="assets/Polygon%202.png" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="new_achievement">
                <h2>LES NOUVEAUTÉS</h2>
                {newAchievements.map((achievement, index) => (
                    <div key={index}>
                        <img alt="Description de l'image" src={achievement.imgSrc} />
                        <h3>{achievement.title}</h3>
                        <div>{achievement.publisher}</div>
                        <div>{achievement.year} | {achievement.type}</div>
                        <div>
                            <div>{achievement.more}</div>
                            <img alt="Plus" src="assets/Polygon%202.png" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="howitworks">
                <h2>COMMENT ÇA MARCHE</h2>
                <div></div>
                <div>
                    <div>CHOISISSEZ VOS FAVORIS DÈS MAINTENANT</div>
                    <button>Choisir le livre</button>
                </div>
                <div>
                    {stats.map((stat, index) => (
                        <div key={index}>
                            <img alt={stat.label} src={stat.imgSrc} />
                            <div>{stat.count}</div>
                            <div>{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="faq">
                <h2>Questions Générales</h2>
                <div>
                    {faqQuestions.map((faq, index) => (
                        <div key={index}>
                            <div>
                                <div>{faq.question}</div>
                                <img alt="Accès au dossier" src={faq.imgSrc} />
                            </div>
                            <div>{faq.answer}</div>
                        </div>
                    ))}
                    <button>Plus de FAQ</button>
                </div>
            </div>
        </div>
    );
};
