import Vue from 'vue';
import Vuex from 'vuex';
import Fruits from './modules/fruits';

Vue.use(Vuex)

export default new Vuex.Store({
  // state: {
  //   fruits:Array<FruitModel>(),
  //   favorites:Array<FruitModel>(),
  //   selectedFruit:{},
  // },
  // getters: {
  //   getState :state => state,
  // },
  
  // mutations: {
  //   setInitialFruits :state =>{
  //     let apple = new FruitModel('Apple' , 'https://tinyurl.com/y5x5dlw4' ,'Japan' , 1948 , false , [{calories:123} , {sugar:30} , {dietaryFiber:4.1} , {protein:0.6}]);
  //     let banana = new FruitModel('Banana' , 'https://tinyurl.com/yyuv98p8' ,'Africa' , 1968 , false ,[{calories:456} , {sugar:10} , {dietaryFiber:5.3} , {protein:1.4}]);
  //     let watermelon = new FruitModel('Watermelon' , 'https://tinyurl.com/yxbjxtxl' ,'Israel' , 1997 , false ,[{calories:789} , {sugar:40} , {dietaryFiber:4.5} , {protein:1.9}]);
  //    state.fruits = [apple,banana ,watermelon];
  //  } ,
  //  selectFruit : (state , fruit:FruitModel) => {
  //    state.selectedFruit= fruit;
  //  }
  // },
  // actions: {
  //   setInitialFruits :({commit}) =>{
  //      commit('setInitialFruits')
  //   }, 
  //   selectFruit :({commit} ,fruit:FruitModel ) => {
  //    commit('selectFruit' ,fruit)
  //   }
  // },
  modules: {
    Fruits
  }
})
