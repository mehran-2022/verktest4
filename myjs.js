
 
  




function myfs(){
  var vkf1= document.getElementById("vkf1");
  var vkf2= document.getElementById("vkf2");
  var vkf3= document.getElementById("vkf3");

  var inhöhe = document.getElementById("höhe").value;
  var inbreite = document.getElementById("breite").value;
  var inlänge = document.getElementById("länger").value;
  var inStück = document.getElementById("stück").value;
  var ingewicht= document.getElementById("gewicht").value;
  var inartikeName= document.getElementById("Name").value;
  var h1= document.getElementById("h1");
//regal 1 null ebene euro plätze 01-04-00 bis 01-12-00
  var regal1fach4bi6={
    breite:200,
    höhe:100,
    länger:130
  };
  var regal1fach7bi9={
    breite:200,
    höhe:100,
    länger:130
  };
  var regal1fach10bi12={
    breite:200,
    höhe:100,
    länger:130
  }; 
 
  
   //regal 1 fach 4 bis fach6 breite vergleichen

// console.log(vkf4bis6)
  //regal 1 fach 4 bis fach6
  if(vkf1.value==01&&vkf2.value==04&&vkf3.value==00){
    if(inbreite<=regal1fach4bi6.breite&&inhöhe*inStück<=regal1fach4bi6.höhe){
      h1.innerHTML="ok"
      console.log(inhöhe)
    }if(inbreite>regal1fach4bi6.breite&&inhöhe*inStück>regal1fach4bi6.höhe){
      h1.innerHTML="passt nicht"
      console.log(inStück)
    }
  }
// if(vkf1.value==01&&vkf2.value==04&&vkf3.value==00){
//   var artike={
//     höhe:inhöhe.value,
//     breite:inbreite.value,
//     länge:inlänge.value,
//     Stück:inStück.value,
//     gewicht:ingewicht.value,
//     artikeName:inartikeName.value
//   };
//    localStorage.setItem("vkf01-04-00",JSON.stringify(artike));
 
  

// }
// if(vkf1.value==01&&vkf2.value==05&&vkf3.value==00){
//   var artike={
//     höhe:höhe.value,
//     breite:breite.value,
//     länge:länge.value,
//     Stück:Stück.value,
//     gewicht:gewicht.value,
//     artikeName:artikeName.value
//   };
//   localStorage.setItem("vkf01-05-00",JSON.stringify(artike));
  

// }if(vkf1.value==01&&vkf2.value==06&&vkf3.value==00){
//   var artike={
//     höhe:höhe.value,
//     breite:breite.value,
//     länge:länge.value,
//     Stück:Stück.value,
//     gewicht:gewicht.value,
//     artikeName:artikeName.value
//   };
//   localStorage.setItem("vkf01-06-00",JSON.stringify(artike));
//  if(artike.breite.value<=regal1fach4bi6.breite){
//   h1.innerHTML="das passt"
//  }


// }
// var vkf0400=JSON.parse(localStorage.getItem("vkf01-04-00"));
// var vkf0500=JSON.parse(localStorage.getItem("vkf01-05-00"));
// var vkf0600=JSON.parse(localStorage.getItem("vkf01-06-00"));
// var vk4b=parseInt(vkf0400.breite);
// var vk5b=parseInt(vkf0500.breite);
// var vk6b=parseInt(vkf0600.breite);
// var vkf4bis6=vk4b+vk5b+vk6b;
// console.log(vkf4bis6)
// if(vkf4bis6<regal1fach4bi6.breite){
//   h1.innerHTML="ok"
//  }if(vkf4bis6>regal1fach4bi6.breite){
//    h1.innerHTML="passt nicht"
//  }

  //regal 1 fach 4 bis fach6 höhe vergleichen

// var vkf4h=parseInt(vkf0400.höhe);
// var vkf5h=parseInt(vkf0500.höhe);
// var vkf6h=parseInt(vkf0600.höhe);
// var vkf4s=parseInt(vkf0400.Stück);
// var vkf5s=parseInt(vkf0500.Stück);
// var vkf6s=parseInt(vkf0600.Stück);
// // var vkf4hs=vkf4h*vkf4s;
// var vkf5hs=vkf5h*vkf5s;
// var vkf6hs=vkf6h*vkf6s;
// if(vkf1.value==01&&vkf2.value==04&&vkf3.value==00)
// if(vkf4hs<=regal1fach4bi6.höhe){
//   h1.innerHTML=" die höhe passt";}
// if(vkf4hs>regal1fach4bi6.höhe){
//   h1.innerHTML=" die höhe passt nicht";
// }

// if(vkf1.value==01&&vkf2.value==05&&vkf3.value==00){
//   if(vkf5hs<=regal1fach4bi6.höhe){
//     h1.innerHTML=" die höhe passt";

//   }if(vkf5hs>regal1fach4bi6.höhe){
//     h1.innerHTML=" die höhe passt nicht";
//   }
// }if(vkf1.value==01&&vkf2.value==06&&vkf3.value==00){
//   if(vkf6hs<=regal1fach4bi6.höhe){
//     h1.innerHTML=" die höhe passt"

//   }if(vkf6hs>regal1fach4bi6.höhe){
//     h1.innerHTML=" die höhe passt nicht"
//   }
// }






}


 //localStorage.clear()
  