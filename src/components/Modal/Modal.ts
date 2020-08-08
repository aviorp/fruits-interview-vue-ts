import {Component , Vue} from 'vue-property-decorator';

@Component({
name:'Modal'
})
export default class Modal extends Vue {
message:string='Modal Component !';

}