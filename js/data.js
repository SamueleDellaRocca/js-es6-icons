const arrayIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];


const divContainer = document.querySelector('.container');

function creaCarta(obj) {

	let divCard = document.createElement('div');
	divCard.classList.add('card');
	divCard.innerHTML = `
            <div class="icona"><i class="${obj.family} ${obj.prefix}${obj.name}" style="color:${coloreRandom()}"></i></div>
            <h5 class="titolo">${obj.name}</h5>
	`
	divContainer.append(divCard);
}

for (const element in arrayIcone) {
	creaCarta(arrayIcone[element]);
}


const selezione = document.getElementById('select');
selezione.addEventListener('change', cambioSelezione);


function cambioSelezione() {

	let valoreSelezionato = selezione.value;


	if (valoreSelezionato == 'all') {
		divContainer.innerHTML = '';
		console.log('all');
		for (const element in arrayIcone) {
			creaCarta(arrayIcone[element]);
		}

	} else if (valoreSelezionato == 'animal') {
		divContainer.innerHTML = '';
		console.log('animals');
		const arrayIconeFiltrate = arrayIcone.filter((elementoArray) => {
			if (elementoArray.type == 'animal') {
				return true;
			}
		})

		for (const element in arrayIconeFiltrate) {
			creaCarta(arrayIconeFiltrate[element])
		}

		console.log(arrayIconeFiltrate);

	} else if (valoreSelezionato == 'vegetable') {
		divContainer.innerHTML = '';
		console.log('vegetable');
		const arrayIconeFiltrate = arrayIcone.filter((elementoArray) => {
			if (elementoArray.type == 'vegetable') {
				return true;
			}
		})

		for (const element in arrayIconeFiltrate) {
			creaCarta(arrayIconeFiltrate[element])
		}

		console.log(arrayIconeFiltrate);


	} else {
		divContainer.innerHTML = '';
		console.log('user');
		const arrayIconeFiltrate = arrayIcone.filter((elementoArray) => {
			if (elementoArray.type == 'user') {
				return true;
			}
		})

		for (const element in arrayIconeFiltrate) {
			creaCarta(arrayIconeFiltrate[element])
		}

		console.log(arrayIconeFiltrate);


	}

}

function coloreRandom() {
	// FUNZIONE PER GENERARE UN NUMERO RANDOM
	function numeriRandom(min, max) {
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}
	// CREO UN ARRAY DI 3 NUMERI RANDOM DA 0 A 255
	const arrayNumeriColori = [];
	for (let index = 0; index < 3; index++) {
		let numeroRandom = numeriRandom(0, 255);
		arrayNumeriColori.push(numeroRandom);
	}

	let color = `rgba(${arrayNumeriColori[0]},${arrayNumeriColori[1]},${arrayNumeriColori[2]})`

	return color;
}