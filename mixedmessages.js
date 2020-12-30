function randomMessage(){
	//Random messages for weather channel ...
	let message='';
	let possibilities=['rainy','sunny','cloudy','snowy','fogy','overcast','dry','nikakvo','sparina','stormy','hurricanes','tornadoes'];
	let weather = possibilities[Math.floor(Math.random()*possibilities.length)]
	return 'Today will be '+weather;
}

console.log(randomMessage());