// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Initialize football club data and display all clubs
let clubData = [...footballClubs];
displayClubs(footballClubs);




// Task 1: Display football clubs in the club list
function displayClubs(clubs) {
    // Generate HTML for club cards and set it in the clubList element
    const clubList = document.getElementById("club-list");
    clubList.innerHTML = "";
    clubs.map((club) => {
    const card = document.createElement("div");
    card.className = "club-card";
    card.onclick = () => handleClubClick(club);

    card.innerHTML = `
    <h3>${club.name}</h3>
    <img src="${club.image}" alt="${club.name} Logo" width="100" />
    <p><strong>League:</strong> ${club.league}</p>
    <p><strong>City:</strong> ${club.city}</p>
     <div class="spacer"></div>
       <button style= width:100% class="view-players-btn">View Players</button>
    `;


   // Add click to "View Players" button 
    card.querySelector(".view-players-btn").onclick = (e) => {
    e.stopPropagation(); // Prevent triggering card click
    viewClubPlayers(club);
    };
        const button = document.querySelector(".my-button");
    // Append card to the list
     clubList.appendChild(card);
  });

}
//createClubCard();


// Task 2: Handle search input and filter clubs
// Attach an input event listener for the search input
// Get the search term and convert it to lowercase for case-insensitive search
function handleSearchInput() {
    const query = searchInput.value.toLowerCase();
    const filteredClubs = footballClubs.filter(club => {
    const clubData = `${club.name} ${club.city} ${club.league}`.toLowerCase();
    return clubData.includes(query);
});
  displayClubs(filteredClubs);
}
searchInput.addEventListener("input", filterClubs);
function filterClubs() {
    const query = searchInput.value.toLowerCase();
    const filtered = footballClubs.filter(club =>
    club.name.toLowerCase().includes(query) ||
    club.city.toLowerCase().includes(query) ||
    club.league.toLowerCase().includes(query)
  );
  displayClubs(filtered);
}

// Task 3: Handle clicking on a football club card to display club details
function handleClubClick(element) {
    const clubName = element.querySelector('h3').innerText;
    const club = footballClubs.find(club =>
    club.name.toLowerCase() === clubName.toLowerCase()
);
if (club) {
    displayClubDetails(club);
  }
}



// Display football club details
function displayClubDetails(club) {
    
}

// Task 4: Function to view club players
function viewClubPlayers(clubName) {
    // Find the selected club by its name
    const selectedClub = clubData.find(club => club.name === clubName);

    // Write your code here for task3
    // Generate HTML for the list of players and display it

    // Iterate over selectedClub object's players property

    // Create a string joining the information of all the players of the selected Club 

    // Display the information by setting the HTML in the clubDetailsContainer

}

