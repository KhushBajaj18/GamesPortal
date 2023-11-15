import React, { useEffect, useState } from 'react';
import './Premium.css';


  

// const premiumGamesData = [
//   {
//     id: 1,
//     title: 'Game 1',
//     image: 'game1.jpg',
//   },
//   {
//     id: 2,
//     title: 'Game 2',
//     image: 'game2.jpg',
//   },
//   // Add more game data entries here
// ];

function PremiumGamesPage() {

  const {premiumGamesData, setpremiumGamesData}=useState([])

  const{wetherData, setWetherData}=useState({})


  const handelPlay=async()=>{
    const result = await fetch('incomplete', {
              method: "GET",
              //body:JSON.stringify({title, description, status}),
              headers:{
                  "Content-Type":"application/json",
                  "Authorization": `Bearer ${localStorage.getItem('token')}`
              },
          });
          const data = await result.json();
  }

  useEffect(async()=>{
    const result = await fetch('incomplete', {
      method: "GET",
      //body:JSON.stringify({title, description, status}),
      headers:{
          "Content-Type":"application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
      },
  }, []);
  const data = await result.json();
  setpremiumGamesData(data)

//   const url = 'https://weatherapi-com.p.rapidapi.com/current.json?q=Bhopal';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': '1fe2598b63msh43474d0ea5a8f67p1d60fejsnaf6cc9389544',
// 		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
//   setWetherData(result)

// } catch (error) {
// 	console.error(error);
// }

  })

  return (
    <div className="premium-games-page">
      <h1>Premium Games</h1>
      <div className="game-list">
        {premiumGamesData.map((game) => (
          <div key={game.id} className="game-item">
            <img src={game.image} alt={game.title} />
            <h3>{game.title}</h3>
            <button onClick={handelPlay} className="play-button">Play Now</button>
          </div>
        ))}
        {/* <div>
          {wetherData.location.name}
        </div> */}
      </div>
    </div>
  );
}

export default PremiumGamesPage;
