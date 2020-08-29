const geoCode=require('./utils/geocode')
const forcast=require('./utils/forecast')

const address=process.argv[2]

if(!address)
{
  console.log('Please provide an address')
}
else
{
   geoCode(address,(error,response)=>{
    if(error)
    {
      return console.log(error)
    }
    forcast(response.latitude,response.logitude,(error,forcastdata)=>
    {
      if(error)
      {
        return console.log(error)
      }
      console.log(forcastdata)
    })
    console.log(response.location)
   
  })
}


