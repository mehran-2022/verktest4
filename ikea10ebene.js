
var resultat=document.querySelector(".resultat");
resultat.addEventListener("click",bt2)
var loood=document.getElementById("relod");
loood.addEventListener("click",relod)
function relod(){
    location.reload();

}


function bt2(){
resultat.classList.remove("show");
console.log("dokem remove div resultat kar mikone ikea 10 ebene" )
};


var fach04bis12eben10={
    breite:300,
    länge:140,
    höhe:90,
    DoppelP:70,
    gewicht:15,
}

var fach13bis21eben10={
    breite:300,
    länge:250,
    höhe:90,
    DoppelP:150,
    gewicht:15,
}
var fach25bis26eben10={
    breite:250,
    länge:250,
    höhe:90,
    DoppelP:125,
    gewicht:15,
}
var b0= document.getElementById("b0");
var a0= document.getElementById("a0");

function ikea10(){
    var artikelname=document.getElementById("Name");
    var stapel=document.getElementById("stapel");
    var ArtikelNummer=document.getElementById("ArtikelNummer");
var inhöhe=document.getElementById("höhe");
var inbreite=document.getElementById("breite");
var inlänge=document.getElementById("länger");
var instück=document.getElementById("stück");
var ingewicht=document.getElementById("gewicht")
var inregal=document.getElementById("vkf1");
var infach=document.getElementById("vkf2");
var inebene=document.getElementById("vkf3");
var a1= document.getElementById("a1");
var a2= document.getElementById("a2");
var b1= document.getElementById("b1");
var b2= document.getElementById("b2");
var c1= document.getElementById("c1");
var c2= document.getElementById("c2");
var a0= document.getElementById("a0");
var b0= document.getElementById("b0");
var d1= document.getElementById("d1");
var d2= document.getElementById("d2");
var gew= document.getElementById("gewicht2");
var resultat=document.querySelector(".resultat");
resultat.classList.add("show");

var fach04bis12eben10={
    breite:300,
    länge:140,
    höhe:90,
    DoppelP:70,
    gewicht:15,
}
var fach13bis21eben10={
    breite:300,
    länge:250,
    höhe:90,
    DoppelP:150,
    gewicht:15,
};
var fach25bis26eben10={
    breite:250,
    länge:250,
    höhe:90,
    DoppelP:125,
    gewicht:15,
}
if(inregal.value==01&&infach.value==04&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-04-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-04-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test1()

};
if(inregal.value==01&&infach.value==05&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-05-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-05-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test1()

};
if(inregal.value==01&&infach.value==06&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-06-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-06-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test1()

};
if(inregal.value==01&&infach.value==07&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-07-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-07-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test2()

};
if(inregal.value==01&&infach.value==08&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-08-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-08-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test2()

};
if(inregal.value==01&&infach.value==09&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-09-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-09-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test2()

};
if(inregal.value==01&&infach.value==10&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-10-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-10-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test3()

}
;if(inregal.value==01&&infach.value==11&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-11-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-11-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test3()

};
if(inregal.value==01&&infach.value==12&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-12-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-12-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach04bis12eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach04bis12eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach04bis12eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach04bis12eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach04bis12eben10.länge/2)
console.log("c1")
}if(vkf4l>fach04bis12eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach04bis12eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach04bis12eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach04bis12eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test3()

};
if(inregal.value==01&&infach.value==13&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-13-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-13-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test4()

};
if(inregal.value==01&&infach.value==14&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-14-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-14-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test4()

};
if(inregal.value==01&&infach.value==15&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-15-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-15-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test4()

};
if(inregal.value==01&&infach.value==16&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-16-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-16-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test5()

};
if(inregal.value==01&&infach.value==17&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-17-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-17-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test5()

};
if(inregal.value==01&&infach.value==18&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-18-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-18-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test5()

};
if(inregal.value==01&&infach.value==19&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-19-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-19-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test6()

};
if(inregal.value==01&&infach.value==20&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-20-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-20-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach13bis21eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach13bis21eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach13bis21eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach13bis21eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach13bis21eben10.länge/2)
console.log("c1")
}if(vkf4l>fach13bis21eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach13bis21eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach13bis21eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach13bis21eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test6()

};
if(inregal.value==01&&infach.value==25&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-25-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-25-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test7()

};
if(inregal.value==01&&infach.value==26&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-26-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-26-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test7()

};
if(inregal.value==01&&infach.value==27&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-27-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-27-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test8()

};
if(inregal.value==01&&infach.value==28&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-28-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-28-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test8()

};
if(inregal.value==01&&infach.value==29&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-29-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-29-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test8()

};
if(inregal.value==01&&infach.value==30&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-30-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-30-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test9()

};
if(inregal.value==01&&infach.value==31&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-31-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-31-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test9()

};
if(inregal.value==01&&infach.value==32&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-32-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-32-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test9()

};
if(inregal.value==01&&infach.value==33&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-33-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-33-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test10()

};
if(inregal.value==01&&infach.value==34&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-34-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-34-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test10()

};
if(inregal.value==01&&infach.value==35&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-35-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-35-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test10()

};
if(inregal.value==01&&infach.value==36&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-36-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-36-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test11()

};
if(inregal.value==01&&infach.value==37&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-37-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-37-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test11()

};
if(inregal.value==01&&infach.value==38&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-38-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-38-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test11()

};
if(inregal.value==01&&infach.value==39&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-39-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-39-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test12()

};
if(inregal.value==01&&infach.value==40&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-40-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-40-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test12()

};
if(inregal.value==01&&infach.value==41&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-41-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-41-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test12()

};
if(inregal.value==01&&infach.value==42&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-42-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-42-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test13()

};
if(inregal.value==01&&infach.value==43&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-43-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-43-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test13()

};
if(inregal.value==01&&infach.value==44&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-44-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-44-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test13()

};
if(inregal.value==01&&infach.value==45&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-45-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-45-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test14()

};
if(inregal.value==01&&infach.value==46&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-46-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-46-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test14()

};
if(inregal.value==01&&infach.value==47&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-47-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-47-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test14()

};
if(inregal.value==01&&infach.value==48&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-48-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-48-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test15()

};
if(inregal.value==01&&infach.value==49&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-49-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-49-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test15()

};
if(inregal.value==01&&infach.value==54&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-54-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-54-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test16()

};
if(inregal.value==01&&infach.value==55&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-55-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-55-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test16()

};
if(inregal.value==01&&infach.value==56&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-56-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-56-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test17()

};
if(inregal.value==01&&infach.value==57&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-57-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-57-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test17()

};
if(inregal.value==01&&infach.value==58&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-58-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-58-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test18()

};
if(inregal.value==01&&infach.value==59&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-59-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-59-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test18()

};
if(inregal.value==01&&infach.value==60&&inebene.value==10){
    var artike={
        name:artikelname.value,
        breite:inbreite.value,
        länge:inlänge.value,
        höhe:inhöhe.value,
        gewicht:ingewicht.value,
        stück:instück.value,
        stapel:stapel.value,
        ArtikelNummer:ArtikelNummer.value
    }
    localStorage.setItem("01-60-10",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-60-10"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
var vkf4l=parseInt(vkf04.länge);
var vkf4g=parseInt(vkf04.gewicht);
console.log(vkf4h)
console.log(vkf4s)
console.log(vkf4b1);
if(vkf4b1<=fach25bis26eben10.breite){
a1.textContent="dast artikel breite passt ";
a1.style.color="green";
console.log("a1")
}if (vkf4b1>fach25bis26eben10.breite){
a1.style.color="red";
a1.textContent="dast artikel breite passt nicht ";
console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26eben10.höhe){
b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
console.log("b1")
}if(vkf4h*vkf4s>fach25bis26eben10.höhe){
b1.style.color="red";
b1.textContent="dast artikel  höhe passt nicht ";

console.log("b2")
}if(vkf4l<=fach25bis26eben10.länge){


c1.textContent="dast artikel länge passt  ";
c1.style.color="green";
console.log(fach25bis26eben10.länge/2)
console.log("c1")
}if(vkf4l>fach25bis26eben10.länge){

c1.textContent="dast artikel länge passt nicht ";
c1.style.color="red";
console.log("c2")
} if(inlänge.value<=fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="green";
}if(inlänge.value>fach25bis26eben10.DoppelP){
console.log("yessss")
d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
console.log(vkf4l)
d1.style.color="red";
}if(vkf4g<=fach25bis26eben10.gewicht){
    gew.textContent="Das Gewicht der Ware ist angemessen";
    gew.style.color="green"
    console.log("gewicht")
}if(vkf4g>fach25bis26eben10.gewicht){
    gew.textContent=" Das Gewicht des Artikels ist zu hoch";
    gew.style.color="red"
}

test18()

};





}
//test function für 01-04-10 bis 01-06-10
function test1(){
    
    var br11=JSON.parse(localStorage.getItem("01-04-10"));
    var br13=JSON.parse(localStorage.getItem("01-05-10"));
    var br12=JSON.parse(localStorage.getItem("01-06-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach04bis12eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-04-10 bis 01-06-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach04bis12eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-04-10 bis 01-06-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-07-10 bis 01-08-10
function test2(){
    
    var br11=JSON.parse(localStorage.getItem("01-07-10"));
    var br13=JSON.parse(localStorage.getItem("01-08-10"));
    var br12=JSON.parse(localStorage.getItem("01-09-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach04bis12eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-07-10 bis 01-09-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach04bis12eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-07-10 bis 01-09-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-09-10 bis 01-12-10
function test3(){
    
    var br11=JSON.parse(localStorage.getItem("01-09-10"));
    var br13=JSON.parse(localStorage.getItem("01-11-10"));
    var br12=JSON.parse(localStorage.getItem("01-12-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach04bis12eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-07-10 bis 01-09-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach04bis12eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-07-10 bis 01-09-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-13-10 bis 01-15-10
function test4(){
    
    var br11=JSON.parse(localStorage.getItem("01-13-10"));
    var br13=JSON.parse(localStorage.getItem("01-14-10"));
    var br12=JSON.parse(localStorage.getItem("01-15-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-13-10 bis 01-15-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-13-10 bis 01-15-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-16-10 bis 01-18-10
function test5(){
    var br11=JSON.parse(localStorage.getItem("01-16-10"));
    var br13=JSON.parse(localStorage.getItem("01-17-10"));
    var br12=JSON.parse(localStorage.getItem("01-18-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-16-10 bis 01-18-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-16-10 bis 01-18-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-19-10 bis 01-21-10
function test6(){
    var br11=JSON.parse(localStorage.getItem("01-19-10"));
    var br13=JSON.parse(localStorage.getItem("01-20-10"));
    var br12=JSON.parse(localStorage.getItem("01-21-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-19-10 bis 01-21-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-19-10 bis 01-21-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-25-10 bis 01-26-10
function test7(){
    var br11=JSON.parse(localStorage.getItem("01-25-10"));
    var br13=JSON.parse(localStorage.getItem("01-26-10"));
    var breite11=parseInt(br11.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite13<=fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-25-10 bis 01-26-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite13)
    } else if (breite11+breite13>fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-25-10 bis 01-26-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-26-10 bis 01-29-10
function test8(){
    var br11=JSON.parse(localStorage.getItem("01-27-10"));
    var br13=JSON.parse(localStorage.getItem("01-28-10"));
    var br12=JSON.parse(localStorage.getItem("01-29-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-27-10 bis 01-29-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-27-10 bis 01-29-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-30-10 bis 01-32-10
function test9(){
    var br11=JSON.parse(localStorage.getItem("01-30-10"));
    var br13=JSON.parse(localStorage.getItem("01-31-10"));
    var br12=JSON.parse(localStorage.getItem("01-32-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-30-10 bis 01-32-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-30-10 bis 01-32-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-33-10 bis 01-35-10
function test10(){
    var br11=JSON.parse(localStorage.getItem("01-33-10"));
    var br13=JSON.parse(localStorage.getItem("01-34-10"));
    var br12=JSON.parse(localStorage.getItem("01-35-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-33-10 bis 01-35-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-33-10 bis 01-35-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-36-10 bis 01-38-10
function test11(){
    var br11=JSON.parse(localStorage.getItem("01-36-10"));
    var br13=JSON.parse(localStorage.getItem("01-37-10"));
    var br12=JSON.parse(localStorage.getItem("01-38-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-36-10 bis 01-38-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-36-10 bis 01-38-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-39-10 bis 01-41-10
function test12(){
    var br11=JSON.parse(localStorage.getItem("01-39-10"));
    var br13=JSON.parse(localStorage.getItem("01-40-10"));
    var br12=JSON.parse(localStorage.getItem("01-41-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-39-10 bis 01-41-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-39-10 bis 01-41-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-42-10 bis 01-44-10
function test13(){
    var br11=JSON.parse(localStorage.getItem("01-42-10"));
    var br13=JSON.parse(localStorage.getItem("01-43-10"));
    var br12=JSON.parse(localStorage.getItem("01-44-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-42-10 bis 01-44-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-42-10 bis 01-44-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-45-10 bis 01-47-10
function test14(){
    var br11=JSON.parse(localStorage.getItem("01-45-10"));
    var br13=JSON.parse(localStorage.getItem("01-46-10"));
    var br12=JSON.parse(localStorage.getItem("01-47-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-45-10 bis 01-47-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach13bis21eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-45-10 bis 01-47-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-48-10 bis 01-49-10
function test15(){
    var br11=JSON.parse(localStorage.getItem("01-48-10"));
    var br12=JSON.parse(localStorage.getItem("01-49-10"));

    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);

    if(breite11+breite12<=fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-48-10 bis 01-49-10) passt der Artikel im VKF.";
        a0.style.color="green";
     
    } else if (breite11+breite12>fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-48-10 bis 01-49-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-54-10 bis 01-55-10
function test16(){
    var br11=JSON.parse(localStorage.getItem("01-54-10"));
    var br12=JSON.parse(localStorage.getItem("01-55-10"));

    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);

    if(breite11+breite12<=fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-54-10 bis 01-55-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12)
    } else if (breite11+breite12>fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-54-10 bis 01-55-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-56-10 bis 01-57-10
function test17(){
    var br11=JSON.parse(localStorage.getItem("01-56-10"));
    var br12=JSON.parse(localStorage.getItem("01-57-10"));

    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);

    if(breite11+breite12<=fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-56-10 bis 01-57-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,)
    } else if (breite11+breite12>fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-56-10 bis 01-57-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
//test function für 01-58-10 bis 01-60-10
function test18(){
    var br11=JSON.parse(localStorage.getItem("01-58-10"));
    var br13=JSON.parse(localStorage.getItem("01-59-10"));
    var br12=JSON.parse(localStorage.getItem("01-60-10"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-58-10 bis 01-60-10) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach25bis26eben10.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-58-10 bis 01-60-10) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};






function newL(){
    localStorage.clear()
}
