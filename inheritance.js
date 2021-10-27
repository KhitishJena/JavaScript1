class car{

    setName(name){
        this.name = name;
    }

    startEngine(){
        console.log('Engine started for '+this.name);
    }

    stopEngine(){
        console.log('Engine started for '+this.name);
    }
}

class toyota extends car{

    topSpeed(speed){
        console.log('Top Speed for '+ this.name + ' is '+ speed);
    }
}

let myCar = new toyota();
myCar.setName('Innova');
myCar.startEngine();
myCar.stopEngine();
myCar.topSpeed(300);
