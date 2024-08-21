// Ensure the array is sorted
const sortedNames = [
    "Aiden", "Alexander", "Amelia", "Ava", "Benjamin", "Blake", "Brandon", "Brianna",
    "Caleb", "Cameron", "Chloe", "Christian", "Claire", "Colton", "Connor", "Daniel",
    "David", "Emma", "Ethan", "Eva", "Faith", "Gabriel", "Grace", "Hannah", "Harper",
    "Henry", "Isabella", "Jack", "Jacob", "James", "Jasmine", "John", "Joseph", "Julia",
    "Kevin", "Kylie", "Laila", "Liam", "Lily", "Logan", "Lucas", "Lucy", "Madison",
    "Matthew", "Mia", "Michael", "Natalie", "Nathan", "Noah", "Nora", "Olivia", "Owen",
    "Parker", "Peyton", "Rachel", "Riley", "Ryan", "Sadie", "Samantha", "Samuel", "Sarah",
    "Sebastian", "Sofia", "Sophia", "Stella", "Steven", "Taylor", "Thomas", "Victoria",
    "Violet", "William", "Wyatt", "Addison", "Adrian", "Alice", "Aurora", "Bella", "Brody",
    "Carson", "Clara", "Cole", "Daisy", "Elijah", "Ella", "Evan", "Faith", "Finn",
    "George", "Gianna", "Grayson", "Hailey", "Hayden", "Isaac", "Isla", "Ivy", "Jade",
    "Jason", "Jaxon", "Jayden", "Jessica", "Jordan", "Kaden", "Kayla", "Leah", "Lincoln",
    "Lola", "Mackenzie", "Mason", "Mila", "Nia", "Nicholas", "Penelope", "Piper", "Rylee",
    "Scarlett", "Skylar", "Stella"
].sort(); 

const getArrayAndItemAndPrintMaxStepInBinary = (array, query, start, end) => {
    let steps = 0;
    let index = -1;

    while (start <= end) {
        steps++;
        const mid = Math.floor((start + end) / 2);
        const midValue = array[mid];

        if (midValue === query) {
            index = mid;
            break;
        }

        if (query < midValue) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return { steps, index };
}

const { steps, index } = getArrayAndItemAndPrintMaxStepInBinary(sortedNames, "Stella", 0, sortedNames.length - 1);

console.log(`Total Steps: ${steps}`);
console.log(`Query Index: ${index}`);
