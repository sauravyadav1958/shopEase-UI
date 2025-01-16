import { addToCart, deleteCart, removeFromCart, updateQuantity } from "../features/cart"

// below dispatch,state is passed automatically to action creators by Redux middleware hence no need to import it.
export const addItemToCartAction = (productItem)=>{
    return (dispatch,state) =>{
        dispatch(addToCart(productItem));
        updateLocalStorage(state);
    }
}

export const updateItemToCartAction = (productItem) =>{
    return (dispatch,state) =>{
        dispatch(updateQuantity({
            variant_id: productItem?.variant_id,
            quantity: productItem?.quantity
        }))
        updateLocalStorage(state);

    }
}

export const delteItemFromCartAction = (payload)=>{
    return (dispatch,state)=>{
        dispatch(removeFromCart(payload));
        updateLocalStorage(state);
    }
}

const updateLocalStorage = (state)=>{
    const {cartState} = state(); // getState()
    localStorage.setItem('cart',JSON.stringify(cartState?.cart))
}

export const clearCart = ()=>{
    return (dispatch,state) =>{
       dispatch(deleteCart());
       localStorage.removeItem('cart');
    }
}