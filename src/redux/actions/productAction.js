import { faSearch } from "@fortawesome/free-solid-svg-icons";

function getProducts() {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/gansin370/reacttest01/products?q=${searchQuery}`;
        //let url = `https://localhost:3000/products/${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

//  / 앞으로 미들웨어 함수를 여러개 생성할 수 있어 객체를 반환할 수 있도록 한다.
export const productAction = { getProducts };
