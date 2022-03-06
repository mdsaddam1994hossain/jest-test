
import HotelListApi from './../components/hotel/HotelListApi';

const keyify = (obj, prefix = '') => 
  Object.keys(obj).reduce((res, el) => {
    if( Array.isArray(obj[el]) ) {
      return [...res, `${el}:array`];
    } else if( typeof obj[el] === 'object' && obj[el] !== null ) {
      return [...res, ...keyify(obj[el], prefix + el + '.')];
    }
    return [...res, prefix + el];
  }, []);

  const hotelSample = {
    id:1,
    hotel_name:"hotel cox",
    maxFloor : 5,
    hotel_amenitiex:[]

  }

test('the data is peanut butter', async() => {

  const data = await HotelListApi.findAllHotels()
  // console.log(keyify(data[0]))
  console.log(keyify(hotelSample))
   const req =5
   const res =5
    expect(keyify(data[0])).toBe(keyify(hotelSample))
  })

  test("test jest",()=>{
    expect(8).toBe(8)
  })