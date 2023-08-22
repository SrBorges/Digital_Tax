import User from "./User.js";
import Product from "./Product.js";
import Adress from "./Address.js";


const newAdress = new Adress("Street: One", "1110346", "Mogi Guaçu", "São Paulo", "Brazil")
const newPerson = new User("Adriano", 23, "46523578", "Crédito", newAdress.registerAddress())
const infoProduct = new Product("Alexa", "Shein", 100)



console.log(newPerson.informationUser())
console.log(infoProduct.aboutProduct())
console.log(infoProduct.taxOfProduct(infoProduct.price, infoProduct.store))


