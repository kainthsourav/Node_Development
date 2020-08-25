const request=require('postman-request')

const Url='http://api.weatherstack.com/current?access_key=d4a5a65449bdf95330a9d186c2d04dac&query=Jalandhar'

request(Url,(error,response)=>
{
    data=JSON.parse(response.body)
    console.log(data)
})
