import { useState } from "react"
import { useEffect } from "react"
import Counter from "./Counter"
import SearchBlock from "./searchBlock"

export default function MyList() {
    const[items, setItems] = useState([])
    const[filteredItems, setFilteredItems] = useState([])
    const[search, setSearch] = useState("")
  useEffect(()=>{
    console.log("hello " + name);
    
    setTimeout(()=>{
        const items = [
            {id: "1", name: "product 1", price: 123},
            {id: "2", name: "product 2", price: 231},
            {id: "3", name: "product 3", price: 321},
        ]
        setItems(items)
        setFilteredItems(items)
    }, 3000)
    
}, [])

    if(items.length == []) {
        return <h1>Загрузка...</h1>
    }
    return(
        <div>
            <SearchBlock items={items} setSearchFilter={setFilteredItems} />
            {filteredItems.map((item)=>(
                <div key={item.id}>
                    <h1>{item.name}</h1>
                    <p>{item.price}</p>
                    <button onClick={()=>console.log(item.id)}>Удалить</button>
                </div>
            ))}
        </div>
    )

}
