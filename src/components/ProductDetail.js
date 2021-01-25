import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";

const ProductDetail = (props) => {
  const product = props.product;
  return (
    <DetailWrapper>
      <img src={product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <p>{product.price} KD</p>
      <button onClick={() => props.setProduct(null)}>Go Back</button>
      <DeleteButton
        productId={product.id}
        deleteProduct={props.deleteProduct}
      ></DeleteButton>
    </DetailWrapper>
  );
};

export default ProductDetail;
