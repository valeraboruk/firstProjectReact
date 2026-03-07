import ComponentUseState from "../components/ComponentUseState"
import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import SampleButton from "../components/SampleButton"
import SampleBlockUseState from "../components/SampleBlockUseState"
import Counter from "../components/Counter"
export default function Education() {


    return(
        <div className="flex flex-col gap-10">
            <h1>Обучающая страница</h1>
            <MyComponent/>
            <SampleBlock 
                title={"Занятие 1"} 
            description={"Описание занятия"}/>
            <ComponentUseState/>
            <SampleBlockUseState/>
            <div className="gap-0"><Counter/></div>
        </div>
    )
}