export default function SignIn({isSign, setIsSign}){

    if (isSign==false){
        
    }

    return(
        <div>
            {isSign == true
            ? <button onClick={()=> setIsSign(false)}>Войти</button>
            : <button onClick={()=> setIsSign(true)}>Выйти</button>
        }
        </div>
    )
}