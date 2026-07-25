async function database(){

const res=await fetch("/data");

return await res.json();

}


async function start(){

const data=await database();

inserter(data);

}

start();



function inserter(data){

const main=document.getElementById("main");

main.innerHTML="";

for(let i=0;i<data.length;i++){

main.innerHTML+=`

<div class="card">

<div class="image">

<a href="${data[i].imgpath}" target="_blank">

<img src="${data[i].imgsource}" width="300">

</a>

</div>

<h2>${data[i].heading}</h2>

<p>${data[i].article}</p>

<a href="${data[i].Readnote}">
Read Notes
</a>

</div>

`;

}

}