import axios from 'axios';
const GetNews=async()=>{
    const url='http://localhost:7100'
    try{
   const data=  await axios.get(`${url}/news`)
//    console.log(data)
   return data;
    }catch(err){
        console.log(err)
    }
}
export default GetNews