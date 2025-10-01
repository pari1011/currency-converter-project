

const dropdowns=document.querySelectorAll(".dropdown select")
const button=document.querySelector("form button")
// console.log(dropdowns)
const msg=document.querySelector(".msg")








for(let select of dropdowns){
    for(currCode in countryList){
        let newOption=document.createElement("option")
        newOption.innerText=currCode
        newOption.value=currCode
        select.append(newOption)
        if(select.name==="from" && currCode==="USD" ){
            newOption.selected="selected"
        }else if(select.name==="to" && currCode==="INR" ){
            newOption.selected="selected"
        
        }
    }
    select.addEventListener("change",(evt)=>{
    updateFlag(evt.target)
})
}

const updateFlag=(element)=>{
    //elemt is the html tag for that optiom
    let currCode=element.value
    let countryCode=countryList[currCode]
    let newSrc=`https://flagsapi.com/${countryCode}/flat/64.png`
    let img= element.parentElement.querySelector("img")
    img.src=newSrc
}


const fromCurr=document.querySelector(".from select")
const toCurr=document.querySelector(".to select")



const updateExchangeRate=async ()=>{
     let amount=document.querySelector(".amount input")
    let amtValue=amount.value
    if(amtValue=="" || amtValue<1){
        amtValue=1;
        amount.value="1"
    }

    const URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurr.value.toLowerCase()}.json`;
    let response = await fetch(URL);
    let data = await response.json();

    let rate = data[fromCurr.value.toLowerCase()][toCurr.value.toLowerCase()];
    let newAmount=amtValue*rate
    msg.innerText=`${amtValue}${fromCurr.value}=${newAmount}${toCurr.value}`
}


window.addEventListener("load", ()=>{
    updateExchangeRate()
})


button.addEventListener("click", (evt) => {
    evt.preventDefault()
    updateExchangeRate()
   




    
})









