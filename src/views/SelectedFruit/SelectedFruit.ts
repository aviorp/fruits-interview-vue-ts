import {Component , Vue} from 'vue-property-decorator';

@Component({
name:'SelectedFruit'
})
export default class SelectedFruit extends Vue {
isEditable:boolean=false;
get fruit(){
    return this.$store.getters.getSelectedFruit;
};

addNewNutritionDetails()  {
    this.fruit.nutrition.push({title:'',value:''})
}
}