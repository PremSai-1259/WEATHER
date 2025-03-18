async function infor()
{
    var city=document.getElementById("place").value;
    var key= "07ebb815f611499f808202728242304";
    if(city==""){
        alert("PLEASE ENTER CITY");
    }
    else{
        var url = await fetch('https://api.weatherapi.com/v1/current.json?key=${key}&q=${city}');
        var result = await url.json();
        document.getElementById("time").innerHTML=result.current.time;
        document.getElementById("temp").innerHTML=result.current.temp_c;
        document.getElementById("windvel").innerHTML=result.current.wind_mph;
    }
}
