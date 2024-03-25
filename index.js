
const picChange = document.getElementById('pic1');
 picChange.addEventListener('mouseover',(e)=>{
picChange.src = "images/DSC_3363.jpg";
 })

 picChange.addEventListener('mouseout',(e)=>{
picChange.src = "images/DSC_33633.jpg"
 })


 const fullPicChange = document.getElementById('fullpic1');

 fullPicChange.addEventListener('mouseover',(e)=>{
fullPicChange.src = "./images/Sankale.jpg";
 })

 fullPicChange.addEventListener('mouseout',(e)=>{
  fullPicChange.src = "./images/Sankale 7.jpg";
   })