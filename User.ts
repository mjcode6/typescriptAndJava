import { Address } from "./Address";
import { Photo } from "./Photo";

export class User {
  birthdate: Date;
  size: number;
  photos: Photo[];
  address: Address;

  constructor(
    birthdate: Date,
    size: number,
    photos: Photo[],
    address: Address
  ) {
    this.birthdate = birthdate;
    this.size = size;
    this.photos = photos;
    this.address = address;
  }

  getBirthdate(): Date {
    return this.birthdate;
  }

  setBirthdate(birthdate: Date): void {
    this.birthdate = birthdate;
  }

  getSize(): number {
    return this.size;
  }

  setSize(size: number): void {
    this.size = size;
  }

  getPhotos(): Photo[] {
    return this.photos;
  }

  setPhotos(photos: Photo[]): void {
    this.photos = photos;
  }

  getAddress(): Address {
    return this.address;
  }

  setAddress(address: Address): void {
    this.address = address;
  }
}
