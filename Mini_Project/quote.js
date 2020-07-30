let btn = document.getElementById('btn1');

btn.onclick = ()=>{
    fetch("http://quotes.stormconsultancy.co.uk/random.json").then(response=>response.json()).then(data=>{
        document.getElementById('quote').innerHTML=`${data.quote}<br>By - <br> ${data.author}`});
}



