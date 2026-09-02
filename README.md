# SDC Website — Hackathon Leaderboard & Club Site

A simple multi-page website for a college coding club (Software Development Club, VIT Bhopal), built with **plain HTML, CSS, and JavaScript** — no frameworks, no build tools, no libraries.

## Live Pages

| Page | File | What it does |
|---|---|---|
| Home | `index.html` | Landing page — hero intro, feature grid, stats bar |
| Events | `events.html` | List of upcoming and past club events |
| Leaderboard | `leaderboard.html` | Hackathon leaderboard with tabs (Overall/Beginner/Intermediate/Advanced) and a search box |
| Teams | `teams.html` | Grid of all competing teams |
| About | `about.html` | Club mission, what the club does, contact info |

## Folder Structure

```
leaderboard/
├── index.html          Home page
├── events.html          Events page
├── leaderboard.html     Leaderboard page
├── teams.html            Teams page
├── about.html            About page
├── style.css              Shared stylesheet used by all pages
├── leaderboard.js       JS for leaderboard.html only (table, tabs, search)
├── teams.js               JS for teams.html only (renders team cards)
└── README.md            This file
```

## How to Run

No installation or server needed. Just open `index.html` in any web browser (double-click it, or right-click → Open With → Browser). All pages link to each other via the navbar, so you can navigate the whole site from there.

Keep all files in the same folder — the HTML files reference `style.css`, `leaderboard.js`, and `teams.js` using relative paths, so moving files around will break the links.

## How It's Built

- **Structure (HTML):** Every page shares the same navbar and overall layout. Semantic tags (`header`, `nav`, `main`, `section`) are used for structure; `div`/`span` are used for pure grouping and styling. Icons are emoji (via HTML entities like `&#128187;`) instead of image files, to keep things dependency-free.
- **Styling (CSS):** One shared `style.css` file for the whole site. A reusable `.card` class gives the common dark rounded-box look used everywhere (feature cards, sidebar, events, team cards); page-specific classes are combined with it for layout differences. Buttons and tabs have `:hover` states (slight transparency or background color change) for interactivity feedback.
- **Behavior (JavaScript):** Only the pages with dynamic data use JS:
  - `leaderboard.js` — holds a `teams` array (rank, name, points, level, etc.), builds the table rows from it, and updates the table whenever a tab is clicked or the search box is typed in.
  - `teams.js` — holds a similar array and builds the team cards on that page.
  
  Home, Events, and About pages are fully static — no JS needed since there's no data to filter or generate.

## Known Simplifications

- The "Join SDC" button and the sun/theme icon are visual only — they aren't wired up to any real signup form or dark-mode toggle.
- Each page's `teams` array is duplicated (in `leaderboard.js` and `teams.js`) rather than shared from one file, to keep each script simple and self-contained rather than introducing shared/imported modules.
- The homepage uses two separate `<h1>` tags for the two-tone headline effect, instead of one `<h1>` with a nested `<span>` — a minor deviation from strict semantic HTML, done for simplicity.

## Possible Next Steps

- Add a mobile hamburger menu (nav links currently just hide on small screens)
- Wire up the "Join SDC" button to a real form
- Connect the leaderboard/teams data to a real backend instead of hardcoded arrays
