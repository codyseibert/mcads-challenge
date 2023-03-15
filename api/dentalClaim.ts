export class DentalClaim {
  npi: string;
  timeSubmitted: string;

  constructor(npi: string) {
    this.npi = npi;
    this.timeSubmitted = new Date().toISOString();
  }
};