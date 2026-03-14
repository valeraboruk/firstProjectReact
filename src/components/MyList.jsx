
export default function MyList() {
    var items = [
        {id: "1", name: "product 1", price: 123},
        {id: "2", name: "product 2", price: 231},
        {id: "3", name: "product 3", price: 321},
    ]

    return(
        <div>
            {items.map((item)=>(
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                    <button onClick={()=>console.log(item.id)}>Удалить</button>
                </div>
            ))}
        </div>
    )

}