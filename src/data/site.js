export const SITE = {
  name: "Inkwell Editorial",
  editor: "Your Name", // TODO: replace with your name
  email: "hello@inkwelleditorial.com", // TODO: replace with your email
  tagline: "Manuscript editing & ebook formatting for independent authors"
};

export const NEEDS = [
  { icon: "scissors", title: "Your manuscript feels too long", text: "You're well over genre expectations, or you suspect several chapters are doing the same job. I help you find what can go without losing what matters." },
  { icon: "clock", title: "Your scenes move slowly", text: "Scenes that start too early, end too late, or pause for backstory at exactly the wrong moment. Pacing is often fixable without cutting a single plot point." },
  { icon: "repeat", title: "Your sentences feel repetitive", text: "The same rhythm, the same crutch words, characters who nod and sigh on every page. Line editing gives your prose variety and momentum." },
  { icon: "check", title: "Your grammar needs a final pass", text: "Comma splices, tense slips, misused homophones. A copy edit or proofread catches what your eyes have learned to skip over." },
  { icon: "message", title: "Your dialogue doesn't feel natural", text: "Characters who all sound alike, or who explain things they both already know. Good dialogue reveals character instead of delivering information." },
  { icon: "layers", title: "Your manuscript needs consistency", text: "Blue eyes in chapter two, green in chapter nine. A timeline that doesn't add up. I build a style sheet so every detail stays consistent." },
  { icon: "tablet", title: "Your ebook formatting looks unprofessional", text: "Random indents, broken scene breaks, a table of contents that doesn't click. Readers notice — and some mention it in reviews." },
  { icon: "help", title: "You're not sure what kind of edit you need", text: "Completely normal. Send a sample and I'll tell you honestly which level of edit your manuscript needs — even if it's less than you expected." }
];

export const COMPARE = [
  { service: "Developmental Edit", bestFor: "Story-level problems", focus: "Structure, plot, character arcs, pacing, stakes", question: "Does the story work?", stage: "After a complete draft, before polishing sentences" },
  { service: "Line Edit", bestFor: "Sentence-level problems", focus: "Prose style, rhythm, clarity, word choice, dialogue", question: "Does every sentence earn its place?", stage: "Once the structure is settled" },
  { service: "Copy Edit", bestFor: "Grammar and consistency", focus: "Grammar, punctuation, spelling, continuity, style rules", question: "Is it correct and consistent?", stage: "When the words are essentially final" },
  { service: "Proofread", bestFor: "Final errors", focus: "Typos, missing words, formatting slips", question: "Is anything left that shouldn't be?", stage: "The very last pass before publishing" },
  { service: "Ebook Formatting", bestFor: "Publication-ready ebook files", focus: "Layout, navigation, front & back matter, EPUB/KDP files", question: "Will it look professional on every device?", stage: "After the text is final and proofread" }
];

export const WHY_MATTERS = [
  { title: "Confusing sentences", text: "A reader who has to reread a sentence is a reader who has stopped being inside your story. Every stumble costs a little immersion." },
  { title: "Repetition", text: "Repeated words, beats and gestures are nearly invisible to the author and glaring to the reader. They make prose feel unedited even when the story is strong." },
  { title: "Inconsistent character details", text: "Changing eye colours, shifting ages, a sword that switches hands. Attentive readers notice — and they lose trust in the storyteller." },
  { title: "Grammar mistakes", text: "A handful of errors is forgivable. A steady stream becomes the thing reviewers mention first, ahead of your plot and characters." },
  { title: "Pacing issues", text: "Readers rarely say “the pacing was off.” They say “it dragged in the middle” — and then they stop reading at 40%." },
  { title: "Formatting problems", text: "Broken indents, missing scene breaks and a table of contents that doesn't work make a book look self-published in the worst sense of the word." }
];

export const APPROACH = [
  { title: "Preserve the author's voice", text: "Your voice is the reason your book exists. I edit toward the best version of how you write — never toward how I would write." },
  { title: "Improve clarity", text: "Every change I make should help the reader understand, feel or see something more clearly. If it doesn't, it doesn't belong in the edit." },
  { title: "Respect genre conventions", text: "Romance readers expect different things from thriller readers. Heat levels, tropes, pacing and prose style are edited in the context of your genre." },
  { title: "Explain significant changes", text: "Anything beyond a routine correction comes with a margin comment explaining why. You'll learn from the edit, not just receive it." },
  { title: "Never rewrite for the sake of rewriting", text: "If a sentence works, I leave it alone. An edit is measured by improvement, not by the number of red marks." }
];

export const PROCESS = [
  { title: "Send your sample", text: "Share the first 1,000 words, your word count, genre and goals through the sample form.", details: ["Free 1,000-word sample edit", "Honest service recommendation", "Reply within 3 business days", "No obligation to book"] },
  { title: "Receive your quote", text: "You'll get a fixed quote, a recommended service, a start date and a delivery date — in writing.", details: ["Fixed price, no surprise fees", "Clear scope of work", "Booking with a 50% deposit", "Signed confidentiality on request"] },
  { title: "The edit", text: "I work through your manuscript in Track Changes, with comments explaining every significant decision.", details: ["Progress update at the halfway point", "Questions batched, not scattered", "Style sheet built as I go", "Delivered on (or before) the agreed date"] },
  { title: "Delivery & follow-up", text: "You receive your files, a summary letter and 30 days of follow-up questions — included.", details: ["Tracked & clean manuscript files", "Editorial letter or summary", "30 days of follow-up questions", "Optional follow-up call"] }
];

export const AUTHORS = [
  { icon: "feather", title: "Debut authors", text: "Your first book deserves a patient editor who explains the why behind each change, not just the what." },
  { icon: "user", title: "Indie authors", text: "You're running a publishing business. You need reliable deadlines, clear pricing and files that are ready to upload." },
  { icon: "book", title: "Self-published authors", text: "Without a publisher's editorial team behind you, a professional edit is the difference between “good for self-published” and simply good." },
  { icon: "package", title: "Authors preparing for KDP", text: "From clean text to a tested, KDP-ready ebook file — handled in one workflow so nothing slips between stages." },
  { icon: "tablet", title: "Authors preparing EPUB files", text: "Going wide on Apple Books, Kobo, Nook or Google Play? You'll get a clean, validated EPUB that displays properly everywhere." },
  { icon: "users", title: "Authors preparing for beta or ARC readers", text: "Make sure early readers respond to your story, not your typos — and that ARC reviewers see the book at its best." }
];

export const GENRES = [
  { name: "Fantasy", note: "Worldbuilding consistency, invented names, magic-system logic and epic-length pacing." },
  { name: "Romance", note: "Emotional beats, tension, banter and the promise of the happily-ever-after." },
  { name: "Contemporary Romance", note: "Natural modern dialogue, relatable stakes and chemistry that feels earned." },
  { name: "Dark Romance", note: "Handled without judgment: intensity, morally grey leads, content warnings and consistency." },
  { name: "Literary Fiction", note: "Precise, restrained edits that protect style, voice and deliberate ambiguity." },
  { name: "Science Fiction", note: "Technology and terminology consistency, info-dump control and clear action." },
  { name: "Mystery", note: "Clue placement, red herrings, fair-play plotting and timeline accuracy." },
  { name: "Thriller", note: "Momentum, short-chapter rhythm, escalating stakes and cliffhangers." },
  { name: "Historical Fiction", note: "Period-appropriate language, anachronism checks and historical detail." },
  { name: "Young Adult", note: "Authentic teen voice, age-appropriate content and fast, emotional pacing." }
];

/*
  IMPORTANT: The testimonials below are SAMPLE PLACEHOLDERS for layout purposes.
  Replace them with real, approved quotes from your clients before publishing.
*/
export const TESTIMONIALS = [
  { quote: "Every comment explained the why. I didn't just get a cleaner manuscript — I became a better writer during the edit.", name: "[Client name]", role: "Fantasy author · Line edit" },
  { quote: "I was terrified my voice would disappear. It didn't. It just got sharper, and the book finally sounds like me on a good day.", name: "[Client name]", role: "Contemporary romance · Copy edit" },
  { quote: "The editorial letter showed me exactly why my middle act was sagging, and a clear plan for fixing it.", name: "[Client name]", role: "Thriller author · Developmental edit" },
  { quote: "The ebook files uploaded to KDP on the first try. The table of contents works, the scene breaks look beautiful.", name: "[Client name]", role: "Indie author · Ebook formatting" },
  { quote: "Clear pricing, delivered two days early, and the style sheet alone was worth it for the rest of my series.", name: "[Client name]", role: "Sci-fi series author · Complete package" },
  { quote: "The free sample told me I needed a line edit, not the expensive developmental edit I was about to buy.", name: "[Client name]", role: "Debut author · Line edit" }
];

export const NEVER_DO = [
  "I won't rewrite your voice to sound like mine.",
  "I won't make unnecessary changes just to appear busy.",
  "I won't treat every manuscript the same.",
  "I won't change intentional stylistic choices without discussing them.",
  "I won't upsell you a deeper edit than your manuscript needs.",
  "I won't share, quote or show your work anywhere without your written permission."
];

export const EXPECT = [
  { icon: "message", title: "Clear communication", text: "Replies within one business day, a halfway progress update, and plain-language explanations — no editorial jargon." },
  { icon: "eye", title: "Honest feedback", text: "Kind, specific and useful. I'll tell you what's working as clearly as what isn't." },
  { icon: "clock", title: "Respect for deadlines", text: "Your delivery date is agreed in writing. If anything changes, you'll hear from me early — not on the due date." },
  { icon: "shield", title: "Confidentiality", text: "Your manuscript is private. NDAs are available on request for any project." },
  { icon: "edit", title: "Detailed editorial reasoning", text: "Significant changes come with a margin comment explaining why, so every decision stays in your hands." },
  { icon: "file", title: "Professional file delivery", text: "Tracked and clean files, clearly named, with a style sheet and summary — ready for the next step." }
];
