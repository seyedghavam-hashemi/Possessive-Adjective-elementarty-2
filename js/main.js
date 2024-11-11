$(document).ready(function(){
  $('body').ripples({
      resolution: 256,
      dropRadius: 20,

      perturbance: 0.01
  })
})

  function funcCheckBox() {
    var correct1 = document.getElementById("correct1");
    var correct2 = document.getElementById("correct2");
    var correct3 = document.getElementById("correct3");
    var correct4 = document.getElementById("correct4");
    /*var correct5 = document.getElementById("correct5");
    var correct6 = document.getElementById("correct6");
    var correct7 = document.getElementById("correct7");
    var correct8 = document.getElementById("correct8");
    var correct9 = document.getElementById("correct9");*/






    var gateCloset = document.getElementById("gateCloset");
    var gateClosep = document.getElementById("gateClosep");

    var gateOpent = document.getElementById("gateOpent");
    var gateOpenp = document.getElementById("gateOpenp");

    var nc1 = document.getElementById("nc1");
    var nc2 = document.getElementById("nc2");
    var nc3 = document.getElementById("nc3");
    var nc4 = document.getElementById("nc4");
    var nc5 = document.getElementById("nc5");
    var nc6 = document.getElementById("nc6");
    var nc7 = document.getElementById("nc7");
    var nc8 = document.getElementById("nc8");
    /*var nc9 = document.getElementById("nc9");
    var nc10 = document.getElementById("nc10");
    var nc11 = document.getElementById("nc11");
    var nc12 = document.getElementById("nc12");
    var nc13 = document.getElementById("nc13");
    var nc14 = document.getElementById("nc14");
    var nc15 = document.getElementById("nc15");
    var nc16 = document.getElementById("nc16");
    var nc17 = document.getElementById("nc17");
    var nc18 = document.getElementById("nc18");*/







    if (   correct1.checked == true 
        && correct2.checked == true
        && correct3.checked == true
        && correct4.checked == true
       /* && correct5.checked == true
        && correct6.checked == true
        && correct7.checked == true
        && correct8.checked == true       
        && correct9.checked == true   */                
        
        && nc1.checked == false 
        && nc2.checked == false         
        && nc3.checked == false         
        && nc4.checked == false 
        && nc5.checked == false 
        && nc6.checked == false 
        && nc7.checked == false         
        && nc8.checked == false         
        /*&& nc9.checked == false 
        && nc10.checked == false
        && nc11.checked == false 
        && nc12.checked == false         
        && nc13.checked == false         
        && nc14.checked == false 
        && nc15.checked == false
        && nc16.checked == false
        && nc17.checked == false
        && nc18.checked == false*/


        ){
            gateOpent.style.display = "block";
            gateOpenp.style.display = "block";

            gateCloset.style.display = "none";

            gateClosep.style.display = "none";
    } else {
        gateOpent.style.display = "none";
        gateOpenp.style.display = "none";

        gateCloset.style.display = "block";
        gateClosep.style.display = "block";

    }
  }
 

  
  
  $("body").ripples({
    resolution: 512,
    dropRadius: 20,
    perturbance: 0.04,
    });

