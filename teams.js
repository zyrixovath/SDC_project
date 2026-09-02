// ============ TEAM DATA ============
// Same idea as the leaderboard page: a simple array standing in for real data.
const teams = [
  { name: "Team Alpha",   slogan: "Tech Titans",              members: 3 },
  { name: "Team Phoenix", slogan: "CodeMates",                members: 3 },
  { name: "Team VorteX",  slogan: "Dream. Build. Deploy.",    members: 3 },
  { name: "Team Nebula",  slogan: "Orbiting Ideas",           members: 3 },
  { name: "Team Zenith",  slogan: "Higher Together",          members: 3 },
  { name: "Team Quasar",  slogan: "Small Steps. Big Impact.", members: 3 },
  { name: "Team Eclipse", slogan: "Code Beyond Limits",       members: 3 },
  { name: "Team Horizon", slogan: "Build the Tomorrow",       members: 3 },
  { name: "Team Atlas",   slogan: "Ideas to Impact",          members: 3 },
  { name: "Team Nova",    slogan: "Next Gen Builders",        members: 3 }
];

const teamsGrid = document.getElementById("teamsGrid");

// Build one card per team and add it to the grid
teams.forEach(team => {
  const card = document.createElement("div");
  card.className = "card team-grid-card";

  card.innerHTML = `
    <div class="team-icon">&#128188;</div>
    <h3>${team.name}</h3>
    <p class="team-slogan">${team.slogan}</p>
    <p>${team.members} members</p>
  `;

  teamsGrid.appendChild(card);
});
