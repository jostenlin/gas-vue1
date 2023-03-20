<template>
  <div>
    <!-- v-for -->
    <ul v-if="false">
      <li v-for="(movie,idx) in movies" :key=idx>
        <input type="checkbox" :checked="movie.checked"> {{idx+1}}.{{movie.name}}
      </li>
    </ul>

    <!-- v-if, v-else-if, v-else -->
    <p v-if="movies.length==0">電影清單為空</p>
    <h2 v-else-if="movies.length==1">{{movies[0].name}}</h2>
    <ul v-else>
      <li v-for="(m,idx) in movies" :key="idx">{{m.name}}</li>
    </ul>
  </div>

  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to GAS-Clasp-Vue.js',
      movies:[
        {name:'女人香',checked:true},
        {name:'秒速五公分',checked:false},
        {name:'鐵達尼號',checked:true},
        {name:'蝴蝶',checked:false}
      ]
    }
  },
  methods:{
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
