class car{

    setName(name){                // the value of the paramter will be assigned to the name and will be
        this.carName = name;      // passed to the this.carName
    }

    startEngine(){
        console.log('Engine started for '+this.carName);
    }

    stopEngine(){
        console.log('Engine started for '+this.carName);
    }
}

class toyota extends car{

    topSpeed(speed){
        console.log('Top Speed for '+ this.carName + ' is '+ speed);
    }
}

let myCar = new toyota();
myCar.setName('Innova');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(300);
