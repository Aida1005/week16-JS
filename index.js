//Элементы формы

const carBrand = document.querySelector('.car-brand');
const carModel = document.querySelector('.car-model');
/*const fuelTypes = document.querySelectorAll ('input[name="fuel-type"]');
const engineVol = document.querySelector('input[name="type-volume"]');

const paymentMeth = document.querySelectorAll ('input[name="payment"]');
const totalPrice = document.querySelector('#total-price');*/


// цены для моделей авто

//Задаём цены для моделей авто
/*const carPrice = {
    BMW: {
        X1: 120000,
        X3: 130000,
        X4: 140000,
    },

    Mazda: {
        CX3: 80500,
        CX5: 90000,
        CX9: 105000,
    },

    MercedesBenz: {
        GLC250: 230000,
        GLC300: 250500,
        SClass: 308000,
    },

    Kia:{
        Sorento: 67000,
        Carnival: 72000,
        Rio: 86000,
    },
};
*/

//Устанавливаем слушатель на carBrand
/*carBrand.addEventListener ("click", () => {
    const models = carModel[carBrand.value];
    for (const model in models) {
    const option = document.createElement("option");
    //option.value = model;
    option.text = model;
    carModel.add(option);
}
});*/

//Устанавливаем слушатель на 
const usedCar = document.getElementById("used");
const ageCar = document.querySelector (".car-age");
usedCar.addEventListener ("click", () => {
ageCar.style.display = "block";
});


//Устанавливаем слушатель на Button 
const btn = document.querySelector('.btn');
    btn.onclick = () => {
        calcPrice();
    };

    function calcPrice() {
        const engineVol = +document.querySelector('.v-1').value;//Объём двигателя

        const radioFuel = document.querySelectorAll('.f-1');//Тип топлива
        for (let i =0; i< radioFuel.length; i++){
            if (radioFuel[i].checked){
                radioFuel[i].value;
                break;
            }
        };
        const radioCondition = document.querySelectorAll('.c-1');//Состояния автомобиля 
        for (let i =0; i< radioCondition.length; i++){
            if (radioCondition[i].checked){
                radioCondition[i].value;
                break;
            }
        };

        const carBrand = document.querySelector('.car-brand').value;//Марка автомобиля
        const carModel = document.querySelector('.car-model').value;//Модель автомобиля
        const carOwnerNum = document.querySelector('.number-owners').value;//владельц
        const paymentMethod = document.querySelector('.payment-method').value;//Способ оплаты
        
        const carPrice = document.querySelector('.car-price').value; // цены для моделей авто
        
        const basicPrice = carPrice[carBrand][carModel];
        let conditionCoefficient = 1;
        let carOwnerCoefficient = 1;
        let paymentCoefficient = 1;

        if (radioCondition === "used") {
            conditionCoefficient = 0.6;
        }
        
        if (carOwnerNum === "3+") {
            carOwnerCoefficient = 0.8;
        }
        
        if (paymentMethod === "cash") {
            paymentCoefficient = 0.85;
        }

        const totalPrice = basicPrice * conditionCoefficient * carOwnerCoefficient * paymentCoefficient;

        const dataShow = document.getElementById('total-price');
        dataShow.innerHTML = `${totalPrice}
        `
    };


document.querySelector('form').addEventListener ('submit', (ev) => {
    ev.preventDefault();
    const form = document.querySelector('form');
    form.reset();
});


