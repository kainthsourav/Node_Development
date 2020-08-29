const geoCode=require('./utils/geocode')
const forcast=require('./utils/forecast')

const address=process.argv[2]

if(!address)
{
  console.log('Please provide an address')
}
else
{
   geoCode(address,(error,{latitude,logitude,location})=>{
    if(error)
    {
      return console.log(error)
    }
    forcast(latitude,logitude,(error,forcastdata)=>
    {
      if(error)
      {
        return console.log(error)
      }
      console.log(location)
      console.log(forcastdata)
    })
   
   
  })
}


