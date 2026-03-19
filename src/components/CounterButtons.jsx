import {useState} from "react"

export default function CounterButtons({count, setCount}) {


    return(
        <div className="border p-3">
            <button onClick={() => setCount(count + 1)} className="border p-3">
                +1
            </button>
            <button onClick={() => setCount(count - 1)} className="border p-3 m-1">
                -1
            </button>
            
        </div>
    )
}