class Car {
    constructor(car,model,price,year,img){
    this.car = car;
    this.price = price;
    this.model = model;
    this.year = year;
    this.img = img}
}
let bmw = new Car("BMW", "BMW 5M", "12099 €", 2018,"https://di-uploads-pod16.dealerinspire.com/mercedesbenzofhuntington/uploads/2020/01/bmw-5-series.png");
let mercedes = new Car("Mercedes", "Merchedes GLE", "25099 €", 2021,"https://carsguide-res.cloudinary.com/image/upload/f_auto,fl_lossy,q_auto,t_cg_hero_low/v1/editorial/vhs/Mercedes-benz-gle.png");
let porsche = new Car("Porsche", "Porsche 911", "15099 €", 2011,"https://files.porsche.com/filestore/image/multimedia/none/911-tu-modelimage-sideshot/model/fe21bac9-833c-11eb-80d3-005056bbdc38/porsche-model.png");
let audi = new Car("Audi", "Audi R6", "6999 €", 2021,"https://images.dealer.com/ddc/vehicles/2021/Audi/RS%206%20Avant/Wagon/perspective/front-left/2021_24.png");
let volkswagen = new Car("Volkswagen", "Golf R", "10529 €", 2020,"https://vehicle-images.dealerinspire.com/stock-images/chrome/09e29a63574726858105fbf84b228f70.png");
let lamborghini = new Car("Lamborghini", "lamborghini huracan", "50599 €", 2020,"https://pngimg.com/d/lamborghini_PNG10701.png");
let mclaren = new Car("MCLaren", "MCLAREN F1", "22399 €", 1993,"https://static.wikia.nocookie.net/forzamotorsport/images/b/ba/HOR_XB1_McLaren_F1.png/revision/latest/scale-to-width-down/1200?cb=20190926114612");
let toyota = new Car("Toyota", "Toyota Supra", "45609 €", 2020,"https://di-uploads-pod24.dealerinspire.com/iratoyotaofdanvers/uploads/2019/09/dc024c08b5ed1ff147d5baaaf055a4cf.png");
let dodge = new Car("Dodge", "Dodge Challenger", "7599 €", 2020,"https://file.kelleybluebookimages.com/kbb/base/evox/CP/14379/2020-Dodge-Challenger-front_14379_032_2400x1800_PW7_nologo.png");
let pagani = new Car("Pagani", "Pagani Huayra", "90599 €", 2002,"https://static.wikia.nocookie.net/forzamotorsport/images/8/8f/HOR_XB1_Pagani_Huayra.png/revision/latest?cb=20191021140616");

let carsArray = [bmw, mercedes, porsche, audi, volkswagen, lamborghini, mclaren, toyota, dodge, pagani]

console.log(bmw)

cars2Elm = document.getElementById("cars2")

cars3Elm = document.getElementById("cars3")


let carItems = ""
let carItems2 = ""
    for (let i = 0; i < carsArray.length; i++ ){
    if (i < 5){    
        carItems += `
                <div>
                <img src="${carsArray[i].img}" alt="car">
                    <h1>
                    <u>
                        ${carsArray[i].car}
                    </u>
                    </h1>
                    <h4>
                        Model: ${carsArray[i].model}
                    </h4>
                    <h4>
                       Price: ${carsArray[i].price}
                    </h4>
                    <h5>
                       Year:  ${carsArray[i].year}
                    </h5>
                </div>
    `}
        else if( i >= 5){
        carItems2 += `
                <div>
                <img src="${carsArray[i].img}" alt="car">
                    <h1>
                        <u>
                            ${carsArray[i].car}
                        </u>
                    </h1>
                    <h4>
                        Model: ${carsArray[i].model}
                    </h4>
                    <h4>
                       Price: ${carsArray[i].price}
                    </h4>
                    <h5>
                       Year:  ${carsArray[i].year}
                    </h5>
                </div>
                `}}
cars2Elm.innerHTML = carItems
cars3Elm.innerHTML = carItems2