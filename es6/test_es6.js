/**
 * Technical test ES6 JavaScript standards.
 *
 * RULES:
 * - Do not upload this test to GitHub, GitLab, BitBucket or any repo.
 * - Use ES6 standards.
 * - Do not modify the arrays of data. Only edit the functions.
 * - You'll have one week to send this file with your code in it.
 * - All the code must be written in English.
 */

/**
 * clients.
 *
 * List of clients that purchased in the store.
 */
const clients = [{
		id: 1,
		taxNumber: '989754541',
		name: 'Sebastián Méndez'
	},
	{
		id: 2,
		taxNumber: '6544247K',
		name: 'Ernestina Soto'
	},
	{
		id: 3,
		taxNumber: '154876582',
		name: 'Francisca Pineda'
	},
	{
		id: 4,
		taxNumber: '56587415',
		name: 'José Pérez'
	},
	{
		id: 5,
		taxNumber: '196548746',
		name: 'Gustavo Torres'
	},
	{
		id: 6,
		taxNumber: '175487453',
		name: 'Valentina Donoso'
	}
];

/**
 * gameTypes.
 *
 * Categories of the videogames selled in the store.
 */
const gameTypes = [{
		id: 1,
		name: 'Rol'
	},
	{
		id: 2,
		name: 'Aventura'
	},
	{
		id: 3,
		name: 'AccionFPS'
	},
	{
		id: 4,
		name: 'Estrategia'
	},
	{
		id: 5,
		name: 'Deporte'
	},
	{
		id: 6,
		name: 'Simulacion'
	}
];


/**
 * gameSales.
 *
 * Array that contains all the videogames selled in the store.
 */
const gameSales = [{
		clientId: 6,
		typeId: 1,
		price: 16000
	},
	{
		clientId: 1,
		typeId: 2,
		price: 24000
	},
	{
		clientId: 2,
		typeId: 1,
		price: 18000
	},
	{
		clientId: 2,
		typeId: 3,
		price: 9000
	},
	{
		clientId: 3,
		typeId: 6,
		price: 12000
	},
	{
		clientId: 6,
		typeId: 5,
		price: 14500
	},
	{
		clientId: 4,
		typeId: 4,
		price: 22000
	},
	{
		clientId: 2,
		typeId: 5,
		price: 38900
	},
	{
		clientId: 1,
		typeId: 3,
		price: 10900
	},
	{
		clientId: 3,
		typeId: 1,
		price: 25000
	},
	{
		clientId: 3,
		typeId: 4,
		price: 13400
	},
	{
		clientId: 5,
		typeId: 2,
		price: 11900
	},
	{
		clientId: 6,
		typeId: 2,
		price: 8900
	},
	{
		clientId: 3,
		typeId: 5,
		price: 16900
	},
	{
		clientId: 5,
		typeId: 3,
		price: 42300
	},
	{
		clientId: 4,
		typeId: 1,
		price: 26900
	},
	{
		clientId: 2,
		typeId: 6,
		price: 17900
	},
	{
		clientId: 1,
		typeId: 5,
		price: 16000
	},
	{
		clientId: 6,
		typeId: 3,
		price: 8900
	},
];


/**
 * 1. Array with the clients IDs
 */
const clientsIDs = () => {
	let clientIds = [];
	for (let key in clients) {
		clientIds.push(clients[key].id);
	}
	return clientIds;
};

/**
 * 2. Array with the clients ID ordered by their name.
 */
const clientsIdsByName = () => {
	sorted = clients.sort(function (a, b) {
		return a.name.localeCompare(b.name)
	});
	let clientIdsByName = [];
	for (let key in sorted) {
		clientIdsByName.push(clients[key].id);
	}
	return clientIdsByName;

};

/*
* 2. New version
*/
const clientsIdsByName = () => {
	return clients.sort(function (a, b) {
		return a.name.localeCompare(b.name)
	}).map(el => el.id);

};

/**
 * 3. Array with the clients sorted by the total they spent on games from highest to lowest.
 */
const clientsByTotalSpent = () => {
	const mergedByClientId = (arr1, arr2) =>
		arr1.map(itm => ({
			...arr2.find((item) => (item.id === itm.clientId) && item),
			...itm
		}));
	myData = mergedByClientId(gameSales, clients);
	myData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
	return myData;
};

/**
 * 4. An array of objects that has as keys the types of games, and as a value, an array with the tax numbers sorted alphabetically by the client name.
 */
const gamesCategoriesTaxNumbers = () => {
	const data = clientsByTotalSpent();
	let group = data.reduce((r, a) => {
		r[a.typeId] = [...r[a.typeId] || [], a];
		return r;
	}, {});
	for (let key in group) {
		group[`${key}`].sort((a, b) => a.name.localeCompare(b.name))
	}
	return group;
};

/**
 * 5. An array with the prices of games over 10.000 ordered from highest to lowest.
 */
const pricesOrdered = () => {
	pricesToReturn = [];
	pricesFounded = gameSales.filter((item) => {
		return item.price > 10000;
	})
	pricesFounded.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
	for (let key in pricesFounded) {
		pricesToReturn.push({
			price: pricesFounded[key].price
		});
	}
	return pricesToReturn;
};

/**
 * 6. An array of objects with the types of games as keys and the total amount collected from each type as values.
 */
const totalCollectedByGameType = () => {
	arrayOfSums = [];
	const data = gamesCategoriesTaxNumbers();
	for (let key in data) {
		// console.log(data[`${key}`]);
		const row = data[`${key}`];
		const res = row ? row.reduce((sum, row) => {
				return sum + row.price;
			}, 0) :
			0;
		//return res ? {sum: res} : 0;
		arrayOfSums.push({
			sum: res
		});
	}
	return arrayOfSums;
};

/**
 * 7. Object that contains the types of games as keys and the amount of clients that only purchased games in that type of game.
 */
const clientsAndGameTypes = () => {

	let myGameTypes = [];
	const data = gamesCategoriesTaxNumbers();
	for (let key in data) {
		const row = data[`${key}`];
		const amountOfClientsPerType = row ? row.reduce((sum, row) => {
				return sum + 1;
			}, 0) :
			0;
		const typeValueKey = data[`${key}`] ? data[`${key}`][0].typeId : null;
		const res = {
			typeOfGameKey: typeValueKey,
			amount: amountOfClientsPerType
		};
		myGameTypes.push(res);
	}
	return myGameTypes;

};

/**
 * 8. Object that has the types of games like keys and the names of the customers who bought the most of those types of games.
 */
const bestSellers = () => {
	const mergedByClientId = (arr1, arr2) =>
		arr1.map(itm => ({
			...arr2.find((item) => (item.id === itm.clientId) && item),
			...itm
		}));
	myData = mergedByClientId(gameSales, clients);
	let group = myData.reduce((r, a) => {
		r[a.typeId] = [...r[a.typeId] || [], a];
		return r;
	}, {});

	returnedData = [];
	for (let key in group) {
		const myData = group[`${key}`];
		for (iterationData of myData) {
			const res = gameTypes.find((item) => {
				return item.id === iterationData.typeId;
			})
			iterationData.descType = res.name;
		}
		// sort the data to get the higher one
		myData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
		returnedData.push(myData[0]);
	}
	for (let key in returnedData) {
		returnedData[key].id = parseInt(key) + 1;
	}
	return returnedData;
}

/**
 * 9. Add a new client using this function, then add a new sale of a 'Simulation' type game associated with the new client for a value of 48151.
 */
const addClient = () => {
	let newId = 7;
	const newClient = {
		id: newId,
		taxNumber: '11111111k',
		name: 'New Client'
	};
	clients.push(newClient);
	const newSold = {
		clientId: 7,
		typeId: 6,
		price: 48151
	}
	gameSales.push(newSold);

	const userReturned = clients.filter((item) => {
		return item.id === newId;
	})
	const findUserSold = gameSales.filter((item) => {
		return item.clientId === newId;
	})

	return {
		user: userReturned,
		sold: findUserSold
	}

};

/**
 * 10. Show a ranking of clients ordered by the total amount spent on games in decreasing order.
 */
const ranking = () => {
	const mergedByClientId = (arr1, arr2) =>
		arr1.map(itm => ({
			...arr2.find((item) => (item.id === itm.clientId) && item),
			...itm
		}));
	myData = mergedByClientId(gameSales, clients);
	myData.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))

	let group = myData.reduce((r, a) => {
		r[a.clientId] = [...r[a.clientId] || [], a];
		return r;
	}, {});

	returnedData = [];
	for (let key in group) {

		let purchaseData = [];
		let sumTot = 0;
		for (let purchase of group[`${key}`]) {
			sumtoreturn = 0;
			const toPurchase = {
				clientId: purchase.clientId,
				purchasesOfClient: purchase.price,
				taxNmbr: purchase.taxNumber,
				gameType: purchase.typeId
			};
			sumTot = sumTot + purchase.price;
			purchaseData.push(toPurchase);
		}

		const tot = {
			clientId: group[`${key}`][0].clientId,
			clientName: group[`${key}`][0].name,
			sumByClient: sumTot,
		};
		returnedData.push(tot);
	}
	returnedData.sort((a, b) => parseFloat(b.sumByClient) - parseFloat(a.sumByClient))
	return returnedData;

};

/**
 * REVIVIEW OF ANSWERS: DO NOT EDIT!
 */
console.log('1st challenge');
console.log(clientsIDs());
console.log('2nd challenge');
console.log(clientsIdsByName());
console.log('3rd challenge');
console.log(clientsByTotalSpent());
console.log('4th challenge');
console.log(gamesCategoriesTaxNumbers());
console.log('5th challenge');
console.log(pricesOrdered());
console.log('6th challenge');
console.log(totalCollectedByGameType());
console.log('7th challenge');
console.log(clientsAndGameTypes());
console.log('8th challenge');
console.log(bestSellers());
console.log('9th challenge');
console.log(addClient());
console.log('10th challenge');
console.log(ranking());
