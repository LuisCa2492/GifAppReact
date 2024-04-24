import { useState } from 'react'
import AddCategory from './component/AddCategory';
import GifGrid from './component/GifGrid';
const GifApp = () => {

const [categories,setCategories] =  useState([]);

  const onAddCategory = (newCategory) => {
    if(categories.includes(newCategory)) return;
    setCategories([...categories,newCategory]);
  }


  return (
    <>
      <h1>GifApp</h1>
      <AddCategory 
        // todasLasCategorias={setCategories}
        onNewCategory = {(event) => onAddCategory(event)}
      />
      {
        categories.map( (category) => (
          <GifGrid category={category} key={category}/>
        ))
      }
      
    </>
  )
}

export default GifApp
