const placeholder=document.getElementById("ph");
const btnn= document.getElementById("btn");

const cityName= document.getElementById("city-name");
const cityTime= document.getElementById("city-time");
const cityTemp= document.getElementById("city-temp");
async function getData(cityName){
    const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=1516772f961c489eb6254039250502&q=${cityName}&aqi=yes`);
    return await promise.json();
}
btnn.addEventListener("click", async () => {
    const value=placeholder.value;
    const result=await getData(value)
    cityName.innerText=`${result.location.name}, ${result.location.region}, ${result.location.country}`;
    cityTime.innerText=result.location.localtime;
    cityTemp.innerText=result.current.temp_c;
});