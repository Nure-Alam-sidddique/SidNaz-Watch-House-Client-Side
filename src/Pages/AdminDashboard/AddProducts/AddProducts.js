import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
const AddProducts = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('https://quiet-springs-91793.herokuapp.com/products', data).then(res => {
            if (res.data.insertedId) {
                alert('Product Add Successfully');
            }
        })
        reset();
        console.log(data);
    } 
    return (
      <div>
        <h1 style={{textAlign:"center"}}>Add Product</h1>
        <form
          style={{
            display: "flex",
            flexDirection: "column",
            width: "65%",
            margin: "0 auto",
          }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            style={{ margin: "5px", padding: "10px" }}
            placeholder="PRODUCT KEY"
            {...register("key", { pattern: /^[A-Za-z]+$/i })}
          />
          <input
            style={{ margin: "5px", padding: "10px" }}
            placeholder="BrandName"
            {...register("brandName", { required: true, maxLength: 20 })}
          />
          <input
            style={{ margin: "5px", padding: "10px" }}
            placeholder="Image Path"
            {...register("imageURL")}
          />
          <input
            style={{ margin: "5px", padding: "10px" }}
            placeholder="Product title"
            {...register("title")}
          />

          <input
            style={{ margin: "5px", padding: "10px" }}
            placeholder="Product Price"
            type="number"
            {...register("price")}
          />
          <input
            style={{ margin: "5px", padding: "10px" }}
            placeholder="Rating between 0-5"
            type="number"
            {...register("rating", { min: 0, max: 5 })}
          />
          <input style={{ margin: "5px", padding: "10px" }} type="submit" />
        </form>
      </div>
    );
};

export default AddProducts;