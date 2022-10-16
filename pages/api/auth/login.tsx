import axios from "axios"
import dotenv from "dotenv"
import CryptoJS from 'crypto-js'
dotenv.config()

const Login = async(req:any,res:any) => {
    var axios = require('axios');
    var data = JSON.stringify({
      "username": "admin",
      "password": "1234"
    });
    
    var config = {
      method: 'post',
      url: `${process.env.BACK_END_URL}/login`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default Login