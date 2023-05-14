//Элементы формы
const carBrand = document.querySelector('.car-brand');
const carModel = document.querySelector('.car-models');
const fuelTypes = document.querySelectorAll ('input[name="fuel-type"]');
const engineVol = document.querySelector('input[name="type-volume"]');

const paymentMeth = document.querySelectorAll ('input[name="payment"]');
const totalPrice = document.querySelector('#total-price');


//Задаём цены для моделей авто
const carPrice = {
    BMW: {
        X1: 25000,
        X3: 30000,
        X4: 45000,
    },

    Mazda: {
        CX3: 32000,
        CX5: 47000,
        CX9: 60000,
    },

    MercedesBenz: {
        GLC250: 50000,
        GLC300: 65000,
        SClass: 80000,
    },

    Kia:{
        Sorento: 45000,
        Carnival: 59000,
        Rio: 38000,
    },
};



//Устанавливаем слушатель на carCond
const usedCar = document.getElementById("used");
const ageCar = document.querySelector (".car-age");
usedCar.addEventListener ("click", () => {
ageCar.style.display = "block";
});




