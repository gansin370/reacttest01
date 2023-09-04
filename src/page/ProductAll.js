import React, { useEffect, useState } from "react";
import ProductCard from "../component/ProductCard";
import { Row, Col, Container, Alert } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";
import { productAction } from "../redux/actions/productAction";
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  //let [products, setProducts] = useState([]);
  const productList = useSelector((state) => state.products.productList);
  const [query, setQuery] = useSearchParams();
  //let [error, setError] = useState("");

  const dispatch = useDispatch();
  // 이 함수는 productAction.js에 있는 미들웨어를 불러와야 한다.
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery); //Parameter(매개변수) searchQuery값을 전달
    //{}==객체 안에 바로 type: store 생성하면 바로 store에 가버리기 때문에  getProducts 함수를 걸처서 가야 한다.
    dispatch(productAction.getProducts());
  };

  useEffect(() => {
    getProducts();
  }, [query]);
  return (
    <Container>
      {error ? (
        <Alert variant="danger" className="text-center">
          {error}
        </Alert>
      ) : (
        <Row>
          {products.length > 0 &&
            products.map((item) => (
              <Col md={3} sm={12} key={item.id}>
                <ProductCard item={item} />
              </Col>
            ))}
        </Row>
      )}
    </Container>
  );
};

export default ProductAll;
