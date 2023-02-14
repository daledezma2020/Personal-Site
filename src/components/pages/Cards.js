// import React from 'react';
// import '../../App.css';
// import './Cards.css';

// var cardNames = ["ace_of_spades", "2_of_spades", "3_of_spades", "4_of_spades", "5_of_spades", "6_of_spades", "7_of_spades",
// "8_of_spades", "9_of_spades", "10_of_spades", "jack_of_spades", "queen_of_spades", "king_of_spades", "ace_of_clubs", "2_of_clubs",
// "3_of_clubs", "4_of_clubs", "5_of_clubs", "6_of_clubs", "7_of_clubs", "8_of_clubs", "9_of_clubs", "10_of_clubs", "jack_of_clubs",
// "queen_of_clubs", "king_of_clubs", "ace_of_diamonds", "2_of_diamonds", "3_of_diamonds", "4_of_diamonds", "5_of_diamonds",
// "6_of_diamonds", "7_of_diamonds", "8_of_diamonds", "9_of_diamonds", "10_of_diamonds", "jack_of_diamonds", "queen_of_diamonds",
// "king_of_diamonds", "ace_of_hearts", "2_of_hearts", "3_of_hearts", "4_of_hearts", "5_of_hearts", "6_of_hearts", "7_of_hearts",
// "8_of_hearts", "9_of_hearts", "10_of_hearts", "jack_of_hearts", "queen_of_hearts", "king_of_hearts"];
// var used = [];
// var hand = genCardList();
// var flipped = [];
// var fid = [];
// var matches = 0;

// function text(){
// 	document.getElementById('win_message').innerHTML = "You Win!";
// }

// function flip(id,value){
// 	var fileName = value;
// 	changeImage(fileName,id);
// 	if(flipped.length<1){ //first card flipped
// 		flipped.push(fileName);
// 		fid.push(id);
// 		let img0 = document.querySelector(`#${id}`);
// 		img0.setAttribute("onClick",null);
// 	}
// 	else if(flipped.length<2){ //2 cards flipped
// 		flipped.push(fileName);
// 		fid.push(id);
// 		if(flipped[0] === flipped[1]){ //in the casse of a match
// 			matches++;

// 			var x = fid[0]; // need to give id values to variables or else they return undefined
// 			var y = fid[1];
// 			toggleClick(true);
// 			setTimeout(() => {
// 				vanish(x);
// 				vanish(y);
// 				toggleClick(false);
// 			},1000);

// 			let img1 = document.querySelector(`#${fid[1]}`);
// 			img1.setAttribute("onClick",null); //for safety
// 			let img2 = document.querySelector(`#${fid[0]}`);
// 			img2.setAttribute("onClick",null); //for safety

// 			if(matches>=8){
// 				text();
// 			}
// 		}
// 		else{ //two cards flipped but no match
// 			let img1 = document.querySelector(`#${fid[1]}`);
// 			let img2 = document.querySelector(`#${fid[0]}`);
// 			img1.setAttribute("onClick",`flip(id,'${flipped[1]}')`);
// 			img2.setAttribute("onClick",`flip(id,'${flipped[0]}')`);

// 			toggleClick(true);
// 			setTimeout(() => {
// 				img1.setAttribute("src",'./images/cards/backside.png');
// 				img2.setAttribute("src",'./images/cards/backside.png');
// 				toggleClick(false);
// 			},1000);
// 		}
// 		flipped = [];
// 		fid = [];
// 	}
// }

// function toggleClick(turn){ //toggles ability to click between turns
// 		const cards = document.querySelectorAll(".card");
// 		cards.forEach(card => {
// 			if(turn){
// 				card.style.pointerEvents = "none";
// 			}
// 			else{
// 				card.style.pointerEvents = "auto";
// 			}
// 		})
// }

// function vanish(x){ //vanishes matched cards
// 	document.getElementById(x).style.visibility = "hidden";
// }

// function genCard(){ //gets card from hand
// 	console.log('genCard');
// 	var r = Math.floor(Math.random() * hand.length);
// 	while(used.includes(r)){
// 		r = Math.floor(Math.random() * hand.length);
// 	}
// 	used.push(r);
// 	return "./images/cards/" + hand[r] + ".png";
// }

// function genCardList(){ //generates a "hand" which contains 16 cards, 2 pairs of 8
// 	var deck = cardNames;
// 	var shuffled = shuffle(deck);
// 	var half_hand = shuffled.slice(0,8);
// 	hand = [...half_hand, ...half_hand]; //so we have double the cards and 2 of each
// 	return hand;
// }

// function shuffle(arr){ //shuffles an array, used to shuffle the cards in the "deck" before picking 8
// 	var result = [];
// 	var used = [];
// 	while (result.length < arr.length) {
// 		//console.log("hi");
// 		var r = Math.floor(Math.random() * arr.length);
// 		if (!used.includes(r)) {
// 			result.push(arr[r]);
// 			used.push(r);
// 		}
// 	}
// 	return result;
// }

// function changeImage(fileName, id){
// 	let img4 = document.querySelector(`#${id}`);
// 	img4.setAttribute("src",fileName);
// }

// function Cards() {
//   return (
//     <>
// 	<div className = "main">
// 	<div className = "win_tb">
// 		<h1  id = "win_message" className = "win_message"></h1>	
// 	</div>

// 	<div className = "container">
// 		<ul>
//             <li><img id = "cardIMG1" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG1",genCard())}/></li>
//             <li><img id = "cardIMG2" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG2",genCard())}/></li>
//             <li><img id = "cardIMG3" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG3",genCard())}/></li>
//             <li><img  id = "cardIMG4" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG4",genCard())}/></li>
//             <li><img  id = "cardIMG5" src = "./images/cards/backside.png" alt = "card" className = "card"
//                  onClick = {() => flip("cardIMG5",genCard())}/></li>
//             <li><img id = "cardIMG6" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG6",genCard())}/></li>
//             <li><img id = "cardIMG7" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG7",genCard())}/></li>
//             <li><img id = "cardIMG8" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG8",genCard())}/></li>
//             <li><img id = "cardIMG9" src = "./images/cards/backside.png" alt = "card" className = "card" 
//                 onClick = {() => flip("cardIMG9",genCard())}/></li>
//             <li><img id = "cardIMG10" src = "./images/cards/backside.png" alt = "card" className = "card"
//                   onClick = {() => flip("cardIMG10",genCard())}/></li>
//             <li><img id = "cardIMG11" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG11",genCard())}/></li>
//             <li><img  id = "cardIMG12" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG12",genCard())}/></li>
//             <li><img  id = "cardIMG13" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG13",genCard())}/></li>
//             <li><img id = "cardIMG14" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG14",genCard())}/></li>
//             <li><img id = "cardIMG15" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG15",genCard())}/></li>
//             <li><img id = "cardIMG16" src = "./images/cards/backside.png" alt = "card" className = "card"
//                 onClick = {() => flip("cardIMG16",genCard())}/></li>
// 		</ul>
// 	</div>
// 	</div>
//     </>
//     );
// }

// export default Cards; 