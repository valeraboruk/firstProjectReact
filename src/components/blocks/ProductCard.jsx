import React, { useState } from 'react';
import AddLike from '../addLike';

export default function ProductCard({ 
    id,
    image, 
    name, 
    discription, 
    priceAfter, 
    discountPercent,
    cartCount = 0,
    onCartChange 
}) {
    const [isLike, setIsLike] = useState(false);

    const priceBefore = discountPercent > 0 
        ? Math.round(priceAfter / (1 - discountPercent / 100)) 
        : null;

    const handleAddToCart = () => {
        onCartChange(id, 1);
    };

    const handleIncrement = () => {
        onCartChange(id, cartCount + 1);
    };

    const handleDecrement = () => {
        onCartChange(id, cartCount - 1);
    };

    return (
        <div className="group relative w-[320px] bg-white rounded-[32px] p-5 shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-500 font-sans">
                
            {/* Скидка */}
            {discountPercent > 0 && (
                <div className="absolute top-6 left-6 z-10 bg-red-500 text-white text-[11px] font-black px-2.5 py-1 rounded-xl shadow-lg">
                    -{discountPercent}%
                </div>
            )}

            {/* Контейнер для фото и лайка */}
            <div className="relative w-full h-64 bg-[#F3F4F6] rounded-[24px] mb-6 flex items-center justify-center overflow-hidden">
                <div className="absolute top-4 right-4 z-20">
                    <AddLike isLike={isLike} setIsLike={setIsLike}/>
                </div>

                {image ? (
                    <img 
                        src={image} 
                        alt={name} 
                        className="w-4/5 h-4/5 object-contain group-hover:scale-110 transition-transform duration-700 ease-out" 
                    />
                ) : (
                    <span className="text-gray-400 text-[10px] uppercase tracking-widest font-bold">Нет фото</span>
                )}
            </div>

            {/* Контент */}
            <div className="px-1">
                <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{name}</h3>
                <p className="text-gray-400 text-xs mb-6 h-8 line-clamp-2 leading-relaxed italic">
                    {discription}
                </p>

                {/* Цена */}
                <div className="flex items-center gap-3 mb-6">
                    <span className="text-2xl font-black text-gray-900 tracking-tight">
                        {priceAfter.toLocaleString()} ₽
                    </span>
                    {priceBefore && (
                        <span className="text-sm text-gray-300 line-through font-medium">
                            {priceBefore.toLocaleString()} ₽
                        </span>
                    )}
                </div>
                
                {/* Управление корзиной */}
                <div className="h-[56px] w-full">
                    {cartCount === 0 ? (
                        <button 
                            onClick={handleAddToCart}
                            className="w-full h-full bg-indigo-600 text-white text-sm font-bold rounded-2xl hover:bg-indigo-700 active:scale-[0.96] transition-all shadow-lg shadow-indigo-50"
                        >
                            Добавить в корзину
                        </button>
                    ) : (
                        <div className="w-full h-full flex items-center justify-between bg-gray-200 rounded-2xl p-1.5 border border-gray-300/50">
                            <button 
                                onClick={handleDecrement}
                                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white text-gray-900 shadow-sm hover:bg-red-500 hover:text-white hover:scale-105 active:scale-90 transition-all text-2xl font-light"
                            >
                                −
                            </button>
                            
                            <span className="text-base font-black text-gray-900 px-2">
                                {cartCount}
                            </span>
                            
                            <button 
                                onClick={handleIncrement}
                                className="w-11 h-11 flex items-center justify-center rounded-xl bg-white text-gray-900 shadow-sm hover:bg-green-500 hover:text-white hover:scale-105 active:scale-90 transition-all text-2xl font-light"
                            >
                                +
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}