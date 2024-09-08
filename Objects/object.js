const data = {
    "John Doe": "+1-202-555-0101",
    "Jane Smith": "+1-202-555-0102",
    "Emily Johnson": "+1-202-555-0103",
    "Michael Brown": "+1-202-555-0104",
    "Sarah Davis": "+1-202-555-0105",
    "David Wilson": "+1-202-555-0106",
    "Laura Martinez": "+1-202-555-0107",
    "Chris Anderson": "+1-202-555-0108",
    "Jessica Taylor": "+1-202-555-0109",
    "Daniel Lee": "+1-202-555-0110",
    "Amanda White": "+1-202-555-0111",
    "James Harris": "+1-202-555-0112",
    "Olivia Clark": "+1-202-555-0113",
    "Matthew Lewis": "+1-202-555-0114",
    "Sophia Robinson": "+1-202-555-0115",
    "Ethan Walker": "+1-202-555-0116",
    "Isabella Young": "+1-202-555-0117",
    "William Scott": "+1-202-555-0118",
    "Mia King": "+1-202-555-0119",
    "Alexander Wright": "+1-202-555-0120"
  };

  

// //   01. You have a name and you want to find the person's number in the phone book: 
// console.log("01. You have a name and you want to find the person's number in the phone book: ");
// console.log(data["Alexander Wright"]);
// console.log("\n");


// // 02. You have a phone number and you want to get the person's name in the phone book: 
// console.log("You have a phone number and you want to get the person's name in the phone book: ");
// const index = Object.values(data).indexOf("+1-202-555-0118");
// console.log(Object.keys(data)[index]);
// console.log("\n");


// // 03. You want to read the numbers of every person in the phone book: 
// console.log("03. You want to read the numbers of every person in the phone book: ");
// const indexedObject = Object.entries(data);
// indexedObject.forEach((item, index) => {
//     console.log(`${index}. ${item[0]} - ${item[1]}`);
// });
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


console.log("1. Show All Contacts");
console.log("2. Search Contact");

rl.question('Select Option: ', (input) => {
    if (input == 1) {
        const indexedObject = Object.entries(data);
        indexedObject.forEach((item, index) => {
            console.log(`${index}. ${item[0]} - ${item[1]}`);
        });
        rl.close();
    } else if (input == 2) {
        rl.question('Enter contact name: ', (name) => {
            const normalizedName = name.trim().toLowerCase();
            const foundContacts = Object.keys(data).filter(contactName =>
                contactName.toLowerCase().includes(normalizedName)
            );

            if (foundContacts.length > 0) {
                foundContacts.forEach(contactName => {
                    console.log(`${contactName}: ${data[contactName]}`);
                });
            } else {
                console.log("No similar contacts found.");
            }
            rl.close();
        });
    } else {
        console.log("Please, choose a valid option.");
        rl.close();
    }
});



