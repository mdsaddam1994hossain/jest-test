import HotelListApi from '@hotel/HotelListApi'
import Link from 'next/link'
import { useEffect } from 'react'
import Layout from '../components/Layout'

const IndexPage = () => {


  const getAllData = async () =>{
    const data = await HotelListApi.findAllHotels()
    console.log(data,'//')
  }

  useEffect(()=>{
    getAllData()
  },[])
  
  return(
    <div>
        this is Home page
    </div>
  )


}

    


export default IndexPage
