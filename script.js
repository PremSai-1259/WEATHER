async function infor()
{
    var city=document.getElementById("place").value;
    var key= "3c004e1464a84e97bb5181340251603";
    if(city==""){
        alert("PLEASE ENTER CITY");
    }
    else{
        var url = await fetch('https://api.weatherapi.com/v1/current.json?q=${city}&key=3c004e1464a84e97bb5181340251603');
        var result = await url.json();
        document.getElementById("time").innerHTML=result.location.localtime;
        document.getElementById("temp").innerHTML=result.current.temp_c +"C";
        document.getElementById("windvel").innerHTML=result.current.wind_mph +"mph";
    }
}

function ct(){
    document.getElementById("temp").innerHTML=result.current.temp_f +"F";
}
function cw(){
    document.getElementById("windvel").innerHTML=result.current.wind_kph +"kph";
}