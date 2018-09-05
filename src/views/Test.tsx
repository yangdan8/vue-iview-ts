import { Component, Vue } from 'vue-property-decorator';
import { Button } from 'iview';

@Component({})
export default class Home extends Vue {
  protected fff() {
    const btn = this.$refs.gg as Button;
    btn.type = 'warning';
  }
}
