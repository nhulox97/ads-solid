import { InternationalSale, NationalSale, Sale } from "./principles/L";

let sale: Sale;
sale = new NationalSale("Sergio", 0.13, 2);
sale = new InternationalSale("Alberto", 0, 1);

sale.calculateTaxes();
