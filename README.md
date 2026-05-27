# The Seinfeld Trivia Challenge

A 65-question Seinfeld trivia quiz with sourced episode citations for every answer. Built as a single-page HTML app — no build step, no dependencies — drop it on GitHub Pages and play.

## Files

- **`index.html`** — the full quiz app (HTML, CSS, and JS all in one file)
- **`questions.js`** — the question bank, sorted by difficulty with episode citations

The episode source for each question is shown to the player inline, right after they answer it — no separate source document is needed.

## Scoring

| Difficulty | Points each | Count | Max |
|------------|-------------|-------|-----|
| Easy       | 1           | 20    | 20  |
| Medium     | 3           | 25    | 75  |
| Hard       | 5           | 20    | 100 |
| **Total**  |             | **65**| **195** |

## How to put this on GitHub Pages

1. **Create a new GitHub repo** (e.g. `seinfeld-trivia`). Keep it public.
2. **Upload these three files** to the root of the repo (`index.html`, `questions.js`, `README.md`). You can drag-and-drop them into the GitHub web UI if you don't want to use git on the command line.
3. **Enable GitHub Pages**: go to **Settings → Pages**, set Source to **Deploy from a branch**, pick the `main` branch and the `/ (root)` folder, then click Save.
4. **Wait ~30 seconds**, then visit `https://<your-username>.github.io/seinfeld-trivia/`. That's your live trivia site.

You can share that URL directly. No server, no database, no cost.

## Editing the questions

Open `questions.js` in any text editor. Each entry has this shape:

```js
{
  id: 1, difficulty: "easy", points: 1,
  q: "What is Kramer's first name?",
  choices: ["Cosmo", "Curtis", "Carl", "Calvin"],
  answer: 0,                        // 0 = first choice (A), 3 = last (D)
  episode: "S6E11 — \"The Switch\"",
  note: "Revealed when his mother, Babs Kramer, calls him by name."
}
```

The `episode` field is displayed to the player after they answer. The optional `note` field is shown as additional context.

After editing, commit and push — GitHub Pages will redeploy automatically.

## A note on sources

Episode citations follow the standard Season×Episode format used by Wikipedia, IMDb, and the major Seinfeld archives. Where a fact is established across the series rather than in a single episode (apartment numbers, recurring catchphrases, casting facts), the source line says so. Where a recurring gag spans many episodes (Festivus, Vandelay, Del Boca Vista), the citation points to the first major appearance — the episode that established the joke.

If you spot an error, just edit `questions.js` and push.

## What's next

If this goes well, the same template works for any show. To make a Friends version, you'd just swap out `questions.js` (and update the title and styling in `index.html`). The scoring, navigation, and feedback logic don't have to change.

---

*No affiliation with Seinfeld, NBC, or any rights holder. Trivia only — all character names and episode references belong to their respective owners.*
