import{ expect, Page } from "@playwright/test";


export abstract class BasePage {
    constructor(public page: Page){ }

}