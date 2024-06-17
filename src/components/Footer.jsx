import * as React from 'react';

export default function Footer() {
    return (
        <footer className="bg-blue-500">
            <div className="flex items-center justify-center">
                <div>
                    <img alt="Ville de Marseille" src="Illustration%20Woman%201.png" className="w-24 h-auto"/>
                </div>
                <div className="text-white ml-4">
                    <div className="mt-4">
                        <h2 className="text-xl font-bold">INSCRIPTION NEWSLETTER</h2>
                        <div>
                            <form>
                                <label className="sr-only" htmlFor="newsletter-email">Email</label>
                                <input id="newsletter-email" name="email" placeholder="Votre email" type="email"  className="border border-white bg-transparent text-white px-4 py-2 rounded-md"/>
                                <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded-md ml-2">S'inscrire</button>
                            </form>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <p className="text-white text-center">Copyright {new Date().getFullYear()}</p>
        </footer>
    );
};