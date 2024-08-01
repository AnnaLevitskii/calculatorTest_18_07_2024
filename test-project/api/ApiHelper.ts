import{ expect, Page } from "@playwright/test";
import { request } from 'playwright';
import { Photo } from "./Photo.type";

export class ApiHelper {
    requestGET_photos_body:Photo[];

    url_api_images = 'https://my-json-server.typicode.com/icedrone/json-demo-server/images';
    url_api_photo = 'https://my-json-server.typicode.com/icedrone/json-demo-server/photos';

    constructor(public page: Page){}

    async requestGET(url: string): Promise<this> {
        const apiRequest = await request.newContext();
        const response = await apiRequest.get(url);
        
        
        if (response.ok()) {
            
            const arr = await response.json();
            this.requestGET_photos_body = arr[0];
            
            console.log("here "+this.requestGET_photos_body)
            
        } else {
            
            console.error(`Error: ${response.status()}`);
        }  
        console.log("4")
        return this;
    }

    async requestGET_photos(): Promise<this> {
        this.requestGET(this.url_api_photo);

        console.log("2 "+this.requestGET_photos_body)
        return this;
    }
    async assert_photos(): Promise<this> {
        // const photo1= this.requestGET_photos_body[0];
        
        // expect(photo1.title).toContain('reprehenderit est deserunt velit ipsam');

        
        // expect(photo1.url).toContain('https://via.placeholder.com/600/771796');

        return this;
    }


}