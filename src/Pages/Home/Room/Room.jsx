import React, { useEffect, useState } from 'react'
import Card from './Card'
import Loader from '../../../Components/Spinner/Loader';
import { useSearchParams } from 'react-router-dom';
import Heading from '../../../Components/Heading/Heading';

const Room = () => {
    const [room,setRoom] = useState([]);
    const [customLoader,setCustomLoader] = useState(false);
    const [params,setParams] = useSearchParams()
    const category = params.get("category");
    // console.log(category)
    useEffect(() => {
        setCustomLoader(true)
        fetch("room.json")
        .then(res => res.json())
        .then(result => {
            if(category){
                const filtered = result.filter(item => item.category === category)
                setRoom(filtered)
            }else {
                setRoom(result)
            }
            setCustomLoader(false)
            
        })
    },[category])

    if(customLoader){
        return <Loader />
    }

  return (
    <div className='container mx-auto py-10'>
        {
            room && room.length > 0 ? <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
            {
                room.map((item,index) => <Card item={item} key={index} />)
            }
        </div>: <Heading title="No Rooms Available in this Category" subtitle="Please Select Another Category" center="true" />
        }
        
    </div>
  )
}

export default Room