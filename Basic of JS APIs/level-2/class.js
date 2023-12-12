// class in JS
class Car{
    // Create a Contructor to instiate a object
    constructor(model,price,color,speed){
      this.model=model;
      this.price=price;
      this.color=color;
      this.speed=speed;
    }
    // Here is static method which can be call outside the class without create a object but call through a class name
   static myType(){
     console.log("Hi there static method");
   }
    // methods/functions in class
    tellModel(){
      console.log("Car Model: "+this.model);
    }
    tellPrice(){
      console.log("Car Price: "+this.price);
    }
    tellColor(){
      console.log("Car Color: "+this.color);
    }
    tellSpeed(){
      console.log("Car Speed :"+this.speed);
    }
    
  }
  
  let Audi = new Car("Audi X-500","Rs 50Lakh","Black","200Km/h")  // create a object using constructor of Car Class
  // call Car class method through object
  Audi.tellModel();
  Audi.tellPrice();
  Audi.tellColor();
  Audi.tellSpeed();
  Car.myType();
  