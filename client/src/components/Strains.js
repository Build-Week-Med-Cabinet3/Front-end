import React, { useState, useEffect} from 'react'
import StrainSelection from './StrainSelection'
import axiosWithAuth  from './axiosWithAuth'

function Strains() {
const [ strains, setStrains ] = useState([]);

useEffect(()=> {
 axiosWithAuth()
    .get('/api/strains/')
    .then( res => {
        setStrains(res.data)
    })

    .catch(err => console.log(err))
}, [])
    return (
        <div className="strainselect">
          <StrainSelection/>  
        </div>
    )
}

export default Strains
