import React from "react";
import { useContext } from "react";
const ChildB=()=>{
  let{data,products}=useContext((ContextData));
  console.log(products);

  return (
    <div>
    {
      // products.map((ele)=>{
      //   console.log(ele);
      //   return <h1 key=(ele.id)> (ele.title)</h1>
      // });
    }
    </div>
  );
};