import React,{useEffect} from "react";
function CountriesAsync() {
    var [countries,setCountries] = React.useState([]);
    var [isError,setError] = React.useState(false)
    async function getCountries(){
        try{
            var res = await fetch("https://restscountries.com/v3/alls")
            var data = await res.json();
            console.log(data)
            console.log(res)
            if(res.ok){
                setCountries(data)
                setError(false)
            }
            else{
                setError(true)
                console.log("error caught in try block")
            }
        }
        catch(err){
            console.log(err.message)
            console.log("error caught in try block")
            setError(true)
        }
    }
    useEffect(()=>{
        getCountries();
    },[]);
  return (
    <div>
        <h1>CountriesFetch</h1>
        <div className="p-5">
            <h1>Edupoly Examples(Error Handling in Fetch Calls)</h1>
            {
                isError && <h2>Something went wrong to fetch countries</h2>
            }
            <ul>
                {
                    countries?.map((country,i)=>{
                        return <li key={country.cca2}>{country.name.common}</li>
                    })
                }
            </ul>
        </div>
    </div>
  )
}

export default CountriesAsync