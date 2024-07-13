const form=document.getElementById("form");
const latitudeinput=document.getElementById("latitude");
const longitudeinput=document.getElementById("longitude");
const resultcontainer=document.getElementById("result");
const aqires=document.getElementById("aqi");
const cores=document.getElementById("co");
const no2res=document.getElementById("no2");
const o3res=document.getElementById("o3");
const pm2res=document.getElementById("pm2");
const pm10res=document.getElementById("pm10");
const so2res=document.getElementById("so2");

form.addEventListener("submit",(event)=>{
    event.preventDefault();
    const latitude=latitudeinput.value;
    const longitude=longitudeinput.value;
    const url = `https://air-quality.p.rapidapi.com/history/airquality?lon=${longitude}&lat=${latitude}`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'a43259aba7msh6537ede110b5a94p14cc81jsne7378cf28f2d',
            'x-rapidapi-host': 'air-quality.p.rapidapi.com'
	}
};

    fetch(url,options)
    .then(response=>response.json())
    .then(result=>{
        let readings=result.data[0];
        console.log(readings);
        aqires.textContent=readings.aqi;
        cores.textContent=readings.co;
        no2res.textContent=readings.no2;
        pm2res.textContent=readings.pm2;
        o3res.textContent=readings.o3;
        pm10res.textContent=readings.pm10;
        so2res.textContent=readings.so2;
    })
});