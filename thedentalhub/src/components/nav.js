import React from 'react';

const Navbar = (props) => {
    const { isLoggedIn, handleLogout } = props;

    return (
        <nav className="bg-blue-500 p-4 drop-shadow-xl">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div className="flex-shrink-0">
                        <a href="/home" className="text-white font-bold text-xl">TheDentalHub</a>
                    </div>
                    <div className="hidden md:block">
                        <ul className="ml-4 flex space-x-4">
                            {isLoggedIn ? ( // Render different links based on login state
                                <>
                                    <li><a href="/home" className="text-white hover:text-gray-200">Home</a></li>
                                    <li><a onClick={handleLogout} className="text-white hover:text-gray-200">Logout</a></li>
                                </>
                            ) : (
                                <>
                                    <li><a href="/login" className="text-white hover:text-gray-200">Login</a></li>
                                    <li><a href="/" className="text-white hover:text-gray-200">Signup</a></li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;

