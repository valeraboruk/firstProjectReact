import SignIn from "./components/signIn"
import { useState } from "react"


function Header() {
    const [isSign, setIsSign] = useState(true)
    const [isLike, setIsLike] = useState(true)
    return(
                <header className="w-full
                flex flex-row text-center justify-between">
                        
                        
                        <img src="https://img.freepik.com/free-photo/shopping-cart-3d-render-icon_460848-7081.jpg?semt=ais_hybrid&w=740&q=80" className="h-12 w-12 rounded-full" alt="" />
                        <p>Интернет-магазин</p>
                        
                        
                <SignIn className="flex justify-end " isSign={isSign} setIsSign={setIsSign} />
                </header>
                


    )
  }
  export default Header

