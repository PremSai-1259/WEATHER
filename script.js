async function infor()
{
    var city=document.getElementById("place").value;
    var key= "3c004e1464a84e97bb5181340251603";
    if(city==""){
        alert("PLEASE ENTER CITY");
    }
    else{
        var url = await fetch('http://api.weatherapi.com/v1/current.json?key=3c004e1464a84e97bb5181340251603&q=${city}&aqi=yes');
        var result = await url.json();
        document.getElementById("time").innerHTML=result.location.localtime;
        document.getElementById("temp").innerHTML=result.current.temp_c +"C";
        document.getElementById("windvel").innerHTML=result.current.wind_mph +"mph";
    }
}
