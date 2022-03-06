import axios from "axios";

export const clientApiWithoutToken = axios.create({
    baseURL: 'https://hotel.bitsofts.link',
    headers: {
      'Content-type': 'application/json',
    },
  })
  