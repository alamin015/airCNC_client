import React from 'react';
import { categories } from '../../../data/data'
import Box from './Box/Box';


const Categories = () => {

  return (
    <div className="container">
        <div className='flex items-center gap-5 justify-between overflow-x-auto py-4'>
        {
            categories.map((item,index) => <Box item={item} key={index} />)
        }
    </div>
    </div>
  )
}

export default Categories