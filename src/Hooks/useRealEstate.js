// import axios from 'axios';
// import { useEffect, useState } from 'react';

// const useRealEstate = () => {
//     const [estateData ,setEstateData] = useState([])
//     const [loading , setLoading] = useState(true)
//     const [error , setError] = useState(null)

//     useEffect ( () => {
//         setLoading (true)
//         axios.get('http://localhost:3000/estates')
//         .then(res => setEstateData(res.data))
//         .catch(err => setError(err))
//         .finally (() => setLoading (false))
//     },[])
//     return {estateData,loading,error}
// }

// export default useRealEstate;