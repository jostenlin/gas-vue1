<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form @submit.prevent="submit">
      <Label>user</Label>
      <input type="text" v-model="formData.user" />
      <br>
      <Label>age</Label>
      <input type="text" v-model="formData.age" />
      <br>
      <button type="submit">Submit</button>
      <input type="text" v-model="formData.id" />
    </form>
    
  </div>
</template>

<script>
export default {
  name: 'submit',
  data () {
    return {
      msg: 'Welcome to GAS-Clasp-Vue.js',
      formData: {
        user:'',
        age:'',
        id:''
      }
    }
  },
  methods:{
    submit: function () {
      
      const user = [this.formData.user, this.formData.age];

      // 這個返回void
      // let back=google.script.run.createUser(user);

      // 如果要取得返回值，必須改用以下方法

      // callback方法
      const self = this; // 先設定指向Vue實例的self變量
      let callback= function(returnedValue) {
                      // 若使用this，將是未定義
                      self.formData.id=returnedValue.id;
                    }

      // createUser是後端的方法，返回後會執行callback方法
      google.script.run.withSuccessHandler(callback).createUser(user);
    }

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
