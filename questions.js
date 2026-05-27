// ============================================================
//  SEINFELD TRIVIA — QUESTION BANK (v2.0)
//  Scoring: Easy = 1 pt | Medium = 3 pts | Hard = 5 pts
//  Each round draws 30 questions: 10 easy / 12 medium / 8 hard
//  Each question is tied to a specific episode for source verification.
// ============================================================

const QUESTIONS = [
  // ════════════════════════════════════════════════════════════
  //   EASY (1 point) — 50 questions
  // ════════════════════════════════════════════════════════════
  {
    id: 1, difficulty: "easy", points: 1,
    q: "What is Kramer's first name?",
    choices: ["Cosmo", "Kenny", "Clayton", "Carl"],
    answer: 0,
    episode: "Revealed in S6E11 — \"The Switch\""
  },
  {
    id: 2, difficulty: "easy", points: 1,
    q: "What is the name of the famously strict soup vendor?",
    choices: ["The Soup Nazi", "The Stew Tyrant", "The Bisque King", "The Broth Master"],
    answer: 0,
    episode: "S7E6 — \"The Soup Nazi\""
  },
  {
    id: 3, difficulty: "easy", points: 1,
    q: "What is Jerry's apartment number?",
    choices: ["5A", "5B", "5C", "5D"],
    answer: 0,
    episode: "Recurring throughout the series — Jerry's apartment 5A is the show's primary location."
  },
  {
    id: 4, difficulty: "easy", points: 1,
    q: "What is the in-show name of the diner where the gang eats?",
    choices: ["Tom's", "Monk's Café", "The Restaurant", "Reggie's"],
    answer: 1,
    episode: "Recurring throughout the series — Monk's is the central hangout."
  },
  {
    id: 5, difficulty: "easy", points: 1,
    q: "What holiday does Frank Costanza celebrate instead of Christmas?",
    choices: ["Hannukah", "Festivus", "Kwanzaa", "Christmas Eve Eve"],
    answer: 1,
    episode: "S9E10 — \"The Strike\" (Festivus for the rest of us)"
  },
  {
    id: 6, difficulty: "easy", points: 1,
    q: "What is Elaine's last name?",
    choices: ["Benes", "Costanza", "Seinfeld", "Mulva"],
    answer: 0,
    episode: "Established throughout the series."
  },
  {
    id: 7, difficulty: "easy", points: 1,
    q: "What is Newman's profession?",
    choices: ["Postal worker", "Cable installer", "Insurance salesman", "Cab driver"],
    answer: 0,
    episode: "Recurring throughout — Newman is a USPS mailman."
  },
  {
    id: 8, difficulty: "easy", points: 1,
    q: "What two words does Elaine shout while pushing people in disbelief?",
    choices: ["Get out!", "Shut up!", "No way!", "I can't!"],
    answer: 0,
    episode: "Elaine's recurring catchphrase / push throughout the series."
  },
  {
    id: 9, difficulty: "easy", points: 1,
    q: "What does George shout when accused of poor performance after swimming in cold water?",
    choices: ["I was in the pool!", "It was the water!", "I was cold!", "It's not my fault!"],
    answer: 0,
    episode: "S5E21 — \"The Hamptons\" (shrinkage)"
  },
  {
    id: 10, difficulty: "easy", points: 1,
    q: "What is Jerry's standard greeting when he sees Newman?",
    choices: ["Newman.", "Hello, Newman.", "Hey, Newman.", "Oh, no — Newman."],
    answer: 1,
    episode: "Recurring throughout the series."
  },
  {
    id: 11, difficulty: "easy", points: 1,
    q: "What is the title of the show-within-the-show that Jerry and George pitch to NBC?",
    choices: ["Jerry", "Seinfeld", "The Show", "Standup"],
    answer: 0,
    episode: "S4E3 — \"The Pitch\" (\"It's a show about nothing!\")"
  },
  {
    id: 12, difficulty: "easy", points: 1,
    q: "Which line completes the famous quote: \"These pretzels are making me ___\"?",
    choices: ["sick", "happy", "thirsty", "crazy"],
    answer: 2,
    episode: "S3E11 — \"The Alternate Side\""
  },
  {
    id: 13, difficulty: "easy", points: 1,
    q: "Who plays Newman?",
    choices: ["Wayne Knight", "Patrick Warburton", "Larry David", "Brian Doyle-Murray"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 14, difficulty: "easy", points: 1,
    q: "What kind of car does George's father refuse to give up?",
    choices: ["A Cadillac", "A Chevy Impala", "A Buick", "A Lincoln"],
    answer: 0,
    episode: "Frank's car is a running gag; the Cadillac storyline runs through S7E14 \"The Cadillac.\""
  },
  {
    id: 15, difficulty: "easy", points: 1,
    q: "What is the name of George's notoriously disengaged boss in Season 9?",
    choices: ["Mr. Wilhelm", "Mr. Kruger", "Mr. Steinbrenner", "Mr. Thomassoulo"],
    answer: 1,
    episode: "Recurring S9 — Mr. Kruger of Kruger Industrial Smoothing, first appears S9E1 \"The Butter Shave.\""
  },
  {
    id: 16, difficulty: "easy", points: 1,
    q: "What's the name of George's fiancée who dies from licking toxic wedding-invitation envelopes?",
    choices: ["Susan Ross", "Marla Penny", "Sheila", "Allison"],
    answer: 0,
    episode: "S7E24 — \"The Invitations\""
  },
  {
    id: 17, difficulty: "easy", points: 1,
    q: "What candy does Kramer accidentally drop into a patient during surgery?",
    choices: ["A Junior Mint", "A Tic Tac", "A Hershey's Kiss", "A piece of gum"],
    answer: 0,
    episode: "S4E20 — \"The Junior Mint\""
  },
  {
    id: 18, difficulty: "easy", points: 1,
    q: "What catalog company does Elaine work for from Season 6 onward?",
    choices: ["J. Peterman", "Pendant Publishing", "Doubleday", "Putumayo"],
    answer: 0,
    episode: "Recurring from S5 onward; J. Peterman as boss from S6."
  },
  {
    id: 19, difficulty: "easy", points: 1,
    q: "What does Kramer write a coffee-table book about?",
    choices: ["Coffee tables", "New York City", "Cigars", "Beach cologne"],
    answer: 0,
    episode: "S5E8 era — Kramer's book is literally a coffee-table book about coffee tables, with fold-out legs."
  },
  {
    id: 20, difficulty: "easy", points: 1,
    q: "What is Kramer's apartment number, directly across the hall from Jerry's?",
    choices: ["5A", "5B", "5C", "5D"],
    answer: 1,
    episode: "Recurring — Kramer lives in 5B, across the hall from Jerry's 5A."
  },
  {
    id: 21, difficulty: "easy", points: 1,
    q: "What is George's most-used alias when he's pretending to be cool or successful?",
    choices: ["Art Vandelay", "Buck Naked", "Kel Varnsen", "T-Bone"],
    answer: 0,
    episode: "Recurring throughout the series; first established S3E17 \"The Boyfriend.\""
  },
  {
    id: 22, difficulty: "easy", points: 1,
    q: "What is the bet in \"The Contest\"?",
    choices: ["Who can stay celibate the longest", "Who can quit smoking first", "Who can avoid the diner the longest", "Who can stop watching TV the longest"],
    answer: 0,
    episode: "S4E11 — \"The Contest\" (master of your domain)"
  },
  {
    id: 23, difficulty: "easy", points: 1,
    q: "Who plays the New York Yankees owner who hires George?",
    choices: ["Larry David (only his voice)", "George Steinbrenner himself", "Lee Bear", "Jerry Stiller"],
    answer: 0,
    episode: "Recurring S5 onward — Larry David voiced Steinbrenner; the character was shot from behind."
  },
  {
    id: 24, difficulty: "easy", points: 1,
    q: "Who is Jerry's Season 7 fiancée — engaged to him because they're so similar they're \"basically the same person\"?",
    choices: ["Jeannie Steinman", "Sidra", "Rachel", "Audrey"],
    answer: 0,
    episode: "S7 fiancée arc — Jeannie Steinman, played by Janeane Garofalo."
  },
  {
    id: 25, difficulty: "easy", points: 1,
    q: "What real-life NYC restaurant is used as the exterior for Monk's Café?",
    choices: ["Tom's Restaurant", "Katz's Deli", "The Carnegie Deli", "Veselka"],
    answer: 0,
    episode: "Tom's Restaurant at 112th and Broadway is the iconic exterior; established from S1E1."
  },
  {
    id: 26, difficulty: "easy", points: 1,
    q: "Who plays Estelle Costanza, George's mother?",
    choices: ["Estelle Harris", "Liz Sheridan", "Anne Meara", "Frances Bay"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 27, difficulty: "easy", points: 1,
    q: "Who plays Helen Seinfeld, Jerry's mother?",
    choices: ["Liz Sheridan", "Estelle Harris", "Doris Roberts", "Frances Bay"],
    answer: 0,
    episode: "Recurring throughout the series."
  },
  {
    id: 28, difficulty: "easy", points: 1,
    q: "What line does Newman shout that's almost as famous as Jerry's \"Hello, Newman\"?",
    choices: ["When you control the mail, you control... information!", "The mail never stops!", "I am the king of mail!", "Postage rules!"],
    answer: 0,
    episode: "S5E9 — \"The Masseuse\""
  },
  {
    id: 29, difficulty: "easy", points: 1,
    q: "What is the name of George's fictional charity used as a fake Christmas gift?",
    choices: ["The Human Fund", "The Costanza Foundation", "Festivus Charity", "Goodwill Aid"],
    answer: 0,
    episode: "S9E10 — \"The Strike\" (\"Money for People\")"
  },
  {
    id: 30, difficulty: "easy", points: 1,
    q: "How does the gang famously describe their show-within-a-show pitch to NBC?",
    choices: ["A show about nothing", "A show about life", "A show about coffee", "A show about Manhattan"],
    answer: 0,
    episode: "S4E3 — \"The Pitch\""
  },
  {
    id: 31, difficulty: "easy", points: 1,
    q: "What does Jerry's dentist Tim Whatley convert to — supposedly so he can tell better jokes?",
    choices: ["Judaism", "Catholicism", "Buddhism", "Scientology"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 32, difficulty: "easy", points: 1,
    q: "What word does Elaine use to evaluate whether men deserve one of her stockpiled contraceptive sponges?",
    choices: ["Sponge-worthy", "Sponge-deserving", "Top-shelf", "Worth-it"],
    answer: 0,
    episode: "S7E9 — \"The Sponge\""
  },
  {
    id: 33, difficulty: "easy", points: 1,
    q: "What is the title of the episode where George spends days trying to deliver the perfect comeback he thought of too late?",
    choices: ["The Jerk Store", "The Comeback", "The Insult", "The Retort"],
    answer: 1,
    episode: "S8E13 — \"The Comeback\" (\"The jerk store called…\")"
  },
  {
    id: 34, difficulty: "easy", points: 1,
    q: "Which babka does the gang prefer at the dinner party — calling the other \"the lesser babka\"?",
    choices: ["Chocolate", "Cinnamon", "Vanilla", "Raspberry"],
    answer: 0,
    episode: "S5E13 — \"The Dinner Party\""
  },
  {
    id: 35, difficulty: "easy", points: 1,
    q: "What is the name of George's fake company when he poses as a latex salesman to extend his unemployment?",
    choices: ["Vandelay Industries", "Costanza Latex", "Vance Refrigeration", "Penny Industries"],
    answer: 0,
    episode: "S3E17 — \"The Boyfriend, Part 2\""
  },
  {
    id: 36, difficulty: "easy", points: 1,
    q: "Who is the \"low talker\" who tricks Jerry into agreeing to wear the puffy shirt on television?",
    choices: ["Leslie", "Lola", "Vanessa", "Marla"],
    answer: 0,
    episode: "S5E2 — \"The Puffy Shirt\""
  },
  {
    id: 37, difficulty: "easy", points: 1,
    q: "What burns down Susan's family's cabin?",
    choices: ["Kramer's cigar", "A grease fire", "Lightning", "George's space heater"],
    answer: 0,
    episode: "S4E7 — \"The Bubble Boy\""
  },
  {
    id: 38, difficulty: "easy", points: 1,
    q: "What is Kramer's fragrance pitch — a cologne that smells like what?",
    choices: ["The forest", "The beach", "Cigars", "Coffee"],
    answer: 1,
    episode: "S3E14 — \"The Pez Dispenser\" (idea first pitched); develops further in S4E13 \"The Pick.\""
  },
  {
    id: 39, difficulty: "easy", points: 1,
    q: "Who is the \"close talker\" who dates Elaine?",
    choices: ["Aaron", "Mickey", "Joel", "Dan"],
    answer: 0,
    episode: "S5E18 — \"The Raincoats\" (Aaron, played by Judge Reinhold)"
  },
  {
    id: 40, difficulty: "easy", points: 1,
    q: "What is the name of Jerry's parents' retirement community in Florida?",
    choices: ["The Pines of Mar Gables", "Del Boca Vista", "Boca Raton Estates", "Sunset Village"],
    answer: 1,
    episode: "Recurring — Del Boca Vista is the iconic name from \"The Pen,\" \"The Cadillac,\" etc."
  },
  {
    id: 41, difficulty: "easy", points: 1,
    q: "Who plays the Soup Nazi (Yev Kassem)?",
    choices: ["Larry Thomas", "Larry David", "Jerry Stiller", "Wayne Knight"],
    answer: 0,
    episode: "S7E6 — \"The Soup Nazi\""
  },
  {
    id: 42, difficulty: "easy", points: 1,
    q: "Who plays Susan Ross, George's ill-fated fiancée?",
    choices: ["Heidi Swedberg", "Janeane Garofalo", "Marisa Tomei", "Wendel Meldrum"],
    answer: 0,
    episode: "Recurring from S4 onward; dies S7E24 \"The Invitations.\""
  },
  {
    id: 43, difficulty: "easy", points: 1,
    q: "What does George spend nearly an entire episode pretending to be in order to impress a woman?",
    choices: ["A marine biologist", "An architect", "A latex salesman", "All of the above — different episodes"],
    answer: 3,
    episode: "Recurring — marine biologist S5E14, latex importer S3E17, architect referenced multiple times."
  },
  {
    id: 44, difficulty: "easy", points: 1,
    q: "What is Kramer's failed Season 9 business idea involving the homeless and transportation?",
    choices: ["A rickshaw business", "A homeless taxi service", "A homeless subway", "A homeless food truck"],
    answer: 0,
    episode: "S9E17 — \"The Bookstore\" (rickshaws pulled by homeless men)"
  },
  {
    id: 45, difficulty: "easy", points: 1,
    q: "Who is the loud, fast-talking lawyer (a Johnnie Cochran parody)?",
    choices: ["Jackie Chiles", "Bob Loblaw", "Lionel Hutz", "Marvin Dyer"],
    answer: 0,
    episode: "Recurring — first appearance S7E6 \"The Soup Nazi\"; major role in S9E22-24 finale."
  },
  {
    id: 46, difficulty: "easy", points: 1,
    q: "What is Elaine's signature awful dance described as by Jerry?",
    choices: ["Like a full-body dry heave", "Like she's having a seizure", "Like a chicken laying an egg", "Like a broken windmill"],
    answer: 0,
    episode: "S8E4 — \"The Little Kicks\""
  },
  {
    id: 47, difficulty: "easy", points: 1,
    q: "Why does George Steinbrenner believe George Costanza is dead at the start of Season 8?",
    choices: ["A mix-up at the office", "George fakes his own death", "George quits suddenly", "Susan's death gets misreported to him"],
    answer: 0,
    episode: "S8E1 — \"The Foundation\" (Steinbrenner mistakenly believes George died)"
  },
  {
    id: 48, difficulty: "easy", points: 1,
    q: "Frank Costanza prefers what name for the bra-for-men business Kramer pitches?",
    choices: ["The Bro", "The Manssiere", "The Mansiere", "The Manzier"],
    answer: 0,
    episode: "S6E18 — \"The Doorman\" (Frank wants \"The Bro\"; Kramer wants \"The Manssiere\")"
  },
  {
    id: 49, difficulty: "easy", points: 1,
    q: "What is Elaine's most infamous J. Peterman catalog creation?",
    choices: ["The Urban Sombrero", "The Renegade Fedora", "The Manhattan Beret", "The Brooklyn Bowler"],
    answer: 0,
    episode: "Recurring — established Season 8."
  },
  {
    id: 50, difficulty: "easy", points: 1,
    q: "Who is Kenny Bania?",
    choices: ["A hack comedian who idolizes Jerry", "A rival from Jerry's neighborhood", "Newman's cousin", "Elaine's high school boyfriend"],
    answer: 0,
    episode: "Recurring from S6 onward — Kenny Bania played by Steve Hytner."
  },

  // ════════════════════════════════════════════════════════════
  //   MEDIUM (3 points) — 60 questions
  // ════════════════════════════════════════════════════════════
  {
    id: 51, difficulty: "medium", points: 3,
    q: "What is the famous catchphrase from \"The Outing\" that Jerry and George repeat after every denial they're a couple?",
    choices: ["Not that there's anything wrong with that", "We're roommates, that's all", "Friends, just friends", "It's complicated"],
    answer: 0,
    episode: "S4E17 — \"The Outing\""
  },
  {
    id: 52, difficulty: "medium", points: 3,
    q: "In \"The Rye,\" what is the name of the old woman Jerry steals the marble rye from?",
    choices: ["Mabel Choate", "Mrs. Hamilton", "Marion Stiller", "Mrs. Coleman"],
    answer: 0,
    episode: "S7E11 — \"The Rye\" (Frances Bay as Mabel Choate)"
  },
  {
    id: 53, difficulty: "medium", points: 3,
    q: "What bakery does Jerry try to buy the marble rye from in \"The Rye\"?",
    choices: ["Schnitzer's", "Lippman's", "Royal Bakery", "Bischoff's"],
    answer: 0,
    episode: "S7E11 — \"The Rye\""
  },
  {
    id: 54, difficulty: "medium", points: 3,
    q: "What first name does George adopt when posing as a different person in the limo bound for the neo-Nazi rally?",
    choices: ["Colin", "Donald", "Sean", "Patrick"],
    answer: 0,
    episode: "S3E19 — \"The Limo\" (Colin O'Brien)"
  },
  {
    id: 55, difficulty: "medium", points: 3,
    q: "What fake last name does Jerry use as his alias in \"The Limo\"?",
    choices: ["Murphy", "Donovan", "O'Connor", "Kelly"],
    answer: 0,
    episode: "S3E19 — \"The Limo\" (Dylan Murphy)"
  },
  {
    id: 56, difficulty: "medium", points: 3,
    q: "Who plays Lt. Joe Bookman, the New York Public Library investigations officer?",
    choices: ["Philip Baker Hall", "Brian Doyle-Murray", "James Hong", "Wayne Knight"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 57, difficulty: "medium", points: 3,
    q: "What book does Lt. Bookman pursue Jerry over — 20 years overdue from 1971?",
    choices: ["Tropic of Cancer", "Tropic of Capricorn", "Catch-22", "Slaughterhouse-Five"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 58, difficulty: "medium", points: 3,
    q: "In \"The Pez Dispenser,\" what character is on the dispenser that makes Elaine laugh during the piano recital?",
    choices: ["Tweety Bird", "Mickey Mouse", "Donald Duck", "Pluto"],
    answer: 0,
    episode: "S3E14 — \"The Pez Dispenser\""
  },
  {
    id: 59, difficulty: "medium", points: 3,
    q: "What concept of George's relationship does \"The Pez Dispenser\" revolve around — what George says he lacks with his pianist girlfriend?",
    choices: ["Hand", "Power", "Control", "Confidence"],
    answer: 0,
    episode: "S3E14 — \"The Pez Dispenser\" (George wants \"hand\" in the relationship)"
  },
  {
    id: 60, difficulty: "medium", points: 3,
    q: "In \"The Yada Yada,\" who plays Dr. Tim Whatley, the dentist who converts to Judaism for the jokes?",
    choices: ["Bryan Cranston", "Patrick Warburton", "Wayne Knight", "John O'Hurley"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 61, difficulty: "medium", points: 3,
    q: "In \"The Yada Yada,\" who plays Beth Lookner — the woman Jerry pursues after she splits with her husband?",
    choices: ["Debra Messing", "Janeane Garofalo", "Lauren Graham", "Marisa Tomei"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 62, difficulty: "medium", points: 3,
    q: "In \"The Chinese Restaurant,\" what name does the maître d' yell instead of \"Costanza,\" preventing George from getting Tatiana's call?",
    choices: ["Cartwright", "Coleman", "Cornelius", "Costas"],
    answer: 0,
    episode: "S2E11 — \"The Chinese Restaurant\""
  },
  {
    id: 63, difficulty: "medium", points: 3,
    q: "Who is the maître d' in \"The Chinese Restaurant\" — frequently named, always evasive about the wait time?",
    choices: ["Bruce", "Larry", "Ken", "Stan"],
    answer: 0,
    episode: "S2E11 — \"The Chinese Restaurant\" (Bruce, played by James Hong)"
  },
  {
    id: 64, difficulty: "medium", points: 3,
    q: "In \"The Bubble Boy,\" what answer to a Trivial Pursuit question does George refuse to accept because of a typo on the card?",
    choices: ["The Moors", "The Vikings", "The Vandals", "The Visigoths"],
    answer: 0,
    episode: "S4E7 — \"The Bubble Boy\" (the card erroneously says \"Moops\")"
  },
  {
    id: 65, difficulty: "medium", points: 3,
    q: "What is the bubble boy's actual name?",
    choices: ["Donald Sanger", "Daniel Sanger", "David Sanger", "Donald Mecher"],
    answer: 0,
    episode: "S4E7 — \"The Bubble Boy\""
  },
  {
    id: 66, difficulty: "medium", points: 3,
    q: "In \"The Soup,\" what does Kenny Bania give Jerry in exchange for a meal?",
    choices: ["A brand-new Armani suit", "Cufflinks", "A Rolex watch", "Cash"],
    answer: 0,
    episode: "S6E7 — \"The Soup\""
  },
  {
    id: 67, difficulty: "medium", points: 3,
    q: "In \"The Soup,\" what does Bania insist doesn't count as a meal?",
    choices: ["Soup", "Salad", "An appetizer", "A sandwich"],
    answer: 0,
    episode: "S6E7 — \"The Soup\""
  },
  {
    id: 68, difficulty: "medium", points: 3,
    q: "Who is Elaine's wealthy, eccentric boss before J. Peterman — known for eating Snickers bars with a fork and knife?",
    choices: ["Mr. Pitt (Justin Pitt)", "Mr. Lippman", "Mr. Steinbrenner", "Mr. Kruger"],
    answer: 0,
    episode: "Recurring Season 5–6; the Snickers gag is from S6E3 \"The Pledge Drive.\""
  },
  {
    id: 69, difficulty: "medium", points: 3,
    q: "Who plays Mr. Pitt?",
    choices: ["Ian Abercrombie", "John O'Hurley", "Brian Doyle-Murray", "Wayne Knight"],
    answer: 0,
    episode: "Recurring S5–S6."
  },
  {
    id: 70, difficulty: "medium", points: 3,
    q: "Who plays J. Peterman, Elaine's eccentric catalog-empire boss?",
    choices: ["John O'Hurley", "Ian Abercrombie", "Patrick Warburton", "Larry Thomas"],
    answer: 0,
    episode: "Recurring from S6 onward."
  },
  {
    id: 71, difficulty: "medium", points: 3,
    q: "What does Kramer sculpt out of fusilli pasta — leading to a horrifying injury for Frank Costanza?",
    choices: ["A statue of Jerry (the \"Fusilli Jerry\")", "A pasta replica of George", "A pasta version of Elaine", "A pasta self-portrait"],
    answer: 0,
    episode: "S6E21 — \"The Fusilli Jerry\""
  },
  {
    id: 72, difficulty: "medium", points: 3,
    q: "Who plays David Puddy, Elaine's on-and-off boyfriend?",
    choices: ["Patrick Warburton", "Wayne Knight", "John O'Hurley", "Bryan Cranston"],
    answer: 0,
    episode: "Recurring from S6 onward."
  },
  {
    id: 73, difficulty: "medium", points: 3,
    q: "What is Puddy's original profession when introduced?",
    choices: ["Auto mechanic", "Insurance adjuster", "Postal worker", "Stockbroker"],
    answer: 0,
    episode: "First introduced in S6E12 \"The Fusilli Jerry\" as Jerry's mechanic; later a car salesman."
  },
  {
    id: 74, difficulty: "medium", points: 3,
    q: "What does Puddy paint on his face when he goes to New Jersey Devils games?",
    choices: ["Red and white face paint", "A devil with horns", "Just his face entirely red", "A team logo"],
    answer: 0,
    episode: "S8E15 — \"The Susie\" / S9 episodes (Devils face paint)"
  },
  {
    id: 75, difficulty: "medium", points: 3,
    q: "What real actress does George become obsessed with dating in Season 7 — even though he's engaged to Susan?",
    choices: ["Marisa Tomei", "Sarah Jessica Parker", "Geena Davis", "Julia Roberts"],
    answer: 0,
    episode: "S7E20 — \"The Cadillac, Part 1\""
  },
  {
    id: 76, difficulty: "medium", points: 3,
    q: "What is the name of George's college crush (the \"it girl\") whom he tries to win back as a fake marine biologist?",
    choices: ["Diane DeConn", "Susan Ross", "Rebecca DeMornay", "Marla Penny"],
    answer: 0,
    episode: "S5E14 — \"The Marine Biologist\" (Diane DeConn, played by Rosalind Allen)"
  },
  {
    id: 77, difficulty: "medium", points: 3,
    q: "What does George pull from the whale's blowhole in his famous Season 5 monologue?",
    choices: ["A Titleist golf ball — one that Kramer hit", "A wedding ring", "A piece of plastic", "A barnacle"],
    answer: 0,
    episode: "S5E14 — \"The Marine Biologist\""
  },
  {
    id: 78, difficulty: "medium", points: 3,
    q: "What is the name of the Pakistani restaurant owner who blames Jerry for ruining his life?",
    choices: ["Babu Bhatt", "Sanjay Singh", "Kumar Patel", "Vinod Singh"],
    answer: 0,
    episode: "First appearance S3E7 \"The Café\"; testifies in S9E23-24 \"The Finale.\""
  },
  {
    id: 79, difficulty: "medium", points: 3,
    q: "What is the name of George's Season 9 employer where he ends up — a place with no work culture?",
    choices: ["Kruger Industrial Smoothing", "Vandelay Industries", "Pendant Industrial", "Sanalac"],
    answer: 0,
    episode: "Recurring Season 9 — Kruger Industrial Smoothing."
  },
  {
    id: 80, difficulty: "medium", points: 3,
    q: "Who is the prosecutor in the finale, securing the gang's convictions under the Good Samaritan law?",
    choices: ["DA Hoyt", "DA Smith", "DA Chiles", "DA Bookman"],
    answer: 0,
    episode: "S9E23-24 — \"The Finale\""
  },
  {
    id: 81, difficulty: "medium", points: 3,
    q: "What event from George's teenage years does he obsess over reclaiming in Season 9?",
    choices: ["His Frogger high score", "His high-school baseball record", "His first kiss", "His prom date"],
    answer: 0,
    episode: "S9E18 — \"The Frogger\""
  },
  {
    id: 82, difficulty: "medium", points: 3,
    q: "Frank Costanza's longtime rival, who once dated Elaine and ran the David Dinkins re-election campaign — who is he?",
    choices: ["Lloyd Braun", "Sid Farkus", "Saul Bass", "Mickey Abbott"],
    answer: 0,
    episode: "Recurring — Lloyd Braun's reappearance, including in S9E10 \"The Strike.\""
  },
  {
    id: 83, difficulty: "medium", points: 3,
    q: "Who is Mickey Abbott?",
    choices: ["Kramer's friend who is a little person and a stand-in for child actors", "Newman's cousin", "Elaine's first boyfriend", "George's roommate"],
    answer: 0,
    episode: "Recurring from S5E6 \"The Bris\"; played by Danny Woodburn."
  },
  {
    id: 84, difficulty: "medium", points: 3,
    q: "Who is the awful tennis pro who marries a friend of Estelle Costanza and is part of Jerry's social orbit?",
    choices: ["Milos", "Tim Whatley", "Aaron", "Joel Rifkin"],
    answer: 0,
    episode: "S5E15 — \"The Pie\" / S6E15 \"The Beard\" — Milos the tennis pro."
  },
  {
    id: 85, difficulty: "medium", points: 3,
    q: "What is Elaine's most famous workplace conflict — over a salad?",
    choices: ["The Big Salad", "The Lunch", "The Daily Special", "The Order"],
    answer: 0,
    episode: "S6E2 — \"The Big Salad\""
  },
  {
    id: 86, difficulty: "medium", points: 3,
    q: "In \"The Strike,\" what is the central Festivus tradition involving an unadorned aluminum pole?",
    choices: ["The Festivus pole", "The Costanza Column", "The Frank Pole", "The Naked Mast"],
    answer: 0,
    episode: "S9E10 — \"The Strike\""
  },
  {
    id: 87, difficulty: "medium", points: 3,
    q: "What are the two main Festivus traditions after the pole is set up?",
    choices: ["The Airing of Grievances and Feats of Strength", "The Wrestling Match and the Caroling", "The Toast and the Dinner", "The Bonfire and the Carols"],
    answer: 0,
    episode: "S9E10 — \"The Strike\""
  },
  {
    id: 88, difficulty: "medium", points: 3,
    q: "In \"The Outing,\" what is the profession of Sharon, the woman who overhears Jerry and George's conversation?",
    choices: ["NYU journalism student / college reporter", "Tabloid reporter", "Diary journalist", "Tourist"],
    answer: 0,
    episode: "S4E17 — \"The Outing\""
  },
  {
    id: 89, difficulty: "medium", points: 3,
    q: "What disturbing feature does Jerry's girlfriend Gillian have in \"The Bizarro Jerry\"?",
    choices: ["Man hands", "Two different colored eyes", "A unibrow", "An incredibly deep voice"],
    answer: 0,
    episode: "S8E3 — \"The Bizarro Jerry\""
  },
  {
    id: 90, difficulty: "medium", points: 3,
    q: "Who are Kevin, Gene, and Feldman — the men Elaine starts hanging out with instead of the usual gang?",
    choices: ["The Bizarro Jerry, George, and Kramer", "Her coworkers", "Her ex-boyfriends", "Newman's friends"],
    answer: 0,
    episode: "S8E3 — \"The Bizarro Jerry\""
  },
  {
    id: 91, difficulty: "medium", points: 3,
    q: "What is the rhyming hint that Jerry's date gives about her name (which he can never remember)?",
    choices: ["It rhymes with a female body part", "It rhymes with a city", "It rhymes with a fruit", "It rhymes with a Greek god"],
    answer: 0,
    episode: "S4E20 — \"The Junior Mint\" (Mulva / Dolores)"
  },
  {
    id: 92, difficulty: "medium", points: 3,
    q: "What is the real name of Jerry's date in \"The Junior Mint\" — the one whose name he can't remember?",
    choices: ["Dolores", "Gloria", "Mulva", "Bovary"],
    answer: 0,
    episode: "S4E20 — \"The Junior Mint\""
  },
  {
    id: 93, difficulty: "medium", points: 3,
    q: "In \"The Library,\" what nickname does George's old gym teacher Mr. Heyman mutter at the end of the episode?",
    choices: ["Can't-Stand-Ya", "Costanza-Loser", "Penny-Pincher", "Stinky"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 94, difficulty: "medium", points: 3,
    q: "In \"The Comeback,\" what is the rebound insult George spends days trying to deliver to a coworker?",
    choices: ["The jerk store called — they're running out of you", "You're a moron, Reilly", "Eat your own pizza", "Sit on it"],
    answer: 0,
    episode: "S8E13 — \"The Comeback\""
  },
  {
    id: 95, difficulty: "medium", points: 3,
    q: "In \"The Invitations,\" what kills Susan?",
    choices: ["Toxic glue on cheap wedding invitations", "An allergic reaction to flowers", "A car accident", "Food poisoning"],
    answer: 0,
    episode: "S7E24 — \"The Invitations\""
  },
  {
    id: 96, difficulty: "medium", points: 3,
    q: "What is the name of the elderly woman in Florida who plays a key role in Morty Seinfeld's impeachment trial?",
    choices: ["Mabel Choate", "Marlene Stein", "Mrs. Brown", "Ruth Cohen"],
    answer: 0,
    episode: "S7E14-15 — \"The Cadillac\" (Mabel Choate returns)"
  },
  {
    id: 97, difficulty: "medium", points: 3,
    q: "Who is George's college friend with a delusional belief that everyone hates him — a recurring character?",
    choices: ["Lloyd Braun", "Sid Farkus", "Aaron", "Mickey"],
    answer: 0,
    episode: "Recurring — Lloyd Braun across multiple episodes."
  },
  {
    id: 98, difficulty: "medium", points: 3,
    q: "What is Elaine's longtime nemesis — an heiress to a candy bar fortune who walks around with a bra as a top?",
    choices: ["Sue Ellen Mischke", "Peggy", "Susan", "Marla"],
    answer: 0,
    episode: "Recurring from S5; the bra-as-top gag is S7E12 \"The Caddy.\""
  },
  {
    id: 99, difficulty: "medium", points: 3,
    q: "In \"The Pez Dispenser,\" Kramer is part of which group that does cold-water swimming?",
    choices: ["The Polar Bear Club", "The Coney Island Swim Team", "The Brooklyn Polar Crew", "The Penguins"],
    answer: 0,
    episode: "S3E14 — \"The Pez Dispenser\""
  },
  {
    id: 100, difficulty: "medium", points: 3,
    q: "In \"The Caddy,\" who is the famously bra-as-shirt-wearing heiress who steals attention from Elaine?",
    choices: ["Sue Ellen Mischke", "Peggy", "Susan", "Joanne"],
    answer: 0,
    episode: "S7E12 — \"The Caddy\""
  },
  {
    id: 101, difficulty: "medium", points: 3,
    q: "What is the name of Jerry's neighbor who recurs throughout the series as Kramer's mentioned-but-rarely-seen friend?",
    choices: ["Bob Sacamano", "Lomez", "Corky Ramirez", "All of the above"],
    answer: 3,
    episode: "Recurring — Bob Sacamano, Lomez, and Corky Ramirez are all unseen friends of Kramer."
  },
  {
    id: 102, difficulty: "medium", points: 3,
    q: "What is the title of the Season 8 episode about Elaine's terrible dancing at the office?",
    choices: ["The Little Kicks", "The Dance Off", "The Office", "The Wrong Steps"],
    answer: 0,
    episode: "S8E4 — \"The Little Kicks\""
  },
  {
    id: 103, difficulty: "medium", points: 3,
    q: "Who plays Elaine's father Alton Benes — the imposing novelist Jerry is terrified of?",
    choices: ["Lawrence Tierney", "Wilford Brimley", "John Mahoney", "James Coburn"],
    answer: 0,
    episode: "S2E3 — \"The Jacket\""
  },
  {
    id: 104, difficulty: "medium", points: 3,
    q: "What is the Festivus tradition that requires the head of the household to be pinned in a wrestling match?",
    choices: ["Feats of Strength", "The Wrestling", "The Champion", "The Combat"],
    answer: 0,
    episode: "S9E10 — \"The Strike\""
  },
  {
    id: 105, difficulty: "medium", points: 3,
    q: "Who plays Uncle Leo, Jerry's lonely uncle who's always shouting \"Hello!\"?",
    choices: ["Len Lesser", "Jerry Stiller", "Phil Morris", "Brian Doyle-Murray"],
    answer: 0,
    episode: "Recurring from S2 onward."
  },
  {
    id: 106, difficulty: "medium", points: 3,
    q: "What is Morty Seinfeld's accusation against Jack Klompus in Florida that drives the \"Cadillac\" plot?",
    choices: ["Klompus framed Morty for embezzlement to impeach him", "Klompus stole his Cadillac", "Klompus insulted Helen", "Klompus stole his wallet"],
    answer: 0,
    episode: "S7E14-15 — \"The Cadillac\" (the embezzlement/impeachment storyline)"
  },
  {
    id: 107, difficulty: "medium", points: 3,
    q: "Who plays Mr. Lippman, Elaine's first major boss at Pendant Publishing?",
    choices: ["Richard Fancy", "John O'Hurley", "Ian Abercrombie", "Brian Doyle-Murray"],
    answer: 0,
    episode: "Recurring from S3 onward."
  },
  {
    id: 108, difficulty: "medium", points: 3,
    q: "What does Frank Costanza famously call out — repeatedly — when he's angry, especially in \"The Strike\"?",
    choices: ["A Festivus for the rest of us!", "Serenity now!", "Stop the insanity!", "Both A and B in different contexts"],
    answer: 3,
    episode: "S9E10 \"The Strike\" (Festivus) / S9E3 \"The Serenity Now\""
  },
  {
    id: 109, difficulty: "medium", points: 3,
    q: "What is the phrase Frank Costanza repeats over and over to calm himself in \"The Serenity Now\"?",
    choices: ["Serenity now!", "Calm Costanza!", "Peace, Frank, peace!", "Quiet on the set!"],
    answer: 0,
    episode: "S9E3 — \"The Serenity Now\""
  },
  {
    id: 110, difficulty: "medium", points: 3,
    q: "What is the name of Newman's mail-route adventure that propels much of his Season 6 storyline?",
    choices: ["His Hawaii-bound transfer plan", "His promotion bid", "His mailman strike", "His scheme to sue Jerry"],
    answer: 0,
    episode: "S6E25 — \"The Understudy\" / Newman's Hawaii transfer arc."
  },

  // ════════════════════════════════════════════════════════════
  //   HARD (5 points) — 40 questions
  // ════════════════════════════════════════════════════════════
  {
    id: 111, difficulty: "hard", points: 5,
    q: "What is the season-episode number of \"The Chinese Restaurant\"?",
    choices: ["S2E11", "S2E6", "S3E5", "S2E16"],
    answer: 0,
    episode: "S2E11 — \"The Chinese Restaurant\" (production code 206, the 16th episode overall)"
  },
  {
    id: 112, difficulty: "hard", points: 5,
    q: "Who provides the voice of Donald, the bubble boy?",
    choices: ["Jon Hayman (a Seinfeld writer)", "Larry David", "Wayne Knight", "Brian Doyle-Murray"],
    answer: 0,
    episode: "S4E7 — \"The Bubble Boy\""
  },
  {
    id: 113, difficulty: "hard", points: 5,
    q: "In \"The Bubble Boy,\" who plays the bubble boy's father, Mel Sanger?",
    choices: ["Brian Doyle-Murray", "Wayne Knight", "Larry Thomas", "Jerry Stiller"],
    answer: 0,
    episode: "S4E7 — \"The Bubble Boy\""
  },
  {
    id: 114, difficulty: "hard", points: 5,
    q: "What is the name of Jerry's high school crush in \"The Library\" — the one whose orange dress is \"burned into his memory\"?",
    choices: ["Sherry Becker", "Sarah Bookman", "Allison", "Marion"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 115, difficulty: "hard", points: 5,
    q: "What book did Jerry actually return to the library — the one he confused with Tropic of Cancer?",
    choices: ["Tropic of Capricorn", "Plexus", "Sexus", "Nexus"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 116, difficulty: "hard", points: 5,
    q: "Who plays the Pakistani restaurant owner Babu Bhatt?",
    choices: ["Brian George", "James Hong", "Erick Avari", "Ajay Mehta"],
    answer: 0,
    episode: "Recurring from S3E7 \"The Café\" onward."
  },
  {
    id: 117, difficulty: "hard", points: 5,
    q: "In \"The Pez Dispenser,\" what Beethoven piece is George's girlfriend Noel playing when Elaine bursts out laughing?",
    choices: ["Piano Sonata No. 8 (Pathétique)", "Moonlight Sonata", "Waldstein Sonata", "Symphony No. 5"],
    answer: 0,
    episode: "S3E14 — \"The Pez Dispenser\""
  },
  {
    id: 118, difficulty: "hard", points: 5,
    q: "What movie were Jerry and Elaine going to see in \"The Chinese Restaurant\"?",
    choices: ["Plan 9 from Outer Space", "Manos: The Hands of Fate", "The Room", "Showgirls"],
    answer: 0,
    episode: "S2E11 — \"The Chinese Restaurant\""
  },
  {
    id: 119, difficulty: "hard", points: 5,
    q: "Who plays Tim, the menacing limo passenger in \"The Limo\"?",
    choices: ["Peter Krause", "Wayne Knight", "Bryan Cranston", "Patrick Warburton"],
    answer: 0,
    episode: "S3E19 — \"The Limo\""
  },
  {
    id: 120, difficulty: "hard", points: 5,
    q: "In \"The Limo,\" what is the name of the neo-Nazi organization Donald O'Brien leads?",
    choices: ["The Aryan Union", "The White Coalition", "The Brotherhood", "The Resistance"],
    answer: 0,
    episode: "S3E19 — \"The Limo\""
  },
  {
    id: 121, difficulty: "hard", points: 5,
    q: "What is the name of the homeless man in \"The Library\" who turns out to be George's old gym teacher?",
    choices: ["Mr. Heyman", "Mr. Henson", "Mr. Lippman", "Mr. Heyward"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 122, difficulty: "hard", points: 5,
    q: "In \"The Yada Yada,\" what is the name of George's girlfriend whose constant \"yada yada yada\" hides salacious details?",
    choices: ["Marcy", "Marla", "Beth", "Janet"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 123, difficulty: "hard", points: 5,
    q: "In \"The Yada Yada,\" Mickey's father is played by which screen legend?",
    choices: ["Robert Wagner", "Burt Reynolds", "Tony Bennett", "Anthony Quinn"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 124, difficulty: "hard", points: 5,
    q: "In \"The Rye,\" what does Elaine's saxophonist boyfriend John Germaine fail to do after a romantic encounter — embarrassing him at a record-producer showcase?",
    choices: ["He can't hit a note and produces off-key whistles", "He can't tune his sax", "He drops his sax", "He forgets the song"],
    answer: 0,
    episode: "S7E11 — \"The Rye\""
  },
  {
    id: 125, difficulty: "hard", points: 5,
    q: "Who plays Mr. Pitt, Elaine's frantic, eccentric boss before J. Peterman?",
    choices: ["Ian Abercrombie", "John O'Hurley", "Brian Doyle-Murray", "James Hong"],
    answer: 0,
    episode: "Recurring S5–S6."
  },
  {
    id: 126, difficulty: "hard", points: 5,
    q: "In \"The Pledge Drive,\" what Yankee player does George (after picking up Mr. Pitt's cutlery habit) get to appear on Jerry's PBS telethon?",
    choices: ["Danny Tartabull", "Bernie Williams", "Paul O'Neill", "Don Mattingly"],
    answer: 0,
    episode: "S6E3 — \"The Pledge Drive\""
  },
  {
    id: 127, difficulty: "hard", points: 5,
    q: "What is Mr. Pitt's odd eating habit that becomes a citywide trend in \"The Pledge Drive\"?",
    choices: ["Eating a Snickers bar with a knife and fork", "Eating fries with a spoon", "Eating sandwiches deconstructed", "Drinking soda through a straw with both hands"],
    answer: 0,
    episode: "S6E3 — \"The Pledge Drive\""
  },
  {
    id: 128, difficulty: "hard", points: 5,
    q: "What is the name of Kramer's mother (revealed in \"The Switch\")?",
    choices: ["Babs Kramer", "Babs Kennedy", "Babs Cosmo", "Eileen Kramer"],
    answer: 0,
    episode: "S6E11 — \"The Switch\""
  },
  {
    id: 129, difficulty: "hard", points: 5,
    q: "What is Mickey Abbott's profession?",
    choices: ["A stand-in for child actors on soap operas", "An accountant", "A taxi driver", "A waiter"],
    answer: 0,
    episode: "Recurring from S5E6 \"The Bris\"; established in his introduction."
  },
  {
    id: 130, difficulty: "hard", points: 5,
    q: "In \"The Soup Nazi,\" what is the name of Jerry's overly affectionate girlfriend whose nickname \"schmoopie\" embarrasses him in line?",
    choices: ["Sheila", "Marisa", "Lisa", "Daphne"],
    answer: 0,
    episode: "S7E6 — \"The Soup Nazi\""
  },
  {
    id: 131, difficulty: "hard", points: 5,
    q: "Who plays Jackie Chiles, the lawyer modeled on Johnnie Cochran?",
    choices: ["Phil Morris", "Brian Doyle-Murray", "Bryan Cranston", "Wayne Knight"],
    answer: 0,
    episode: "Recurring — first appearance S7E6 \"The Soup Nazi.\""
  },
  {
    id: 132, difficulty: "hard", points: 5,
    q: "What is the title of the episode where Jerry's parents host the Costanzas in Florida, with Morty facing impeachment?",
    choices: ["The Cadillac (Parts 1 & 2)", "The Pen", "The Cigar Store Indian", "The Diplomat's Club"],
    answer: 0,
    episode: "S7E14-15 — \"The Cadillac, Part 1\" and \"The Cadillac, Part 2\""
  },
  {
    id: 133, difficulty: "hard", points: 5,
    q: "Who plays Lorraine Catalano — the receptionist Jerry recognizes in \"The Chinese Restaurant\"?",
    choices: ["Judy Kain", "O-Lan Jones", "Carol Mansell", "Cynthia Szigeti"],
    answer: 0,
    episode: "S2E11 — \"The Chinese Restaurant\""
  },
  {
    id: 134, difficulty: "hard", points: 5,
    q: "In \"The Limo,\" who plays Eva — the female passenger who falls for George's neo-Nazi persona?",
    choices: ["Suzanne Snyder", "Heidi Swedberg", "Janeane Garofalo", "Marisa Tomei"],
    answer: 0,
    episode: "S3E19 — \"The Limo\""
  },
  {
    id: 135, difficulty: "hard", points: 5,
    q: "Who co-wrote \"The Limo\" with Larry Charles?",
    choices: ["Marc Jaffe", "Larry David", "Jerry Seinfeld", "Carol Leifer"],
    answer: 0,
    episode: "S3E19 — \"The Limo\""
  },
  {
    id: 136, difficulty: "hard", points: 5,
    q: "Who wrote \"The Library\" episode?",
    choices: ["Larry Charles", "Larry David", "Jerry Seinfeld", "Carol Leifer"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 137, difficulty: "hard", points: 5,
    q: "Who wrote \"The Rye\"?",
    choices: ["Carol Leifer", "Larry David", "Larry Charles", "Peter Mehlman"],
    answer: 0,
    episode: "S7E11 — \"The Rye\""
  },
  {
    id: 138, difficulty: "hard", points: 5,
    q: "Who wrote \"The Yada Yada\" — and what was special about the writer's involvement?",
    choices: ["Peter Mehlman and Jill Franklyn — it was Franklyn's first script for the show", "Larry David alone", "Larry Charles", "Spike Feresten"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 139, difficulty: "hard", points: 5,
    q: "On what date did \"The Soup Nazi\" originally air?",
    choices: ["November 2, 1995", "October 28, 1995", "November 16, 1995", "December 7, 1995"],
    answer: 0,
    episode: "S7E6 — \"The Soup Nazi\""
  },
  {
    id: 140, difficulty: "hard", points: 5,
    q: "What was the original title of Seinfeld when it premiered as a pilot in 1989?",
    choices: ["The Seinfeld Chronicles", "Stand Up", "Jerry", "About Nothing"],
    answer: 0,
    episode: "S1E1 — pilot aired July 5, 1989, as \"The Seinfeld Chronicles.\""
  },
  {
    id: 141, difficulty: "hard", points: 5,
    q: "What is the name of Mickey's father in \"The Yada Yada\" — the dentist who chastises Jerry for being anti-dentite?",
    choices: ["Dr. Abbott", "Dr. Mickey", "Dr. Stein", "Dr. Lippman"],
    answer: 0,
    episode: "S8E19 — \"The Yada Yada\""
  },
  {
    id: 142, difficulty: "hard", points: 5,
    q: "In \"The Library,\" who plays Marion the librarian who dates Kramer?",
    choices: ["Ashley Gardner", "Carol Mansell", "Cynthia Szigeti", "Heidi Swedberg"],
    answer: 0,
    episode: "S3E5 — \"The Library\""
  },
  {
    id: 143, difficulty: "hard", points: 5,
    q: "Who plays Joan Frances Bay, the actress who played Mabel Choate (the marble rye lady)?",
    choices: ["Frances Bay", "Estelle Harris", "Liz Sheridan", "Cloris Leachman"],
    answer: 0,
    episode: "S7E11 — \"The Rye\""
  },
  {
    id: 144, difficulty: "hard", points: 5,
    q: "What 1994 Yankees player makes a cameo as himself in \"The Pledge Drive\"?",
    choices: ["Danny Tartabull", "Don Mattingly", "Bernie Williams", "Paul O'Neill"],
    answer: 0,
    episode: "S6E3 — \"The Pledge Drive\""
  },
  {
    id: 145, difficulty: "hard", points: 5,
    q: "What is the title of the Seinfeld finale (Parts 1 and 2)?",
    choices: ["The Finale", "The Conclusion", "The End", "The Trial"],
    answer: 0,
    episode: "S9E23-24 — \"The Finale, Part 1 & Part 2\""
  },
  {
    id: 146, difficulty: "hard", points: 5,
    q: "Who plays Jeannie Steinman, Jerry's Season 7 fiancée?",
    choices: ["Janeane Garofalo", "Marisa Tomei", "Lauren Graham", "Debra Messing"],
    answer: 0,
    episode: "Season 7 — engagement arc culminating in S7E24 \"The Invitations.\""
  },
  {
    id: 147, difficulty: "hard", points: 5,
    q: "In what season-episode does Kramer's first name (Cosmo) finally get revealed?",
    choices: ["S6E11 — \"The Switch\"", "S5E22 — \"The Opposite\"", "S6E22 — \"The Diplomat's Club\"", "S7E1 — \"The Engagement\""],
    answer: 0,
    episode: "S6E11 — \"The Switch\""
  },
  {
    id: 148, difficulty: "hard", points: 5,
    q: "Who plays Allison, George's girlfriend in \"The Outing\" who becomes suicidal when George tries to break up with her?",
    choices: ["Kari Coleman", "Cynthia Szigeti", "Heidi Swedberg", "Janeane Garofalo"],
    answer: 0,
    episode: "S4E17 — \"The Outing\""
  },
  {
    id: 149, difficulty: "hard", points: 5,
    q: "In \"The Bubble Boy,\" what is the first name of the father (the Yoo-hoo delivery driver)?",
    choices: ["Mel", "Marv", "Maurice", "Mike"],
    answer: 0,
    episode: "S4E7 — \"The Bubble Boy\" (Mel Sanger, played by Brian Doyle-Murray)"
  },
  {
    id: 150, difficulty: "hard", points: 5,
    q: "What was the production episode count of the Seinfeld series finale (the final episode broadcast)?",
    choices: ["180 episodes total", "175 episodes", "150 episodes", "200 episodes"],
    answer: 0,
    episode: "Seinfeld aired 180 episodes total across 9 seasons (1989–1998), with the finale (\"The Finale, Part 2\") as episode 180."
  }
];
