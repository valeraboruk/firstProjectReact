import { Link } from "react-router-dom"

export default function AdminPanel() {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                <h1 className="text-3xl font-bold text-gray-900 text-center mb-10">
                    Админ-панель
                </h1>
                
                <div className="space-y-5">
                    <Link to="/add-product">
                        <button className="w-full py-4 bg-black text-white rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                            </svg>
                            Добавить товар
                        </button>
                    </Link>
                    
                    <Link to="/products-list">
                        <button className="w-full py-4 bg-gray-100 text-gray-700 rounded-xl font-medium hover:bg-gray-200 active:scale-[0.98] transition-all flex items-center justify-center gap-3 border border-gray-200">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                            </svg>
                            Список товаров
                        </button>
                    </Link>
                </div>
                
                <div className="mt-8 text-center">
                    <Link to="/" className="text-sm text-gray-400 hover:text-gray-600 transition-colors">
                        ← Назад в каталог
                    </Link>
                </div>
            </div>
        </div>
    )
}