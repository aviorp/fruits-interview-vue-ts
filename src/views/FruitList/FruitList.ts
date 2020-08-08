import {Component , Vue} from 'vue-property-decorator';
import { FruitModel } from '@/models/FruitModel';
@Component({
name:'FruitList'
})
export default class FruitList extends Vue {
fruits:Array<FruitModel> =[];

get fruitsGetter() {
return this.$store.getters.getFruits;
}
created() {
 this.fruits = this.fruitsGetter;
}

openFruit(fruit:FruitModel) {
    console.log(fruit.name)
    this.$store.dispatch('useSelectFruit' , fruit);
    this.$router.replace({
        name:"selected-fruit"
    })
}
}
