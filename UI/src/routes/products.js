import { getProductById } from '../api/fetchProducts';
import { setLoading } from '../store/features/common';
import content from '../data/content.json';
import store from '../store/store';
// const p = content?.categories;

export const loadProductById = async ({params}) =>{
    const products = content?.products;

    try{
        // TODO what is store.dispatch is doing
        store.dispatch(setLoading(true));
        const product = await getProductById(params?.id);
        // when database has not product
        if(product === undefined){
           const localProduct = products.filter((p) => p?.id === parseInt(params?.id))
           store.dispatch(setLoading(false));
           return {localProduct};
        }
        store.dispatch(setLoading(false));
        return {product};
    }
    catch(err){

    }
}