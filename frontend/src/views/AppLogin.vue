<template>
    <div class="container">
        <div class="form-card">
            
            <h1 v-if="mode=='connection'"> Connexion </h1>
            <h1 v-else> Inscription </h1>

            <div v-if="mode=='registration'" class="mode">
                <p class="question"> Vous avez déjà un compte? </p>
                <br>
                <p class="notCount" @click="switchToConnexion()"> Se Connecter </p>
            </div>

            <div v-else class="mode">
                <p class="connection"> Vous n'avez pas encore un compte? </p>
                <br>
                <p class="notCount" @click="switchToInscription()"> S'inscrire </p>
            </div>

            <div class="email">
                <input v-model="email" type="email" placeholder=" Votre E-mail" class="inputNormaly" :class="{inputValid: email && emailValidate, inputNotValid: email && !emailValidate}"> <span v-if="emailValidate"> <font-awesome-icon icon="fa-solid fa-check" /></span>
                    
                  <!--  <font-awesome-icon :icon="['fa', 'check']" /></span>  -->
                <p v-if="!emailValidate && email!=''" class="inputError"> {{ mailError}} </p>
            </div>
           
            <div class="password">
                <input v-model="password" type="password" placeholder="   Mot de passe" class="inputNormaly" :class="{inputValid: password && passwordValidate, inputNotValid:password && !passwordValidate}"> <span v-if="passwordValidate"> <font-awesome-icon icon="fa-solid fa-check" /></span>
                <p v-if="!passwordValidate && password!=''" class="inputError"> {{ passwordError}} </p>
            </div>
             
            <div v-if="mode=='registration'" class="userName" >
                <input v-model="userName"  type="text" placeholder="   Nom" class="inputNormaly" :class="{inputValid: userName && userNameValidate, inputNotValid: userName && !userNameValidate}"> <span v-if="userNameValidate"> <font-awesome-icon icon="fa-solid fa-check" /></span>
                <p v-if="!userNameValidate && userName!=''" class="inputError"> {{ userNameError}} </p>
            </div>

            <p v-if="serverError " class="serverErrors">
                {{ serverError }}
            </p>

            <button @click="login" v-if="mode=='connection'" class="button" :disabled="!formValidate"> Je me connecte </button>
            <button @click="createAccount" v-else class="button" :disabled="!formValidate"> Je m'inscris </button>
        </div> 
    </div>
</template>

<script>
    
import axios from 'axios'; 
    export default {
        name: "AppLogin",

        data: function () {
            return {
                mode: 'connection',
                email: '',
                password:'',
                userName: '',
                mailError: "",
                passwordError:"",
                userNameError:"",
                serverError:"",
                baseUrl:"http://localhost:3000/app"
            }
        },        
        computed:{
            formValidate: function() {
                if (this.mode=='connection') {
                    if (this.email!='' && this.password!='') {
                        return true
                    } else {
                        return false
                    }
                } else {
                    if (this.email!='' && this.userName!='' && this.password!="") {
                        return true
                    } else {
                        return false
                    }
                }
            },
            emailValidate: function(){
               const emailRegex= /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                if (this.email && emailRegex.test(this.email)){
                    return true
                } else return false
            },  

            passwordValidate: function(){
                if (this.password && /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/.test(this.password)){
                    return true
                } else return false
               
            },
            userNameValidate: function(){
                if (/^(?=.*?[A-Za-z]).{3,}$/.test(this.userName)){
                    return true
                } else return false
               
            }

        },

        methods: {
          
            switchToInscription () {
                this.mode='registration';
                this.mailError="";
                this.passwordError="";
                this.userNameError="";
                this.email="";
                this.password="";
                this.userName="";
            },

            switchToConnexion () {
                this.mode='connection';
                this.mailError="";
                this.passwordError="";
                this.userNameError="";
                this.email="";
                this.password="";
            },

            createAccount() {
                
                if (this.emailValidate && this.passwordValidate){
                    const userRegistred= {
                        email: this.email,
                        password: this.password,
                        userName: this.userName
                    }
                    
                    axios.post(this.baseUrl+'/auth/signIn', userRegistred)
                    .then ((res)=> {
                        console.log ("response:", res)
                    })
                    .catch ((err)=>{
                        console.log (err)
                    })
                  
                } else {

                    if (!this.emailValidate) {
                        this.mailError= " Merci d'introduire un email valide!";
                    } 
                    if (!this.passwordValidate){
                        this.passwordError="Merci d'introduire un mot de passe valide! 8 caractères minimum dont une majuscule, un chiffre, un caractère spécial..."
                    } 
                    if (!this.userrNameValidate){
                        this.userNameError="Votre nom doit contenir au moins 3 caractères !"
                    }
                }

            },
            login() {
                this.serverError="";

                if (this.emailValidate && this.passwordValidate){
                  
                  const userToConnect= {
                    email: this.email,
                    password: this.password,
                  }

                  axios.post (this.baseUrl+'/auth/login', userToConnect)
                
                    .then ((res)=>{
                        console.log( "response:", res)
                    })    
                    .catch ((err)=> {
                        console.log ("error:", err.response.data);
                        this.serverError=err.response.data.message
                    })              
                  
                } else {

                    if (!this.emailValidate) {
                        this.mailError= " Merci d'introduire un email valide!";
                    } 
                    if (!this.passwordValidate){
                        this.passwordError="Merci d'introduire un mot de passe valide! 8 caractères minimum dont une majuscule, un chiffre, un caractère spécial..."
                    } 
                }
            }
        }      
          
/**/
    }
</script>

<style scoped>
.container {
    margin: 0;
    height: 100vh;
    background: linear-gradient(blue,green, yellow);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.form-card {
    width: 300px;
    min-height: 400px;
    background-image: url('../assets/marbre1.jpg');
    color: black;
    border-radius: 5px;
    padding-bottom: 20px;
}

h1 {
    margin: 20px;
    letter-spacing: 1px;
    text-shadow: 1px 1px rgb(243, 238, 238);
}
.mode {
    margin-bottom: 20px;
}
input {
    width: 80%;
    height: 40px;
    margin-bottom: 10px;
    border-radius: 5px;
    position: relative;
}
.notCount {
    color: rgb(14, 13, 16);
    font-weight: bold;
    cursor: pointer;
    text-decoration: underline;
}
.connection {
    margin-top: 40px;
}
button {
    width: 50%;
    height: 40px;
    border-radius: 10px;
    margin-top: 40px;
}
.inputError{
    margin: 5px 10%;
    color: red;
    font-size: .8rem;
    text-align: justify;
}
.inputNormaly {
    border-color: rgb(33, 34, 33);
}
.inputValid {
    border-color: green;
}
.inputNotValid {
    border-color: red;
}

.email, .password, .userName {
    position: relative;
}
span{
    position: absolute;
    right: 20%;
    top: 20%;
    z-index: 1;
    color:green;
}

</style>