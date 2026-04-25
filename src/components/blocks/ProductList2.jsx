import { useState, useEffect, useRef } from "react";
import ProductCard from "./ProductCard";
import ShopActions from "../ShopActions";

function ProductList2() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        console.log("Страница загрузилась, получаем товары...");

        fetch("https://69ec8c66af4ff533142b1412.mockapi.io/products")
            .then((res) => res.json())
            .then((data) => {
                console.log("Товары получены:", data);
                
                // Проверяем и добавляем нужные поля если их нет
                const formattedProducts = data.map((item, index) => ({
                    id: item.id || index,
                    image: item.image || "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
                    name: item.name || "Товар",
                    price: Number(item.price) || 0,
                    priceAfter: Number(item.priceAfter) || Number(item.price) || 0,
                    discountPercent: Number(item.discountPercent) || 0,
                    discription: item.discription || item.description || "Описание отсутствует"
                }));
                
                console.log("Форматированные товары:", formattedProducts);
                setProducts(formattedProducts);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка загрузки:", error);
                setError(error.message);
                setLoading(false);
            });
    }, []);

    const [searchQuery, setSearchQuery] = useState("");
    const [sortType, setSortType] = useState("default");
    const [cartItems, setCartItems] = useState({});
    
    const [tempMinPrice, setTempMinPrice] = useState("");
    const [tempMaxPrice, setTempMaxPrice] = useState("");
    const [appliedMinPrice, setAppliedMinPrice] = useState("");
    const [appliedMaxPrice, setAppliedMaxPrice] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    
    const filterTimerRef = useRef(null);
    const sortTimerRef = useRef(null);

    const totalCartCount = Object.values(cartItems).reduce((sum, count) => sum + count, 0);

    const updateCartItem = (productId, newCount) => {
        setCartItems(prev => {
            if (newCount === 0) {
                const { [productId]: removed, ...rest } = prev;
                return rest;
            }
            return { ...prev, [productId]: newCount };
        });
    };

    const filteredProducts = products.filter(product => {
        const matchesSearch = (product.name || "").toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMinPrice = appliedMinPrice === "" || (product.price || 0) >= Number(appliedMinPrice);
        const matchesMaxPrice = appliedMaxPrice === "" || (product.price || 0) <= Number(appliedMaxPrice);
        return matchesSearch && matchesMinPrice && matchesMaxPrice;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortType) {
            case "priceAsc": return (a.price || 0) - (b.price || 0);
            case "priceDesc": return (b.price || 0) - (a.price || 0);
            case "nameAsc": return (a.name || "").localeCompare(b.name || "");
            case "nameDesc": return (b.name || "").localeCompare(a.name || "");
            default: return 0;
        }
    });

    const handleSearch = (query) => setSearchQuery(query);

    const handleFilterMouseEnter = () => {
        if (filterTimerRef.current) {
            clearTimeout(filterTimerRef.current);
            filterTimerRef.current = null;
        }
        setIsFilterOpen(true);
    };

    const handleFilterMouseLeave = () => {
        filterTimerRef.current = setTimeout(() => setIsFilterOpen(false), 200);
    };

    const handleSortMouseEnter = () => {
        if (sortTimerRef.current) {
            clearTimeout(sortTimerRef.current);
            sortTimerRef.current = null;
        }
        setIsSortOpen(true);
    };

    const handleSortMouseLeave = () => {
        sortTimerRef.current = setTimeout(() => setIsSortOpen(false), 200);
    };

    const handleApplyFilter = () => {
        setAppliedMinPrice(tempMinPrice);
        setAppliedMaxPrice(tempMaxPrice);
        if (filterTimerRef.current) {
            clearTimeout(filterTimerRef.current);
            filterTimerRef.current = null;
        }
        setIsFilterOpen(false);
    };

    const handleResetFilter = () => {
        setTempMinPrice("");
        setTempMaxPrice("");
        setAppliedMinPrice("");
        setAppliedMaxPrice("");
        if (filterTimerRef.current) {
            clearTimeout(filterTimerRef.current);
            filterTimerRef.current = null;
        }
        setIsFilterOpen(false);
    };

    const handleSortSelect = (type) => {
        setSortType(type);
        if (sortTimerRef.current) {
            clearTimeout(sortTimerRef.current);
            sortTimerRef.current = null;
        }
        setIsSortOpen(false);
    };

    const handleResetAll = () => {
        setSearchQuery("");
        setTempMinPrice("");
        setTempMaxPrice("");
        setAppliedMinPrice("");
        setAppliedMaxPrice("");
        setSortType("default");
    };

    const getFilterButtonText = () => {
        if (appliedMinPrice && appliedMaxPrice) return `${appliedMinPrice} - ${appliedMaxPrice} ₽`;
        if (appliedMinPrice) return `от ${appliedMinPrice} ₽`;
        if (appliedMaxPrice) return `до ${appliedMaxPrice} ₽`;
        return "Цена";
    };

    const getSortButtonText = () => {
        switch (sortType) {
            case "priceAsc": return "Цена ↑";
            case "priceDesc": return "Цена ↓";
            case "nameAsc": return "Название А-Я";
            case "nameDesc": return "Название Я-А";
            default: return "Сортировка";
        }
    };

    const isFilterActive = appliedMinPrice !== "" || appliedMaxPrice !== "";
    const isSortActive = sortType !== "default";

    // Ошибка
    if (error) {
        return (
            <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
                <div className="text-6xl mb-4">❌</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Ошибка загрузки</h3>
                <p className="text-gray-500 mb-6">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors"
                >
                    Попробовать снова
                </button>
            </div>
        );
    }

    // Загрузка
    if (loading) {
        return (
            <div className="max-w-[1400px] mx-auto px-4 py-16 text-center">
                <div className="text-6xl mb-4">⏳</div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Загрузка товаров...</h3>
                <p className="text-gray-500">Пожалуйста, подождите</p>
            </div>
        );
    }

    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <ShopActions 
                cartCount={totalCartCount} 
                searchQuery={searchQuery}
                onSearch={handleSearch} 
            />
            
            <div className="flex items-center gap-3 mb-6">
                <div className="relative" onMouseEnter={handleFilterMouseEnter} onMouseLeave={handleFilterMouseLeave}>
                    <button 
                        className={`flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all
                            ${isFilterActive 
                                ? 'bg-black text-white hover:bg-gray-800' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <span>{getFilterButtonText()}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {isFilterOpen && (
                        <div 
                            className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 z-50 min-w-[220px]"
                            onMouseEnter={handleFilterMouseEnter} onMouseLeave={handleFilterMouseLeave}
                        >
                            <div className="space-y-3">
                                <div>
                                    <label className="block text-xs text-gray-500 mb-1">Минимальная цена</label>
                                    <div className="flex items-center gap-2">
                                        <input type="number" placeholder="0" value={tempMinPrice}
                                            onChange={(e) => setTempMinPrice(e.target.value)}
                                            className="w-full py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-sm" />
                                        <span className="text-gray-400 text-sm">₽</span>
                                    </div>
                                </div>
                                <div>
                                    <label className="block text-xs text-gray-500 mb-1">Максимальная цена</label>
                                    <div className="flex items-center gap-2">
                                        <input type="number" placeholder="20000" value={tempMaxPrice}
                                            onChange={(e) => setTempMaxPrice(e.target.value)}
                                            className="w-full py-2 px-3 rounded-lg bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black outline-none text-sm" />
                                        <span className="text-gray-400 text-sm">₽</span>
                                    </div>
                                </div>
                                <div className="flex gap-2 pt-2">
                                    <button onClick={handleApplyFilter}
                                        className="flex-1 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors">
                                        Готово
                                    </button>
                                    {isFilterActive && (
                                        <button onClick={handleResetFilter}
                                            className="px-3 py-2 text-red-500 hover:text-red-700 text-sm underline transition-colors">
                                            Сброс
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                
                <div className="relative" onMouseEnter={handleSortMouseEnter} onMouseLeave={handleSortMouseLeave}>
                    <button 
                        className={`flex items-center gap-2 py-2 px-4 rounded-lg text-sm font-medium transition-all
                            ${isSortActive 
                                ? 'bg-black text-white hover:bg-gray-800' 
                                : 'bg-white border border-gray-200 text-gray-700 hover:bg-gray-50'
                            }`}
                    >
                        <span>{getSortButtonText()}</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    
                    {isSortOpen && (
                        <div 
                            className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-1.5 z-50 min-w-[180px] flex flex-col gap-1"
                            onMouseEnter={handleSortMouseEnter} onMouseLeave={handleSortMouseLeave}
                        >
                            {["default", "priceAsc", "priceDesc", "nameAsc", "nameDesc"].map(type => (
                                <button key={type} onClick={() => handleSortSelect(type)}
                                    className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                                        ${sortType === type 
                                            ? 'bg-black text-white' 
                                            : 'text-gray-700 hover:bg-gray-100'
                                        }`}
                                >
                                    {type === "default" && "По умолчанию"}
                                    {type === "priceAsc" && "Цена ↑"}
                                    {type === "priceDesc" && "Цена ↓"}
                                    {type === "nameAsc" && "Название А-Я"}
                                    {type === "nameDesc" && "Название Я-А"}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
                
                {(searchQuery || isFilterActive || isSortActive) && (
                    <button onClick={handleResetAll}
                        className="py-2 px-4 text-sm text-gray-400 hover:text-gray-600 underline transition-colors">
                        Сбросить всё
                    </button>
                )}
                
                <span className="ml-auto text-sm text-gray-400">
                    {sortedProducts.length} товаров
                </span>
            </div>
            
            <div className='flex flex-wrap gap-6 mt-8'>
                {sortedProducts.length > 0 ? (
                    sortedProducts.map((product) => (
                        <ProductCard 
                            key={product.id}
                            id={product.id}
                            image={product.image}
                            name={product.name}
                            priceAfter={product.priceAfter}
                            discountPercent={product.discountPercent}
                            discription={product.discription}
                            cartCount={cartItems[product.id] || 0}
                            onCartChange={updateCartItem}
                        />
                    ))
                ) : (
                    <div className="w-full py-16 text-center">
                        <div className="text-6xl mb-4">📦</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Товаров пока нет</h3>
                        <p className="text-gray-500">Добавьте товары в API</p>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ProductList2;