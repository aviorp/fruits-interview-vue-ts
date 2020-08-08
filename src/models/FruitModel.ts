import { NutritionModel } from './NutritionModel';
export class FruitModel {
id:number; 
name:string;
image:string;
origin:string;
year:number;
isFavorite:boolean;
nutrition:NutritionModel[];
constructor(id:number ,name:string,image:string,origin:string,year:number,isFavorite:boolean,nutrition:any[]){
   this.id = id;
   this.name = name;
   this.image = image;
   this.origin = origin;
   this.year = year;
   this.isFavorite = isFavorite;
   this.nutrition = nutrition;
}
}