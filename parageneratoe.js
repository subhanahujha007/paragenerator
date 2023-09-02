const input=document.getElementById("inputtext");
const container=document.querySelector(".container");


const generateword=(n)=>{
const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let text="";
for(let i=0;i<n;i++){
text+=letters[(Math.random()*25).toFixed(0)]
}
console.log(text);
return text;
}



const generatepara= ()=>{
    let num=Number(input.value);
const para=document.createElement("p");
let data=" ";
console.log(num);
for(let i=0;i<num;i++){
    data+=generateword((Math.random()*15).toFixed(0)).toLowerCase();
    data+=" ";
}
para.innerText=data;
para.setAttribute("class","paras");
container.append(para);
}


