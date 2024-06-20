import * as React from 'react';

export default function Footer() {
    return (
        <footer className="bg-blue-500 py-6">
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
                <div className="flex items-center">
                    <img alt="Ville de Marseille" src="/images/villeDeMarseilled - Edited.png" className="w-24 h-auto"/>
                    <div className="text-white ml-4">
                        <h2 className="text-xl font-bold">INSCRIPTION NEWSLETTER</h2>
                        <form className="flex mt-2">
                            <label className="sr-only" htmlFor="newsletter-email">Email</label>
                            <input id="newsletter-email" name="email" placeholder="Votre email" type="email" className="border border-white bg-transparent text-white px-4 py-2 rounded-md"/>
                            <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md ml-2">S'inscrire</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className="text-white text-center mt-4">&copy; {new Date().getFullYear()}</p>
        </footer>
    );
};
