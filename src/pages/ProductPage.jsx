import { Link, useParams } from "react-router-dom"
import { useEffect, useState } from 'react'
import Header from "../Header"

export default function ProductPage(){
    const params = useParams()
    const [productData, setProductData] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        fetch("https://69ec8c66af4ff533142b1412.mockapi.io/products/" + params.id)
            .then((res) => res.json())
            .then((data) => {
                setProductData(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка загрузки:", error);
                setLoading(false);
            });
    }, [params.id]); // Добавляем зависимость

    // Загрузка
    if (loading) {
        return (
            <div>
                <Header/>
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <div className="text-6xl mb-4">⏳</div>
                    <h1 className="text-2xl font-bold text-gray-700">Загрузка товара...</h1>
                </div>
            </div>
        );
    }

    // Если товар не найден
    if (!productData) {
        return (
            <div>
                <Header/>
                <div className="max-w-7xl mx-auto px-4 py-16 text-center">
                    <div className="text-6xl mb-4">❌</div>
                    <h1 className="text-2xl font-bold text-gray-700">Товар не найден</h1>
                    <Link to="/">
                        <button className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            Назад в каталог
                        </button>
                    </Link>
                </div>
            </div>
        );
    }

    // Выводим данные товара
    return (
        <div>
            <Header/>
            
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Хлебные крошки */}
                <div className="flex items-center gap-2 mb-8 text-sm text-gray-500">
                    <Link to="/" className="hover:text-gray-900 transition-colors">Каталог</Link>
                    <span>/</span>
                    <span className="text-gray-900">{productData.name}</span>
                </div>
                
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Фото товара */}
                    <div className="lg:w-1/2">
                        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center">
                            <img 
                                src={productData.image} 
                                alt={productData.name}
                                className="w-full max-h-[500px] object-contain"
                            />
                        </div>
                    </div>
                    
                    {/* Информация о товаре */}
                    <div className="lg:w-1/2">
                        {/* Скидка */}
                        {productData.discountPercent > 0 && (
                            <span className="inline-block bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-lg mb-4">
                                -{productData.discountPercent}%
                            </span>
                        )}
                        
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">{productData.name}</h1>
                        <p className="text-gray-600 mb-6 text-lg">{productData.discription}</p>
                        
                        {/* Цены */}
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-4xl font-black text-gray-900">
                                {productData.priceAfter?.toLocaleString()} ₽
                            </span>
                            {productData.discountPercent > 0 && (
                                <span className="text-xl text-gray-400 line-through">
                                    {Math.round(productData.priceAfter / (1 - productData.discountPercent / 100)).toLocaleString()} ₽
                                </span>
                            )}
                        </div>
                        
                        {/* Дополнительная информация */}
                        <div className="border-t border-gray-200 pt-6 mb-8">
                            <h3 className="font-semibold text-gray-900 mb-3">Характеристики:</h3>
                            <div className="space-y-2 text-sm text-gray-600">
                                <p><strong>ID товара:</strong> {productData.id}</p>
                                <p><strong>Цена без скидки:</strong> {productData.price?.toLocaleString()} ₽</p>
                                <p><strong>Скидка:</strong> {productData.discountPercent}%</p>
                            </div>
                        </div>
                        
                        {/* Кнопки */}
                        <div className="flex gap-4">
                            <Link to="/">
                                <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-xl hover:bg-gray-300 transition-colors font-medium">
                                    ← Назад в каталог
                                </button>
                            </Link>
                            <button className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-800 transition-colors font-medium">
                                Добавить в корзину
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}