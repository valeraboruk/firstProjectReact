import React from 'react';

function CartModal({ isOpen, onClose, cartItems = {}, products = [], onUpdateCart }) {
    if (!isOpen) return null;

    const cartProducts = products
        .filter(product => cartItems[product.id] > 0)
        .map(product => ({
            ...product,
            quantity: cartItems[product.id]
        }));

    const totalSum = cartProducts.reduce((sum, item) => sum + (item.priceAfter * item.quantity), 0);

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-20">
            {/* Затемнение фона */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />
            
            {/* Модальное окно */}
            <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg mx-4 max-h-[70vh] flex flex-col animate-in zoom-in-95 duration-200">
                {/* Заголовок */}
                <div className="flex items-center justify-between p-6 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-900">Корзина</h2>
                    <button 
                        onClick={onClose}
                        className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
                    >
                        ✕
                    </button>
                </div>
                
                {/* Содержимое */}
                <div className="flex-1 overflow-y-auto p-6">
                    {cartProducts.length === 0 ? (
                        <div className="text-center py-8">
                            <div className="text-5xl mb-4">🛒</div>
                            <p className="text-gray-500">Корзина пуста</p>
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {cartProducts.map(product => (
                                <div key={product.id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                                    <img 
                                        src={product.image} 
                                        alt={product.name}
                                        className="w-16 h-16 object-contain rounded-lg"
                                    />
                                    <div className="flex-1 min-w-0">
                                        <h4 className="font-medium text-gray-900 truncate">{product.name}</h4>
                                        <p className="text-sm text-gray-500">{product.priceAfter.toLocaleString()} ₽</p>
                                    </div>
                                    
                                    <div className="flex items-center gap-2">
                                        <button 
                                            onClick={() => onUpdateCart(product.id, product.quantity - 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:bg-red-50 hover:text-red-500 transition-colors text-lg"
                                        >
                                            −
                                        </button>
                                        <span className="w-8 text-center font-medium text-gray-900">{product.quantity}</span>
                                        <button 
                                            onClick={() => onUpdateCart(product.id, product.quantity + 1)}
                                            className="w-8 h-8 flex items-center justify-center rounded-lg bg-white border border-gray-200 hover:bg-green-50 hover:text-green-500 transition-colors text-lg"
                                        >
                                            +
                                        </button>
                                    </div>
                                    
                                    <p className="font-bold text-gray-900 min-w-[80px] text-right">
                                        {(product.priceAfter * product.quantity).toLocaleString()} ₽
                                    </p>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                {/* Футер */}
                {cartProducts.length > 0 && (
                    <div className="border-t border-gray-100 p-6">
                        <div className="flex items-center justify-between mb-4">
                            <span className="text-gray-600">Итого:</span>
                            <span className="text-2xl font-bold text-gray-900">{totalSum.toLocaleString()} ₽</span>
                        </div>
                        <button 
                            onClick={() => alert('Заказ оформлен!')}
                            className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 transition-colors"
                        >
                            Оформить заказ
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}

export default CartModal;