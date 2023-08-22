import Product from "../Product.js";

describe("Test can check if the store is Shein or AliExpress like the Product Value", () => {

    it("This method can recive kind of store and type of product", () => {

        const data = {
            product: "Anything",
            store: "Shein" || "AliExpress",
            price: null
        }

        const dataProduct = new Product(data.product, data.store, data.price)

        const waiting = dataProduct.aboutProduct();

        expect(waiting).toBe(`
        Product: ${data.product}
        Store: ${data.store}
        `)

    })

    

})