import { useEffect,useState } from "react";
import { getGifs } from "../helpers/getGifs"
import GifItem from "./GifItem";
import useFetchGifs from "../hooks/useFetchGifs";
const GifGrid = ({category}) => {
  
  const { images, isLoading} = useFetchGifs(category);
  // const [images,setImages] = useState([]);
  
  // const getImages = async() => {
  //    const newImages = await getGifs(category);
  //    setImages(newImages);
  // }

  // useEffect( () => {
  //   getImages();
  // },[])
  
  return (
    <>
        <h3>{category}</h3> 
        {
          //isLoading ? (<h2>Cargando...</h2>) : null
          isLoading && <h2>Cargando...</h2>
        }
        
        <div className="card-grid">
            {
                images.map( (img) => (
                  // <GifItem key={img.id} imagen={img} title={img.title} url={img.url}/>
                  <GifItem key={img.id} {...img}/>  //otra forma de pasar todos las propiedades del img
                ))
            }    
        </div>             
    </>
  )
}

export default GifGrid
