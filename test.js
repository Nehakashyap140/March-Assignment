const show_popup=function(){
    document.getElementById("popup").style.display="initial";
    document.getElementById("header").style.display="none";
}
setTimeout(show_popup,2000);
document.getElementById("close_popup").addEventListener('click',function(){
    document.getElementById("popup").style.display="none"; 
    document.getElementById("header").style.display="block";
})
const json_value= function(res){
      return res.json();
}
const handle_data=function(neha){
 
  console.log(neha);
  console.log(neha.main.temp);
  console.log(neha.wind.speed);
  console.log(sagar.weather[0].description);
  let celcius=((neha.main.temp)-32)/9;
  let max_cel=((neha.main.temp_max)-32)/9;
  let min_cel=((neha.main.temp_min)-32)/9;
  console.log(neha.weather[0].id);
  let celcius=Math.round(((neha.main.temp)-273));
  let max_cel=Math.round(((neha.main.temp_max)-273));
  let min_cel=Math.round(((neha.main.temp_min)-273));
//   <div class="weather-card">
//   <p>City</p>
//   <p>Tempareture</p>
@@ -35,20 +36,45 @@ const third_p_el=document.createElement("p");
const fourth_p_el=document.createElement("p");
const fift_p_el=document.createElement("p");
const six_p_el=document.createElement("p");
const image=document.createElement("img");
first_p_el.innerText=`City-${sagar.name}`;
first_p_el.style.textAlign="center";
second_p_el.innerText=`Tempareture :- ${celcius}\u00B0 C`;
third_p_el.innerText=`Wind Speed :- ${sagar.wind.speed}`;
fourth_p_el.innerText=`Maxium Tempareture :- ${max_cel}\u00B0 C`;
fift_p_el.innerHTML=`Minimum Tempareture :- ${min_cel}\u00B0 C`;
six_p_el.innerHTML=`Sky Condition :- ${sagar.weather[0].description}`;
// image.style.height="200px";
if(neha.weather[0].id < 250 && sagar.weather[0].id >= 200){
  image.src="https://openweathermap.org/img/wn/11d@2x.png";
}
else if(neha.weather[0].id < 322 && sagar.weather[0].id >= 300){
  image.src="https://openweathermap.org/img/wn/09d@2x.png";
}
else if(neha.weather[0].id < 532 && sagar.weather[0].id >= 500){
  image.src="https://openweathermap.org/img/wn/10d@2x.png";
}
else if(neha.weather[0].id < 623 && sagar.weather[0].id >= 600){
  image.src="https://openweathermap.org/img/wn/13d@2x.png";
}
else if(neha.weather[0].id < 782 && sagar.weather[0].id <= 701){
  image.src="https://openweathermap.org/img/wn/50d@2x.png";
}
else if(neha.weather[0].id == 800){
  image.src="https://openweathermap.org/img/wn/01d@2x.png";
}
else if(neha.weather[0].id < 805 && sagar.weather[0].id >= 701){
  image.src="https://openweathermap.org/img/wn/02d@2x.png";
}

div_el.classList.add("weather-card");
div_el.appendChild(first_p_el);
div_el.appendChild(second_p_el);
div_el.appendChild(third_p_el);
div_el.appendChild(fourth_p_el);
div_el.appendChild(fift_p_el);
div_el.appendChild(six_p_el);
div_el.appendChild(image);

parent_container.appendChild(div_el);
document.getElementById("default").classList.add("hide");  // problem line
}
const fetch_Api= function(){
    const search_value=search_feild.value;
    // document.getElementById("default").classList.add("hide");
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
}
document.getElementById("search_btn").addEventListener('click',fetch_Api);
const enter_fn=function(e){
  if(e.key =='Enter'){
    // document.getElementById("default").classList.add("hide");
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(handle_data);
  }
}
document.getElementById("search_feild").addEventListener('keyup',enter_fn);
@@ -86,9 +112,9 @@

   document.getElementById("popup").style.display="none";  
   document.getElementById("header").style.display="block";  
  let celcius=((neha.main.temp)-32)/9;
  let max_cel=((neha.main.temp_max)-32)/9;
  let min_cel=((neha.main.temp_min)-32)/9;
   let celcius=Math.round(((neha.main.temp)-273));
   let max_cel=Math.round(((neha.main.temp_max)-273));
   let min_cel=Math.round(((neha.main.temp_min)-273));
//   <div class="weather-card">
//   <p>City</p>
//   <p>Tempareture</p>
@@ -105,21 +131,45 @@ const third_p_el=document.createElement("p");
const fourth_p_el=document.createElement("p");
const fift_p_el=document.createElement("p");
const six_p_el=document.createElement("p");
const image=document.createElement("img");
first_p_el.innerText=`City-${Neha.name}`;
first_p_el.style.textAlign="center";
second_p_el.innerText=`Tempareture :- ${celcius}\u00B0 C`;
third_p_el.innerText=`Wind Speed :- ${neha.wind.speed}`;
fourth_p_el.innerText=`Maxium Tempareture :- ${max_cel}\u00B0 C`;
fift_p_el.innerHTML=`Minimum Tempareture :- ${min_cel}\u00B0 C`;
six_p_el.innerHTML=`Sky Condition :- ${neha.weather[0].description}`;
div_el.classList.add("weather-card");

// div_el.id='default_weather';
if(neha.weather[0].id < 250 && neha.weather[0].id >= 200){
  image.src="https://openweathermap.org/img/wn/11d@2x.png";
}
else if(neha.weather[0].id < 322 && neha.weather[0].id >= 300){
  image.src="https://openweathermap.org/img/wn/09d@2x.png";
}
else if(neha.weather[0].id < 532 && sagar.weather[0].id >= 500){
  image.src="https://openweathermap.org/img/wn/10d@2x.png";
}
else if(neha.weather[0].id < 623 && sagar.weather[0].id >= 600){
  image.src="https://openweathermap.org/img/wn/13d@2x.png";
}
else if(neha.weather[0].id < 782 && sagar.weather[0].id <= 701){
  image.src="https://openweathermap.org/img/wn/50d@2x.png";
}
else if(neha.weather[0].id == 800){
  image.src="https://openweathermap.org/img/wn/01d@2x.png";
}
else if(neha.weather[0].id < 805 && sagar.weather[0].id >= 701){
  image.src="https://openweathermap.org/img/wn/02d@2x.png";
}
div_el.classList.add("weather-card");
div_el.appendChild(first_p_el);
div_el.appendChild(second_p_el);
div_el.appendChild(third_p_el);
div_el.appendChild(fourth_p_el);
div_el.appendChild(fift_p_el);
div_el.appendChild(six_p_el);
div_el.appendChild(image);
parent_container.appendChild(div_el);


}
const fetch_Location=function(){
    const loaction_value=document.getElementById("location_feild").value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${loaction_value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
}
const enter_location=function(e){
 if(e.key =='Enter'){
     fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=ec59daf47e40d5a2070885c1a23451ce`).then(json_value).then(location_lat);
 }
}
 document.getElementById("submit_btn").addEventListen('click', fetch_Location);
 document.getElementById("location_feild").addEventListener('keyup',enter_location);
 