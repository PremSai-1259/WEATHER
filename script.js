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
    var access_key="8mKM_ul1hJmIAZPacZJjXZdeRpZlp1tEtdrG60dQINA";
    var ans = await fetch(`https://api.unsplash.com/photos/random?query=${city}&orientation=landscape`, {
            headers: {
                Authorization: `Client-ID ${access_key}`
            }
        });
    var data = await ans.json();
    console.log(data.urls.full);
    var back = document.querySelector("body");
    back.style.backgroundImage=`url(${data.urls.full})`;
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
