// import { HttpClient } from '@angular/common/http';


// export default class JsonData {

//     static iconArray: any = [];

//     private _jsonURL = '/assets/json/material-icons-list-json.json';
    
//     constructor(private http: HttpClient) {
//         this.getJSON().subscribe(data => {
//             JsonData.iconArray = data;
//         });
//     }

//     public getJSON() {
//         return this.http.get(this._jsonURL);
//     }

//     public static getData(): any {
//         return this.iconArray;
//     }
// }
let iconList = require('src/assets/json/material-icons-list-json.json');

export function getIconList(category: string): any {

    // console.log(JsonData.getData());
    // console.log(iconList);
    // JsonData.getData();

    const iconArray = [] as any;
    for (let iconData of iconList.categories) {
        if (iconData.name == category) {
            for (let icon of iconData.icons) {
                iconArray.push(icon.id as string);
            }
        }
    }
    return iconArray;
}