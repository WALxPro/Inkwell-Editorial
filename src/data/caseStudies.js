
export const CASES = [
  {
    id: "larkin-lake",
    focus: "Repetition & Pacing",
    title: "The Secret of Larkin Lake",
    genre: "Children’s Adventure",
    service: "Line Edit",
    size: "4,800 words",

    challenge:
      "The story had charming characters and a lively adventure premise, but repeated actions, awkward sentence joins, and uneven pacing slowed the narrative.",

    original:
      "Darby Duck stopped in his tracks and glanced around nervously. “Carl, can you check the map?” he asked Stopping in his tracks and glancing around nervously.",

    noticed:
      "The opening repeats the same physical actions twice. The duplicated movement interrupts the dialogue and makes the prose feel less polished.",

    markup:
      "[ Darby Duck stopped in his tracks and glanced around nervously. ]{+Darby Duck stopped in his tracks and glanced around nervously.+} “Carl, can you check the map?” he asked[ Stopping in his tracks and glancing around nervously. ]",

    note:
      "The edit focuses on removing duplicated action, smoothing sentence structure, and preserving the playful tone of the children's adventure.",

    polished:
      "Darby Duck stopped in his tracks and glanced around nervously. “Carl, can you check the map?” he asked.",

    changed: [
      "Removed duplicated physical actions",
      "Improved sentence flow and dialogue transitions",
      "Preserved the playful voice and character moments",
      "Tightened the manuscript by approximately 650 words",
      "Provided a style sheet and prose pattern summary"
    ],

    takeaway:
      "Repeated actions can weaken an otherwise engaging scene. Keep each movement purposeful, and let dialogue flow naturally from the action."
  },

  {
    id: "fourth-man",
    focus: "Repetition & Emotional Impact",
    title: "The Fourth Man in the Fire",
    genre: "Memoir / Christian Inspirational",
    service: "Line Edit",
    size: "14,200 words",

    challenge:
      "This personal memoir carried a powerful testimony, but repeated reflections and lengthy passages sometimes diluted its emotional and spiritual impact.",

    original:
      "I was not just dealing with physical pain. I was dealing with a fear that I cannot fully describe in words. Because now I understood what it felt like to be on that table. I had already been through it once. I knew what the other side of that surgery looked like.",

    noticed:
      "Several sentences revisit the same fear and surgical experience. The repetition delays the central emotional point instead of allowing it to land with clarity.",

    markup:
      "I was [ not just dealing with physical pain. I was dealing with a fear that I cannot fully describe in words. Because now I understood what it felt like to be on that table. I had already been through it once. I knew what the other side of that surgery looked like. ]{+dealing with a fear I still cannot fully describe. I already knew what it felt like to be on that table. I knew what waited on the other side.+}",

    note:
      "The revision condenses repeated thoughts while preserving the first-person voice and the emotional weight of the author's experience.",

    polished:
      "I was dealing with a fear I still cannot fully describe. I already knew what it felt like to be on that table. I knew what waited on the other side.",

    changed: [
      "Reduced repeated reflections",
      "Strengthened emotional impact through concise prose",
      "Preserved the author's authentic first-person voice",
      "Tightened the manuscript by approximately 1,100 words",
      "Maintained the spiritual themes and testimony"
    ],

    takeaway:
      "Emotional writing does not always need more explanation. Removing repeated thoughts can give the strongest sentence room to resonate."
  },

  {
    id: "fifteen-books",
    focus: "Clarity & Concision",
    title: "Fifteen Books & The Art of Time",
    genre: "Memoir / Nautical",
    service: "Line Edit",
    size: "8,800 words",

    challenge:
      "This reflective nautical memoir featured authentic maritime details and thoughtful life lessons, but recurring themes and lengthy sentences sometimes slowed its progression.",

    original:
      "I never gave another thought to how much time or effort this required. Instead, I understood that I had learned to be versatile and could work on any noteworthy boat at any time. This was the price of survival, and I had become an expert.",

    noticed:
      "The passage communicates adaptability and the demands of survival, but its opening is wordy and several phrases can be tightened without losing the author's reflective tone.",

    markup:
      "I [ never gave another thought to how much time or effort this required. Instead, I understood that I had learned to be versatile and could work on any noteworthy boat at any time. ]{+never counted the time or effort. I had learned to be versatile  able to work any noteworthy boat at any time.+} That was the price of survival, and I had become an expert.",

    note:
      "The edit streamlines the passage, removes unnecessary phrasing, and preserves the author's contemplative voice and maritime atmosphere.",

    polished:
      "I never counted the time or effort. I had learned to be versatile  able to work any noteworthy boat at any time. That was the price of survival, and I had become an expert.",

    changed: [
      "Tightened wordy sentence openings",
      "Improved clarity and sentence rhythm",
      "Reduced recurring thematic repetition",
      "Tightened the manuscript by approximately 750 words",
      "Preserved the memoir's reflective tone and maritime details"
    ],

    takeaway:
      "Concise writing does not mean removing meaning. It means expressing the same thought with fewer words and a clearer point."
  },

  {
    id: "life-from-mountain",
    focus: "Pacing & Emotional Repetition",
    title: "Life From the Mountain",
    genre: "Christian Romance / Inspirational Fiction",
    service: "Line Edit",
    size: "23,700 words",

    challenge:
      "This heartfelt story explored grief, faith, and redemption, but run-on sentences, repeated emotional cues, and lengthy dialogue occasionally weakened its pacing.",

    original:
      "Colton tried so hard to shut the voice out. “Lord, where were You the morning Mia hit her head? Why didn’t You help her? We both tried to live faithfully. I can understand something like that happening to me because I was not as good as she was. She loved You so much, yet You failed her.”",

    noticed:
      "Colton's grief and spiritual struggle are clear, but several lines repeat the same emotional conflict. Condensing the dialogue keeps the focus on the central question and makes the moment more immediate.",

    markup:
      "Colton tried to shut the voice out. “Lord, where were You the morning Mia hit her head? [ Why didn’t You help her? ]{+We both tried to live faithfully. She loved You so much  why didn’t You help her?+} [ We both tried to live faithfully. I can understand something like that happening to me because I was not as good as she was. She loved You so much, yet You failed her. ]",

    note:
      "The edit reduces repeated dialogue and sharpens the emotional exchange while maintaining the story's faith-centered themes and the character's grief.",

    polished:
      "Colton tried to shut the voice out. “Lord, where were You the morning Mia hit her head? We both tried to live faithfully. She loved You so much  why didn’t You help her?”",

    changed: [
      "Reduced repeated emotional and spiritual phrasing",
      "Tightened dialogue for stronger impact",
      "Improved pacing in emotionally intense scenes",
      "Tightened the manuscript by approximately 2,400 words",
      "Preserved the story's gentle atmosphere and redemptive tone"
    ],

    takeaway:
      "When a character's emotions are already clear, repeating them can reduce their impact. Let carefully chosen words carry the weight of the scene."
  },

  {
    id: "familiar-life",
    focus: "Dialogue & Continuity",
    title: "A Familiar Life",
    genre: "YA Urban Fantasy / LGBTQ+ Coming of Age",
    service: "Line Edit",
    size: "32,000 words",

    challenge:
      "This late-nineties coming-of-age fantasy featured vivid characters and a distinctive setting, but over-explanation, repeated emotional beats, tense slips, and inconsistent formatting interrupted the reading flow.",

    original:
      "The road to Bull's cabin was beautiful this time of year with the trees in the middle of changing colours. Vibrant yellows, oranges, reds and deep purples scattered across the treetops. The colours dancing in the rustling breeze as the light of the setting sun filtered through. All of it was wasted on Alex.",

    noticed:
      "The description contains sentence fragments and repeats the same visual information across several sentences. Combining the details improves continuity while preserving the atmospheric setting and Alex's emotional distance.",

    markup:
      "The road to Bull's cabin was beautiful this time of year[ with the trees in the middle of changing colours. Vibrant yellows, oranges, reds and deep purples scattered across the treetops. The colours dancing in the rustling breeze as the light of the setting sun filtered through. ]{+, the trees caught mid change in yellows, oranges, reds and deep purples, their leaves shifting as the setting sun filtered through.+} All of it was wasted on Alex.",

    note:
      "The revision combines fragmented description into a smoother sentence, reduces repetition, and retains the contrast between the colourful landscape and Alex's state of mind.",

    polished:
      "The road to Bull's cabin was beautiful this time of year, the trees caught mid change in yellows, oranges, reds and deep purples, their leaves shifting as the setting sun filtered through. All of it was wasted on Alex.",

    changed: [
      "Smoothed fragmented descriptive passages",
      "Reduced repeated action and emotional beats",
      "Improved tense consistency and usage",
      "Standardized formatting for internal voices and specialized terms",
      "Tightened the manuscript by approximately 1,900 words"
    ],

    takeaway:
      "Strong description balances imagery with momentum. Combining related details helps readers visualize a scene without interrupting the narrative."
  }
];
