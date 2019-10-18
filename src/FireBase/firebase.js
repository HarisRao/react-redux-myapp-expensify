import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyDXwuRfXstZhGw4auUgJAPqNd-j0-GFxtQ",
    authDomain: "expensify-9f155.firebaseapp.com",
    databaseURL: "https://expensify-9f155.firebaseio.com",
    projectId: "expensify-9f155",
    storageBucket: "",
    messagingSenderId: "335077993789",
    appId: "1:335077993789:web:9c8716be83390d1b59a954",
    measurementId: "G-GNF7W0C01S"
  };
firebase.initializeApp(firebaseConfig);

const database=firebase.database();
const googleAuthProvider=new firebase.auth.GoogleAuthProvider();
export {firebase,googleAuthProvider,database as default} 







// firebase.database().ref().set({
//     name:'Haris Rao',
//     id:10,
//     age:21,
//     location:{
//       city:'karachi',
//       country:'pakistan'
//     },
//     job:{
//       title:'software developer',
//       company:'amazon'
//     }
// }).then(()=>{
//   console.log('data is saved!')
// }).catch((e)=>{
//   console.log('Failed',e)
// })
// firebase.database().ref('age').remove().then(()=>{
//   console.log('removed')
// }).catch((e)=>{
//   console.log('not removed',e)
// })
// firebase.database().ref().update({
//   id:54321,
//   'location/city':'KARACHI'
// })
// firebase.database().ref('job/title').once('value').then((data)=>{
//   console.log(data.val())
// }).catch((e)=>{
//   console.log('failed',e)
// })
// firebase.database().ref().on('value',(data)=>{
//   console.log(data.val())
// })

// const firebaseNotes={
//   notes:{
//     aj550dd5:{
//       title:'first title',
//       body:'body of first id'
//     },
//     qwertt5431:{
//       title:'first title',
//     body:'body of first id'
//     }
//     }

//     }

// const notes=[{
//   id:10,
//   title:'first title',
//   body:'body of first id'
// },{
// id:11,
// title:'second title',
// body:'body of second id'
// }
// ]

// firebase.database().ref('notes').set(firebaseNotes)
// firebase.database().ref('notes').push({
//   title:'first title of id one',
//   body:'first body of id one'
// })
// firebase.database().ref('notes').push({
//   body:'first body id',
//   title:'first title id'
// })
// firebase.database().ref('notes').push({
//   city:'karachi 2',
//   country:'pakistan 2'
//})
// firebase.database().ref('notes/-Lqg_SW5QVtJbWvds45b').update({
//   city:'lahore'
// })

// firebase.database().ref('expenses').push({
//   description:'rent',
//   amount:20000,
//   createat:1000,
//   note:'my notes'
// })
// firebase.database().ref('expenses').push({
//   description:'rent',
//   amount:20000,
//   createat:1000,
//   note:'my notes'
// })

// firebase.database().ref('expenses').push({
//   description:'rent',
//   amount:20000,
//   createat:1000,
//   note:'my notes'
// })


// setTimeout(()=>{
// firebase.database().ref('age').set(50)

// },5000)