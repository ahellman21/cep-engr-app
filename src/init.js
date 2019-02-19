// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var personal_info = {
  firstName: "Aaron"
  ,lastName: "Hellman"
  ,jobTitle: "Data Analyst"
  ,homeOffice: "Domain D2"
};

// var bookJSON =
// fetch('https://openlibrary.org/api/books?bibkeys=OLID:OL262758W&format=json&jscmd=data')
// ;
// function api_fetch() {
//   fetch('https://openlibrary.org/api/books?bibkeys=OLID:OL262758W&format=json&jscmd=data')
//     .then(function(response) {
//       var bookJSON = response.json()
//       return bookJSON;
//     })
//     // .then(function(myJson) {
//     //   console.log(JSON.stringify(bookJSON));
//     // });
// }
//
// // const userAction = async () => {
// //     const response = await fetch('http://example.com/movies.json');
// //     const myJson = await response.json(); //extract JSON from the http response
// //     // do something with myJson
// //   }
//
// // var bookJAVAS = JSON.parse(bookJSON);
//
// function apiFunc() {
//   document.getElementById("api_title_txt").innerHTML = bookJSON.title;
//   document.getElementById("api_image").innerHTML = bookJSON.cover.small;
//   document.getElementById("api_author_txt").innerHTML = bookJSON.authors.name;
// };
//
// const ul = document.getElementById('bookAPI');
// const url = 'https://openlibrary.org/api/books?bibkeys=OLID:OL262758W&format=json&jscmd=data';
// fetch(url)
// .then((resp) => resp.json())
// .then(function(data) {
//   let authors = data.results;
//   return authors.map(function(author) {
//     let li = createNode('li'),
//         img = createNode('img'),
//         span = createNode('span');
//     img.src = author.picture.medium;
//     span.innerHTML = `${author.name.first} ${author.name.last}`;
//     append(li, img);
//     append(li, span);
//     append(ul, li);
//   })
// })
//
// // Import socket.io with a connection to a channel (i.e. tops)
// const socket = require('socket.io-client')('https://ws-api.iextrading.com/1.0/tops')
// // Listen to the channel's messages
// socket.on('message', message => console.log(message))
// // Connect to the channel
// socket.on('connect', () => {
//   // Subscribe to topics (i.e. appl,fb,aig+)
//   socket.emit('subscribe', 'expe')
//   // Unsubscribe from topics (i.e. aig+)
//   socket.emit('unsubscribe', 'aig+')
// })
// // Disconnect from the channel
// socket.on('disconnect', () => console.log('Disconnected.'))
