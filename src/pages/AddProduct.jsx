import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"

export default function AddProduct(){
    const navigate = useNavigate();
    
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const [priceAfter, setPriceAfter] = useState('');
    const [discountPercent, setDiscountPercent] = useState('');
    const [discription, setDiscription] = useState('');
    const [image, setImage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    // Данные для предпросмотра
    const previewData = {
        name: name || "Название товара",
        price: Number(price) || 0,
        priceAfter: Number(priceAfter) || Number(price) || 0,
        discountPercent: Number(discountPercent) || 0,
        discription: discription || "Описание товара",
        image: image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
    };

    const priceBefore = previewData.discountPercent > 0 
        ? Math.round(previewData.priceAfter / (1 - previewData.discountPercent / 100)) 
        : null;

    function handleSubmit(event){
        event.preventDefault()
        
        if(!name.trim()){
            setError("Введите название товара")
            return
        }
        if(!price || Number(price) <= 0){
            setError("Введите корректную цену")
            return
        }
        if(!discription.trim()){
            setError("Введите описание товара")
            return
        }

        setError("")
        
        const newProduct = {
            name: name.trim(),
            price: Number(price),
            priceAfter: Number(priceAfter) || Number(price),
            discountPercent: Number(discountPercent) || 0,
            discription: discription.trim(),
            image: image.trim() || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop"
        }

        fetch("https://69ec8c66af4ff533142b1412.mockapi.io/products", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct)
        })
        .then(res => res.json())
        .then(data => {
            console.log("Товар добавлен:", data)
            setSuccess("Товар успешно добавлен!")
            setName('')
            setPrice('')
            setPriceAfter('')
            setDiscountPercent('')
            setDiscription('')
            setImage('')
            setTimeout(() => navigate('/admin'), 1500)
        })
        .catch(err => {
            setError("Ошибка при добавлении товара: " + err.message)
        })
    }

    return(
        <div className="min-h-screen bg-gray-50 px-4 py-8">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">Добавить товар</h1>
                
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Форма */}
                    <div className="lg:w-1/2">
                        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Название</label>
                                    <input type="text" placeholder="Наушники" value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Цена (₽)</label>
                                    <input type="number" placeholder="5000" value={price}
                                        onChange={(e) => setPrice(e.target.value)}
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Цена со скидкой (₽)</label>
                                    <input type="number" placeholder="5000" value={priceAfter}
                                        onChange={(e) => setPriceAfter(e.target.value)}
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Скидка (%)</label>
                                    <input type="number" placeholder="20" value={discountPercent}
                                        onChange={(e) => setDiscountPercent(e.target.value)}
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-gray-900" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Описание</label>
                                    <textarea placeholder="Описание товара" value={discription}
                                        onChange={(e) => setDiscription(e.target.value)} rows="3"
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-gray-900 resize-none" />
                                </div>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">Ссылка на изображение</label>
                                    <input type="text" placeholder="https://images.unsplash.com/..." value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-gray-900" />
                                </div>
                                
                                {error && (
                                    <div className="bg-red-50 border border-red-200 rounded-xl p-3">
                                        <span className="text-sm text-red-600">{error}</span>
                                    </div>
                                )}
                                {success && (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-3">
                                        <span className="text-sm text-green-600">{success}</span>
                                    </div>
                                )}
                                
                                <button type="submit"
                                    className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all">
                                    Добавить товар
                                </button>
                            </form>
                        </div>
                    </div>
                    
                    {/* Предпросмотр карточки */}
                    <div className="lg:w-1/2 flex items-start justify-center">
                        <div className="sticky top-8">
                            <p className="text-center text-sm text-gray-500 mb-4">Предпросмотр карточки</p>
                            <div className="group relative w-[320px] bg-white rounded-[32px] p-5 shadow-sm border border-gray-100 font-sans">
                                {previewData.discountPercent > 0 && (
                                    <div className="absolute top-6 left-6 z-10 bg-red-500 text-white text-[11px] font-black px-2.5 py-1 rounded-xl shadow-lg">
                                        -{previewData.discountPercent}%
                                    </div>
                                )}
                                <div className="relative w-full h-64 bg-[#F3F4F6] rounded-[24px] mb-6 flex items-center justify-center overflow-hidden">
                                    <img 
                                        src={previewData.image} 
                                        alt={previewData.name}
                                        className="w-4/5 h-4/5 object-contain" 
                                    />
                                </div>
                                <div className="px-1">
                                    <h3 className="text-lg font-bold text-gray-900 mb-1 truncate">{previewData.name}</h3>
                                    <p className="text-gray-500 text-xs mb-6 h-8 line-clamp-2 italic">{previewData.discription}</p>
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-2xl font-black text-gray-900">{previewData.priceAfter.toLocaleString()} ₽</span>
                                        {priceBefore && (
                                            <span className="text-sm text-gray-400 line-through">{priceBefore.toLocaleString()} ₽</span>
                                        )}
                                    </div>
                                    <div className="h-[56px] w-full">
                                        <div className="w-full h-full bg-indigo-600 text-white text-sm font-bold rounded-2xl flex items-center justify-center">
                                            Добавить в корзину
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="mt-8 text-center">
                    <Link to="/admin" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                        ← Назад в админку
                    </Link>
                </div>
            </div>
        </div>
    )
}