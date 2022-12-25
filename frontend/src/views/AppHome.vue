<template>
  <div>
    <h1>Nos produits</h1>
    <button class="btn btn-add" @click="addBtn"> Ajouter un produit </button>

    <div class="formular" v-if="add">

      <form @submit.prevent="onSubmit" enctype="multipart/form-data">
        
        <div class="my-input photo">
            <label for="productPicture"> Choisir une photo à votre produit</label><br>
            <input id="productPicture" type="file" ref="file" @change="onSelect" />
        </div>

        <div class="my-input title">
            <label for="productName"> Choisir un titre à votre produit</label><br>
            <input v-model="productName" id="productName" type="text" placeholder="Plan de travail granit"/>
        </div>

        <div class="my-input price"> 
            <label for="productPrice"> Quel est le prix de votre produit</label> <br>
            <input v-model="productPrice" id="productPrice" type="number" placeholder="12000">
        </div>

        <div class="my-input desciption">
            <label for="productPicture"> Décrivez votre produit</label><br>
          <textarea
            v-model="productDescription"
            id="productDescription"
            cols="50"
            rows="10"
            placeholder="Tapez une description du produit ici"
          >
            </textarea>
        </div>

        <button @click="addProduct" class="btn btn-submit" type="submit"> P u b l i e r </button>
      </form>

    </div>

  </div>
</template>

<script>
    import axios from 'axios';
    axios.defaults.headers.post['content-Type']='multipart/form-data';
    export default {
        name: 'AppHome',
        
        data: function() {
            return {
                file:"",
                productName:"",
                productPrice:"",
                productDescription:"",
                add: false,
                baseUrl:"http://localhost:3000/app"
            }
        },
        
        created(){
            axios( this.baseUrl+'/products')
            .then ((response)=> {
                console.log(' Nos produits:', response.data)
            })
            .catch ((error)=> {
                console.log ( "Error:", error)
            })
        },
        methods: {
            addBtn(){
                this.add=!this.add
            },
            onSelect() {
                this.file= this.$refs.file.files[0];
            },

            onSubmit() {
                                   
                console.log("this.file:", this.file);

                const ff = new FormData();

                ff.append("file", this.file);
                ff.append("productName", this.productName);
                ff.set('productPrice', this.productPrice);
                ff.append("productDescription", this.productDescription);
             
                console.log("ff:", ff)

                axios.post (this.baseUrl+"/products", ff)
                
                    .then ( (response)=> {
                        console.log (' Response:', response)
                    })
                    .catch ((error)=> {
                        console.log(' Error:', error)
                    })
            },

        }

////

    }
</script>

<style>

h1 {
    margin: 20px;
}
.formular {
    width: 90%;
    margin: 10% auto;
    background-image:  url('../assets/marbre1.jpg');
    background-size: cover;
    padding: 10px;
}
.my-input {
    margin-bottom: 10px;
}

input {
    width: 250px;
    height: 40px;
    border: none;
    border-radius: 3px;
    text-align: center;
}

label {
    font-weight: 900;
}

.btn {
    width: 120px;
    height: 30px;
    background-color: black;
    color: #fff;
    border-radius: 5px;
}
</style>
