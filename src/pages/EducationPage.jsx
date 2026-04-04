import ComponentUseState from "../components/ComponentUseState"
import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import SampleButton from "../components/SampleButton"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/Counter"
import MyList from "../components/MyList"
import FirstConditional from "../components/EduComponents/FirstConditional"
import { useState } from "react"
import OnChangeComp from "../components/OnChangeComp"
import { useEffect } from "react"
export default function Education() {
    useEffect
    
    
    const [isVisible, setIsVisible] = useState(true)

    return(
        <div className="flex flex-col gap-10">
            <h1>Обучающая страница</h1>
            <MyComponent />
            <SampleBlock 
                title={"Занятие 1"} 
            description={"Описание занятия"}/>
            <ComponentUseState/>
            <SampleBlockUseState/>
            <div className="gap-0"><Counter/></div>
            <MyList/>
            <FirstConditional isVisible={isVisible} setIsVisible={setIsVisible}/>
            <button 
                className="border p-2 text-white" 
                onClick={() => setIsVisible(!isVisible)}
            >
                Переключить
            </button>
        <OnChangeComp/>
        </div>

   )
}