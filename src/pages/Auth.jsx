import { Link } from "react-router-dom"

export default function Auth(){


    return(
        <div>
            <h1>Авторизация</h1>
            <Link to={"/"}><button>Назад</button></Link>
        </div>
    )
}