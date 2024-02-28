import { FaStar, FaRegStar, FaRegStarHalfStroke } from "react-icons/fa6";

const Rating = ({ product }) => {
  return (
    <div>
      <span>
        <span>
          {product.rating >= 1 ? (
            <FaStar />
          ) : product.rating >= 0.5 ? (
            <FaRegStarHalfStroke />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {product.rating >= 2 ? (
            <FaStar />
          ) : product.rating >= 1.5 ? (
            <FaRegStarHalfStroke />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {product.rating >= 3 ? (
            <FaStar />
          ) : product.rating >= 2.5 ? (
            <FaRegStarHalfStroke />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {product.rating >= 4 ? (
            <FaStar />
          ) : product.rating >= 3.5 ? (
            <FaRegStarHalfStroke />
          ) : (
            <FaRegStar />
          )}
        </span>
        <span>
          {product.rating >= 5 ? (
            <FaStar />
          ) : product.rating >= 4.5 ? (
            <FaRegStarHalfStroke />
          ) : (
            <FaRegStar />
          )}
        </span>
      </span>
      <span> {product.numReviews} reviews</span>
    </div>
  );
};

export default Rating;
