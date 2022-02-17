class CofeeMake {
    constructor(number,code,name = 'Pasha') {
        this.number = number
        this.code = code
    }
    on() {
        console.log('Show must go on')
    }
    off() {
        console.log('Show must stop')
    }
}
class CofeeMakeRizhkova extends CofeeMake{
    turnOn(){
        console.log(this.number + this.code)
    }
    turnOff(){
        console.log('We are waiting for u')
    }
}
class CofeeMakeKapelna extends CofeeMake{
    clean(){
        console.log('We are making best cofee')
        console.log(this.number - this.code)
    }
    return(){
        console.log('We are waiting for u')
    }
}
class CofeeMakeKavoM extends CofeeMake{
    cofeeView(){
        console.log('We are making best cofee')
    }
    cofeeReview(){
        console.log('We are waiting for u')
    }
}


let pp = new CofeeMakeRizhkova(10,20)
pp.turnOn()
pp.on()
