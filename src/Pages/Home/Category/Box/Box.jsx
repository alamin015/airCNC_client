import React from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom';
import qs from "query-string";

const Box = ({item}) => {
    const {label,icon : Icon} = item;
    const navigate = useNavigate()
    const [params,setParams] = useSearchParams()
    const value = params.get("category");
 

    const handleURL = (e) => {

      let currenQuery = {}
      if(params){
        currenQuery = qs.parse(params.toString());
      }

        const updatedQuery = {
          ...currenQuery,category: label
        }
      

      const url = qs.stringifyUrl({
        url:"/",
        query: updatedQuery
      },{skipNull: true})

      navigate(url)

    }


  return (
    <div onClick={()=>handleURL(item.label)} className='p-3 text-center custom  hover:bg-[#fafafa] cursor-pointer'>
        <Icon className="text-center text-2xl mx-auto" size={29} />
        <h2 className='text-base font-normal mt-2'>{item.label}</h2>
    </div>
  )
}

export default Box