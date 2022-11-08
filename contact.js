function clearForm(){
  let element=document.getElementsByTagName("input");
  for(let i= 0;i<element.length;i++){
    element[i].value="";
  }
}
function promo(){
  let val=document.getElementById("state").value;
  if(val){
    document.getElementById("promocode").value= val+" - PROMO";
  }
  else{
    document.getElementById("promocode").value="";
  }
}
function genderAlert(msg){
  alert("Hello "+ msg)
}