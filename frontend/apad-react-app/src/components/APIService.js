// This is the API service class to DIY different front end function calls
export default class APIService{

    //API service call for user sign up
    static AddUsers(body){
        var address ="/api/adduser"
        return fetch(address, {
            'method': 'POST',
            headers : {
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        }).then(response=>response.json())
        .catch(error => console.log(error))
    }



}