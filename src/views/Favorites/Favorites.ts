import {Component , Vue} from 'vue-property-decorator';
import { FruitModel } from '@/models/FruitModel';
@Component({
name:'FruitList'
})
export default class Favorites extends Vue {
fruits:Array<FruitModel> =[];

get favoritesGetter() {
return this.$store.getters.getFavorites;
}
created() {
 this.fruits = this.favoritesGetter;
}

openFruit(fruit:FruitModel) {
    this.$store.dispatch('useSelectFruit' , fruit);
    this.$router.replace({
        name:"selected-fruit"
    })
}
}
