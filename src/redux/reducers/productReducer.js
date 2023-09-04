let initialState ={
    productList:[]
};

//redux는 함수다 /항상 파라미터 2개 가져간다
function productReducer(state = initialState, action){
    let {type, payload} = action
    switch(type){
        case "GET_PRODUCT_SUCCESS":
            return{...state, productList: payload.data}
            default:
                return{...state};
    }
}

export default productReducer;