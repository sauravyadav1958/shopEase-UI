import React, { useEffect, useMemo, useState } from 'react'
import FilterIcon from '../../components/common/FilterIcon';
import content from '../../data/content.json';
import Categories from '../../components/Filters/Categories';
import PriceFilter from '../../components/Filters/PriceFilter';
import ColorsFilter from '../../components/Filters/ColorsFilter';
import SizeFilter from '../../components/Filters/SizeFilter';
import ProductCard from './ProductCard';
import { getAllProducts } from '../../api/fetchProducts';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading } from '../../store/features/common'
const categories = content?.categories;
const p = content?.products;

const ProductListPage = ({categoryType}) => {
  // TODO understand useSelector and dispatch
  const categoryData = useSelector((state)=> state?.categoryState?.categories);
  const dispatch = useDispatch();
  const [products,setProducts] = useState([]);
// useMemo(): recomputes the memoized value when one of the dependencies has changed
  const categoryContent = useMemo(()=>{
    return categories?.find((category)=> category.code === categoryType);
  },[categoryType]);
  
  const productListItems = useMemo(()=>{
    return content?.products?.filter((product)=> product?.category_id === categoryContent?.id );
  },[categoryContent]);
// TODO categoryData is always empty hence cateogry is always undefined.
  const category = useMemo(()=>{
    return categoryData?.find(element => element?.code === categoryType);
  },[categoryData, categoryType]);

  useEffect(()=>{
    dispatch(setLoading(true));
    // function to get products of specific category
    getAllProducts(category?.id).then(res=>{
      setProducts(res);
    // getting offline products of specific category
    if(products.length === 0 || category === undefined){
        setProducts(productListItems.filter((p) => p.category_id === categoryContent?.id))
    }
    }).catch(err=>{
      
    }).finally(()=>{
      dispatch(setLoading(false));
    })
    
  },[category?.id, dispatch, productListItems]);


  return (
    <div>
        <div className='flex'>
            <div className='w-[20%] p-[10px] border rounded-lg m-[20px]'>
                {/* Filters */}
                <div className='flex justify-between '>
                <p className='text-[16px] text-gray-600'>Filter</p>
                <FilterIcon />
                
                </div>
                <div>
                  {/* Product types */}
                <p className='text-[16px] text-black mt-5'>Categories</p>
                <Categories types={categoryContent?.types}/>
                <hr></hr>
                </div>
                  {/* Price */}
                  <PriceFilter />
                  <hr></hr>
                  {/* Colors */}
                  <ColorsFilter colors={categoryContent?.meta_data?.colors}/>
                  <hr></hr>
                   {/* Sizes */}
                   {/* TODO understand SizeFilter for other Calls*/}
                   <SizeFilter sizes={categoryContent?.meta_data?.sizes}/>
            </div>

            <div className='p-[15px]'>
            <p className='text-black text-lg'>{category?.description}</p>
                {/* Products */}
                <div className='pt-4 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-8 px-2'>
                  {/* TODO understand ProductCard for other Calls*/}
                {products?.map((item)=>(
                  <ProductCard key={item?.id} {...item} title={item?.title}/>
                ))}
                </div>

            </div>

        </div>
    </div>
  )
}

export default ProductListPage