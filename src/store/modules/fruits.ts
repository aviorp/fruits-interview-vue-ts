import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { FruitModel } from '@/models/FruitModel';

@Module
export default class Fruits extends VuexModule {
  fruits:Array<FruitModel> = [];
  favorites:Array<FruitModel> = [];
  selectedFruit:FruitModel = new FruitModel(0,'' , '' ,'' , 0 , false , []);
  
   
  get getFruits() {
  return this.fruits;
  }
  get getSelectedFruit(){
    return this.selectedFruit;
  }
  get getFavorites(){
    return this.favorites;
  }

   @Mutation
  setInitialFruits() {
    let apple = new FruitModel(1,'Apple' , 'https://tinyurl.com/y5x5dlw4' ,'Japan' , 1948 , false , [{title:'Calories',value:123} , {title:'Sugar',value:30} , {title:'Dietary Fiber' , value:4.1} , {title:"Protien" ,value:1.6}]);
    let banana = new FruitModel(2, 'Banana' , 'https://tinyurl.com/yyuv98p8' ,'Africa' , 1968 , false ,[{title:'Calories',value:456} , {title:'Sugar',value:40} , {title:'Dietary Fiber' , value:3.9} , {title:"Protien" ,value:2.6}]);
    let watermelon = new FruitModel(3,'Watermelon' , 'https://tinyurl.com/yxbjxtxl' ,'Israel' , 1997 , false ,[{title:'Calories',value:789} , {title:'Sugar',value:50} , {title:'Dietary Fiber' , value:8.9} , {title:"Protien" ,value:3.6}]);
    this.fruits = [apple,banana,watermelon];
  }
  
  @Action
  useSetInitialFruits():void {
    this.context.commit('setInitialFruits');
  }
    @Mutation
    selectFruit(fruit:FruitModel) {
    this.selectedFruit = fruit;
    console.log(this.selectedFruit)
  }

  @Action
  useSelectFruit(fruit:FruitModel){
   this.context.commit('selectFruit',fruit)
  }

  @Mutation
  toggleFavorite() {
    this.selectedFruit.isFavorite= !this.selectedFruit.isFavorite;
    if(this.selectedFruit.isFavorite) {
      this.favorites.push(this.selectedFruit)
    } else {
      let index = this.favorites.findIndex(el => el.id === this.selectedFruit.id);
      this.favorites.splice(index,1);
    }
  };

  @Action
  useToggleFavorite() {
    this.context.commit('toggleFavorite')
  }

}