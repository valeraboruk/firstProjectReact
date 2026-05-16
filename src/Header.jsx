import SignIn from "./components/signIn"
import { useState } from "react"
import { Link } from "react-router-dom"

function Header() {
    const [isSign, setIsSign] = useState(true)
    const [isLike, setIsLike] = useState(true)
    
    return(
        <header className="w-full flex flex-row items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
            <Link to="/admin" className="flex-shrink-0">
                <img 
                    src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-7081.jpg?semt=ais_hybrid&w=740&q=80" 
                    className="h-12 w-12 rounded-full hover:opacity-80 transition-opacity cursor-pointer" 
                    alt="Админ-панель" 
                />
            </Link>
            
            <Link to="/" className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors">
                Интернет-магазин
            </Link>
            
            <Link to={"/login"}>
                <SignIn className="flex justify-end" isSign={isSign} setIsSign={setIsSign} />
            </Link>
        </header>
    )
}

export default Header