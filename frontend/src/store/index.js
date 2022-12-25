// Création du store

import {createStore} from 'vuex';
//const axios= require ('axios');
//const baseUrl= "http://localhost:3000/app"

// Le conteneur du state
const store = createStore({

    // Les données du state
    state: {

    },
/*
    actions: {
        createAccount:( {commit}, userRegistred)=>{
            return new Promise((resolve, reject)=> {
               commit;
            axios.post(baseUrl+'/auth/signIn', userRegistred)
            .then ( function (response){
                resolve(response);
                console.log ("response:", response.data)
            })
            
            .catch (function (error) {
                reject(error)
            }) 
                
            })
            
        },

        connection: ({commit}, userToConnect)=>{
            commit;
            axios.post(baseUrl+'/auth/login', userToConnect)
             .then ( function (response){
                console.log ("response:", response.data)
             })
             
             .catch (function (error) {
                 console.log('error !!!', error.response.data)
             }) 
        }
    }   
    */
})


// Exporter le store et l'importer dans main.js
export default store;