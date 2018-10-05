import Vue from 'vue';
import moment from 'moment';

Vue.filter('makeString', function (value) {
  if (value) {
    return value.join(', ');
  }
})
