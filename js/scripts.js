let togg0 = document.getElementById("togg0");
let togg1 = document.getElementById("togg1");
let togg2 = document.getElementById("togg2");
let togg3 = document.getElementById("togg3");
let togg4 = document.getElementById("togg4");
let a1 = document.getElementById("a1");
let a2 = document.getElementById("a2");
let a3 = document.getElementById("a3");
let a4 = document.getElementById("a4");
let a5 = document.getElementById("a5");
$(document).ready(function(){
  $(togg0).click(function(){
    if(getComputedStyle(a1).display != "none"){
      $(a1).animate({
        height: 'toggle'
      });
      a2.style.display = "none";
      a3.style.display = "none";
      a4.style.display = "none";
      a5.style.display = "none";
    } else {
      $(a1).animate({
        height: 'toggle'
      });
      a2.style.display = "none";
      a3.style.display = "none";
      a4.style.display = "none";
      a5.style.display = "none";
      togg0.style.display ="none";
      togg1.style.display ="block";
    /*  togg2.style.display ="block";
      togg3.style.display ="block";
      togg4.style.display ="block";*/
    }
  });
});
$(document).ready(function(){
  $(togg1).click(function(){
    if(getComputedStyle(a2).display != "none"){
      a1.style.display = "none";
      $(a2).animate({
        height: 'toggle'
      });
      
      a3.style.display = "none";
      a4.style.display = "none";
      a5.style.display = "none";
    } else {
      a1.style.display = "none";
      $(a2).animate({
        height: 'toggle'
      });
      a3.style.display = "none";
      a4.style.display = "none";
      a5.style.display = "none";
      togg0.style.display ="block";
      togg1.style.display ="none";
     /* togg2.style.display ="block";
      togg3.style.display ="block";
      togg4.style.display ="block";*/
    }
  });
});
$(document).ready(function(){
  $(togg2).click(function(){
    if(getComputedStyle(a3).display != "none"){
      a1.style.display = "none";
      a2.style.display = "none";
      $(a3).animate({
        height: 'toggle'
      });
      a4.style.display = "none";
      a5.style.display = "none";
    } else {
      a1.style.display = "none";
      a2.style.display = "none";
      $(a3).animate({
        height: 'toggle'
      });
      a4.style.display = "none";
      a5.style.display = "none";
      togg0.style.display ="block";
      togg1.style.display ="block";
    /*  togg2.style.display ="none";
      togg3.style.display ="block";
      togg4.style.display ="block";*/
    }
  });
});
$(document).ready(function(){
  $(togg3).click(function(){
    if(getComputedStyle(a4).display != "none"){
      a1.style.display = "none";
      a2.style.display = "none";
      a3.style.display = "none";
      $(a4).animate({
        height: 'toggle'
      });
      a5.style.display = "none";
    } else {
      a1.style.display = "none";
      a2.style.display = "none";
      a3.style.display = "none";
      //a4.style.display = "block";
      $(a4).animate({
        height: 'toggle'
      });
      a5.style.display = "none";
      togg0.style.display ="block";
      togg1.style.display ="block";
    /*  togg2.style.display ="block";
      togg3.style.display ="none";
      togg4.style.display ="block";*/
    }
  });
});
$(document).ready(function(){
  $(togg4).click(function(){
    if(getComputedStyle(a5).display != "none"){
      a1.style.display = "none";
      a2.style.display = "none";
      a3.style.display = "none";
      a4.style.display = "none";
      $(a5).animate({
        height: 'toggle'
      });
    } else {
      a1.style.display = "none";
      a2.style.display = "none";
      a3.style.display = "none";
      a4.style.display = "none";
      $(a5).animate({
        height: 'toggle'
      });
      togg0.style.display ="block";
      togg1.style.display ="block";
    /*  togg2.style.display ="block";
      togg3.style.display ="block";
      togg4.style.display ="none";*/
    }
  });
});