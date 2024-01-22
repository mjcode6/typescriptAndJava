export class Address {
  number: string;
  street: string;
  city: string;
  country: string;

  constructor(number: string, street: string, city: string, country: string) {
    this.number = number;
    this.street = street;
    this.city = city;
    this.country = country;
  }

  getNumber(): string {
    return this.number;
  }

  setNumber(number: string): void {
    this.number = number;
  }

  getStreet(): string {
    return this.street;
  }

  setStreet(street: string): void {
    this.street = street;
  }

  getCity(): string {
    return this.city;
  }

  setCity(city: string): void {
    this.city = city;
  }

  getCountry(): string {
    return this.country;
  }

  setCountry(country: string): void {
    this.country = country;
  }
}
