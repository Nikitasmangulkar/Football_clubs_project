// Get references to HTML elements
const clubList = document.getElementById('club-list');
const searchInput = document.getElementById('search');
const clubDetailsContainer = document.getElementById('main');

// Initialize football club data and display all clubs
let clubData = [...footballClubs];
displayClubs(footballClubs);


// Task 1: Display football clubs in the club list
function displayClubs(clubs) {
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
        <button style= width:100% class="view-players-btn" onclick="viewClubPlayers('${club.name}')">View Players</button>
        `;
        clubList.appendChild(card);
  });

}
// Task 2: Handle search input and filter clubs
// Attach an input event listener for the search input
// Get the search term and convert it to lowercase for case-insensitive search
function handleSearchInput() {
    const query = searchInput.value.toLowerCase();
    const filteredClubs = footballClubs.filter(club => {
        const clubData1 = `${club.name} ${club.city} ${club.league}`.toLowerCase();
        return clubData1.includes(query);
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
    const clubName = element.name;
    const club = footballClubs.find(club =>
    club.name.toLowerCase() === clubName.toLowerCase());
    if(club) {
        displayClubDetails(club);
    }
}
// Display football club details
function displayClubDetails(club) {
    const clubList = document.getElementById('club-list');
    clubList.innerHTML = `
    <div class="club-details">
        <button onclick="location.reload()">Back</button>
        <h2>${club.name}</h2>
        <img src="${club.image}" alt="${club.name} Logo" />
        <p><strong>League:</strong> ${club.league}</p>
        <p><strong>City:</strong> ${club.city}</p>
        <p><strong>Stadium:</strong> ${club.stadium}</p>
        <p>${club.description}</p>
        <button onclick="viewClubPlayers('${club.name}')">View Players</button>
    </div>
  `;
    
}

// Task 4: Function to view club players
function viewClubPlayers(clubName) {
    const selectedClub = clubData.find(club => club.name === clubName);
    let playersHTML = `
    <div class="view-details">
        <button onclick="location.reload()">Back</button>
    </div>
    <h2 style="text-align:center;">${selectedClub.name} Players</h2>
    `;
    selectedClub.players.forEach(player => {
        playersHTML += `
                <div class="player-card">
                <p><strong>Name:</strong> ${player.name}</p>
                <p><strong>Position:</strong> ${player.position}</p>
                <p><strong>Goals:</strong> ${player.goals}</p>
                <p><strong>Assists:</strong> ${player.assists}</p>
                <hr>
            </div>
        `;
    });
    clubDetailsContainer.innerHTML = playersHTML;
}
