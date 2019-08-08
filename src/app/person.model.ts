export class PersonModel {
  private fName: string;
  private lName: string;
  private phoneNumber: string;
  private email: string;
  private title: string;
  image: string;

  constructor() {
    this.fName = 'Timo';
    this.lName = 'Tamminen';
    this.phoneNumber = '0451363661';
    this.email = 'timo.tamminen@vaerilius.fi';
    this.title = 'Developer / Student';
    this.image = 'assets/cv.png';
  }


  getFirstName(): string {
    return this.fName;
  }

  getLastName(): string {
    return this.lName;
  }

  gePhone(): string {
    return this.phoneNumber;
  }

  getMail(): string {
    return this.email;
  }

  getTitle(): string {
    return this.title;
  }

}
