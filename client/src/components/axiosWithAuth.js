import React from 'react'
import axios from  'axios'

export default  function axiosWithAuth() {
    const token = localStorage.getItem('token')
    return axios.create ({
        
        headers: {
            authorization: token,
            'Content-Type': 'application/json'
        },

        baseUrl: 'https://med-cab-bw.herokuapp.com'
        
    }
       
    )
}