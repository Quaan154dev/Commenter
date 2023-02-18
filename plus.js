function createApp (){
    let cars = []

    return {
        add(car){
            cars.push(car)
        },
        show(){
           console.log(cars)
        }
    }
}

const app = createApp()
app.show()

app.add("BMV");
app.add("HONDA");
app.add("SUZUKI");

app.show()