export class Infocovid {
    Active_Cases_text:string;
    Country_text:string;
    Last_Update:string;
    New_Cases_text:string;
    New_Deaths_text:string;
    Total_Cases_text:string;
    Total_Deaths_text:string;
    Total_Recovered_text:string;

    Infocovid(Active_Cases_text?:string, Country_text?:string, Last_Update?:string, New_Cases_text?:string, New_Deaths_text?:string, Total_Cases_text?:string, Total_Deaths_text?:string, Total_Recovered_text?:string){
        this.Active_Cases_text=Active_Cases_text;
        this.Country_text=Country_text;
        this.Last_Update=Last_Update;
        this.New_Cases_text=New_Cases_text;
        this.New_Deaths_text=New_Deaths_text;
        this.Total_Cases_text=Total_Cases_text;
        this.Total_Deaths_text=Total_Deaths_text;
        this.Total_Recovered_text=Total_Recovered_text;
    }
}
