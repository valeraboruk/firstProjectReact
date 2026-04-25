import { useState, useRef } from "react";
import ProductCard from "./ProductCard";
import ShopActions from "../ShopActions";
import CartModal from "../CartModal"; // Добавить импорт

function ProductList() {
    const products = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
            name: "Наушники", 
            price: 5000,
            priceAfter: 5000, 
            discountPercent: 20, 
            discription: "Крутой звук и глубокий басс"
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=400&h=400&fit=crop",
            name: "Клавиатура", 
            price: 3200,
            priceAfter: 3200, 
            discountPercent: 15, 
            discription: "Механическая с подсветкой" 
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=400&h=400&fit=crop",
            name: "Мышь", 
            price: 1500,
            priceAfter: 1500, 
            discountPercent: 10, 
            discription: "Игровая, 16000 DPI" 
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
            name: "Монитор", 
            price: 18000,
            priceAfter: 18000, 
            discountPercent: 25, 
            discription: "4K Ultra HD IPS матрица" 
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400&h=400&fit=crop",
            name: "Смарт-часы",
            price: 8900,
            priceAfter: 8900,
            discountPercent: 5,
            discription: "Фитнес-трекер с пульсометром"
        },
        {
            id: 6,
            image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
            name: "Планшет",
            price: 25000,
            priceAfter: 25000,
            discountPercent: 0,
            discription: "10.9 дюймов, 256 ГБ"
        },
        {
            id: 7,
            image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=400&h=400&fit=crop",
            name: "Смартфон",
            price: 45000,
            priceAfter: 45000,
            discountPercent: 10,
            discription: "128 ГБ, Dual SIM"
        },
        {
            id: 8,
            image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=400&fit=crop",
            name: "Кофемашина",
            price: 12000,
            priceAfter: 12000,
            discountPercent: 30,
            discription: "Автоматическая, капучино"
        },
        {
            id: 9,
            image: "https://images.unsplash.com/photo-1559567186-a378fe37e1e9?w=400&h=400&fit=crop",
            name: "Электрочайник",
            price: 2500,
            priceAfter: 2500,
            discountPercent: 0,
            discription: "Стеклянный, 1.7 л"
        },
        {
            id: 10,
            image: "https://images.unsplash.com/photo-1522338140262-3e002834d4a2?w=400&h=400&fit=crop",
            name: "Фен",
            price: 3800,
            priceAfter: 3800,
            discountPercent: 15,
            discription: "Ионизация, 3 режима"
        },
        {
            id: 11,
            image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop",
            name: "Беспроводная колонка",
            price: 4200,
            priceAfter: 4200,
            discountPercent: 20,
            discription: "Bluetooth, влагозащита"
        },
        {
            id: 12,
            image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&h=400&fit=crop",
            name: "Ноутбук",
            price: 65000,
            priceAfter: 65000,
            discountPercent: 0,
            discription: "16 ГБ RAM, 512 ГБ SSD"
        },
        {
            id: 13,
            image: "https://images.unsplash.com/photo-1558317374-067fb5f30001?w=400&h=400&fit=crop",
            name: "Пылесос",
            price: 9500,
            priceAfter: 9500,
            discountPercent: 25,
            discription: "Циклонный, 2000 Вт"
        },
        {
            id: 14,
            image: "https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=400&h=400&fit=crop",
            name: "Микроволновка",
            price: 7300,
            priceAfter: 7300,
            discountPercent: 10,
            discription: "Гриль, 20 л"
        },
        {
            id: 15,
            image: "https://images.unsplash.com/photo-1594742514544-d981fe98947e?w=400&h=400&fit=crop",
            name: "Утюг",
            price: 2900,
            priceAfter: 2900,
            discountPercent: 0,
            discription: "Паровой удар, керамика"
        },
        {
            id: 16,
            image: "https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=400&h=400&fit=crop",
            name: "МФУ лазерное",
            price: 13500,
            priceAfter: 13500,
            discountPercent: 5,
            discription: "Печать, сканер, копир"
        },
        {
            id: 17,
            image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=400&fit=crop",
            name: "Роутер Wi-Fi",
            price: 3700,
            priceAfter: 3700,
            discountPercent: 0,
            discription: "Двухдиапазонный, 4 антенны"
        },
        {
            id: 18,
            image: "https://images.unsplash.com/photo-1531492746076-3ca9f0e8b24d?w=400&h=400&fit=crop",
            name: "Внешний SSD",
            price: 8100,
            priceAfter: 8100,
            discountPercent: 20,
            discription: "1 ТБ, USB 3.2"
        },
        {
            id: 19,
            image: "https://images.unsplash.com/photo-1585088901888-b09b9c6c0b3f?w=400&h=400&fit=crop",
            name: "Тостер",
            price: 1900,
            priceAfter: 1900,
            discountPercent: 0,
            discription: "2 отсека, 6 режимов"
        },
        {
            id: 20,
            image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=400&h=400&fit=crop",
            name: "Игровая консоль",
            price: 48000,
            priceAfter: 48000,
            discountPercent: 0,
            discription: "1 ТБ, джойстик в комплекте"
        },
        {
            id: 21,
            image: "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=400&h=400&fit=crop",
            name: "Настольная лампа",
            price: 1800,
            priceAfter: 1800,
            discountPercent: 10,
            discription: "Сенсорная, регулировка яркости"
        },
        {
            id: 22,
            image: "https://images.unsplash.com/photo-1587334207296-61ca5d3f575b?w=400&h=400&fit=crop",
            name: "Весы кухонные",
            price: 1100,
            priceAfter: 1100,
            discountPercent: 0,
            discription: "Электронные, до 5 кг"
        },
        {
            id: 23,
            image: "https://images.unsplash.com/photo-1570222094114-d054a817e56b?w=400&h=400&fit=crop",
            name: "Блендер",
            price: 4700,
            priceAfter: 4700,
            discountPercent: 30,
            discription: "Погружной, 800 Вт"
        },
        {
            id: 24,
            image: "https://images.unsplash.com/photo-1585751119414-ef2636f8aede?w=400&h=400&fit=crop",
            name: "Электробритва",
            price: 5600,
            priceAfter: 5600,
            discountPercent: 15,
            discription: "Влажная и сухая, аккумулятор"
        },
        {
            id: 25,
            image: "https://images.unsplash.com/photo-1587826080692-fae3c61eec9b?w=400&h=400&fit=crop",
            name: "Веб-камера",
            price: 3300,
            priceAfter: 3300,
            discountPercent: 0,
            discription: "1080p, автофокус"
        },
        {
            id: 26,
            image: "https://images.unsplash.com/photo-1604399318652-9f34b78c64f5?w=400&h=400&fit=crop",
            name: "Чехол для планшета",
            price: 1900,
            priceAfter: 1900,
            discountPercent: 20,
            discription: "Кожа, подставка"
        },
        {
            id: 27,
            image: "https://images.unsplash.com/photo-1625723044792-44de16ccb4e9?w=400&h=400&fit=crop",
            name: "USB-хаб",
            price: 1400,
            priceAfter: 1400,
            discountPercent: 0,
            discription: "4 порта USB 3.0"
        }
    ];

    const [searchQuery, setSearchQuery] = useState("");
    const [sortType, setSortType] = useState("default");
    const [cartItems, setCartItems] = useState({});
    
    const [tempMinPrice, setTempMinPrice] = useState("");
    const [tempMaxPrice, setTempMaxPrice] = useState("");
    const [appliedMinPrice, setAppliedMinPrice] = useState("");
    const [appliedMaxPrice, setAppliedMaxPrice] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [isSortOpen, setIsSortOpen] = useState(false);
    
    const [isCartOpen, setIsCartOpen] = useState(false);

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
        const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesMinPrice = appliedMinPrice === "" || product.price >= Number(appliedMinPrice);
        const matchesMaxPrice = appliedMaxPrice === "" || product.price <= Number(appliedMaxPrice);
        return matchesSearch && matchesMinPrice && matchesMaxPrice;
    });

    const sortedProducts = [...filteredProducts].sort((a, b) => {
        switch (sortType) {
            case "priceAsc": return a.price - b.price;
            case "priceDesc": return b.price - a.price;
            case "nameAsc": return a.name.localeCompare(b.name);
            case "nameDesc": return b.name.localeCompare(a.name);
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
        filterTimerRef.current = setTimeout(() => {
            setIsFilterOpen(false);
        }, 200);
    };

    const handleSortMouseEnter = () => {
        if (sortTimerRef.current) {
            clearTimeout(sortTimerRef.current);
            sortTimerRef.current = null;
        }
        setIsSortOpen(true);
    };

    const handleSortMouseLeave = () => {
        sortTimerRef.current = setTimeout(() => {
            setIsSortOpen(false);
        }, 200);
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

    return (
        <div className="max-w-[1400px] mx-auto px-4">
            <ShopActions 
                cartCount={totalCartCount} 
                searchQuery={searchQuery}
                onSearch={handleSearch}
                onCartClick={() => setIsCartOpen(true)}
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
                            <button onClick={() => handleSortSelect("default")}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                                    ${sortType === "default" ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                По умолчанию
                            </button>
                            <button onClick={() => handleSortSelect("priceAsc")}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                                    ${sortType === "priceAsc" ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                Цена ↑
                            </button>
                            <button onClick={() => handleSortSelect("priceDesc")}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                                    ${sortType === "priceDesc" ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                Цена ↓
                            </button>
                            <button onClick={() => handleSortSelect("nameAsc")}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                                    ${sortType === "nameAsc" ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                Название А-Я
                            </button>
                            <button onClick={() => handleSortSelect("nameDesc")}
                                className={`w-full text-left px-4 py-2 rounded-lg text-sm transition-colors
                                    ${sortType === "nameDesc" ? 'bg-black text-white' : 'text-gray-700 hover:bg-gray-100'}`}>
                                Название Я-А
                            </button>
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
                        <div className="text-6xl mb-4">🔍</div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">Ничего не найдено</h3>
                        <p className="text-gray-500 mb-6">Попробуйте изменить параметры поиска или фильтры</p>
                        <button onClick={handleResetAll}
                            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            Сбросить все фильтры
                        </button>
                    </div>
                )}
            </div>
            
            {/* Модальное окно корзины */}
            <CartModal 
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                cartItems={cartItems}
                products={products}
                onUpdateCart={updateCartItem}
            />
        </div>
    );
}

export default ProductList;