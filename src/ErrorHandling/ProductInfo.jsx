export const ProductInfo=()=>{

    const products={
        name:"Laptop",
        price:45000,
        specification:{
            ram:"16GB"
        },
        seller:{
            name:"tech store"
        }
    }
      const storage=products.specification?.storage?? "storage not Menotioned" 
      const sellerContact=products.seller?.contact?? "contact not available"
    
    return(
        <>
        <p>{`Product Name:${products.name}`}</p>
        <p>{`Product Price:${products.price}`}</p>
        <p>{`warrenty:${products.specification?.storage}`}</p>
        <p>{`Product specification:${storage}`}</p>
        <p>{`ContactDetails:${sellerContact}`}</p>
        </>
    )
}