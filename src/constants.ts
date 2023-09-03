import { Color, Expression, Language, Space, Symbol } from "./types";

export const colors: Record<Color, string> = {
  black: "#000",
  white: "#fff",
  primary10: "#001947",
  primary40: "#0657ce",
  primary90: "#dae2ff",
  neutral10: "#191b23",
  neutral40: "#5c5e67",
  neutral90: "#e1e2ec",
  neutral95: "#f0f0fa",
  neutral98: "#faf8ff",
  neutral99: "#fefbff",
};

export const expressions: Expression[] = [
  { character: "_", quantifier: 1, string: "_" },
  { character: "_", quantifier: 2, string: "__" },
  { character: "_", quantifier: 3, string: "___" },
];

export const languages: Language[] = ["EN", "PL"];

export const spaces: Record<Space, string> = {
  EMSP: " ",
  NBSP: " ",
  ZWSP: "​",
};

export const symbols: Record<Symbol, string> = {
  arrowDropDown: "arrow_drop_down",
  northEast: "north_east",
  translate: "translate",
};

export const headerHeight = 65;

export const placeholderText = `My dear __Brutus__, — The following essay, I am well aware, attempting as it does to present in a Latin dress subjects that philosophers of consummate ability and profound learning have already handled in Greek, is sure to encounter criticism from different quarters. \n\n
- Certain persons, and those not without some pretension to letters, disapprove of the study of philosophy altogether. \n\n
- Others do not so greatly object to it provided it be followed in dilettante fashion; but they do not think it ought to engage so large an amount of one's interest and attention. \n\n
- A third class, learned in Greek literature and contemptuous of Latin, will say that they prefer to spend their time in reading Greek. \n\n
- Lastly, I suspect there will be some who will wish to divert me to other fields of authorship, asserting that this kind of composition, though a graceful recreation, is beneath the dignity of my character and position. \n\n

##### To all of these __objections__ \n\n
I suppose I ought to make some brief reply.
The indiscriminate censure of philosophy has indeed been sufficiently answered already in the book which I wrote in praise of that study, in order to defend it against a bitter attack that had been made upon it by __Hortensius__.
The favourable reception which that volume appeared to obtain from yourself and from others whom I considered competent to sit in judgment encouraged me to embark upon further undertakings; for I did not wish to be thought incapable of sustaining the interest that I had aroused.
The second class of critics, who, however much they approve of philosophy, nevertheless would rather have it less eagerly prosecuted, are asking for a restraint that it is not easy to practise.
The study is one that when once taken up admits of no restriction or control.
In fact, the attitude of the former class, who attempt to dissuade us from philosophy altogether, seems almost less unreasonable than that of those who would set limits to what is essentially unlimited, and expect us to stop half-way in a study that increases in value the further it proceeds. \n\n

##### _If __Wisdom__ be attainable, __let us not only win but enjoy it;___ \n\n
> _or if attainment be difficult, still there is no end to the search for truth, other than its discovery._ \n\n
It were base to flag in the pursuit, when the object pursued is so supremely lovely.
Indeed if we like writing, who would be so churlish as to debar us from it?
Or if we find it a labour, who is to set limits to another man's exertions?
No doubt it is kind of __Chremes__ in __Terence__'s play to wish his new neighbour not for it is not industry in general, but toil of a menial kind, from which he would deter him; but only a busybody would take exception to an occupation which, like mine, is a labour of love. \n\n

![Photo by Jakob Owens on Unsplash](https://storage.googleapis.com/fir-viewpoint.appspot.com/placeholder.jpg) \n\n

### A more difficult task therefore \n\n
is to deal with the objection of those who profess a contempt for Latin writings as such.
What astonishes me first of all about them is this, — why should they dislike their native language for serious and important subjects, when they are quite willing to read Latin plays translated word for word from the Greek?
Who has such a hatred, one might almost say for the very name of Roman, as to despise and reject the ___Medea___ of __Ennius__ or the ___Antiope___ of __Pacuvius__, and give as his reason that though he enjoys the corresponding plays of __Euripides__ he cannot endure books written in Latin?
What, he cries, am I to read ___The Young Comrades___ of __Caecilius__, or __Terence__'s ___Maid of Andros___, when I might be reading the same two comedies of __Menander__? \n\n

##### With this sort of person __I disagree so strongly,__ \n\n
that, admitting the ___Electra___ of __Sophocles__ to be a masterpiece, I yet think __Atilius__'s poor translation of it worth my while to read.
___"An iron writer,"___ __Licinius__ called him; still, in my opinion, a writer all the same, and therefore deserving to be read.
For to be entirely unversed in our own poets argues either the extreme of mental inactivity or else a refinement of taste carried to the point of caprice.
To my mind no one can be styled a well-read man who does not know our native literature.
If we read just as readily as the same passage in the Greek, shall we object to having __Plato__'s discourses on morality and happiness set before the reader in Latin? \n\n

##### And supposing that for our part __we do not fill the office of a mere translator,__ \n\n
but, while preserving the doctrines of our chosen authorities, add thereto our own criticism and our own arrangement: what ground have these objectors for ranking the writings of Greece above compositions that are at once brilliant in style and not mere translations from the Greek originals?
Perhaps they will rejoin that the subject has already been dealt with by the Greeks already.
But then what reason have they for reading the multitude of Greek authors either that one has to read?
Take Stoicism: what aspect of it has __Chrysippus__ left untouched?
Yet we read __Diogenes__, __Antipater__, __Mnesarchus__, __Panaetius__, and many others, not least our friend __Posidonius__.
Again, __Theophrastus__ handles topics previously treated by __Aristotle__, yet he gives us no small pleasure all the same.
Nor do the Epicureans cease from writing as the spirit moves them on the same questions on which __Epicurus__ and the ancients wrote.
If Greek writers find Greek readers when presenting the same subject in a different setting, why should not Romans be read by Romans? \n\n

> The above __placeholder text__ comes from __Cicero__'s _[De finibus bonorum et malorum]()_.`;
