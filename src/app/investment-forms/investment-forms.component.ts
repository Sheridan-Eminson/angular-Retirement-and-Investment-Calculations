import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-investment-forms",
  templateUrl: "./investment-forms.component.html",
  styleUrls: ["./investment-forms.component.css"]
})
export class InvestmentFormsComponent implements OnInit {
  initialInvestment: number = 0;
  percentageOfGrowth: number = 0;
  numberOfYears: number = 0;
  averageInvestmentEachYear: number = 0;
  total_investment_value: number;

  investmentCalculation(
    initialInvestment,
    percentageOfGrowth,
    numberOfYears,
    averageInvestmentEachYear
  ) {
    for (let i = 0; i < numberOfYears; i++) {
      let total_investment_single_year =
        initialInvestment + averageInvestmentEachYear;
      initialInvestment =
        total_investment_single_year +
        total_investment_single_year * (percentageOfGrowth / 100);
      this.total_investment_value = initialInvestment;
    }
    return this.total_investment_value;
  }

  handleClear() {
    this.initialInvestment = 0;
    this.percentageOfGrowth = 0;
    this.numberOfYears = 0;
    this.averageInvestmentEachYear = 0;
  }

  constructor() {}

  ngOnInit() {}
}
