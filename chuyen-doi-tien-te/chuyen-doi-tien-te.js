function convert(){
   let money = document.getElementById("money").value;
   let frommoney = document.getElementById("sl1").value;
   let tomoney = document.getElementById("sl2").value;
   let text;
   if(frommoney == "VND"){
       if (tomoney=="USD"){
           text= (money/23000)+"USD";
       }
       else{text= money+"VND"}
     }
  
   else{
      if (tomoney=="VND"){
          text= (money*23000)+"VND";
      }
      else{
          text= money+"USD";
      }  
  }
  document.getElementById("demo").innerHTML= text;
}
  