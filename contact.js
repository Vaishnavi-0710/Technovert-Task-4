function clearForm(){
    var element=document.getElementsByTagName("input");
    for(var i= 0;i<element.length;i++){
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