export default class Product{

    constructor(product, store, price){
        this.product = product
        this.store = store
        this.price = price
    }

    aboutProduct(){

        return `
        Product: ${this.product}
        Store: ${this.store}
        `
    }

    taxOfProduct(price, store){

        if(price >= 248.52 && store === "Shein" || store === "AliExpress"){
            let tax = (price * 60) / 100
            let newPrice = price + tax
            
            return `
            Tax: ${tax}
            Price with Tax: ${newPrice}

            `
        }else{
            return `Original Price: ${price}`
        }

    }
}