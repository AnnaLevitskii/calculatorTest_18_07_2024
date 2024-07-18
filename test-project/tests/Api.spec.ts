import { test, expect } from '@playwright/test';
import { ApiHelper } from '../api/ApiHelper';

test.describe('apiTests', {
    tag: '@api',
    }, ()=>{
    
    test('api_getPhotos',async ({page})=>{
        //tests inside or tests outside depends on the style guide, I did both
        (await new ApiHelper(page).requestGET_photos()).assert_photos();
    })
   
})

