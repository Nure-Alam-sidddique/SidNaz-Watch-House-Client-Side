import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


const UpdateProduct = () => {
    const { updatedId } = useParams();
  const [product, setSingleProduct] = useState({});
  

    useEffect(() => {
        axios(`https://quiet-springs-91793.herokuapp.com/products/${updatedId}`).then(res => setSingleProduct(res.data));
    }, [])
  
  const handleInputField = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const updateValue = {...product };
    updateValue[field] = value;
    setSingleProduct(updateValue);
  }
  console.log(product);
  const handleSubmit= (e)=>{
    const url = `https://quiet-springs-91793.herokuapp.com/products/${updatedId}`;
    axios.put(url, product).then(res => { console.log(res.data) });
    // fetch(url, {
    //   method: "PUT", 
    //   headers: { 'content-type': 'application/json' },
    //   body: JSON.stringify(product)
    // })
    e.preventDefault();
  };
    console.log(product);
    return (
      <div>
        <h1>Update Product {updatedId}</h1>

        <form
        style={{display: 'flex', flexDirection:"column"}}
          onSubmit={handleSubmit}>
          <input
            type="text"
            name="key"
            value={product.key || " "}
            onChange={handleInputField}
          />
          <input
            type="text"
            name="brandName"
            value={product.brandName  || " "}
            onChange={handleInputField} />
          
          <input
            type="text"
            name="imageURL"
            value={product.imageURL || " "}
          onChange={handleInputField}
          />
          <input
            type="text"
            name="title"
            value={product.title || " "}
          onChange={handleInputField}
           
          />
          <input
            type="number"
            name="price"
            value={product.price || " "}
            onChange={handleInputField}
           
          />
          <input
            type="number"
            name="rating"
            value={product.rating || " "}
            onChange={handleInputField}
          />
          <input type="submit" />
        </form>
      </div>
    );
};

export default UpdateProduct;