
import axios from "axios"
import { clientApiWithoutToken } from '../../api/api';


const findAllHotels = async () => {
    const response = await clientApiWithoutToken.get('https://hotel.bitsofts.link/hotels')
    return response.data
  }

  const HotelListApi = {
    findAllHotels
  }

  export default HotelListApi