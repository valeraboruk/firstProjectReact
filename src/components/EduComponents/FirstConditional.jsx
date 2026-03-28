export default function FirstConditional({isVisible, setIsVisible}){

    if (isVisible==false){
        
    }

    return(
        <div>
            {isVisible == true
            ? <button onClick={()=> setIsVisible(false)}>компонент отображается</button>
            : <button onClick={()=> setIsVisible(true)}>компонент не отображается</button>
        }
        </div>
    )
}