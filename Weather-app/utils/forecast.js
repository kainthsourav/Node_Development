const request = require("postman-request");

forecast=(att,logn,callback)=>{
    const Url='http://api.weatherstack.com/current?access_key=d4a5a65449bdf95330a9d186c2d04dac&query='+encodeURI(att)+','+encodeURI(logn)+'&Units=f'
    request({url:Url,json:true},(error,response)=>
    {
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(response.body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,{
                descriptions:response.body.current.weather_descriptions[0],
                temperature:response.body.current.temperature,
                feelslike:response.body.current.feelslike
            })
        }
    })
}

module.exports=forecast