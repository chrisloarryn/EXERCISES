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
    taxNumber: "989754541",
    name: "Sebastián Méndez"
},
    {
        id: 2,
        taxNumber: "6544247K",
        name: "Ernestina Soto"
    },
    {
        id: 3,
        taxNumber: "154876582",
        name: "Francisca Pineda"
    },
    {
        id: 4,
        taxNumber: "56587415",
        name: "José Pérez"
    },
    {
        id: 5,
        taxNumber: "196548746",
        name: "Gustavo Torres"
    },
    {
        id: 6,
        taxNumber: "175487453",
        name: "Valentina Donoso"
    }
];

/**
 * gameTypes.
 *
 * Categories of the videogames selled in the store.
 */
const gameTypes = [{
    id: 1,
    name: "Rol"
},
    {
        id: 2,
        name: "Aventura"
    },
    {
        id: 3,
        name: "AccionFPS"
    },
    {
        id: 4,
        name: "Estrategia"
    },
    {
        id: 5,
        name: "Deporte"
    },
    {
        id: 6,
        name: "Simulacion"
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
    }
];

/**
 * 1. Array with the clients IDs
 */
const clientsIDs = () => {
    return clients.map(item => item.id)
};

/**
 * 2. Array with the clients ID ordered by their name.
 */
const clientsIdsByName = () => {
    const clientsCopy = clients;
    clientsCopy.sort((a, b) => (a.name > b.name) ? 1 : (a.name === b.name) ? ((a.name > b.name) ? 1 : -1) : -1)
    return clientsCopy.map(item => item.id);
};

/**
 * 3. Array with the clients sorted by the total they spent on games from highest to lowest.
 */
const clientsByTotalSpent = () => {
    const clientsCopy = clients;
    const salesCopy = gameSales;
    const data = clientsCopy.map(itm => ({
        ...salesCopy.find((item) => (item.clientId === itm.id) && item),
        ...itm
    }));
    return data.sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
};

/**
 * 4. An array of objects that has as keys the types of games, and as a value, an array with the tax numbers sorted alphabetically by the client name.
 */
const gamesCategoriesTaxNumbers = () => {
    const salesCopy = gameSales;
    return gameTypes.map((value) => {
        const pricesOrdered = salesCopy.filter((value1) => {
            return value1.typeId === value.id
        }).map((value1Map) => {
            return clients.find(val => val.id === value1Map.clientId)
        }).sort((a, b) => a.name.localeCompare(b.name));
        return {
            typeGame: value.name, arrayTaxes: pricesOrdered.map((sales) => {
                return sales.taxNumber
            })
        }
    })
};

/**
 * 5. An array with the prices of games over 10.000 ordered from highest to lowest.
 */
const pricesOrdered = () => {
    return gameSales
        .filter((item) => {
            return item.price > 10000;
        })
        .sort((a, b) => parseFloat(b.price) - parseFloat(a.price))
        .map(item => item.price);
};

/**
 * 6. An array of objects with the types of games as keys and the total amount collected from each type as values.
 */
const totalCollectedByGameType = () => {
    // gameType as a key and total amount by each type

    const typesCopy = gameTypes;
    const salesCopy = gameSales;
    const data = typesCopy.map(itm => ({
        ...salesCopy.filter((item) => (item.typeId === itm.id)),
        ...itm
        //...itm && item
    }));
    data.flatMap(item => console.log(item));
    // return data

    // return gameSales.map(item => {
    //
    //     return gameSales.reduce((r ,a) => {
    //         return r
    //     })
    //     // return item.typeId
    // });
    // gameSales.reduce(item => {
    //     item.typeId
    // }));
};

/**
 * 7. Object that contains the types of games as keys and the amount of clients that only purchased games in that type of game.
 */
const clientsAndGameTypes = () => {
};

/**
 * 8. Object that has the types of games like keys and the names of the customers who bought the most of those types of games.
 */
const bestSellers = () => {

    // no listo
    return gameTypes.map((value, index, array) => {
        const numbers = [{num: 1}, {num: 45}];
        return {key: value.name, ammount: numbers.reduce((a, b) => ({x: parseInt(a.num) + parseInt(b.num)}))}
    })
};

/**
 * 9. Add a new client using this function, then add a new sale of a 'Simulation' type game associated with the new client for a value of 48151.
 */
const addClient = () => {
};

/**
 * 10. Show a ranking of clients ordered by the total amount spent on games in decreasing order.
 */
const ranking = () => {
};

/**
 * REVIVIEW OF ANSWERS: DO NOT EDIT!
 */
// console.log("1st challenge");
// console.log(clientsIDs());
// console.log("2nd challenge");
// console.log(clientsIdsByName());
// console.log("3rd challenge");
// console.log(clientsByTotalSpent());
// console.log("4th challenge");
// console.log(gamesCategoriesTaxNumbers());
console.log("5th challenge");
console.log(pricesOrdered());
// console.log("6th challenge");
// console.log(totalCollectedByGameType());
// console.log("7th challenge");
// console.log(clientsAndGameTypes());
// console.log("8th challenge");
// console.log(bestSellers());
// console.log("9th challenge");
// console.log(addClient());
// console.log("10th challenge");
// console.log(ranking());
