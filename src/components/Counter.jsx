import {useState} from "react"
import CounterView from "./CounterView"
import CounterButtons from "./CounterButtons"
import { useEffect } from "react";
export default function Counter() {
    const [count, setCount] = useState(0);

    useEffect(()=>{
        console.log("Значение count = ", count);
    }, [count])
    return (
        <div className="flex flex-col items-center justify-center  bg-gray-100">
            <div className="mb-4 bg-white p-8 rounded-2xl shadow-xl border border-gray-200 w-80 text-center">
                <h2 className="text-gray-900 uppercase tracking-widest text-m mb-2">Общий счетчик</h2>
                <CounterView count={count} />
                <CounterButtons count={count} setCount={setCount} />
            </div>
        </div>
    )
}