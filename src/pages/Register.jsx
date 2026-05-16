import { Link } from "react-router-dom"
import { useState } from "react"

export default function Register(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    function handleSubmit(event){
        event.preventDefault()

        // Валидация
        if(!name.trim()){
            setError("Введите имя")
            return
        }
        if(!email.includes("@")){
            setError("Введите корректный email")
            return
        }
        if(password.length < 6){
            setError("Пароль должен содержать минимум 6 символов")
            return
        }
        if(password !== confirmPassword){
            setError("Пароли не совпадают")
            return
        }

        // Очищаем ошибку
        setError("")
        
        // Здесь будет логика регистрации
        console.log("Регистрация:", { name, email, password })
        alert("Регистрация успешна!")
    }

    return(
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4 py-8">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-gray-100 p-8">
                {/* Заголовок */}
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">Регистрация</h1>
                    <p className="text-gray-500">Создайте новый аккаунт</p>
                </div>
                
                {/* Форма */}
                <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Поле имени */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Имя
                        </label>
                        <input 
                            type="text" 
                            placeholder="Ваше имя"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                            className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                    </div>

                    {/* Поле email */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Email
                        </label>
                        <input 
                            type="text" 
                            placeholder="example@mail.ru"
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                            className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400"
                        />
                    </div>
                    
                    {/* Поле пароля */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Пароль
                        </label>
                        <div className="relative">
                            <input 
                                type={showPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={password}
                                onChange={(event) => setPassword(event.target.value)}
                                className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Поле подтверждения пароля */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Подтвердите пароль
                        </label>
                        <div className="relative">
                            <input 
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="••••••••"
                                value={confirmPassword}
                                onChange={(event) => setConfirmPassword(event.target.value)}
                                className="w-full py-3 px-4 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-400 pr-12"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                                {showConfirmPassword ? (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                                    </svg>
                                ) : (
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                    
                    {/* Ошибка */}
                    {error && (
                        <div className="bg-red-50 border border-red-200 rounded-xl p-3 flex items-center gap-3">
                            <svg className="w-5 h-5 text-red-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <p className="text-sm text-red-600">{error}</p>
                        </div>
                    )}
                    
                    {/* Кнопка */}
                    <button 
                        type="submit"
                        className="w-full py-3 bg-black text-white rounded-xl font-medium hover:bg-gray-800 active:scale-[0.98] transition-all"
                    >
                        Зарегистрироваться
                    </button>
                </form>
                
                {/* Ссылки */}
                <div className="mt-6 text-center space-y-3">
                    <Link 
                        to="/login" 
                        className="block text-sm text-gray-600 hover:text-gray-900 transition-colors"
                    >
                        Уже есть аккаунт? Войти
                    </Link>
                    <Link 
                        to="/" 
                        className="block text-sm text-gray-400 hover:text-gray-600 transition-colors"
                    >
                        ← Назад в каталог
                    </Link>
                </div>
            </div>
        </div>
    )
}