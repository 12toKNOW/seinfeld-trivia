// ============================================================
//  SEINFELD TRIVIA — QUESTION BANK
//  Scoring: Easy = 1 pt | Medium = 3 pts | Hard = 5 pts
//  Each question is tied to a specific episode for source verification.
// ============================================================

const QUESTIONS = [
  // ─────────── EASY (1 point) ───────────
  {
    id: 1, difficulty: "easy", points: 1,
    q: "What is Kramer's first name?",
    choices: ["Cosmo", "Curtis", "Carl", "Calvin"],
    answer: 0,
    episode: "S6E11 — \"The Switch\"",
    note: "Revealed when his mother, Babs Kramer, calls him by name."
  },
  {
    id: 2, difficulty: "easy", points: 1,
    q: "What is the name of the famously strict soup vendor?",
    choices: ["The Soup Guy", "The Soup Nazi", "The Soup King", "The Soup Master"],
    answer: 1,
    episode: "S7E6 — \"The Soup Nazi\""
  },
  {
    id: 3, difficulty: "easy", points: 1,
    q: "What is Jerry's apartment number?",
    choices: ["3B", "5A", "5B", "4A"],
    answer: 1,
    episode: "Recurring set detail throughout the series."
  },
  {
    id: 4, difficulty: "easy", points: 1,
    q: "What's the name of George's fiancée who dies from licking toxic wedding-invitation envelopes?",
    choices: ["Sheila", "Marisa", "Susan", "Allison"],
    answer: 2,
    episode: "S7E24 — \"The Invitations\""
  },
  {
    id: 5, difficulty: "easy", points: 1,
    q: "What is the in-show name of the diner where the gang eats?",
    choices: ["Tom's Restaurant", "Monk's Café", "Reggie's Diner", "Joe's Place"],
    answer: 1,
    episode: "Recurring — Monk's Café is the in-show name; the exterior is Tom's Restaurant in NYC."
  },
  {
    id: 6, difficulty: "easy", points: 1,
    q: "What holiday does Frank Costanza celebrate instead of Christmas?",
    choices: ["Festivus", "Frankmas", "Costanzakkah", "The Solstice"],
    answer: 0,
    episode: "S9E10 — \"The Strike\""
  },
  {
    id: 7, difficulty: "easy", points: 1,
    q: "What is Elaine's last name?",
    choices: ["Bennett", "Benes", "Bennes", "Beneis"],
    answer: 1,
    episode: "Recurring throughout the series."
  },
  {
    id: 8, difficulty: "easy", points: 1,
    q: "What is Newman's profession?",
    choices: ["Cab driver", "Mail carrier", "Doorman", "Building super"],
    answer: 1,
    episode: "Recurring — Newman works for the U.S. Postal Service."
  },
  {
    id: 9, difficulty: "easy", points: 1,
    q: "What is the bet in \"The Contest\"?",
    choices: ["Who can stay awake longest", "Who can be \"master of their domain\" the longest", "Who can date the most people", "Who can eat the most"],
    answer: 1,
    episode: "S4E11 — \"The Contest\""
  },
  {
    id: 10, difficulty: "easy", points: 1,
    q: "What two words does Elaine shout while pushing people in disbelief?",
    choices: ["Move it!", "Get out!", "Come on!", "No way!"],
    answer: 1,
    episode: "Recurring catchphrase across the series."
  },
  {
    id: 11, difficulty: "easy", points: 1,
    q: "What does George shout when accused of poor performance after swimming in cold water?",
    choices: ["I was in the pool!", "It's cold out!", "Don't blame the pool!", "I was just swimming!"],
    answer: 0,
    episode: "S5E21 — \"The Hamptons\" (the famous \"shrinkage\" episode)."
  },
  {
    id: 12, difficulty: "easy", points: 1,
    q: "What is Jerry's standard greeting when he sees Newman?",
    choices: ["Hello, Newman.", "Oh no.", "You again.", "Get out."],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 13, difficulty: "easy", points: 1,
    q: "What candy does Kramer accidentally drop into a patient during surgery?",
    choices: ["A Tic Tac", "A Junior Mint", "A Lifesaver", "A Skittle"],
    answer: 1,
    episode: "S4E20 — \"The Junior Mint\""
  },
  {
    id: 14, difficulty: "easy", points: 1,
    q: "What catalog company does Elaine work for from Season 6 onward?",
    choices: ["Pendant Publishing", "J. Peterman", "Doubleday", "Time Warner"],
    answer: 1,
    episode: "Introduced in Season 6 — J. Peterman becomes her long-term employer."
  },
  {
    id: 15, difficulty: "easy", points: 1,
    q: "Who is Kramer's loud, fast-talking lawyer (a Johnnie Cochran parody)?",
    choices: ["Jackie Chiles", "Saul Goodman", "Marvin Schmoikel", "Bob Sacamano"],
    answer: 0,
    episode: "S7E6 — \"The Soup Nazi\" (first appearance); recurring afterward."
  },
  {
    id: 16, difficulty: "easy", points: 1,
    q: "Which line completes the famous quote: \"These pretzels are making me ___\"?",
    choices: ["Sick", "Thirsty", "Hungry", "Angry"],
    answer: 1,
    episode: "S3E11 — \"The Alternate Side\""
  },
  {
    id: 17, difficulty: "easy", points: 1,
    q: "What is the title of the show-within-the-show that Jerry and George pitch to NBC?",
    choices: ["The Pitch", "Jerry", "Nothing", "The Show About Nothing"],
    answer: 1,
    episode: "S4E3 — \"The Pitch\""
  },
  {
    id: 18, difficulty: "easy", points: 1,
    q: "What is Elaine's signature awful dance described as by Jerry?",
    choices: ["The Benes Boogie", "A full-body dry heave set to music", "The Pulled Pork", "The Elaine Shake"],
    answer: 1,
    episode: "S8E4 — \"The Little Kicks\""
  },
  {
    id: 19, difficulty: "easy", points: 1,
    q: "What kind of car does George's father refuse to give up?",
    choices: ["A Cadillac", "An Impala", "A GTO", "A Ford LTD"],
    answer: 0,
    episode: "S6E5 — \"The Couch\" (and recurring)."
  },
  {
    id: 20, difficulty: "easy", points: 1,
    q: "Who plays Newman?",
    choices: ["Wayne Knight", "Phil Morris", "Patrick Warburton", "Jason Alexander's brother"],
    answer: 0,
    episode: "Series-long casting fact."
  },

  // ─────────── MEDIUM (3 points) ───────────
  {
    id: 21, difficulty: "medium", points: 3,
    q: "What is George's fake company name when he poses as a latex salesman to extend his unemployment?",
    choices: ["Costanza Industries", "Vandelay Industries", "Pendant Group", "Art's Imports"],
    answer: 1,
    episode: "S3E17 — \"The Boyfriend\""
  },
  {
    id: 22, difficulty: "medium", points: 3,
    q: "What does Kramer write a coffee-table book about?",
    choices: ["Coffee", "Coffee tables", "Levels", "Hot tubs"],
    answer: 1,
    episode: "S5E2 — \"The Puffy Shirt\""
  },
  {
    id: 23, difficulty: "medium", points: 3,
    q: "Who is the \"low talker\" who tricks Jerry into agreeing to wear the puffy shirt on television?",
    choices: ["Leslie", "Sheila", "Marla", "Dolores"],
    answer: 0,
    episode: "S5E2 — \"The Puffy Shirt\""
  },
  {
    id: 24, difficulty: "medium", points: 3,
    q: "What burns down Susan's family's cabin?",
    choices: ["A faulty heater", "Kramer's lit Cuban cigar", "A lightning strike", "George smoking secretly"],
    answer: 1,
    episode: "S4E8 — \"The Cheever Letters\""
  },
  {
    id: 25, difficulty: "medium", points: 3,
    q: "What does Jerry's nemesis dentist, Tim Whatley, convert to — supposedly so he can tell better jokes?",
    choices: ["Catholicism", "Judaism", "Atheism", "Scientology"],
    answer: 1,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 26, difficulty: "medium", points: 3,
    q: "What word does Elaine use to evaluate whether men deserve one of her stockpiled contraceptive sponges?",
    choices: ["Sponge-worthy", "Sponge-eligible", "Spongeable", "Worth-sponging"],
    answer: 0,
    episode: "S7E9 — \"The Sponge\""
  },
  {
    id: 27, difficulty: "medium", points: 3,
    q: "Who plays the New York Yankees owner who hires George?",
    choices: ["A George Steinbrenner caricature (voiced by Larry David)", "Bob Costas", "The real George Steinbrenner", "Bud Selig"],
    answer: 0,
    episode: "Recurring S5–S8; voiced by co-creator Larry David."
  },
  {
    id: 28, difficulty: "medium", points: 3,
    q: "What is the name of George's notoriously disengaged boss in Season 9?",
    choices: ["Mr. Kruger", "Mr. Wilhelm", "Mr. Pitt", "Mr. Lippman"],
    answer: 0,
    episode: "Recurring in Season 9 — Kruger Industrial Smoothing."
  },
  {
    id: 29, difficulty: "medium", points: 3,
    q: "Which babka does the gang prefer at the dinner party — calling the other \"the lesser babka\"?",
    choices: ["Chocolate", "Cinnamon", "Marble", "Raisin"],
    answer: 0,
    episode: "S5E13 — \"The Dinner Party\""
  },
  {
    id: 30, difficulty: "medium", points: 3,
    q: "Why does George Steinbrenner believe George Costanza is dead at the start of Season 8?",
    choices: ["He doesn't show up after vacation", "His car is found with toilet paper trailing the bumper", "He's seen face-down in the lobby", "He fakes it on his anniversary"],
    answer: 1,
    episode: "S8E1 — \"The Foundation\""
  },
  {
    id: 31, difficulty: "medium", points: 3,
    q: "Who is the \"close talker\" who dates Elaine?",
    choices: ["Aaron (played by Judge Reinhold)", "Jake Jarmel", "Joel Rifkin", "Tim Whatley"],
    answer: 0,
    episode: "S5E18 — \"The Raincoats\""
  },
  {
    id: 32, difficulty: "medium", points: 3,
    q: "What is Kramer's fragrance pitch — a cologne that \"smells like you just came from the beach\"?",
    choices: ["The Beach", "Ocean Mist", "Surf's Up", "Coast"],
    answer: 0,
    episode: "S4E13 — \"The Pick\""
  },
  {
    id: 33, difficulty: "medium", points: 3,
    q: "Frank Costanza prefers what name for the bra-for-men business Kramer pitches?",
    choices: ["The Bro", "The Mansiere", "The Hoister", "The Executive"],
    answer: 1,
    episode: "S6E18 — \"The Doorman\" (Kramer wants \"The Bro\"; Frank wants \"The Mansiere\")."
  },
  {
    id: 34, difficulty: "medium", points: 3,
    q: "What is Elaine's most infamous J. Peterman catalog creation?",
    choices: ["The Urban Sombrero", "The Gore-Tex Coat", "The Himalayan Walking Shoes", "The Safari Vest"],
    answer: 0,
    episode: "Featured in Season 8."
  },
  {
    id: 35, difficulty: "medium", points: 3,
    q: "Who is Kenny Bania?",
    choices: ["A hack stand-up comedian who idolizes Jerry", "George's college roommate", "Elaine's editor at Pendant", "Newman's postal supervisor"],
    answer: 0,
    episode: "First appearance in Season 6; recurring in Seasons 7–9."
  },
  {
    id: 36, difficulty: "medium", points: 3,
    q: "What is the name of the Pakistani restaurant owner who blames Jerry for ruining his life?",
    choices: ["Babu Bhatt", "Mickey Abbott", "Ramone", "Salman"],
    answer: 0,
    episode: "S3E7 — \"The Café\" (first appearance); returns in S4E23 \"The Pilot.\""
  },
  {
    id: 37, difficulty: "medium", points: 3,
    q: "What is the name of Jerry's parents' retirement community in Florida?",
    choices: ["Del Boca Vista", "Boca Phase II", "Coconut Cove", "Sunshine Acres"],
    answer: 0,
    episode: "Recurring — \"Del Boca Vista\" with multiple phases is referenced across the series."
  },
  {
    id: 38, difficulty: "medium", points: 3,
    q: "What is the title of the episode where George spends days trying to deliver the perfect comeback he thought of too late?",
    choices: ["The Jerk Store", "The Comeback", "The Yada Yada", "The Outing"],
    answer: 1,
    episode: "S8E13 — \"The Comeback\""
  },
  {
    id: 39, difficulty: "medium", points: 3,
    q: "What is the name of George's fictional charity used as a fake Christmas gift?",
    choices: ["The Human Fund", "Costanza Cares", "The Festivus Foundation", "Money for Mankind"],
    answer: 0,
    episode: "S9E10 — \"The Strike\" (\"The Human Fund: Money for People\")."
  },
  {
    id: 40, difficulty: "medium", points: 3,
    q: "Who are Kevin, Gene, and Feldman — the men Elaine starts hanging out with instead of the usual gang?",
    choices: ["Her three exes", "The \"Bizarro\" versions of Jerry, George, and Kramer", "Peterman coworkers", "Pendant Publishing editors"],
    answer: 1,
    episode: "S8E3 — \"The Bizarro Jerry\""
  },
  {
    id: 41, difficulty: "medium", points: 3,
    q: "What disturbing feature does Jerry's girlfriend Gillian have in \"The Bizarro Jerry\"?",
    choices: ["Man hands", "A unibrow", "A loud laugh", "Terrible breath"],
    answer: 0,
    episode: "S8E3 — \"The Bizarro Jerry\""
  },
  {
    id: 42, difficulty: "medium", points: 3,
    q: "What profession does George briefly pretend to have, leading to a beached-whale rescue speech?",
    choices: ["Architect", "Marine biologist", "Latex salesman", "Hand model"],
    answer: 1,
    episode: "S5E14 — \"The Marine Biologist\""
  },
  {
    id: 43, difficulty: "medium", points: 3,
    q: "What does George pull from the whale's blowhole in his famous monologue?",
    choices: ["A Titleist golf ball (Kramer's)", "A plastic bag", "A six-pack ring", "A fishing lure"],
    answer: 0,
    episode: "S5E14 — \"The Marine Biologist\""
  },
  {
    id: 44, difficulty: "medium", points: 3,
    q: "What does Elaine spend an entire episode trying to recover after giving out a fake phone number?",
    choices: ["A purchase punch-card from a sub shop", "A library card", "Her Pendant business card", "A driver's license"],
    answer: 0,
    episode: "S9E10 — \"The Strike\" (the sub-shop card subplot)."
  },
  {
    id: 45, difficulty: "medium", points: 3,
    q: "What is the rhyming hint that Jerry's date gives about her name (which he can never remember)?",
    choices: ["It rhymes with a city", "It rhymes with a female body part", "It rhymes with a vegetable", "It rhymes with a Greek letter"],
    answer: 1,
    episode: "S4E20 — \"The Junior Mint\" (the \"Mulva… Dolores!\" reveal)."
  },

  // ─────────── HARD (5 points) ───────────
  {
    id: 46, difficulty: "hard", points: 5,
    q: "Who plays David Puddy, Elaine's on-and-off boyfriend (and Jerry's mechanic / face-painted Devils fan)?",
    choices: ["Patrick Warburton", "Bob Odenkirk", "Jon Favreau", "John O'Hurley"],
    answer: 0,
    episode: "First appearance S6E21 — \"The Fusilli Jerry\"; recurring afterward."
  },
  {
    id: 47, difficulty: "hard", points: 5,
    q: "What does Kramer sculpt out of fusilli pasta, leading to a very awkward injury for Frank Costanza?",
    choices: ["A pasta sculpture of Jerry", "A clay bust of George", "A wire sculpture of Newman", "A bronze cat"],
    answer: 0,
    episode: "S6E21 — \"The Fusilli Jerry\""
  },
  {
    id: 48, difficulty: "hard", points: 5,
    q: "Who is Bob Sacamano?",
    choices: ["A recurring on-screen friend of Kramer", "A character constantly mentioned but never seen on screen", "Newman's cousin", "Kramer's college roommate"],
    answer: 1,
    episode: "Recurring across the series — mentioned in many episodes, never appears."
  },
  {
    id: 49, difficulty: "hard", points: 5,
    q: "Who plays Elaine's eccentric boss, J. Peterman?",
    choices: ["John O'Hurley", "Patrick Warburton", "Bob Balaban", "Larry Thomas"],
    answer: 0,
    episode: "Recurring from Season 6 onward."
  },
  {
    id: 50, difficulty: "hard", points: 5,
    q: "Who plays the Soup Nazi (Yev Kassem)?",
    choices: ["Larry Thomas", "Wayne Knight", "John O'Hurley", "Steven Hytner"],
    answer: 0,
    episode: "S7E6 — \"The Soup Nazi\""
  },
  {
    id: 51, difficulty: "hard", points: 5,
    q: "What real-life NYC restaurant is used as the exterior for Monk's Café?",
    choices: ["Tom's Restaurant (Broadway, Upper West Side)", "Katz's Deli", "Junior's, Brooklyn", "A studio set with no real exterior"],
    answer: 0,
    episode: "Series-long set detail — Tom's Restaurant near Columbia University."
  },
  {
    id: 52, difficulty: "hard", points: 5,
    q: "Who is Jerry's Season 7/8 fiancée — engaged to him because they're so similar they're \"basically twins\"?",
    choices: ["Jeannie Steinman", "Sidra", "Rachel", "Audrey"],
    answer: 0,
    episode: "Engagement begins S7E24 — \"The Invitations\"; broken off in S8E1 \"The Foundation.\""
  },
  {
    id: 53, difficulty: "hard", points: 5,
    q: "Who plays Susan Ross, George's ill-fated fiancée?",
    choices: ["Heidi Swedberg", "Amanda Peet", "Janeane Garofalo", "Christine Taylor"],
    answer: 0,
    episode: "Recurring S4 onward; engagement arc S7."
  },
  {
    id: 54, difficulty: "hard", points: 5,
    q: "What is Kramer's failed Season 9 business idea involving the homeless and transportation?",
    choices: ["A rickshaw service powered by the homeless", "A pedicab co-op", "A horse-drawn carriage company", "A bicycle delivery service"],
    answer: 0,
    episode: "S9E17 — \"The Bookstore\""
  },
  {
    id: 55, difficulty: "hard", points: 5,
    q: "Who plays Estelle Costanza, George's mother?",
    choices: ["Estelle Harris", "Liz Sheridan", "Doris Roberts", "Estelle Getty"],
    answer: 0,
    episode: "Recurring from Season 4 onward."
  },
  {
    id: 56, difficulty: "hard", points: 5,
    q: "Who plays Helen Seinfeld, Jerry's mother?",
    choices: ["Liz Sheridan", "Estelle Harris", "Doris Roberts", "Renée Taylor"],
    answer: 0,
    episode: "Recurring across the series."
  },
  {
    id: 57, difficulty: "hard", points: 5,
    q: "Who is Mickey Abbott?",
    choices: ["Kramer's actor friend, often cast as a stand-in for children", "A bookie George owes money to", "Newman's mail-route trainee", "Elaine's editor"],
    answer: 0,
    episode: "First appearance S5E6 — \"The Bris\"; recurring afterward."
  },
  {
    id: 58, difficulty: "hard", points: 5,
    q: "What is the name of George's college crush (the \"it girl\") whom he tries to win back as a fake marine biologist?",
    choices: ["Diane DeConn", "Marisa Tomei", "Susan Ross", "Marion"],
    answer: 0,
    episode: "S5E14 — \"The Marine Biologist\" (played by Rosalind Allen)."
  },
  {
    id: 59, difficulty: "hard", points: 5,
    q: "What does Newman shout that's almost as famous as Jerry's \"Hello, Newman\"?",
    choices: ["\"When you control the mail, you control… information!\"", "\"Curse you, Seinfeld!\"", "\"I'll get you yet!\"", "\"Postage is power!\""],
    answer: 0,
    episode: "S5E9 — \"The Masseuse\""
  },
  {
    id: 60, difficulty: "hard", points: 5,
    q: "Who prosecutes the gang in the finale, securing their convictions under the Good Samaritan law?",
    choices: ["Jackie Chiles", "District Attorney Hoyt", "Sidler", "Whatley"],
    answer: 1,
    episode: "S9E23/24 — \"The Finale\""
  },
  {
    id: 61, difficulty: "hard", points: 5,
    q: "What event from George's teenage years does he obsess over reclaiming in Season 9?",
    choices: ["His Frogger high score at a pizza shop", "A first kiss with Lainie", "A spelling-bee runner-up finish", "His Little League batting average"],
    answer: 0,
    episode: "S9E18 — \"The Frogger\""
  },
  {
    id: 62, difficulty: "hard", points: 5,
    q: "Frank Costanza's longtime rival, who once dated Elaine and ran the David Dinkins re-election campaign — who is he?",
    choices: ["Lloyd Braun", "Bob Sacamano", "Hank Powell", "Joe Davola"],
    answer: 0,
    episode: "Recurring; Dinkins campaign reference in S5E4 \"The Sniffing Accountant\" / returns in S9E10 \"The Strike.\""
  },
  {
    id: 63, difficulty: "hard", points: 5,
    q: "What is George's most-used alias when he's pretending to be cool or successful?",
    choices: ["Art Vandelay", "Buck Naked", "T-Bone", "Koko"],
    answer: 0,
    episode: "Recurring throughout the series; the Vandelay name first appears in S2E11 \"The Stake Out\" and becomes a running gag."
  },
  {
    id: 64, difficulty: "hard", points: 5,
    q: "What is Kramer's apartment number, directly across the hall from Jerry's?",
    choices: ["5A", "5B", "5C", "5D"],
    answer: 1,
    episode: "Series-long set detail."
  },
  {
    id: 65, difficulty: "hard", points: 5,
    q: "What real actress does George become obsessed with dating in Season 7, even though he's engaged to Susan?",
    choices: ["Marisa Tomei (as herself)", "Sandra Bullock", "Julia Roberts", "Helen Hunt"],
    answer: 0,
    episode: "S7E20 — \"The Cadillac, Part 1\""
  }
];
