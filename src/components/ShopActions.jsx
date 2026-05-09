import React, { useState, useEffect } from 'react';

function ShopActions({ cartCount = 0, searchQuery = "", onSearch, onCartClick }) {
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => setIsSticky(window.scrollY > 5);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`sticky top-0 z-40 flex items-center justify-between gap-4 p-4 mb-6 bg-white border border-gray-200 shadow-sm transition-all ${isSticky ? 'rounded-none border-t-0' : 'rounded-xl'}`}>
            <div className="relative flex-1 max-w-md">
                <input
                    type="text"
                    placeholder="Найти в каталоге..."
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                    className="w-full py-2 px-4 rounded-lg bg-white border border-gray-300 focus:ring-2 focus:ring-black outline-none text-sm text-gray-900 placeholder-gray-500"
                />
            </div>

            <button 
                onClick={onCartClick}
                className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
            >
                <span className="text-sm font-medium">Корзина</span>
                {cartCount > 0 && (
                    <span className="flex items-center justify-center bg-white text-black text-xs font-bold rounded-full h-5 min-w-[20px] px-1">
                        {cartCount}
                    </span>
                )}
            </button>
        </div>
    );
}

export default ShopActions;