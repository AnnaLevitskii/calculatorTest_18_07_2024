import { test, expect } from '@playwright/test';
import { CalcPage } from '../calc/ui/pages/CalcPage';


test.describe('calcTests_positive', {
    tag: '@ui',
    }, ()=>{

    test('calc_addition',async ({page})=>{
        // I prefer to use this implementation because it makes 
        // reading tests easy and tests are scalable
        await new CalcPage(page).openCalcPage()
        .then(CalcPage => CalcPage.addition(1, 1));
        
        //tests outside 
        await expect(page.locator('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]'))
        .toContainText('2');
    })

    test('calc_subtraction',async ({page})=>{ //ok
        
        await new CalcPage(page).openCalcPage()
            .then(CalcPage => CalcPage.subtraction(2, 1));

        await expect(page.locator('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]'))
        .toContainText('1');
    })
    test('calc_multiplication',async ({page})=>{
        
        await new CalcPage(page).openCalcPage()
            .then(CalcPage => CalcPage.multiplication(2,2));

        await expect(page.locator('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]'))
        .toContainText('4');
    })
    test('calc_division',async ({page})=>{
        
        await new CalcPage(page).openCalcPage()
            .then(CalcPage => CalcPage.division(4,2));

        await expect(page.locator('xpath=/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]'))
        .toContainText('2');
    })
   
})