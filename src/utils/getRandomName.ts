const names = ["John doe", "Jane doe", "Mohammad Baldwin", "Eddy Barajas", "Cecilia Calderon", "Daniel Hudson",
        "Omar Baker", "Cheri Frank", "Enrique Keller", "Lilian Vega", "Quentin Arellano", "Rigoberto Matthews", 
        "Dino Todd", "Ivy Cabrera", "Joan Shaffer", "Jeannie Norris", "Clemente Washington", "Ezra Foster", 
        "Shelley Weeks", "Tyson Daniels", "Angelina Logan", "Francesca Hanna", "Jose Mayo", "Dixie Bentley", 
        "George Mcintosh", "Aline Ellison", "Clinton Hubbard", "Rose Stewart", "Merlin Decker", "Julius White", 
        "Avis Fernandez", "Jeri Kirby"];

function getRandomName() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
}

export default getRandomName;