import ProductCard from "./ProductCard"


function ProductList() {

    return(
    <div className='flex flex-wrap gap-7 mt-15'>
<ProductCard
      image="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQk7gOvh8REavveZpuMlymP9Jh2FKtcqs8HldBYpCR8iT0_PcMFAOid2Ov-brlMJJeroLjd52jw8Lz68Us39GtL771MZI9ukmgPOww_BFAJImUENqJcB7XxQ3kMhlNXPqsfivfPUQ&usqp=CAc"
      name="Наушники" 
      priceAfter={5000} 
      discountPercent={20} 
      discription="Крутой звук и глубокий басс" 
    />
    
    <ProductCard 
      image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRF1Ydzg3dgTlKEqqkFG_43ljeU1X_IKmgRiJ8RxzDOaWWBBkPyETzUorgoQ7arlH2iH3IPwLg-hSHFjCSbh12qGpXtZqUnr8QrJQgDzsIORO2CqvmMMn5wc1WaWFnc&usqp=CAc"
      name="Клавиатура" 
      priceAfter={3200} 
      discountPercent={15} 
      discription="Механическая с подсветкой" 
    />

    <ProductCard 
      image="https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSdfMKiuK17KVTvfnJB0xV7o4dx3jvWXblycKLIlCQ1iIMbTQ1DIeIbAawmkYyPn6LDuTwa0r3JPVfu5DWuGEEGfk9LuVAf2Ssi-xSaiRvbL3GKJwJm-SVALg&usqp=CAc"
      name="Мышь" 
      priceAfter={1500} 
      discountPercent={10} 
      discription="Игровая, 16000 DPI" 
    />

    <ProductCard 
      image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBUAlhzQcwVk_yP4fTlydBHwVEWJUHQcn1RQ&s"
      name="Монитор" 
      priceAfter={18000} 
      discountPercent={25} 
      discription="4K Ultra HD IPS матрица" 
    />
  </div>)
}
export default ProductList