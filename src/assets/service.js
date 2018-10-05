import Vue from 'vue';
import axios from './axios';

var ajaxConfig = {
  contentType: 'application/json',
  crossDomain: true
}

const url = "https://api.myjson.com/bins/157g44";

let getRestaurant = function () {
  return axios().get(url);
}

export default {
  getRestaurant: getRestaurant
};
