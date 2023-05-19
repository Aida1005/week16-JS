//Устанавливаем слушатель на "подержанный" option
const usedCar = document.getElementById("used");
const ageCar = document.querySelector(".car-age");
usedCar.addEventListener ("click", () => {
ageCar.style.display = "block";
});

const engineCap = document.querySelector('input[name="capacity"]');//Объём двигателя

//Устанавливаем слушатель на Button 
const btn = document.querySelector('.btn');
    btn.onclick = () => {
        calcPrice();
    };

    function  calcPrice() {
        const engine = parseFloat(engineCap.value);//Объём двигателя
        console.log(engine);


        const radioFuel = document.querySelectorAll('.f-1');//Тип топлива
        let fuelType = "";
        for (let i =0; i< radioFuel.length; i++){
            if (radioFuel[i].checked){
                fuelType = radioFuel[i].value;
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
        const carModel = parseFloat(document.querySelector('.car-model').value);//Модель автомобиля
        console.log(carModel);

        const carOwnerNum = parseFloat(document.querySelector('.number-owners').value);//владельц
        console.log(carOwnerNum);
        const paymentMethod = document.querySelector('.payment-method').value;//Способ оплаты
        

        const basicPrice = carModel;
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


