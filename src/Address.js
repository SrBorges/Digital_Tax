export default class Adress{

    constructor(street, zipCode, city, state, country){
        this.street = street
        this.zipCode = zipCode
        this.city = city
        this.state = state
        this.country = country
    }

    registerAddress(){

        return `
        Street: ${this.street}
        Zip Code: ${this.zipCode}
        City: ${this.city}
        State: ${this.state}
        Country: ${this.country}
        `

    }





}