// bulk insert
var data = [
  {    
    "title": "I, Robot",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2004-06-01",
    "description": "The three laws of Robotics: 1) A robot may not injure a human being or, through inaction, allow a human being to come to harm 2) A robot must obey orders givein to it by human beings except where such orders would conflict with the First Law. 3) A robot must protect its own existence as long as such protection does not conflict with the First or Second Law. With these three, simple directives, Isaac Asimov changed our perception of robots forever when he formulated the laws governing their behavior. In I, Robot, Asimov chronicles the development of the robot through a series of interlinked stories: from its primitive origins in the present to its ultimate perfection in the not-so-distant future--a future in which humanity itself may be rendered obsolete. Here are stories of robots gone mad, of mind-read robots, and robots with a sense of humor. Of robot politicians, and robots who secretly run the world--all told with the dramatic blend of science fact and science fiction that has become Asmiov's trademark. From the Hardcover edition.",
    "pageCount": 272
  },
  {
    "title": "Foundation",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2004-06-01",
    "description": "One of the great masterworks of science fiction, the Foundation novels of Isaac Asimov are unsurpassed for their unique blend of nonstop action, daring ideas, and extensive world-building. The story of our future begins with the history of Foundation and its greatest psychohistorian: Hari Seldon. For twelve thousand years the Galactic Empire has ruled supreme. Now it is dying. Only Hari Seldon, creator of the revolutionary science of psychohistory, can see into the future—a dark age of ignorance, barbarism, and warfare that will last thirty thousand years. To preserve knowledge and save mankind, Seldon gathers the best minds in the Empire—both scientists and scholars—and brings them to a bleak planet at the edge of the Galaxy to serve as a beacon of hope for future generations. He calls his sanctuary the Foundation. But soon the fledgling Foundation finds itself at the mercy of corrupt warlords rising in the wake of the receding Empire. And mankind’s last best hope is faced with an agonizing choice: submit to the barbarians and live as slaves—or take a stand for freedom and risk total destruction. From the Hardcover edition.",
    "pageCount": 296
  },
  {
    "title": "Nemesis",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2008-11-19",
    "description": "In the twenty-third century pioneers have escaped the crowded earth for life in self-sustaining orbital colonies. One of the colonies, Rotor, has broken away from the solar system to create its own renegade utopia around an unknown red star two light-years from Earth: a star named Nemesis. Now a fifteen-year-old Rotorian girl has learned of the dire threat that nemesis poses to Earth's people--but she is prevented from warning them. Soon she will realize that Nemesis endangers Rotor as well. And so it will be up to her alone to save both Earth and Rotor as--drawn inexorably by Nemesis, the death star--they hurtle toward certain disaster. From the Paperback edition.",
    "pageCount": 432
  },
  {
    "title": "The End of Eternity",
    "authors": "Isaac Asimov",
    "publisher": "Macmillan",
    "publishedDate": "2011-03-29",
    "description": "Andrew Harlan, an Eternal, falls in love with Noys Lambert, who lives in real time, but when he tries to make her an Eternal, he is faced with a crucial decision about the destruction of Eternity.",
    "pageCount": 256
  },
  {
    "title": "Pebble in the Sky",
    "authors": "Isaac Asimov",
    "publisher": "Macmillan",
    "publishedDate": "2010-04-27",
    "description": "Hurtled through time from 1949 Chicago to an Earth during the heyday of the first Galactic Empire, retired tailor Joseph Schwartz finds himself on a backwater, insignificant planet with much of its land ruined by radioactivity and so poor that its inhabitants are sentenced to death at the age of 60--and Joseph is 62--in a new edition of the author's first novel. Reprint.",
    "pageCount": 256
  },
  {
    "title": "Caves of Steel",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2011-04-13",
    "description": "A millennium into the future two advancements have altered the course of human history: the colonization of the galaxy and the creation of the positronic brain. Isaac Asimov's Robot novels chronicle the unlikely partnership between a New York City detective and a humanoid robot who must learn to work together. Like most people left behind on an over-populated Earth, New York City police detective Elijah Baley had little love for either the arrogant Spacers or their robotic companions. But when a prominent Spacer is murdered under mysterious circumstances, Baley is ordered to the Outer Worlds to help track down the killer. The relationship between Life and his Spacer superiors, who distrusted all Earthmen, was strained from the start. Then he learned that they had assigned him a partner: R. Daneel Olivaw. Worst of all was that the \"R\" stood for robot--and his positronic partner was made in the image and likeness of the murder victim!",
    "pageCount": 288
  },
  {
    "title": "Nightfall",
    "authors": "Isaac Asimov, Robert Silverberg",
    "publisher": "Random House LLC",
    "publishedDate": "2011-11-09",
    "description": "These two renowned writers have invented a world not unlike our own--a world on the edge of chaos, torn between the madness of religious fanaticism and the stubborn denial of scientists. Only a handful of people on the planet Lagash are prepared to face the truth--that their six suns are setting all at once for the first time in 2,000 years, signaling the end of civilization! From the Paperback edition.",
    "pageCount": 352
  },
  {
    "title": "The complete stories",
    "authors": "Isaac Asimov",
    "publisher": "Anchor",
    "publishedDate": "1992-03-01",
    "description": "Gathers together previously published stories from one of the masters of science fiction",
    "pageCount": 560
  },
  {
    "title": "Fantastic Voyage",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2011-04-13",
    "description": "Four men and a woman are reduced to a microscopic fraction of their original size, sent in a miniaturized atomic sub through a dying man's carotid artery to destroy a blood clot in his brain. If they fail, the entire world will be doomed. From the Paperback edition.",
    "pageCount": 208
  },
  {
    "title": "The Stars, Like Dust",
    "authors": "Isaac Asimov",
    "publisher": "Macmillan",
    "publishedDate": "2008-11-25",
    "description": "Fleeing an unknown assassin after surviving a radiation bomb planted in his dorm room, naïve University of Earth student Biron Farrell is outraged by the subsequent murder of his father and finds himself entangled in a web of deep-space rebellion, political intrigue, and espionage. 15,000 first printing.",
    "pageCount": 240
  },
  {
    "title": "Foundation and Earth",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2012-02-22",
    "description": "The fifth novel in Asimov's popular Foundation series opens with second thoughts. Councilman Golan Trevize is wondering if he was right to choose a collective mind as the best possible future for humanity over the anarchy of contentious individuals, nations and planets. To test his conclusion, he decides he must know the past and goes in search of legendary Earth, all references to which have been erased from galactic libraries. The societies encountered along the way become arguing points in a book-long colloquy about man's fate, conducted by Trevize and traveling companion Bliss, who is part of the first world/mind, Gaia. From the Paperback edition.",
    "pageCount": 376
  },
  {
    "title": "Foundation and Empire",
    "authors": "Isaac Asimov",
    "publisher": "Random House LLC",
    "publishedDate": "2004-06-01",
    "description": "Although small and seemingly helpless, the Foundation had managed to survive against the greed of its neighboring warlords. But could it stand against the mighty power of the Empire, who had created a mutant man with the strength of a dozen battlefleets...? From the Paperback edition.",
    "pageCount": 282
  },
  {
    "title": "Understanding Physics",
    "authors": "Isaac Asimov",
    "publisher": "Barnes & Noble Publishing",
    "publishedDate": "1988",
    "description": "Not a formal textbook; very readable. Each volume can be read independently.",
    "pageCount": 768
  }
];

var length = data.length;
for (var i = 0; i < length; i++) {
  db.books.insert(data[i]);
}


