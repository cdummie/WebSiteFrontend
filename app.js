
const personCheck = document.getElementById("personCheck");
const secondPerson = document.getElementById("secondPerson");
const hotel = document.getElementById("hotel");
const hotelPrice = document.getElementById("hotelPrice");
const ski = document.getElementById("ski");
const skiPrice = document.getElementById("skiPrice");
const equipY = document.getElementById("equipY");
const equipN = document.getElementById("equipN");
const equipmentPrice = document.getElementById("equipmentPrice");
const transportY = document.getElementById("transportY");
const transportN = document.getElementById("transportN");
const transportPrice = document.getElementById("transportPrice");
const sum = document.getElementById("sum");
const confirm  = document.getElementById("confirm");
const buy = document.getElementById("buy");
const male = document.getElementById("male");
const female = document.getElementById("female");


personCheck.addEventListener('change', () => {
    if(personCheck.checked)
        secondPerson.disabled = false;
    else
        secondPerson.disabled = true;

});

let counter = [];

hotel.addEventListener('input', () => {
    if(hotel.value === "Hotel - Pun pansion")
       { 
           hotelPrice.value = "100KM";
           counter[0] = 100;
       }
    else if(hotel.value === "Hotel - Polupansion")
       {
            hotelPrice.value = "70KM";
            counter[0] = 70;
       }
    else
       {
            hotelPrice.value  ="0";
            counter[0] = 0;
       }
    
});

ski.addEventListener('input', () => {
    if(ski.value === "Jednodnevni")
    {
        skiPrice.value = "50KM";
        counter[1] = 50;
    }
    else if (ski.value === "Dvodnevni")
    {
        skiPrice.value = "70KM";
        counter[1] = 70;
    }
    else if (ski.value === "Trodnevni")
    {
        skiPrice.value = "100KM";
        counter[1] = 100;
    }
    else 
    {
        skiPrice.value = "0";
        counter[1] = 0;
    }
});

equipY.addEventListener('change', () => {
    if(equipY.checked)
      { 
         equipN.checked = false;
         equipmentPrice.value = "50KM";
         counter[2] = 50;
      }
});

equipN.addEventListener('change', () => {
    if(equipN.checked)
      {
          equipY.checked = false;
          equipmentPrice.value = "0";
          counter[2] = 0;
      }    

});

transportY.addEventListener('change', () => {
    if(transportY.checked)
      { 
         transportN.checked = false;
         transportPrice.value = "30KM";
         counter[3] = 30;
      }
});

transportN.addEventListener('change', () => {
    if(transportN.checked)
      {
          transportY.checked = false;
          transportPrice.value = "0";
          counter[3] = 0;
      }    

});



confirm.addEventListener('click', () => {
    let c = 0;
    let i = 0;
    for(; i< counter.length; i++)
        c += counter[i];
        
    sum.value = String(c) + "KM";
});

male.addEventListener('change', ()=>{
    if(male.checked)
        female.checked = false;
});

female.addEventListener('change', () => {
    if(female.checked)
        male.checked = false;
})

buy.addEventListener('click', () =>{

     alert("Hvala na kupovini! \n Sve dodatne informacije dobicete putem mejl adrese");
    
});