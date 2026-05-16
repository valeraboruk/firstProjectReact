import { useState } from "react";
export default function TestForm() {
    const [Text, setText] = useState();
    return(
        <div>
            <h1>Первая форма</h1>
            <input
                type="text"
                value={Text}
                onChange={(event)=>{
                    setText(event.target.value)
                    console.log(event.target.value);
                }}
            />
            <p>{Text}</p>
        </div>
    )
    
}