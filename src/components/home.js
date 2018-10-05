import { RESTAURANTS } from '../assets/constants';
import service from '../assets/service';

export default {
  name: "HomePage",
  components: {
  },
  data() {
    return {
      searchString:'',
      sortType: '',
      filteredrestaurants : [],
      searchKeys:[],
      restaurants: []
    }
  },
  mounted: function () {
    service.getRestaurant().then(data => {
      let restaurants = data.data.restaurants;
      this.filteredrestaurants = restaurants
      this.restaurants = restaurants
    })
  },
  methods: {
    searchRestaurants(){
      this.filteredrestaurants = [];
      let restaurants = Object.create(this.restaurants);
      this.searchKeys = this.searchString.trim().length > 0 ? this.searchString.trim().split(' '): [];
      if(this.searchKeys.length > 0){
        for(let i=0;i<restaurants.length;i++){
          for(let j=0;j<this.searchKeys.length;j++){
            if(restaurants[i].name.toLowerCase().indexOf(this.searchKeys[j].toLowerCase()) > -1){
              this.filteredrestaurants.push(restaurants[i]);
              restaurants.splice(i, 1);
            }
          }
        }
      }
      else{
        this.filteredrestaurants = this.restaurants;
      }
    },
    sortRestaurant(){
      let type = this.sortType;
      this.filteredrestaurants.sort(function(a, b){
        return a[type]-b[type];
      })
    },
    clearAllFilters(){
      this.searchString = "";
      this.searchRestaurants();
    },
    removeKeyFromSearch(index){
      this.searchKeys.splice(index,1);
      this.searchString = this.searchKeys.join(' ');
      this.searchRestaurants();
    }
  }
};
