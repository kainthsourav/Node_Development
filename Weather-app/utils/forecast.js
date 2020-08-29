const request = require("postman-request");

forecast=(att,logn,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=d4a5a65449bdf95330a9d186c2d04dac&query='+encodeURI(att)+','+encodeURI(logn)+'&Units=f'
    request({url,json:true},(error,{body})=>
    {
        if(error){
            callback('Unable to connect to weather service',undefined)
        }
        else if(body.error){
            callback('Unable to find location',undefined)
        }
        else{
            callback(undefined,{
                descriptions:body.current.weather_descriptions[0],
                temperature:body.current.temperature,
                feelslike:body.current.feelslike
            })
        }
    })
}

module.exports=forecast