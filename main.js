const field = document.querySelector('#field');
const message = document.querySelector('.cities');
const button=document.getElementById('btn');
const listCity=document.querySelector('.list-city');
const cities=document.querySelectorAll('.city');

let citiesArray=[];

const fillArray=()=>{
    cities.forEach(item=>{
        citiesArray.push(item.innerHTML);
    });
    console.log(citiesArray);
};

const addCity=()=>{
    const city=document.createElement('li');
    city.classList.add('city');
    city.innerHTML=field.value;
    field.value="";
    listCity.append(city);
};

const checkCity=()=>{
    if(!citiesArray.length){
        return true;
    }
    let len=citiesArray.length;
    if(citiesArray[len-1][citiesArray[len-1].length-1].toUpperCase===field.value[0].toUpperCase){
        return true;
    }
    else{
        alert('Такой город не подходит');
        return false;
    }
};

const checkExitCity=()=>{
    let check=true;
    let checkCity=field.value;
    checkCity.toUpperCase();
    citiesArray.forEach((item)=>{
        if(item==checkCity){
            alert('Такой город уже есть');
            check=false;
        }
    });
    return check;
};

button.addEventListener('click', e=>{
    if(field.value==""){
        alert('Вы не ввели город');
        return;
    }
    fillArray();
    if(checkExitCity() && checkCity()){
        citiesArray.push(field.value);
        addCity();
    }
});