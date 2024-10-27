
import React,{useEffect} from "react";
function CountriesFetch() {
    var [countries,setCountries] = React.useState();
    var [isError,setError] = React.useState(false)
    useEffect(()=>{
        fetch("https://restcountries.com/v3/all")
        .then(res=>{
        console.log(res)
            if(res.ok){
                return res.json()
            }
            else{
                throw new Error("Thappu Pushpa")
            }
        })
        .then(data=>{
            console.log(data)
            setCountries(data)
            setError(false)
        })
        .catch(()=>{
            console.log("Error Vachindi Pushpa")
            setError(true)
        })
    },[]);
  return (
    <div>
        <h1>CountriesFetch</h1>
        <div className="p-5">
            <h1>Edupoly Examples(Error Handling in Fetch Calls)</h1>
            <h2></h2>
            {
                isError && <h2>Something went wrong to fetch countries</h2>
            }
            <ul>
                {
                countries?.map((country)=>{
                    return <li key={country.id}>{country.name.common}</li>
                })
                }
            </ul>
        </div>
    </div>
  )
}

export default CountriesFetch