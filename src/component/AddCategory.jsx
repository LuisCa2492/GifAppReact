import React, { useState } from 'react'

const AddCategory = ({onNewCategory}) => {

 const [InputValue,setInputValue] = useState('');

 const onInputChange = ({target}) => {
    setInputValue(target.value);
 }

 const onSubmit = (event) => {
    event.preventDefault();
    if(InputValue.trim().length <=1 )return;
    // todasLasCategorias( categorias => [...categorias,InputValue]);
    onNewCategory(InputValue.trim());
    setInputValue('');
 }

  return (
    <>
        <form onSubmit={(event) => onSubmit(event)}>
            <input 
                type="text" 
                placeholder="Buscar Gifs"
                value={InputValue}
                onChange={ (event) => onInputChange(event)}
            />
        </form>
    </>
  )
}

export default AddCategory
