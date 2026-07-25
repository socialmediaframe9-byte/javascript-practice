async function save(){

const obj={

imgpath:document.getElementById("imgpath").value,

imgsource:document.getElementById("imgsource").value,

heading:document.getElementById("heading").value,

article:document.getElementById("article").value,

Readnote:document.getElementById("Readnote").value

};

const res=await fetch("/save",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(obj)

});

const data=await res.json();

alert(data.message);

}