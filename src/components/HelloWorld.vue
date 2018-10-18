<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
      <button v-on:click="fetchStations()">Hent Stasjoner</button>
      <div v-for="station in stations">
          <p>{{station.title}}</p>
      </div>
  </div>
</template>

<script>
    import axios from 'axios';
    import Api from '../Api';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
    data() {
        return {
            stations: []
        }
    },
    methods: {
      fetchStations() {
          axios.get(Api.getStasjoner())
              .then(res => {
                  this.stations = res.data;
              });
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
