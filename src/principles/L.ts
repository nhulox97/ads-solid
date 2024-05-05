//INFO: Liskov Substitution Principle

export abstract class Sale {
  constructor(
    readonly customer: string,
    readonly tax: number,
    readonly amount: number,
  ) {}

  public abstract generate(): void;

  public abstract calculateTaxes(): void;
}

export class NationalSale implements Sale {
  constructor(
    readonly customer: string,
    readonly tax: number,
    readonly amount: number,
  ) {}

  public generate(): void {
    console.log("Generate sale!");
  }

  public calculateTaxes(): void {
    console.log("Calculate taxes!");
  }
}

export class InternationalSale implements Sale {
  constructor(
    readonly customer: string,
    readonly tax: number,
    readonly amount: number,
  ) {}

  public generate(): void {
    console.log("Generate sale!");
  }

  public calculateTaxes(): void {
    throw new Error("Not implemented!");
  }
}
