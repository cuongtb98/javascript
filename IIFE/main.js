const app = (function(){
    const cars = []
    return{
        add(car){
            cars.push(car)
        },
        edit(index, car){
            cars[index] = car
        },
        delete(index, car){
            cars.splice(index, 1)
        },
        get_cars(){
            console.log(cars);
        }
    }
})()

