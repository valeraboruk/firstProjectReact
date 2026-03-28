export default function AddLike({isLike, setIsLike}){

    if (isLike==false){
        
    }

    return(
        <div>
            {isLike == true
            ? <button onClick={()=> setIsLike(false)}>❤️</button>
            : <button onClick={()=> setIsLike(true)}>🤍</button>
        }
        </div>
    )
}