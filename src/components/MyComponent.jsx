import MyElement from "./MyElement"
import SampleButton from "./SampleButton"
function MyComponent() {

    const name = "Demo Name"
    const price = 100

    return(
        <div>
            <h2>Родительский компонент</h2>
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Price with discount: {price * 0.5}</p>
            <SampleButton>В корзину</SampleButton>
        </div>
    )
}
export default MyComponent