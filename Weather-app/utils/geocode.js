const request=require('postman-request')

geoCode=(addesss,callback)=>{
    const Url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+encodeURI(addesss)+'.json?access_token=pk.eyJ1Ijoic291cmF2a2FpbnRoIiwiYSI6ImNrZWE4ZGRnNTJlZTIzMG9iNTZ0dGkybWgifQ.KVzxjug6b1khe8CweTbJRA&limit=1'
     request({url:Url,json:true},(error,response)=>{
       if(error){
         callback('Unable to connect to Geo service',undefined)
       }
       else if(response.body.features.length===0){
         callback('Unable to find the location',undefined)
       }
       else{ 
         callback(undefined,{
             latitude:response.body.features[0].center[0],
             logitude:response.body.features[0].center[1],
             location:response.body.features[0].place_name
         })   
       }
     })
   }

   module.exports=geoCode