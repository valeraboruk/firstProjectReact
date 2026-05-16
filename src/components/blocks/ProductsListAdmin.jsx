import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export default function ProductsListAdmin() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    
    // Сортировка
    const [sortField, setSortField] = useState("id")
    const [sortDirection, setSortDirection] = useState("asc")

    const fetchProducts = () => {
        fetch("https://69ec8c66af4ff533142b1412.mockapi.io/products")
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                setLoading(false)
            })
            .catch(err => {
                console.error("Ошибка:", err)
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchProducts()
    }, [])

    const handleDelete = (id) => {
        if (!window.confirm("Удалить этот товар?")) return
        fetch(`https://69ec8c66af4ff533142b1412.mockapi.io/products/${id}`, {
            method: "DELETE"
        })
        .then(() => setProducts(prev => prev.filter(product => product.id !== id)))
        .catch(err => console.error("Ошибка при удалении:", err))
    }

    // Обработчик клика по заголовку
    const handleSort = (field) => {
        if (sortField === field) {
            // Если тот же столбец — переключаем направление
            setSortDirection(prev => prev === "asc" ? "desc" : "asc")
        } else {
            // Новый столбец — сортируем по возрастанию
            setSortField(field)
            setSortDirection("asc")
        }
    }

    // Сортировка товаров
    const sortedProducts = [...products].sort((a, b) => {
        let valueA, valueB

        switch (sortField) {
            case "name":
                valueA = (a.name || "").toLowerCase()
                valueB = (b.name || "").toLowerCase()
                break
            case "price":
                valueA = Number(a.price) || 0
                valueB = Number(b.price) || 0
                break
            case "priceAfter":
                valueA = Number(a.priceAfter) || 0
                valueB = Number(b.priceAfter) || 0
                break
            case "discountPercent":
                valueA = Number(a.discountPercent) || 0
                valueB = Number(b.discountPercent) || 0
                break
            default:
                valueA = a.id
                valueB = b.id
        }

        if (valueA < valueB) return sortDirection === "asc" ? -1 : 1
        if (valueA > valueB) return sortDirection === "asc" ? 1 : -1
        return 0
    })

    // Стрелка сортировки
    const SortArrow = ({ field }) => {
        if (sortField !== field) return <span className="text-gray-300 ml-1">↕</span>
        return <span className="text-black ml-1">{sortDirection === "asc" ? "↑" : "↓"}</span>
    }

    if (loading) {
        return (
            <div className="min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-6xl mb-4">⏳</div>
                    <p className="text-gray-500">Загрузка...</p>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 px-4 py-8">
            <div className="max-w-6xl mx-auto">
                {/* Заголовок */}
                <div className="flex items-center justify-between mb-6">
                    <h1 className="text-3xl font-bold text-gray-900">Список товаров</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-sm text-gray-500">{products.length} товаров</span>
                        <Link to="/admin" className="text-sm text-gray-500 hover:text-gray-700 transition-colors">
                            ← Назад в админку
                        </Link>
                    </div>
                </div>

                {/* Таблица */}
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                    {sortedProducts.length === 0 ? (
                        <div className="p-8 text-center text-gray-500">
                            Товаров пока нет
                        </div>
                    ) : (
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="border-b border-gray-200 bg-gray-50">
                                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 w-16">
                                            №
                                        </th>
                                        <th className="text-left px-6 py-4 text-sm font-medium text-gray-600 w-16">
                                            Фото
                                        </th>
                                        <th 
                                            className="text-left px-6 py-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-black transition-colors select-none"
                                            onClick={() => handleSort("name")}
                                        >
                                            Название <SortArrow field="name" />
                                        </th>
                                        <th 
                                            className="text-left px-6 py-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-black transition-colors select-none"
                                            onClick={() => handleSort("price")}
                                        >
                                            Цена <SortArrow field="price" />
                                        </th>
                                        <th 
                                            className="text-left px-6 py-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-black transition-colors select-none"
                                            onClick={() => handleSort("priceAfter")}
                                        >
                                            Цена со скидкой <SortArrow field="priceAfter" />
                                        </th>
                                        <th 
                                            className="text-left px-6 py-4 text-sm font-medium text-gray-600 cursor-pointer hover:text-black transition-colors select-none"
                                            onClick={() => handleSort("discountPercent")}
                                        >
                                            Скидка <SortArrow field="discountPercent" />
                                        </th>
                                        <th className="text-center px-6 py-4 text-sm font-medium text-gray-600 w-24">
                                            Действия
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {sortedProducts.map((product, index) => (
                                        <tr 
                                            key={product.id} 
                                            className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                                        >
                                            <td className="px-6 py-4 text-sm text-gray-500">
                                                {index + 1}
                                            </td>
                                            <td className="px-6 py-4">
                                                <img 
                                                    src={product.image} 
                                                    alt={product.name}
                                                    className="w-10 h-10 rounded-lg object-contain bg-gray-100"
                                                />
                                            </td>
                                            <td className="px-6 py-4">
                                                <p className="font-medium text-gray-900">{product.name}</p>
                                                <p className="text-xs text-gray-400 mt-0.5 line-clamp-1">{product.discription}</p>
                                            </td>
                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {product.price?.toLocaleString()} ₽
                                            </td>
                                            <td className="px-6 py-4">
                                                <span className="text-sm font-medium text-gray-900">
                                                    {product.priceAfter?.toLocaleString()} ₽
                                                </span>
                                            </td>
                                            <td className="px-6 py-4">
                                                {product.discountPercent > 0 ? (
                                                    <span className="inline-block bg-red-100 text-red-600 text-xs font-bold px-2 py-1 rounded-lg">
                                                        -{product.discountPercent}%
                                                    </span>
                                                ) : (
                                                    <span className="text-sm text-gray-400">—</span>
                                                )}
                                            </td>
                                            <td className="px-6 py-4 text-center">
                                                <button 
                                                    onClick={() => handleDelete(product.id)}
                                                    className="px-3 py-1.5 bg-red-50 text-red-500 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium"
                                                >
                                                    Удалить
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>

                <div className="mt-6 text-center">
                    <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                        ← Назад в каталог
                    </Link>
                </div>
            </div>
        </div>
    )
}