import{ expect, Page } from "@playwright/test";
import { BasePage } from "./BasePage";


export class CalcPage extends BasePage{
    constructor(public page: Page){
        super(page);
    }
    
    async openCalcPage(): Promise<this> {
        await this.page.goto("https://icedrone.github.io/qa-interview-frontend/"); 
        return this;
    }


    async addition(i: number, b: number): Promise<this>{
        await this.page.getByRole('button', { name: `${i}` }).click();
        await this.page.locator('xpath=/html[1]/body[1]/div[1]/div[1]/div[2]/button[20]').click(); 
        await this.page.getByRole('button', { name: `${b}` }).click();
        await this.page.getByRole('button', { name: '=' }).click();
        return this;
    }
    async subtraction(i: number, b: number): Promise<this>{
        await this.page.getByRole('button', { name: `${i}` }).click(); 
        await this.page.locator('button:nth-child(20)').click(); 
        await this.page.getByRole('button', { name: `${b}` }).click();
        await this.page.getByRole('button', { name: '=' }).click();
        return this;
    }
    async multiplication(i: number, b: number): Promise<this>{
        await this.page.getByRole('button', { name: `${i}` }).click();
        await this.page.locator('xpath=1').click();
        await this.page.getByRole('button', { name: `${b}` }).click();
        await this.page.getByRole('button', { name: '=' }).click();
        return this;
    }
    async division(i: number, b: number): Promise<this>{
        await this.page.getByRole('button', { name: `${i}` }).click();
        await this.page.locator('button:nth-child(12)').click();
        await this.page.getByRole('button', { name: `${b}` }).click();
        await this.page.getByRole('button', { name: '=' }).click();
        return this;
    }
}