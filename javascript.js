let number1;
let number2;
let operator;
const c=document.querySelector("#c");
const d=document.querySelector("#del");
const percent=document.querySelector("#percent");
const slash=document.querySelector("#slash");
const seven=document.querySelector("#seven");
const eight=document.querySelector("#eight");
const nine=document.querySelector("#nine");
const asterisk=document.querySelector("#asterisk");
const four=document.querySelector("#four");
const five=document.querySelector("#five");
const six=document.querySelector("#six");
const minus=document.querySelector("#minus");
const one=document.querySelector("#one");
const two=document.querySelector("#two");
const three=document.querySelector("#three");
const plus=document.querySelector("#plus");
const zero=document.querySelector("#zero");
const dot=document.querySelector("#dot");
const equal=document.querySelector("#equal");

let input=document.querySelector("#input");
let calculate=document.querySelector("#calculate");

let max=99999999999;
zero.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="0"});
one.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="1"});
two.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="2"});
three.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="3"});
four.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="4"});
five.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="5"});
six.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="6"});
seven.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="7"});
eight.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="8"});
nine.addEventListener("click",()=>{if(input.textContent<max) input.textContent+="9"});

let clear=()=>{
    input.textContent='';
    calculate.textContent='';
    operator='';
    number1='';
    number2='';
};
let del=()=>{
    input.textContent=input.textContent.slice(0,input.textContent.length-1)
}
c.addEventListener("click",clear);
d.addEventListener("click",del);