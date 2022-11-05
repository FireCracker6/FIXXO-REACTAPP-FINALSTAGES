import React, {useState, useEffect }from 'react'
import { useParams} from 'react-router-dom'



export const ProductDetailsImages = ({item}) => {

  const {id} = useParams()
  const [thisProduct, setThisProduct] = useState({})
  console.log(id)

  useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`https://win22-webapi.azurewebsites.net/api/products/${id}`)
        setThisProduct(await result.json())
   
    }
    fetchData()
}, [id], [])




  return (
   
    <div className="grid-container">
   <div className="grid-container">
    <div className="item-1">

       

        <div className="item-1-prod-images">
         <div className="item-1"> <img src={thisProduct.imageName}  alt={thisProduct.imageName} /></div>
         <div className="item-2"><img src={thisProduct.imageName} alt={thisProduct.imageName} /></div>
         <div className="item-3"><img src={thisProduct.imageName} alt={thisProduct.imageName} /></div>
         <div className="item-4"><img src={thisProduct.imageName} alt={thisProduct.imageName} /></div>
   
   
             
        </div>

    </div>
    
</div>
    
</div>
  )
}
