async function infor()
{
    var city=document.getElementById("place").value;
    var key= "3c004e1464a84e97bb5181340251603";
    if(city==""){
        alert("PLEASE ENTER CITY");
    }
    else{
        var response= await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=3c004e1464a84e97bb5181340251603`);
        var result = await response.json();
        document.getElementById("time").innerHTML=result.location.localtime;
        document.getElementById("temp").innerHTML=`${result.current.temp_c } C`;
        document.getElementById("windvel").innerHTML=`${result.current.wind_mph} mph`;
        document.getElementById("tex").innerHTML=result.current.condition.text;
    }
}

async function ct(){
    var city=document.getElementById("place").value;
    if(city.length>0){
        var response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=3c004e1464a84e97bb5181340251603`);
        var result = await response.json();
        document.getElementById("temp").innerHTML=`${result.current.temp_f}F`;
    }
    else{
        alert("ENTER THE CITY NAME")
    }
}
async function cw(){
    var city=document.getElementById("place").value;
    if(city.length>0){
        var response = await fetch(`https://api.weatherapi.com/v1/current.json?q=${city}&key=3c004e1464a84e97bb5181340251603`);
        var result = await response.json();
        document.getElementById("windvel").innerHTML=`${result.current.wind_kph} kph`;
    }
    else{
        alert("ENTER THE CITY NAME")
    }
}
