import {Component , Vue} from 'vue-property-decorator';

@Component({
name:'Header'
})
export default class Header extends Vue {
message:string='Header Component !'

}