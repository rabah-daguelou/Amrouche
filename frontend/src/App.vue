<template>
  <div class="my-header">
    <nav>
      <router-link to="/"> <img src="./assets/ayi.jpg" width="42" alt=""> </router-link>
      <router-link to="/About"> A propos </router-link>
      <router-link to="/Login"> Se connecter </router-link>
    </nav>  

    <h1> {{ mode }}</h1>
  </div>
  <router-view />

</template>

<script>
//import axios from 'axios';



export default {
  name: "App",
  
      
    
  // Les composants
  components: {

  },

  // Les données
  data () {
    return {
      isConnected: false,
      products: [],
      
    }
  },

  // Les méthodes
  /*
  created () {
    this.getAllProducts();
  },

  methods: {
    getAllProducts () {
      axios.get('http://localhost:3000/api/products')
      .then((res)=> {
        console.log ('Products:', res)
      })
      .catch((err)=> {
        console.log ('Erreur:', err)
      })
    }
  }
*/
};


</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 0;
  padding: 0;
}

nav {
  height: 60px;
  background-image: url('./assets/marbre.jpg');
  display: flex;
  justify-content: space-around;
  align-items: center;
  
}

nav a {
  color: #fff;
  text-decoration: none;
  cursor: pointer;
}

nav a:hover {
  border-bottom: 1px solid #989a9c;
}

nav img {
  height: 50px;
  margin-top: 5px;
  border-radius: 50%;
  border: 2px solid #fff
}

nav img:hover {
  transform: scale(1.2);
}

.router-link-active {
  font-weight: bold;
  font-size: 1.2em;
}
</style>
