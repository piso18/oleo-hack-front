<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>Oleo Hack</h1>
    <a class="btn btn-primary" @click="fetchData">Ver comercios</a>
    <p>&nbsp;</p>
    <ul class="list-group">
        <li class="list-group-item" v-for="com in comercios">{{ com.comercio }} - [{{ com.direccion }}]</li>
    </ul>

  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      node: "comercios",
      resourceComercios: {},
      comercios: []
    };
  },
  methods: {
    fetchData() {
      this.resource.getData({node: this.node})
          .then(response => {
              return response.json();
          })
          .then(data => {
              const resultArray = [];
              for (let key in data) {
                  resultArray.push(data[key]);
              }
              this.comercios = resultArray;
          });



    }
  },
  created() {
    const customActions = {
      getData: { method: "GET" }
    };
    this.resource = this.$resource("{node}", {}, customActions);
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1,
h2 {
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
