import {Component , Vue} from 'vue-property-decorator';
import appHeader from '@/components/Header/Header.vue';

@Component({
    components: {
        appHeader
    }
})
export default class Layout extends Vue {
message:string='Layout Component !'

}