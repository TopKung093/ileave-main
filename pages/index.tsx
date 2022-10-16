import { Layout } from 'antd';
import React from 'react';
import Link from 'next/link';
import axios from 'axios';
export default function Home() {
  const callAPI = async () => {
    var data = JSON.stringify({
      "username": "admin",
      "password": "1234"
    });
    
    var config = {
      method: 'get',
      url: '/api/user/query',
      headers: { 
        'x-access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjM0YWQyM2ZkOWU2OTVkZWQyMzU5MzQ4IiwidXNlcm5hbWUiOiJhZG1pbiIsImlhdCI6MTY2NTkwNjI3NSwiZXhwIjoxNjY1OTEzNDc1fQ.yofR3R9Q00Mr8xC4_cQTApnP5H3jJGzYz0Da1C-4wfg', 
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
  };
  return (
    <button onClick={callAPI}>Make API Call</button>
  );
}