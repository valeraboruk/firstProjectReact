import MyComponent from "../components/MyComponent"
import SampleBlock from "../components/SampleBlock"
import SampleButton from "../components/SampleButton"
export default function Education() {


    return(
        <div className="flex flex-col gap-10">
            <h1>Обучающая страница</h1>
            <MyComponent/>
            <SampleBlock 
                title={"Занятие 1"} 
            description={"Описание занятия"}/>
            
        </div>
    )
}