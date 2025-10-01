const dropdowns=document.querySelectorAll(".dropdown select")

// console.log(dropdowns)


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








