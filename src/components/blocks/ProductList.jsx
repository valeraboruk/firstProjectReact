import ProductCard from "./ProductCard";

function ProductList() {
    const products = [
        {
            id: 1,
            image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQk7gOvh8REavveZpuMlymP9Jh2FKtcqs8HldBYpCR8iT0_PcMFAOid2Ov-brlMJJeroLjd52jw8Lz68Us39GtL771MZI9ukmgPOww_BFAJImUENqJcB7XxQ3kMhlNXPqsfivfPUQ&usqp=CAc",
            name: "Наушники", 
            priceAfter: 5000, 
            discountPercent: 20, 
            discription: "Крутой звук и глубокий басс"
        },
        {
            id: 2,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRF1Ydzg3dgTlKEqqkFG_43ljeU1X_IKmgRiJ8RxzDOaWWBBkPyETzUorgoQ7arlH2iH3IPwLg-hSHFjCSbh12qGpXtZqUnr8QrJQgDzsIORO2CqvmMMn5wc1WaWFnc&usqp=CAc",
            name: "Клавиатура", 
            priceAfter: 3200, 
            discountPercent: 15, 
            discription: "Механическая с подсветкой" 
        },
        {
            id: 3,
            image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdfMKiuK17KVTvfnJB0xV7o4dx3jvWXblycKLIlCQ1iIMbTQ1DIeIbAawmkYyPn6LDuTwa0r3JPVfu5DWuGEEGfk9LuVAf2Ssi-xSaiRvbL3GKJwJm-SVALg&usqp=CAc",
            name: "Мышь", 
            priceAfter: 1500, 
            discountPercent: 10, 
            discription: "Игровая, 16000 DPI" 
        },
        {
            id: 4,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUAlhzQcwVk_yP4fTlydBHwVEWJUHQcn1RQ&s",
            name: "Монитор", 
            priceAfter: 18000, 
            discountPercent: 25, 
            discription: "4K Ultra HD IPS матрица" 
        }
    ];

    return (
        <div className='flex flex-wrap gap-7 mt-15'>
            {/* 2. Проходимся циклом по массиву и выводим компонент */}
            {products.map((product) => (
                <ProductCard 
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    priceAfter={product.priceAfter}
                    discountPercent={product.discountPercent}
                    discription={product.discription}
                />
            ))}
        </div>
    );
}

export default ProductList