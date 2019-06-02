const initialState = {
    cart: [
        {'id': '12', 'product': 'bla'},
        {'id': '13', 'product': 'blabla'}
    ]
}

const rootReducer = (state = initialState, action) => {
    console.log('action', action, 'state', state);

    if(action.type == "ADD_TO_CART") { 
        let newCart = state.cart;
        newCart.push(action.item);
        console.log('new cart', newCart);
        return {
            ...state,
            cart: newCart
        }
    }
    return state;
}

export default rootReducer;