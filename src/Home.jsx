import React, { useEffect } from 'react';
import 'tailwindcss/tailwind.css';

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
        <div className="min-h-screen bg-white text-gray-900">
            <div className="news p-6">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">NEWS</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {newsImages.map((image, index) => (
                        <img key={index} alt={image.alt} src={image.src} className="w-full h-40 object-cover rounded-lg shadow-md" />
                    ))}
                </div>
            </div>
            <div className="navigation p-6 bg-blue-50">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">NAVIGATION</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {navCards.map((card, index) => (
                        <div key={index} className="navcard p-4 bg-white rounded-lg shadow-md flex flex-col items-center justify-between border border-blue-200">
                            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
                            <div className="flex items-center space-x-2 text-blue-500">
                                <span>Plus</span>
                                <img alt="Plus" src={card.imgSrc} className="w-6 h-6" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="tops p-6">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">A LA UNE</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {topEvents.map((event, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
                            <img alt="Description de l'image" src={event.imgSrc} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <div className="flex justify-between text-sm text-gray-600 mb-2">
                                <div>{event.location}</div>
                                <div>{event.date}</div>
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                            <div className="mb-2">{event.description}</div>
                            <div className="flex items-center space-x-2 text-blue-500">
                                <span>{event.readMore}</span>
                                <img alt="Lire Plus" src="assets/Polygon%202.png" className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="new_achievement p-6 bg-blue-50">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">LES NOUVEAUTÉS</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {newAchievements.map((achievement, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
                            <img alt="Description de l'image" src={achievement.imgSrc} className="w-full h-40 object-cover rounded-lg mb-4" />
                            <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                            <div className="text-sm text-gray-600 mb-1">{achievement.publisher}</div>
                            <div className="text-sm text-gray-600 mb-2">{achievement.year} | {achievement.type}</div>
                            <div className="flex items-center space-x-2 text-blue-500">
                                <span>{achievement.more}</span>
                                <img alt="Plus" src="assets/Polygon%202.png" className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="howitworks p-6">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">COMMENT ÇA MARCHE</h2>
                <div className="text-center mb-6">
                    <div className="text-xl mb-2">CHOISISSEZ VOS FAVORIS DÈS MAINTENANT</div>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Choisir le livre</button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md text-center border border-blue-200">
                            <img alt={stat.label} src={stat.imgSrc} className="w-12 h-12 mx-auto mb-2" />
                            <div className="text-2xl font-bold text-blue-500">{stat.count}</div>
                            <div className="text-sm text-gray-600">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="faq p-6 bg-blue-50">
                <h2 className="text-3xl font-bold mb-4 text-blue-500">Questions Générales</h2>
                <div className="space-y-4">
                    {faqQuestions.map((faq, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md border border-blue-200">
                            <div className="flex justify-between items-center mb-2">
                                <div className="text-lg font-semibold">{faq.question}</div>
                                <img alt="Accès au dossier" src={faq.imgSrc} className="w-6 h-6" />
                            </div>
                            <div className="text-sm text-gray-600">{faq.answer}</div>
                        </div>
                    ))}
                    <div className="text-center">
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md">Plus de FAQ</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
