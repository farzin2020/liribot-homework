console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};


// const endpoint = "https://api.spotify.com/v1/recommendations";
// const params = {
//   'seed_artists': '6sFIWsNpZYqfjUpaCgueju',
//   'target_danceability': '0.9'
// };

// fetch(`${endpoint}?${qs.stringify(params)}`, {
//   method: "GET",
//   headers: {
//       Authorization: `Bearer ${userAccessToken}`     
//   }
// })
// .then(response => response.json())
// .then(({tracks})) => {
//   tracks.forEach(item => {
//     console.log(`${item.name} by ${item.artists[0].name}`);
//   })
// }