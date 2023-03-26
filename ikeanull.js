var resultat=document.querySelector(".resultat");
resultat.addEventListener("click",bt2)
var loood=document.getElementById("relod");
loood.addEventListener("click",relod)
function relod(){
    location.reload();

}


function bt2(){
    var resultat=document.querySelector(".resultat");
resultat.classList.remove("show");
    console.log("dokem remove div resultat kar mikone ikea 0 ebene")
};

var fach04bis12={
    breite:300,
    länge:140,
    höhe:100,
    DoppelP:70,
}
var fach13bis21={
    breite:300,
    länge:250,
    höhe:100,
    DoppelP:150,
}
var fach25bis26={
    breite:250,
    länge:250,
    höhe:100,
    DoppelP:125,
}
var fach61bis70={
    breite:300,
    länge:100,
    höhe:80,
    DoppelP:50,
}
var b0= document.getElementById("b0");
var a0= document.getElementById("a0");


function mys(){
   
    var artikelname=document.getElementById("Name");
    var stapel=document.getElementById("stapel");
    var ArtikelNummer=document.getElementById("ArtikelNummer");
var inhöhe=document.getElementById("höhe");
var inbreite=document.getElementById("breite");
var inlänge=document.getElementById("länger");
var instück=document.getElementById("stück");
var ingewicht=document.getElementById("gewicht");
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
var resultat=document.querySelector(".resultat");
resultat.classList.add("show");


 
var fach04bis12={
    breite:300,
    länge:140,
    höhe:100,
    DoppelP:70,
}
var fach13bis21={
    breite:300,
    länge:250,
    höhe:100,
    DoppelP:150,
};
var fach25bis26={
    breite:250,
    länge:250,
    höhe:100,
    DoppelP:125,
}
var fach61bis70={
    breite:300,
    länge:100,
    höhe:80,
    DoppelP:50,
}

 if(inregal.value==01&&infach.value==04&&inebene.value==00){
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
        localStorage.setItem("01-04-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-04-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(fach04bis12.länge/2)
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=fach04bis12.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>fach04bis12.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test1()

    };
    if(inregal.value==01&&infach.value==05&&inebene.value==00){
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
        localStorage.setItem("01-05-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-05-00"));
var vkf4b2=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);

console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b2);
if(vkf4b2<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b2>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach04bis12.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach04bis12.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test1()

    };
    if(inregal.value==01&&infach.value==06&&inebene.value==00){
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
        localStorage.setItem("01-06-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-06-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);

console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach04bis12.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach04bis12.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test1()

    };
    if(inregal.value==01&&infach.value==07&&inebene.value==00){
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
        localStorage.setItem("01-07-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-07-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);

console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach04bis12.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach04bis12.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test2()

    };
    if(inregal.value==01&&infach.value==08&&inebene.value==00){
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
        localStorage.setItem("01-08-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-08-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);

console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach04bis12.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach04bis12.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test2()

    };
    if(inregal.value==01&&infach.value==09&&inebene.value==00){
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
        localStorage.setItem("01-09-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-09-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);

console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach04bis12.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach04bis12.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test2()

    } ;
    if(inregal.value==01&&infach.value==10&&inebene.value==00){
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
        localStorage.setItem("01-10-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-10-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(fach04bis12.länge/2)
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=fach04bis12.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>fach04bis12.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test10bis12()

    };
    if(inregal.value==01&&infach.value==11&&inebene.value==00){
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
        localStorage.setItem("01-11-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-11-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);


console.log(vkf4h)
console.log(vkf4s)


var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(fach04bis12.länge/2)
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=fach04bis12.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>fach04bis12.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test10bis12()

    };
    if(inregal.value==01&&infach.value==12&&inebene.value==00){
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
        localStorage.setItem("01-12-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-12-00"));
var vkf4b1=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h)
console.log(vkf4s)
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b1);
if(vkf4b1<=fach04bis12.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b1>fach04bis12.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach04bis12.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach04bis12.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach04bis12.länge){
   
   
    c1.textContent="dast artikel  länge passt  ";
    c1.style.color="green";
    console.log(fach04bis12.länge/2)
    console.log("c1")
}if(vkf4l>fach04bis12.länge){
   
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
} if(inlänge.value<=fach04bis12.DoppelP){
console.log("yessss")
    d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="green";
}if(inlänge.value>fach04bis12.DoppelP){
    console.log("yessss")
    d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
    console.log(vkf4l)
    d1.style.color="red";
    }
    
    test10bis12()

    };
     if(inregal.value==01&&infach.value==13&&inebene.value==00){
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
        localStorage.setItem("01-13-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-13-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
            d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
            console.log(vkf4l)
            d1.style.color="red";
        }
        test3()

    } ;
     if(inregal.value==01&&infach.value==14&&inebene.value==00){
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
        localStorage.setItem("01-14-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-14-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test3()

    };
    if(inregal.value==01&&infach.value==15&&inebene.value==00){
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
        localStorage.setItem("01-15-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-15-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test3()

    };
    if(inregal.value==01&&infach.value==16&&inebene.value==00){
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
        localStorage.setItem("01-16-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-16-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
            console.log(vkf4l)
            d1.style.color="red";
        }
        test4()

    };
    if(inregal.value==01&&infach.value==17&&inebene.value==00){
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
        localStorage.setItem("01-17-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-17-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test4()

    };
    if(inregal.value==01&&infach.value==18&&inebene.value==00){
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
        localStorage.setItem("01-18-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-18-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test4()

    };
    if(inregal.value==01&&infach.value==19&&inebene.value==00){
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
        localStorage.setItem("01-19-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-19-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test4()

    };
    if(inregal.value==01&&infach.value==20&&inebene.value==00){
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
        localStorage.setItem("01-20-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-20-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach13bis21.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach13bis21.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach13bis21.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach13bis21.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach13bis21.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach13bis21.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach13bis21.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach13bis21.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test5()

    };
    if(inregal.value==01&&infach.value==25&&inebene.value==00){
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
        localStorage.setItem("01-25-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-25-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test6()

    };
    if(inregal.value==01&&infach.value==26&&inebene.value==00){
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
        localStorage.setItem("01-26-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-26-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test6()

    };
    if(inregal.value==01&&infach.value==27&&inebene.value==00){
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
        localStorage.setItem("01-27-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-27-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test7()

    };
    if(inregal.value==01&&infach.value==28&&inebene.value==00){
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
        localStorage.setItem("01-28-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-28-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test7()

    };
    if(inregal.value==01&&infach.value==28&&inebene.value==00){
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
        localStorage.setItem("01-28-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-28-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test7()

    };
    if(inregal.value==01&&infach.value==29&&inebene.value==00){
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
        localStorage.setItem("01-29-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-29-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test7()

    };
    if(inregal.value==01&&infach.value==30&&inebene.value==00){
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
        localStorage.setItem("01-30-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-30-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test8()

    };
    if(inregal.value==01&&infach.value==31&&inebene.value==00){
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
        localStorage.setItem("01-31-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-31-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test8()

    };
    if(inregal.value==01&&infach.value==32&&inebene.value==00){
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
        localStorage.setItem("01-32-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-32-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test8()

    };
    if(inregal.value==01&&infach.value==33&&inebene.value==00){
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
        localStorage.setItem("01-33-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-33-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test9()

    };
    if(inregal.value==01&&infach.value==34&&inebene.value==00){
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
        localStorage.setItem("01-34-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-34-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test9()

    };
    if(inregal.value==01&&infach.value==35&&inebene.value==00){
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
        localStorage.setItem("01-35-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-35-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test9()

    };
     if(inregal.value==01&&infach.value==36&&inebene.value==00){
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
        localStorage.setItem("01-36-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-36-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test10()

    };
    if(inregal.value==01&&infach.value==37&&inebene.value==00){
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
        localStorage.setItem("01-37-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-37-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test10()

    };
    if(inregal.value==01&&infach.value==38&&inebene.value==00){
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
        localStorage.setItem("01-38-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-38-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test10()

    };
    if(inregal.value==01&&infach.value==39&&inebene.value==00){
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
        localStorage.setItem("01-39-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-39-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test11()

    };
    if(inregal.value==01&&infach.value==40&&inebene.value==00){
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
        localStorage.setItem("01-40-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-40-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test11()

    };
    if(inregal.value==01&&infach.value==41&&inebene.value==00){
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
        localStorage.setItem("01-41-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-41-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test11()

    };
    if(inregal.value==01&&infach.value==42&&inebene.value==00){
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
        localStorage.setItem("01-42-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-42-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test12()

    };
    if(inregal.value==01&&infach.value==43&&inebene.value==00){
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
        localStorage.setItem("01-43-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-43-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test12()

    };
    if(inregal.value==01&&infach.value==44&&inebene.value==00){
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
        localStorage.setItem("01-44-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-44-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test12()

    };
    if(inregal.value==01&&infach.value==45&&inebene.value==00){
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
        localStorage.setItem("01-45-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-45-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test13()

    };
    if(inregal.value==01&&infach.value==46&&inebene.value==00){
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
        localStorage.setItem("01-46-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-46-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test13()

    };
    if(inregal.value==01&&infach.value==47&&inebene.value==00){
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
        localStorage.setItem("01-47-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-47-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test13()

    };
    if(inregal.value==01&&infach.value==48&&inebene.value==00){
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
        localStorage.setItem("01-48-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-48-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test14()

    };
    if(inregal.value==01&&infach.value==49&&inebene.value==00){
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
        localStorage.setItem("01-49-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-49-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test14()

    };
    if(inregal.value==01&&infach.value==54&&inebene.value==00){
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
        localStorage.setItem("01-54-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-54-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test15()

    };
    if(inregal.value==01&&infach.value==55&&inebene.value==00){
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
        localStorage.setItem("01-55-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-55-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test15()

    };
    if(inregal.value==01&&infach.value==56&&inebene.value==00){
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
        localStorage.setItem("01-56-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-56-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test16()

    };
    if(inregal.value==01&&infach.value==57&&inebene.value==00){
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
        localStorage.setItem("01-57-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-57-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test16()

    };
    if(inregal.value==01&&infach.value==58&&inebene.value==00){
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
        localStorage.setItem("01-58-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-58-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test17()

    };
    if(inregal.value==01&&infach.value==59&&inebene.value==00){
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
        localStorage.setItem("01-59-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-59-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test17()

    };
    if(inregal.value==01&&infach.value==60&&inebene.value==00){
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
        localStorage.setItem("01-60-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-60-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test17()

    };
    if(inregal.value==01&&infach.value==61&&inebene.value==00){
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
        localStorage.setItem("01-61-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-61-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test18()

    };
    if(inregal.value==01&&infach.value==62&&inebene.value==00){
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
        localStorage.setItem("01-62-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-62-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test18()

    };
    if(inregal.value==01&&infach.value==63&&inebene.value==00){
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
        localStorage.setItem("01-63-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-63-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test18()

    };
    if(inregal.value==01&&infach.value==64&&inebene.value==00){
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
        localStorage.setItem("01-64-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-64-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test19()

    };
    if(inregal.value==01&&infach.value==65&&inebene.value==00){
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
        localStorage.setItem("01-65-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-65-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test19()

    };
    if(inregal.value==01&&infach.value==66&&inebene.value==00){
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
        localStorage.setItem("01-66-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-66-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test19()

    };
    if(inregal.value==01&&infach.value==67&&inebene.value==00){
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
        localStorage.setItem("01-67-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-67-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test20()

    };
    if(inregal.value==01&&infach.value==68&&inebene.value==00){
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
        localStorage.setItem("01-68-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-68-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test20()

    };
    if(inregal.value==01&&infach.value==69&&inebene.value==00){
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
        localStorage.setItem("01-69-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-69-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach61bis70.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach61bis70.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach61bis70.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach61bis70.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach61bis70.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach61bis70.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach61bis70.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach61bis70.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test20()

    };
    if(inregal.value==01&&infach.value==70&&inebene.value==00){
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
        localStorage.setItem("01-70-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-70-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test21()

    };
    if(inregal.value==01&&infach.value==71&&inebene.value==00){
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
        localStorage.setItem("01-71-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-71-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test21()

    };
    if(inregal.value==01&&infach.value==72&&inebene.value==00){
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
        localStorage.setItem("01-72-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-72-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test21()

    };
    if(inregal.value==01&&infach.value==73&&inebene.value==00){
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
        localStorage.setItem("01-73-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-73-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test22()

    };
    if(inregal.value==01&&infach.value==74&&inebene.value==00){
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
        localStorage.setItem("01-74-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-74-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test22()

    };
    if(inregal.value==01&&infach.value==75&&inebene.value==00){
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
        localStorage.setItem("01-75-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-75-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test22()

    };
    if(inregal.value==01&&infach.value==76&&inebene.value==00){
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
        localStorage.setItem("01-76-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-76-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test23()

    };
    if(inregal.value==01&&infach.value==77&&inebene.value==00){
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
        localStorage.setItem("01-77-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-77-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test23()

    };
    if(inregal.value==01&&infach.value==78&&inebene.value==00){
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
        localStorage.setItem("01-78-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-78-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test23()

    };
    if(inregal.value==01&&infach.value==79&&inebene.value==00){
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
        localStorage.setItem("01-79-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-79-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test24()

    };
    if(inregal.value==01&&infach.value==80&&inebene.value==00){
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
        localStorage.setItem("01-80-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-80-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test24()

    };
    if(inregal.value==01&&infach.value==81&&inebene.value==00){
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
        localStorage.setItem("01-81-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-81-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test24()

    };
    if(inregal.value==01&&infach.value==82&&inebene.value==00){
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
        localStorage.setItem("01-82-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-82-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test25()

    };
    if(inregal.value==01&&infach.value==83&&inebene.value==00){
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
        localStorage.setItem("01-83-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-83-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test25()

    };
    if(inregal.value==01&&infach.value==84&&inebene.value==00){
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
        localStorage.setItem("01-84-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-84-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test25()

    };
    if(inregal.value==01&&infach.value==85&&inebene.value==00){
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
        localStorage.setItem("01-85-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-85-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test26()

    };
    if(inregal.value==01&&infach.value==86&&inebene.value==00){
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
        localStorage.setItem("01-86-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-86-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test26()

    };
    if(inregal.value==01&&infach.value==87&&inebene.value==00){
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
        localStorage.setItem("01-87-00",JSON.stringify(artike))
var vkf04=JSON.parse(localStorage.getItem("01-87-00"));
var vkf4b3=parseInt(vkf04.breite);
var vkf4h=parseInt(vkf04.höhe);
var vkf4s=parseInt(vkf04.stapel);
console.log(vkf4h);
console.log(vkf4s);
var vkf4l=parseInt(vkf04.länge);
console.log(vkf4b3);
if(vkf4b3<=fach25bis26.breite){
    a1.textContent="dast artikel breite passt ";
    a1.style.color="green";
    console.log("a1")
}if (vkf4b3>fach25bis26.breite){
    a1.style.color="red";
    a1.textContent="dast artikel breite passt nicht ";
    console.log("a2")
}if(vkf4h*vkf4s<=fach25bis26.höhe){
    b1.textContent="dast artikel  höhe passt ";
b1.style.color="green";
    console.log("b1")
}if(vkf4h*vkf4s>fach25bis26.höhe){
    b1.style.color="red";
    b1.textContent="dast artikel  höhe passt nicht ";

    console.log("b2")
}if(vkf4l<=fach25bis26.länge){
    c1.textContent="dast artikel  länge passt ";
    c1.style.color="green";
    console.log("c1")
}if(vkf4l>fach25bis26.länge){
    c1.textContent="dast artikel  länge passt nicht ";
    c1.style.color="red";
    console.log("c2")
}if(inlänge.value<=fach25bis26.DoppelP){
    console.log("yessss")
        d1.textContent="Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="green";
    }if(inlänge.value>fach25bis26.DoppelP){
        console.log("yessss")
        d1.textContent="Aufgrund der (Beschädigung (390))Sie dürfen im Verkaufsfach gemäß Verkaufsfachlänge nicht zwei Paletten hintereinander legen."
        console.log(vkf4l)
        d1.style.color="red";
        }
        test26()

    };
 
 
   
   
   
   
   
}


 //breite vergleishen von 01-04-00 bis 01-06-00
function test1(){
    
    var br11=JSON.parse(localStorage.getItem("01-04-00"));
    var br12=JSON.parse(localStorage.getItem("01-05-00"));
    var br13=JSON.parse(localStorage.getItem("01-06-00"));
    var breite11=parseInt(br11.breite);
    var breite12=parseInt(br12.breite);
    var breite13=parseInt(br13.breite);
    if(breite11+breite12+breite13<=fach04bis12.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-04-00 bis 01-06-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log(breite11,breite12,breite13)
    } else if (breite11+breite12+breite13>fach04bis12.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-04-00 bis 01-06-00) passt der Artikel nicht in VKF."
a0.style.color="red"
    };
};
 //breite vergleishen von 01-07-00 bis 01-09-00
function test2(){
    var br21=JSON.parse(localStorage.getItem("01-07-00"));
    var br22=JSON.parse(localStorage.getItem("01-08-00"));
    var br23=JSON.parse(localStorage.getItem("01-09-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
    if(breite21+breite22+breite23<=fach04bis12.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-07-00 bis 01-09-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach04bis12.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-07-00 bis 01-09-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    }

};
 //breite vergleishen von 01-10-00 bis 01-12-00
function  test10bis12(){
    var br21=JSON.parse(localStorage.getItem("01-10-00"));
    var br22=JSON.parse(localStorage.getItem("01-11-00"));
    var br23=JSON.parse(localStorage.getItem("01-12-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
    if(breite21+breite22+breite23<=fach04bis12.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-10-00 bis 01-12-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach04bis12.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-10-00 bis 01-12-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    }

};
 //breite vergleishen von 01-13-00 bis 01-15-00
function test3(){
    var br21=JSON.parse(localStorage.getItem("01-13-00"));
    var br22=JSON.parse(localStorage.getItem("01-14-00"));
    var br23=JSON.parse(localStorage.getItem("01-15-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-13-00 bis 01-15-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-13-00 bis 01-15-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 

};
 //breite vergleishen von 01-16-00 bis 01-18-00
function test4(){
    var br21=JSON.parse(localStorage.getItem("01-16-00"));
    var br22=JSON.parse(localStorage.getItem("01-17-00"));
    var br23=JSON.parse(localStorage.getItem("01-18-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-16-00 bis 01-18-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-16-00 bis 01-18-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
 //breite vergleishen von 01-19-00 bis 01-21-00
function test5(){
    var br21=JSON.parse(localStorage.getItem("01-19-00"));
    var br22=JSON.parse(localStorage.getItem("01-20-00"));
    var br23=JSON.parse(localStorage.getItem("01-21-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-19-00 bis 01-21-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-19-00 bis 01-21-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
 //breite vergleishen von 01-25-00 bis 01-26-00
 function test6(){
    var br21=JSON.parse(localStorage.getItem("01-25-00"));
    var br22=JSON.parse(localStorage.getItem("01-26-00"));
    
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
  
   
    if(breite21+breite22<=fach25bis26.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-25-00 bis 01-26-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22>fach25bis26.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-25-00 bis 01-26-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
 //breite vergleishen von 01-27-00 bis 01-28-00
 function test7(){
    var br21=JSON.parse(localStorage.getItem("01-27-00"));
    var br22=JSON.parse(localStorage.getItem("01-28-00"));
    var br23=JSON.parse(localStorage.getItem("01-29-00"));
    
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-27-00 bis 01-29-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-27-00 bis 01-29-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-30-00 bis 01-32-00
function test8(){
    var br21=JSON.parse(localStorage.getItem("01-30-00"));
    var br22=JSON.parse(localStorage.getItem("01-31-00"));
    var br23=JSON.parse(localStorage.getItem("01-32-00"));
    
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-30-00 bis 01-32-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-30-00 bis 01-32-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-33-00 bis 01-35-00

function test9(){
    var br21=JSON.parse(localStorage.getItem("01-33-00"));
    var br22=JSON.parse(localStorage.getItem("01-34-00"));
    var br23=JSON.parse(localStorage.getItem("01-35-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-33-00 bis 01-35-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-33-00 bis 01-35-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-36-00 bis 01-38-00

function test10(){
    var br21=JSON.parse(localStorage.getItem("01-36-00"));
    var br22=JSON.parse(localStorage.getItem("01-37-00"));
    var br23=JSON.parse(localStorage.getItem("01-38-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-36-00 bis 01-38-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-36-00 bis 01-38-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-39-00 bis 01-41-00

function test11(){
    var br21=JSON.parse(localStorage.getItem("01-39-00"));
    var br22=JSON.parse(localStorage.getItem("01-40-00"));
    var br23=JSON.parse(localStorage.getItem("01-41-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-39-00 bis 01-41-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-39-00 bis 01-41-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-42-00 bis 01-44-00

function test12(){
    var br21=JSON.parse(localStorage.getItem("01-42-00"));
    var br22=JSON.parse(localStorage.getItem("01-43-00"));
    var br23=JSON.parse(localStorage.getItem("01-44-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-42-00 bis 01-44-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-42-00 bis 01-44-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-45-00 bis 01-47-00

function test13(){
    var br21=JSON.parse(localStorage.getItem("01-45-00"));
    var br22=JSON.parse(localStorage.getItem("01-46-00"));
    var br23=JSON.parse(localStorage.getItem("01-47-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-45-00 bis 01-47-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-45-00 bis 01-47-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-48-00 bis 01-49-00

function test14(){
    var br21=JSON.parse(localStorage.getItem("01-48-00"));
    var br22=JSON.parse(localStorage.getItem("01-49-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
  
    if(breite21+breite22<=fach25bis26.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-48-00 bis 01-49-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22>fach25bis26.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-48-00 bis 01-49-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-54-00 bis 01-55-00
function test15(){
    var br21=JSON.parse(localStorage.getItem("01-54-00"));
    var br22=JSON.parse(localStorage.getItem("01-55-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
  
   
    if(breite21+breite22<=fach25bis26.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-54-00 bis 01-55-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22>fach25bis26.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-54-00 bis 01-55-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-56-00 bis 01-57-00
function test16(){
    var br21=JSON.parse(localStorage.getItem("01-56-00"));
    var br22=JSON.parse(localStorage.getItem("01-57-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
 
    if(breite21+breite22<=fach25bis26.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-56-00 bis 01-57-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22>fach25bis26.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-56-00 bis 01-57-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-58-00 bis 01-60-00
function test17(){
    var br21=JSON.parse(localStorage.getItem("01-58-00"));
    var br22=JSON.parse(localStorage.getItem("01-59-00"));
    var br23=JSON.parse(localStorage.getItem("01-60-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-58-00 bis 01-60-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-58-00 bis 01-60-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-61-00 bis 01-63-00
function test18(){
    var br21=JSON.parse(localStorage.getItem("01-61-00"));
    var br22=JSON.parse(localStorage.getItem("01-62-00"));
    var br23=JSON.parse(localStorage.getItem("01-63-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach61bis70.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-61-00 bis 01-63-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach61bis70.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-61-00 bis 01-63-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-64-00 bis 01-66-00
function test19(){
    var br21=JSON.parse(localStorage.getItem("01-64-00"));
    var br22=JSON.parse(localStorage.getItem("01-65-00"));
    var br23=JSON.parse(localStorage.getItem("01-66-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach61bis70.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-64-00 bis 01-66-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach61bis70.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-64-00 bis 01-66-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-67-00 bis 01-69-00
function test20(){
    var br21=JSON.parse(localStorage.getItem("01-67-00"));
    var br22=JSON.parse(localStorage.getItem("01-68-00"));
    var br23=JSON.parse(localStorage.getItem("01-69-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach61bis70.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-67-00 bis 01-69-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach61bis70.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-67-00 bis 01-69-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-70-00 bis 01-72-00
function test21(){
    var br21=JSON.parse(localStorage.getItem("01-70-00"));
    var br22=JSON.parse(localStorage.getItem("01-71-00"));
    var br23=JSON.parse(localStorage.getItem("01-72-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-70-00 bis 01-72-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-70-00 bis 01-72-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-73-00 bis 01-75-00
function test22(){
    var br21=JSON.parse(localStorage.getItem("01-73-00"));
    var br22=JSON.parse(localStorage.getItem("01-74-00"));
    var br23=JSON.parse(localStorage.getItem("01-75-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-73-00 bis 01-75-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-73-00 bis 01-75-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-76-00 bis 01-78-00
function test23(){
    var br21=JSON.parse(localStorage.getItem("01-76-00"));
    var br22=JSON.parse(localStorage.getItem("01-77-00"));
    var br23=JSON.parse(localStorage.getItem("01-78-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-76-00 bis 01-78-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-76-00 bis 01-78-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-79-00 bis 01-81-00
function test24(){
    var br21=JSON.parse(localStorage.getItem("01-79-00"));
    var br22=JSON.parse(localStorage.getItem("01-80-00"));
    var br23=JSON.parse(localStorage.getItem("01-81-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-79-00 bis 01-81-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-79-00 bis 01-81-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-82-00 bis 01-84-00
function test25(){
    var br21=JSON.parse(localStorage.getItem("01-82-00"));
    var br22=JSON.parse(localStorage.getItem("01-83-00"));
    var br23=JSON.parse(localStorage.getItem("01-84-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-82-00 bis 01-84-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-82-00 bis 01-84-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};
//breite vergleishen von 01-85-00 bis 01-87-00
function test26(){
    var br21=JSON.parse(localStorage.getItem("01-85-00"));
    var br22=JSON.parse(localStorage.getItem("01-86-00"));
    var br23=JSON.parse(localStorage.getItem("01-87-00"));
    var breite21=parseInt(br21.breite);
    var breite22=parseInt(br22.breite);
    var breite23=parseInt(br23.breite);
  
   
    if(breite21+breite22+breite23<=fach13bis21.breite){
        a0.textContent=" Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-85-00 bis 01-87-00) passt der Artikel im VKF.";
        a0.style.color="green";
        console.log("07 09 ");
    }else if(breite21+breite22+breite23>fach13bis21.breite){
        a0.textContent="Im Vergleich zur Breite der benachbarten Verkaufsfächer(01-85-00 bis 01-87-00) passt der Artikel nicht in VKF.";
a0.style.color="red";
console.log("07 09 v ");
    } 
};





////////LocalStorage.clear function\\\\\\\\\\
function newL(){
    localStorage.clear()
}

//