const geoCode=require('./utils/geocode')
// const Url='http://api.weatherstack.com/current?access_key=d4a5a65449bdf95330a9d186c2d04dac&query=Jalandhar&Units=f'
// const geoApiUrl='https://api.mapbox.com/geocoding/v5/mapbox.places/jalandhajjjjjjjjjjjjjjjr.json?access_token=pk.eyJ1Ijoic291cmF2a2FpbnRoIiwiYSI6ImNrZWE4ZGRnNTJlZTIzMG9iNTZ0dGkybWgifQ.KVzxjug6b1khe8CweTbJRA&limit=1'
// // request(Url,(error,response)=>
// // {
// //     data=JSON.parse(response.body)
// //     console.log(data)
// // })

// //Custom Http --no need to parse json
// request({url:Url,json:true},(error,response)=>
// {
//   ///  console.log(response.body)
//   if(error)
//   {
// console.log('Unable to connect to weather service')
//   }
//   else if(response.body.error)
//   {
//     console.log('Unable to find location')
//   }
//   else{
//     console.log(response.body.current.weather_descriptions[0]+' .It is '+response.body.current.temperature+' degrees and it feels like '+response.body.current.feelslike+' out there.')
//   }
    
// })

// //geocodning
// request({url:geoApiUrl,json:true},(error,response)=>
// {
//   if(error)
//   {
//     console.log('Unable to connect to Geo service')

//   }
//   else if(response.body.features.length===0)
//   {
//    console.log('Unable to find the location')
//   }
//   else
//   {
//     const latitude=response.body.features[0].center[0]
//     const logitude=response.body.features[0].center[1]
//     console.log(latitude+':'+logitude)
//   }

// })

// //callback abstraction



geoCode('Jalandhar',(error,response)=>{
  console.log('error',error)
  console.log('response',response)
})