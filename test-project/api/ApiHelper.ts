import{ expect, Page } from "@playwright/test";
import { request } from 'playwright';
import { Photo } from "./Photo.type";

export class ApiHelper {
    requestGET_photos_body:Photo[];

    constructor(public page: Page){}

    async requestGET_photos(): Promise<this> {
        const apiRequest = await request.newContext();
        const response = await apiRequest.get('https://my-json-server.typicode.com/icedrone/json-demo-server/photos');
    
        if (response.ok()) {
            const arr = await response.json();
            this.requestGET_photos_body = arr[0];
        } else {
            console.error(`Error: ${response.status()}`);
        }  
        return this;
    }
    
    async assert_photos(): Promise<this> {
        const photo1= this.requestGET_photos_body[0];
        //  here I would prefer to create array from every title from array in JSON 
        //  and compare it in a cycle with those titles that we receive in response body
        //  I chose this implementation for speedup 
        expect(photo1.title).toContain('reprehenderit est deserunt velit ipsam');

        //  here I would prefer to create array from every url from array in JSON 
        //  and compare it in a cycle with those urls that we receive in response body
        //  I chose this implementation for speedup 
        expect(photo1.url).toContain('https://via.placeholder.com/600/771796');
        return this;
    }


}