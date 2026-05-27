# The Seinfeld Trivia Challenge (v2.0)

A 150-question Seinfeld trivia quiz with sourced episode citations for every answer. Each round draws 30 random questions from the pool — 10 Easy, 12 Medium, 8 Hard — so no two playthroughs are the same. A timer counts up from the start of the round; final score and time are displayed side-by-side.

Built as a single-page HTML app — no build step, no dependencies — drop it on GitHub Pages and play.

## Files

- **`index.html`** — the full quiz app (HTML, CSS, and JS all in one file)
- **`questions.js`** — the 150-question bank, sorted by difficulty with episode citations

The episode source for each question is shown to the player inline, right after they answer it — no separate source document needed.

## Each round

| Difficulty | Points each | Per round | Max per round |
|------------|-------------|-----------|---------------|
| Easy       | 1           | 10        | 10            |
| Medium     | 3           | 12        | 36            |
| Hard       | 5           | 8         | 40            |
| **Total**  |             | **30**    | **86**        |

The bank itself holds 50 Easy + 60 Medium + 40 Hard = 150 questions; each round samples from those pools. With 30 questions drawn from 150, you can play many rounds before encountering significant repetition.

## How to put this on GitHub Pages

1. **Create a new GitHub repo** (e.g. `seinfeld-trivia`). Keep it public.
2. **Upload these three files** to the root of the repo (`index.html`, `questions.js`, `README.md`).
3. **Enable GitHub Pages**: go to **Settings → Pages**, set Source to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then click Save.
4. **Wait ~30 seconds**, then visit `https://<your-username>.github.io/seinfeld-trivia/`. That's your live trivia site.

## Editing the questions

Open `questions.js` in any text editor. Each entry has this shape:

```js
{
  id: 1, difficulty: "easy", points: 1,
  q: "What is Kramer's first name?",
  choices: ["Cosmo", "Kenny", "Clayton", "Carl"],
  answer: 0,
  episode: "Revealed in S6E11 — \"The Switch\""
}
```

After editing, commit and push — GitHub Pages will redeploy automatically. To grow the bank further, just add more entries with unique `id` values; the round-draw logic adapts automatically as long as you have at least 10 Easy, 12 Medium, and 8 Hard.

---

*No affiliation with Seinfeld, NBC, Sony, or any rights holder. Trivia only — all character names and episode references belong to their respective owners.*
