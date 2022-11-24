const _ = require('lodash');

class Lodashs {
  throttle(fun: any) {
    return _.throttle(fun, 1500, {
      leading: true,
      trailing: false,
    });
  }
}
export default new Lodashs();
