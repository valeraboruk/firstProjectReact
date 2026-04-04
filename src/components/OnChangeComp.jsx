
export default function OnChangeComp() {
    function handChange(){
        
    }

    return(
        <div>
            <h2>Событие onChange</h2>

            <input
            type="text"
            placeholder="Введите текст"
            onChange={handChange}
            />
        </div>
    )
}