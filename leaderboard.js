// ============ TEAM DATA ============
// In a real project this would come from a server/API.
// Here we keep it as a simple array so the page has content to show.
const teams = [
  { rank: 1,  name: "Team Alpha",   slogan: "Tech Titans",       members: 3, points: 982, level: "Advanced" },
  { rank: 2,  name: "Team Phoenix", slogan: "CodeMates",         members: 3, points: 914, level: "Advanced" },
  { rank: 3,  name: "Team Vortex",  slogan: "Dream. Build. Deploy.", members: 3, points: 887, level: "Advanced" },
  { rank: 4,  name: "Team Nebula",  slogan: "Orbiting Ideas",    members: 3, points: 846, level: "Intermediate" },
  { rank: 5,  name: "Team Zenith",  slogan: "Higher Together",   members: 3, points: 812, level: "Intermediate" },
  { rank: 6,  name: "Team Quasar",  slogan: "Small Steps. Big Impact.", members: 3, points: 768, level: "Intermediate" },
  { rank: 7,  name: "Team Eclipse", slogan: "Code Beyond Limits", members: 3, points: 721, level: "Beginner" },
  { rank: 8,  name: "Team Horizon", slogan: "Build the Tomorrow", members: 3, points: 682, level: "Beginner" },
  { rank: 9,  name: "Team Atlas",   slogan: "Ideas to Impact",   members: 3, points: 649, level: "Beginner" },
  { rank: 10, name: "Team Nova",    slogan: "Next Gen Builders", members: 3, points: 612, level: "Beginner" }
];

const tableBody = document.getElementById("tableBody");
const searchInput = document.getElementById("searchInput");
const tabs = document.querySelectorAll(".tab");
const topThreeList = document.getElementById("topThree");

let currentFilter = "Overall"; // which tab is selected
let currentSearch = "";        // what the user typed in the search box

// ============ RENDER TABLE ============
// Builds the table rows based on the current filter + search text
function renderTable() {
  // 1. Start with all teams
  let filteredTeams = teams;

  // 2. Apply level filter (Beginner/Intermediate/Advanced), unless "Overall" is selected
  if (currentFilter !== "Overall") {
    filteredTeams = filteredTeams.filter(team => team.level === currentFilter);
  }

  // 3. Apply search filter (case-insensitive match on team name)
  if (currentSearch.trim() !== "") {
    filteredTeams = filteredTeams.filter(team =>
      team.name.toLowerCase().includes(currentSearch.toLowerCase())
    );
  }

  // 4. Clear old rows
  tableBody.innerHTML = "";

  // 5. If nothing matches, show a simple message
  if (filteredTeams.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="4" style="text-align:center; padding:20px; color:#8b93a7;">No teams found</td></tr>`;
    return;
  }

  // 6. Build a row for each team
  filteredTeams.forEach(team => {
    const row = document.createElement("tr");

    // give the top 3 rows a special class for gold/silver/bronze styling
    if (team.rank === 1) row.classList.add("rank-1");
    if (team.rank === 2) row.classList.add("rank-2");
    if (team.rank === 3) row.classList.add("rank-3");

    row.innerHTML = `
      <td><div class="rank-cell">${getRankLabel(team.rank)}</div></td>
      <td>
        <div class="team-cell">
          <div class="team-icon">&#128188;</div>
          <div>
            <div class="team-name">${team.name}</div>
            <div class="team-slogan">${team.slogan}</div>
          </div>
        </div>
      </td>
      <td>${team.members} members</td>
      <td class="points">${team.points} pts</td>
    `;

    tableBody.appendChild(row);
  });
}

// Returns a medal emoji for rank 1-3, otherwise just the number
function getRankLabel(rank) {
  if (rank === 1) return "&#129351; 1";
  if (rank === 2) return "&#129352; 2";
  if (rank === 3) return "&#129353; 3";
  return rank;
}

// ============ RENDER TOP 3 SIDEBAR LIST ============
function renderTopThree() {
  const topThreeTeams = teams.slice(0, 3); // first 3 teams (already sorted by rank)
  topThreeList.innerHTML = "";

  topThreeTeams.forEach(team => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span class="medal">${team.rank}</span>
      <span>${team.name}</span>
      <span class="pts">${team.points} pts</span>
    `;
    topThreeList.appendChild(li);
  });
}

// ============ TAB CLICK HANDLING ============
tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // remove "active" class from all tabs, then add it to the clicked one
    tabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    currentFilter = tab.dataset.filter;
    renderTable();
  });
});

// ============ SEARCH BOX HANDLING ============
searchInput.addEventListener("input", (e) => {
  currentSearch = e.target.value;
  renderTable();
});

// ============ INITIAL RENDER ============
renderTable();
renderTopThree();
