import { mkdir, writeFile } from "node:fs/promises";

const apiKey = process.env.EXA_API_KEY;

if (!apiKey) {
  console.error(
    "EXA_API_KEY is missing. Set a rotated Exa key in the environment before running this script.",
  );
  process.exit(1);
}

const batches = [
  [
    "Immaad Akhund",
    "Turki Al Faisal Al Saud",
    "Reema Al-Saud",
    "John Arnold",
    "Susan Athey",
    "Scott Belsky",
    "Nicolas Berggruen",
    "Scott Bessent",
    "Preet Bharara",
    "Elizabeth Blackburn",
    "Sarah Bond",
    "Cory Booker",
    "Rachel Brand",
    "Scooter Braun",
    "Pete Briger",
    "Greg Brockman",
    "Manuel Bronstein",
    "Peter Brown",
    "Thasunda Brown Duckett",
    "Sophia Bush",
  ],
  [
    "Mike Cannon-Brookes",
    "Cesar Carvalho",
    "Wences Casares",
    "Julian Castro",
    "Bob Cialdini",
    "Matt Clifford",
    "Caroline Cochran",
    "Matt Cohler",
    "Scott Cook",
    "Tyler Cowen",
    "Ted Cruz",
    "Adam D’Angelo",
    "Mitch Daniels",
    "Dan Driscoll",
    "Charles Duhigg",
    "Steve Ells",
    "Tim Ferriss",
    "Marcos Galperin",
    "Atul Gawande",
    "Tom Goldstein",
  ],
  [
    "Joseph Gordon-Levitt",
    "Adam Grant",
    "Severin Hacker",
    "Jonathan Haidt",
    "Peggy Hamburg",
    "Jim Himes",
    "Rob Hur",
    "Bob Jain",
    "Bryan Johnson",
    "Kaja Kallas",
    "Gaurav Kapadia",
    "Karen Karniol-Tambour",
    "Garry Kasparov",
    "Neal Katyal",
    "Shahid Khaqan Abbasi",
    "Tarō Kōno",
    "Henry Kravis",
    "Jason Kwon",
    "Jon Levin",
    "Howie Liu",
  ],
  [
    "Micky Malka",
    "Stan McChrystal",
    "Neal Mohan",
    "Lisa Monaco",
    "Wes Moore",
    "Demet Mutlu",
    "Vas Narasimhan",
    "Grover Norquist",
    "Mike Novogratz",
    "Jim O’Neill",
    "Benj Pasek",
    "Daniel Pink",
    "Steven Pinker",
    "Jared Polis",
    "Jonathan Ross",
    "Robert Rubin",
    "Gretchen Rubin",
    "Sheikh Nawaf Saud Nasir Al-Sabah",
    "Will Scharf",
    "Mario Schlosser",
  ],
  [
    "Dan Schulman",
    "Drew Scott",
    "Kim Scott",
    "Pete Shadbolt",
    "Ali Siddiqui",
    "Barry Silbert",
    "Anne-Marie Slaughter",
    "Charlie Songhurst",
    "Jens Spahn",
    "Scott Stephenson",
    "Barry Sternlicht",
    "Nick Thompson",
    "John Townsend",
    "Tom Tugendhat",
    "Tim Urban",
    "Rick Warren",
    "Strauss Zelnick",
    "Shivon Zilis",
  ],
];

const outputSchema = {
  type: "object",
  required: ["people"],
  properties: {
    people: {
      type: "array",
      description: "Grounded profiles in exactly the same order as requested.",
      items: {
        type: "object",
        required: [
          "name",
          "currentRole",
          "politics",
          "relationships",
          "epstein",
          "notableFinding",
        ],
        properties: {
          name: { type: "string" },
          currentRole: { type: "string" },
          politics: {
            type: "string",
            description:
              "Attributable tendency or 'insufficient evidence'; separate fact from inference.",
          },
          relationships: {
            type: "string",
            description:
              "Strongest documented alliances, feuds, quotes, or Dialog-roster overlaps.",
          },
          epstein: {
            type: "string",
            description:
              "Exact nature of evidence, or 'no reliable person-specific evidence found'.",
          },
          notableFinding: {
            type: "string",
            description:
              "Most important controversy, contradiction, or public/private mismatch.",
          },
        },
      },
    },
  },
};

async function searchBatch(names, index) {
  const response = await fetch("https://api.exa.ai/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-api-key": apiKey,
    },
    body: JSON.stringify({
      query: `Research these alleged Dialog directory people as of June 19 2026: ${names.join(
        ", ",
      )}. For each person identify the current role, attributable political tendency, strongest documented relationships or public feuds with other Dialog-listed people, precise Jeffrey Epstein evidence or absence of person-specific evidence, and the most notable controversy or contradiction. A shared directory entry is proximity, not friendship. Never infer criminality from association.`,
      type: "deep",
      additionalQueries: [
        `${names.join(", ")} Dialog Peter Thiel`,
        `${names.join(", ")} Jeffrey Epstein emails calendar flights`,
        `${names.join(", ")} public feud political donations controversy`,
      ],
      systemPrompt:
        "Prefer primary records, official biographies, court and congressional documents, direct interviews, and high-quality reporting. Include credible independent and critical reporting, not only establishment newspapers. Distinguish confirmed, reported, disputed, inferred, and no evidence found. Do not invent or infer guilt.",
      outputSchema,
      contents: { highlights: true },
    }),
  });

  if (!response.ok) {
    throw new Error(`Exa batch ${index + 1} failed: ${response.status}`);
  }

  return response.json();
}

await mkdir("research/exa", { recursive: true });

for (const [index, batch] of batches.entries()) {
  const result = await searchBatch(batch, index);
  await writeFile(
    `research/exa/batch-${index + 1}.json`,
    JSON.stringify(result, null, 2),
  );
  console.log(`Saved batch ${index + 1}/${batches.length}`);
}
