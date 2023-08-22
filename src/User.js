export default class User{

    
    #name
    #id 
    #formOfPay

    constructor(name, age, id, formOfPay, informatioanAddress){
        
        this.#name = name
        this.age = age
        this.#id = id
        this.#formOfPay = formOfPay
        this.informatioanAddress = informatioanAddress

    }

    informationUser(){
        return `
        Name: ${this.#name}
        Age: ${this.age}
        Id: ${this.#id}
        Form of Payment: ${this.#formOfPay}
        Address: ${this.informatioanAddress}
        `
    }

    get name(){
        return this.#name
    }

    get Age(){
        return this.#id
    }

    get formOfPay(){
        return this.#formOfPay
    }

    set formOfPay(newFormOfPay){
        this.#formOfPay = newFormOfPay
    }

}