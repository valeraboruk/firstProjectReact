export default function ProductCard({ image, name, discription, priceAfter, discountPercent }) {
    // Вычисляем старую цену на основе текущей и процента скидки
    // Формула: цена / (1 - скидка/100)
    const priceBefore = Math.round(priceAfter / (1 - discountPercent / 100));

    return (
        <div className="relative max-w-sm bg-white border border-gray-100 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 p-6 group">
            
           
            {discountPercent > 0 && (
                <div className="absolute top-9 left-9 z-10 bg-gradient-to-r from-red-500 to-orange-500 text-white text-sm font-black px-3 py-1 rounded-xl shadow-lg shadow-red-200 animate-pulse">
                    -{discountPercent}%
                </div>
            )}

            <div className="w-full h-52 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl mb-5 flex items-center justify-center text-gray-400 group-hover:scale-[1.02] transition-transform duration-300 overflow-hidden">
                {image ? (
                    <img src={image} alt={name} className="w-full h-full object-contain" />
                ) : (
                    <span className="text-sm font-medium italic text-gray-300">Нет изображения</span>
                )}
            </div>

            <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-indigo-600 transition-colors">
                {name}
            </h3>
            
            <p className="text-gray-500 text-sm mb-6 line-clamp-2">
                {discription}
            </p>

            <div className="flex items-end gap-3 mb-6">
                {/* Актуальная цена */}
                <span className="text-3xl font-black text-gray-900 leading-none">
                    {priceAfter.toLocaleString()} ₽
                </span>
                
                {/* Вычисленная старая цена */}
                {discountPercent > 0 && (
                    <span className="text-lg text-gray-400 line-through decoration-red-500/50 leading-none">
                        {priceBefore.toLocaleString()} ₽
                    </span>
                )}
            </div>

            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 px-6 rounded-2xl transition-all active:scale-95 shadow-lg shadow-indigo-100 flex items-center justify-center gap-2">
                В корзину
            </button>
        </div>
    );
}
