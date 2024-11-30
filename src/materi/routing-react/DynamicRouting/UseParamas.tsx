import { useParams } from "react-router-dom";

// type Params = {
//   id: number;
//   name: string;
//   productId: string;
// };

// const Product = ({ id, name, productId }: Params) => {
//   return (
//     <div>
//       <h2>Product {productId}</h2>
//       <h2>Name: {name}</h2>
//       <h2>ID: {id}</h2>
//     </div>
//   );
// };

const Product = () => {
  const { productId } = useParams<{ productId: string}>();
  return (
    <div>
      <h2>Product {productId}</h2>
      <h2>Hello World</h2>
    </div>
  )
}


export default Product;