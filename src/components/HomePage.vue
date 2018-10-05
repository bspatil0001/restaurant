<template>
  <div class="wrapper">
    <div class="search-wrapper">
      <table class="">
        <tr>
          <td>
            <div class="input-element">
              <input type="text" class="form-element" name="search" v-model="searchString" @blur="searchRestaurants"/>
            </div>
            <div class="search-keys" v-if="searchKeys.length > 0">
              Showing results for:
              <ul>
                <li v-for="(key, kindex) in searchKeys" :key="kindex" @click="removeKeyFromSearch(kindex)">
                  <div class="delete"></div>
                  {{ key }}
                </li>
              </ul>
            </div>
          </td>
          <td>
            <div class="input-element">
              <div class="select-style">
                <select @change="sortRestaurant()" v-model="sortType">
                  <option value="">No sort</option>
                  <option value="rating">Rating</option>
                  <option value="time">Time</option>
                </select>
              </div>
            </div>
            <div class="buttons">
              <ul>
                <li>
                  <input class="button" type="button" value="Clear" @click="clearAllFilters()"/>
                </li>
              </ul>
            </div>
          </td>
        </tr>
      </table>
    </div>
    <div class="restaurant-wrapper">
      <div v-for="(restaurant, index) in filteredrestaurants" :key="index" class="restaurant clearfix">
        <div class="restaurant-img">
          <img :src="restaurant.img"/>
        </div>
        <div class="restaurant-info">
          <div class="info-1">
            <div class="restaurant-name">{{ restaurant.name }}</div>
            <div class="restaurant-cusines">{{ restaurant.cusines | makeString }}</div>
          </div>
          <div class="info-2">
            <ul>
              <li>{{ restaurant.rating }}</li>
              <li>{{ restaurant.time }} min</li>
            </ul>
          </div>
        </div>
      </div>
      <div v-if="filteredrestaurants.length == 0">
        <h3>No Restaurants Found</h3>
      </div>
    </div>

  </div>
</template>

<script src="./home.js"></script>
