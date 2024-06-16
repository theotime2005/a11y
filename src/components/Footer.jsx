import * as React from 'react';

export default function Footer() {
    return (
        <footer>
            <div>
                <div>
                    <img alt="Ville de Marseille" src="Illustration%20Woman%201.png"/>
                </div>
                <div>
                    <div>
                        <h2>INSCRIPTION NEWSLETTER</h2>
                        <div>
                            <form>
                                <label className="sr-only" htmlFor="newsletter-email">Email</label>
                                <input id="newsletter-email" name="email" placeholder="Votre email" type="email"/>
                                <button type="submit">S'inscrire</button>
                            </form>
                        </div>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <p>Copyright {new Date().getFullYear()}</p>
        </footer>
    );
};