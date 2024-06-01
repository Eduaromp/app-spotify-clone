import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-black py-4 px-6 flex justify-between items-center">
            <div className="flex items-center">
                <img
                    className="h-8 w-8 mr-2"
                    src="/spotify-icon.png" // Cambia la ruta por la ubicación de tu icono de Spotify
                    alt="Spotify Icon"
                />
                <h1 className="text-white text-lg font-bold">Spotify</h1>
            </div>
            <ul className="flex items-center">
                <li className="mr-6">
                    <a href="#" className="text-white hover:text-gray-300">Inicio</a>
                </li>
                <li className="mr-6">
                    <a href="#" className="text-white hover:text-gray-300">Buscar</a>
                </li>
                <li className="mr-6">
                    <a href="#" className="text-white hover:text-gray-300">Tu Biblioteca</a>
                </li>
                <li>
                    <a href="#" className="text-white hover:text-gray-300">Cuenta</a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;