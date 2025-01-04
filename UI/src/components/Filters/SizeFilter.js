import React, { useCallback, useEffect, useState } from 'react'

const SizeFilter = ({sizes,hidleTitle,multi=true,onChange}) => {

  const [appliedSize,setAppliedSize] = useState([]);
  // TODO useCallback understanding
  const onClickDiv = useCallback((item)=>{
    // when atLeat one size is selected
    if(appliedSize.indexOf(item) > -1){  
      setAppliedSize(appliedSize?.filter(size => size !== item));
    }
    // when no size is selected
    else{
      // If multiple sizes can be selected
      if(multi){
        setAppliedSize([...appliedSize,item]);
      }
      // If only single size can be selected at a time
      else{
        setAppliedSize([item]);
      }
    }
  },[appliedSize, multi]);

  useEffect(()=>{
    onChange && onChange(appliedSize);
  },[appliedSize, onChange])

  return (
    <div className={`flex flex-col ${hidleTitle?'':'mb-4'}`}>
      {/* hide title for products in details */}
        {!hidleTitle && <p className='text-[16px] text-black mt-5 mb-5'>Size</p>}
        <div className='flex flex-wrap px-2'>
            {sizes?.map((item,index)=> {
              return (
                <div key={index} className='flex flex-col mr-2'>
                  <div className='w-[50px] border text-center mb-4 rounded-lg mr-4 cursor-pointer
                   hover:scale-110 bg-white border-gray-500 text-gray-500' style={appliedSize?.includes(item)?{
                    background:'black',
                    color:'white'
                   }:{}} onClick={()=> onClickDiv(item)}>{item}</div>
                  
                  </div>
              )
            })}
        </div>
    </div>
  )
}

export default SizeFilter