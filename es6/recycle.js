/**
 * contacts data
 * First name and last name.
 */
const contacts = [{
        firstName: 'Juanito',
        lastName: 'Rokket'
    },
    {
        firstName: 'James',
        lastName: 'Bond'
    },
    {
        firstName: 'Harry',
        lastName: 'Potter'
    },
];

/**
 *  1. String repetition
 *  Write a function called "recylink" which receives a string A and an integer N and returns a new string with A repeated N times.
 */

/**
 * repeat()
 * @param {*} word 
 * @param {*} times 
 */
const repeat = (word, times) => {
    return word.repeat(times)
}


/**
 * 2. Only last names
 *  Write a

 *  function called "recylink"
 *  which receives a list of names from a contact book.Each name is an object consisting of a first name and last name.Return a list that shows only the last names.
 */

const recylink = (contactsData) => {
    let newList = [];
    contactsData.forEach((contact) => {
        newList.push(contact.lastName)
    });
    return newList;
}

/**
 * Workhome
 */
console.log('First: repeat function.');
console.log(repeat('node', 5))
console.log('Second: Getting values.');
console.log(recylink(contacts));