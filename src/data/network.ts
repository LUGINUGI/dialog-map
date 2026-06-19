export type EvidenceStatus =
  | "confirmed"
  | "reported"
  | "disputed"
  | "speculative"
  | "none-found";

export type RelationKind =
  | "business"
  | "political"
  | "social"
  | "dialog"
  | "critical"
  | "epstein"
  | "media";

export type Source = {
  title: string;
  url: string;
  publisher: string;
  date?: string;
};

export type Quote = {
  text: string;
  about: string;
  context: string;
  date: string;
  sourceUrl: string;
};

export type EvidenceItem = {
  status: EvidenceStatus;
  label: string;
  detail: string;
  sourceUrl?: string;
};

export type Person = {
  id: string;
  name: string;
  initials: string;
  role: string;
  category: string;
  centrality: number;
  portrait?: string;
  summary: string;
  politics: string;
  tendency: number;
  dialogStatus: EvidenceStatus;
  epsteinStatus: EvidenceStatus;
  evidence: EvidenceItem[];
  quotes: Quote[];
  sources: Source[];
};

export type Relation = {
  id: string;
  source: string;
  target: string;
  kind: RelationKind;
  status: EvidenceStatus;
  label: string;
  detail: string;
  sourceUrl?: string;
};

export type Mismatch = {
  id: string;
  people: string[];
  title: string;
  publicStory: string;
  privateOverlap: string;
  interpretation: string;
  status: EvidenceStatus;
  sources: Source[];
};

export const people: Person[] = [
  {
    id: "peter-thiel",
    name: "Peter Thiel",
    initials: "PT",
    role: "Co-founder, Palantir & PayPal · Founder, Founders Fund",
    category: "Founder / network center",
    centrality: 1,
    portrait: "/portraits/peter-thiel.jpg",
    summary:
      "A venture capitalist and political donor whose companies, protégés, and intellectual projects connect several generations of Silicon Valley power.",
    politics:
      "Libertarian-influenced nationalist right. A major Republican donor who has argued that freedom and democracy may be in tension, while backing candidates aligned with the populist right.",
    tendency: 86,
    dialogStatus: "confirmed",
    epsteinStatus: "reported",
    evidence: [
      {
        status: "confirmed",
        label: "Dialog founder",
        detail:
          "Public and leaked records identify Thiel and Auren Hoffman as Dialog's co-founders.",
        sourceUrl:
          "https://www.wired.com/story/leak-exposes-members-of-peter-thiels-secretive-dialog-society/",
      },
      {
        status: "confirmed",
        label: "Post-conviction Epstein relationship",
        detail:
          "Records describe meetings, correspondence, tax discussions, invitations, and a $40 million Epstein investment in Valar Ventures after Epstein's 2008 conviction. No reviewed source establishes Thiel's participation in Epstein's sexual crimes.",
        sourceUrl: "https://www.justice.gov/epstein",
      },
      {
        status: "disputed",
        label: "Island visit",
        detail:
          "Invitations and Thiel's expressed interest are documented; his spokesperson says he never visited, and no verified visit record was found in the reviewed sources.",
        sourceUrl:
          "https://stanforddaily.com/2026/02/05/epstein-peter-thiel-a-great-friend/",
      },
    ],
    quotes: [
      {
        text: "I no longer believe that freedom and democracy are compatible.",
        about: "democracy and libertarian politics",
        context: "Essay for Cato Unbound",
        date: "2009",
        sourceUrl:
          "https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian",
      },
      {
        text: "Then Eric goes around and says, let them eat iPhones.",
        about: "Eric Schmidt",
        context: "Debate over technological stagnation",
        date: "2012",
        sourceUrl:
          "https://fortune.com/2012/07/17/transcript-schmidt-and-thiel-smackdown/",
      },
    ],
    sources: [
      {
        title: "Leak exposes members of Peter Thiel's Dialog society",
        publisher: "WIRED",
        date: "2026",
        url: "https://www.wired.com/story/leak-exposes-members-of-peter-thiels-secretive-dialog-society/",
      },
      {
        title: "The Education of a Libertarian",
        publisher: "Cato Unbound",
        date: "2009",
        url: "https://www.cato-unbound.org/2009/04/13/peter-thiel/education-libertarian",
      },
      {
        title: "Epstein records portal",
        publisher: "U.S. Department of Justice",
        url: "https://www.justice.gov/epstein",
      },
    ],
  },
  {
    id: "elon-musk",
    name: "Elon Musk",
    initials: "EM",
    role: "CEO, Tesla & SpaceX · Owner, X",
    category: "Technology / politics",
    centrality: 0.96,
    portrait: "/portraits/elon-musk.jpg",
    summary:
      "Technology executive and platform owner whose political activity, government contracts, and alliance with parts of the global right have made him a political actor in his own right.",
    politics:
      "Publicly moved from centrist and Democratic support toward the populist right; combines deregulatory, anti-establishment, techno-optimist, and culturally conservative positions.",
    tendency: 78,
    dialogStatus: "reported",
    epsteinStatus: "confirmed",
    evidence: [
      {
        status: "confirmed",
        label: "Emails and proposed visits",
        detail:
          "Released correspondence shows cordial emails and efforts to arrange meetings and an island visit. The reviewed record does not establish that Musk completed an island visit.",
        sourceUrl:
          "https://oversightdemocrats.house.gov/news/press-releases/oversight-democrats-release-third-batch-documents-jeffrey-epstein-estate",
      },
      {
        status: "confirmed",
        label: "Manhattan home",
        detail:
          "Musk has acknowledged a brief visit to Epstein's Manhattan residence with Talulah Riley while denying a close relationship or misconduct.",
        sourceUrl:
          "https://www.pbs.org/newshour/nation/a-list-of-powerful-men-named-in-the-epstein-files-from-elon-musk-to-former-prince-andrew",
      },
      {
        status: "none-found",
        label: "Criminal conduct",
        detail:
          "The reviewed materials do not establish Musk's participation in Epstein's sexual crimes.",
      },
    ],
    quotes: [
      {
        text: "Peter is right on all counts.",
        about: "Peter Thiel",
        context: "Public endorsement of Thiel's assessment of Musk and DOGE",
        date: "2024-12-13",
        sourceUrl: "https://x.com/elonmusk",
      },
      {
        text: "Sam Harris is mentally ill.",
        about: "Sam Harris",
        context: "Personal response to Harris's criticism",
        date: "2025-01",
        sourceUrl: "https://samharris.substack.com/p/the-trouble-with-elon",
      },
    ],
    sources: [
      {
        title: "Tesla leadership: Elon Musk",
        publisher: "Tesla",
        url: "https://ir.tesla.com/corporate/elon-musk",
      },
      {
        title: "Third batch of Epstein estate documents",
        publisher: "House Oversight Democrats",
        url: "https://oversightdemocrats.house.gov/news/press-releases/oversight-democrats-release-third-batch-documents-jeffrey-epstein-estate",
      },
      {
        title: "The trouble with Elon",
        publisher: "Sam Harris",
        url: "https://samharris.substack.com/p/the-trouble-with-elon",
      },
    ],
  },
  {
    id: "jeffrey-epstein",
    name: "Jeffrey Epstein",
    initials: "JE",
    role: "Financier and convicted sex offender (1953–2019)",
    category: "Context node · not presented as Dialog member",
    centrality: 0.92,
    portrait: "/portraits/jeffrey-epstein.jpg",
    summary:
      "Included as a context node because meetings, calendars, correspondence, and introductions involving Epstein intersect with several elite networks. Contact alone does not establish knowledge of or participation in his crimes.",
    politics:
      "No useful left–right classification. Epstein cultivated access across political, academic, financial, and technological circles.",
    tendency: 50,
    dialogStatus: "none-found",
    epsteinStatus: "confirmed",
    evidence: [
      {
        status: "confirmed",
        label: "Context node",
        detail:
          "Epstein is included to show documented meetings, correspondence, donations, financial ties, and invitations. He is not presented as a Dialog member.",
        sourceUrl: "https://www.justice.gov/epstein",
      },
      {
        status: "confirmed",
        label: "Convictions and charges",
        detail:
          "Epstein pleaded guilty in Florida in 2008 to prostitution-related offenses involving a minor and was federally charged with sex trafficking in 2019 before his death.",
        sourceUrl: "https://www.justice.gov/epstein",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Epstein records portal",
        publisher: "U.S. Department of Justice",
        url: "https://www.justice.gov/epstein",
      },
    ],
  },
  {
    id: "auren-hoffman",
    name: "Auren Hoffman",
    initials: "AH",
    role: "Founder, SafeGraph · Chairman, Dialog",
    category: "Dialog / technology",
    centrality: 0.82,
    portrait: "/portraits/auren-hoffman.jpg",
    summary:
      "Data entrepreneur and chairman of Dialog, the invitation-only forum at the center of the alleged roster.",
    politics:
      "Heterodox, business-oriented and institutionally networked. Public writing emphasizes elite talent, prediction, data, and governance more than a consistent party identity.",
    tendency: 58,
    dialogStatus: "confirmed",
    epsteinStatus: "none-found",
    evidence: [
      {
        status: "confirmed",
        label: "Dialog operator",
        detail:
          "Leaked records indicate Dialog tracks political leanings, relationships, attendance history, wealth, fame, and internal value rankings.",
        sourceUrl:
          "https://www.wired.com/story/how-peter-thiels-private-dialog-club-secretly-ranks-its-members/",
      },
      {
        status: "reported",
        label: "Indirect Epstein invitation chain",
        detail:
          "Dialog invitations sent by Hoffman were forwarded to Epstein by recipients or intermediaries. No direct Hoffman–Epstein meeting, email, flight, payment, or personal relationship was established.",
        sourceUrl:
          "https://www.epstein.media/files/house_oversight_013484/",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "How Dialog secretly ranks its members",
        publisher: "WIRED",
        date: "2026",
        url: "https://www.wired.com/story/how-peter-thiels-private-dialog-club-secretly-ranks-its-members/",
      },
      {
        title: "SafeGraph's claims mask a dangerous industry",
        publisher: "Electronic Frontier Foundation",
        date: "2022",
        url: "https://www.eff.org/deeplinks/2022/05/safegraphs-disingenuous-claims-about-location-data-mask-dangerous-industry",
      },
    ],
  },
  {
    id: "reid-hoffman",
    name: "Reid Hoffman",
    initials: "RH",
    role: "Co-founder, LinkedIn · Partner, Greylock",
    category: "Technology / Democratic donor",
    centrality: 0.75,
    portrait: "/portraits/reid-hoffman.jpg",
    summary:
      "Investor, political donor, and institutional connector with deep ties across Silicon Valley and Democratic politics.",
    politics:
      "Liberal and Democratic-aligned, with a pragmatic, pro-technology and pro-institution orientation. Has funded anti-Trump political efforts.",
    tendency: 23,
    dialogStatus: "reported",
    epsteinStatus: "confirmed",
    evidence: [
      {
        status: "confirmed",
        label: "Repeated post-conviction contact",
        detail:
          "Hoffman acknowledged meetings connected to MIT fundraising, an overnight island visit, and a dinner he hosted. Later records extended the known contact timeline beyond his original account.",
        sourceUrl:
          "https://facultygovernance.mit.edu/sites/default/files/20200121GoodwinProcterReport.pdf",
      },
      {
        status: "confirmed",
        label: "Apology and correction",
        detail:
          "Hoffman apologized for helping rehabilitate Epstein's reputation and later corrected his earlier statement about when contact ended.",
        sourceUrl:
          "https://www.axios.com/2019/09/12/reid-hoffman-jeffrey-epstein-mit-donations",
      },
      {
        status: "none-found",
        label: "Criminal participation",
        detail:
          "The cited record does not establish that Hoffman participated in, knew of, or facilitated Epstein's abuse.",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "MIT report concerning Jeffrey Epstein",
        publisher: "MIT / Goodwin Procter",
        date: "2020",
        url: "https://facultygovernance.mit.edu/sites/default/files/20200121GoodwinProcterReport.pdf",
      },
      {
        title: "Reid Hoffman apologizes for Epstein interactions",
        publisher: "Axios",
        date: "2019",
        url: "https://www.axios.com/2019/09/12/reid-hoffman-jeffrey-epstein-mit-donations",
      },
    ],
  },
  {
    id: "jared-kushner",
    name: "Jared Kushner",
    initials: "JK",
    role: "Founder, Affinity Partners · Former White House adviser",
    category: "Government / finance",
    centrality: 0.72,
    portrait: "/portraits/jared-kushner.jpg",
    summary:
      "Investor and former senior White House adviser whose network spans the Trump family, Gulf sovereign capital, real estate, and technology.",
    politics:
      "Trump-aligned Republican operative with a transactional, business-oriented governing style and strong emphasis on Middle East diplomacy and investment.",
    tendency: 84,
    dialogStatus: "reported",
    epsteinStatus: "reported",
    evidence: [
      {
        status: "confirmed",
        label: "Observer invitation",
        detail:
          "The New York Observer, then owned by Kushner, sent Epstein a 2013 anniversary-gala invitation identifying Kushner and its CEO as hosts. Attendance and a direct relationship were not established.",
        sourceUrl:
          "https://www.aa.com.tr/en/americas/trump-s-son-in-law-invited-epstein-to-2013-observer-party-emails-show/3746837",
      },
      {
        status: "none-found",
        label: "Direct personal tie",
        detail:
          "No reviewed evidence established direct correspondence, a personal meeting, flight, island visit, financial relationship, or knowledge of Epstein's crimes.",
      },
    ],
    quotes: [
      {
        text: "Gaza's waterfront property could be very valuable.",
        about: "Gaza",
        context: "Harvard Middle East Initiative discussion",
        date: "2024-02-15",
        sourceUrl:
          "https://www.theguardian.com/us-news/2024/mar/19/jared-kushner-gaza-waterfront-property-israel-negev",
      },
    ],
    sources: [
      {
        title: "Kushner Observer invitation to Epstein",
        publisher: "Anadolu Agency",
        url: "https://www.aa.com.tr/en/americas/trump-s-son-in-law-invited-epstein-to-2013-observer-party-emails-show/3746837",
      },
      {
        title: "Inquiry into Affinity Partners' foreign funding",
        publisher: "U.S. Senate Finance Committee",
        url: "https://www.finance.senate.gov/chairmans-news/wyden-investigation-of-kushner-firm-continues-new-letter-outlines-affinity-partners-fee-structure-lack-of-return-to-investors-questionable-deals-with-foreign-governments",
      },
    ],
  },
  {
    id: "leonard-leo",
    name: "Leonard Leo",
    initials: "LL",
    role: "Co-chairman, Federalist Society",
    category: "Law / conservative infrastructure",
    centrality: 0.7,
    portrait: "/portraits/leonard-leo.jpg",
    summary:
      "A central architect of the conservative legal movement and a major organizer of funding, judicial strategy, and nonprofit infrastructure.",
    politics:
      "Movement conservative and originalist, closely associated with Republican judicial selection and long-term conservative institution-building.",
    tendency: 94,
    dialogStatus: "reported",
    epsteinStatus: "none-found",
    evidence: [
      {
        status: "confirmed",
        label: "Conservative legal infrastructure",
        detail:
          "Leo helped build long-term judicial and cultural networks using donor coordination, talent pipelines, and institutional placement.",
        sourceUrl:
          "https://www.propublica.org/article/leonard-leo-teneo-videos-documents",
      },
      {
        status: "none-found",
        label: "Epstein connection",
        detail:
          "No reliable public evidence was found of direct correspondence, meetings, flights, property visits, payments, or a personal Leo–Epstein relationship.",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Inside Leonard Leo's Teneo network",
        publisher: "ProPublica",
        url: "https://www.propublica.org/article/leonard-leo-teneo-videos-documents",
      },
      {
        title: "Federalist Society biography",
        publisher: "Federalist Society",
        url: "https://fedsoc.org/bio/leonard-leo",
      },
    ],
  },
  {
    id: "joe-lonsdale",
    name: "Joe Lonsdale",
    initials: "JL",
    role: "Co-founder, Palantir · Founding partner, 8VC",
    category: "Technology / political donor",
    centrality: 0.69,
    portrait: "/portraits/joe-lonsdale.jpg",
    summary:
      "Palantir co-founder, venture capitalist, and political donor who links Thiel’s technology network with conservative policy organizations.",
    politics:
      "Right-libertarian and Republican-aligned, emphasizing technological state capacity, deregulation, public safety, and opposition to progressive institutions.",
    tendency: 88,
    dialogStatus: "reported",
    epsteinStatus: "none-found",
    evidence: [
      {
        status: "confirmed",
        label: "Thiel protégé and ally",
        detail:
          "Lonsdale worked at Clarium, co-founded Palantir with Thiel, and publicly describes him as a friend and formative mentor.",
        sourceUrl: "https://blog.joelonsdale.com/p/lessons-from-peter-thiel",
      },
      {
        status: "confirmed",
        label: "Musk political alliance",
        detail:
          "Lonsdale helped organize and fund Musk's pro-Trump America PAC and has repeatedly defended Musk's political interventions.",
        sourceUrl:
          "https://www.ft.com/content/c1aeef78-590f-4f65-97ff-40f96106254a",
      },
      {
        status: "none-found",
        label: "Epstein connection",
        detail:
          "Targeted searches found no person-specific meeting, correspondence, flight, island visit, payment, or invitation. Proximity to other Epstein contacts is not evidence.",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Lessons from Peter Thiel",
        publisher: "Joe Lonsdale",
        url: "https://blog.joelonsdale.com/p/lessons-from-peter-thiel",
      },
      {
        title: "Joe Lonsdale biography",
        publisher: "8VC",
        url: "https://8vc.com/team/joe-lonsdale",
      },
    ],
  },
  {
    id: "chamath-palihapitiya",
    name: "Chamath Palihapitiya",
    initials: "CP",
    role: "Founder, Social Capital · Co-host, All-In",
    category: "Venture capital / media",
    centrality: 0.62,
    portrait: "/portraits/chamath-palihapitiya.jpg",
    summary:
      "Venture capitalist, SPAC promoter, and media personality whose All-In platform sits at the intersection of technology capital and political commentary.",
    politics:
      "Ideologically fluid and anti-establishment, with pro-market views, criticism of progressive governance, and increasing affinity with Silicon Valley’s rightward turn.",
    tendency: 66,
    dialogStatus: "reported",
    epsteinStatus: "reported",
    evidence: [
      {
        status: "reported",
        label: "Limited Epstein contact",
        detail:
          "Released records show invitations and attempts to arrange meetings. Some proposed encounters were declined or are not proven to have occurred; no flight, island visit, financial tie, or close friendship was established.",
        sourceUrl:
          "https://www.wired.com/story/epstein-files-tech-elites-gates-thiel-musk/",
      },
      {
        status: "reported",
        label: "Public–private influence",
        detail:
          "Critics have questioned Schmidt's investments in AI and defense companies while he advised government bodies shaping technology and military policy. No criminal finding is asserted here.",
        sourceUrl:
          "https://docs.house.gov/meetings/ZS/ZS00/20230517/115974/HHRG-118-ZS00-Wstate-SchmidtE-20230517.pdf",
      },
    ],
    quotes: [
      {
        text: "I think Elon is exactly wrong.",
        about: "Elon Musk",
        context: "Responding to Musk's catastrophic framing of AI risk",
        date: "2018",
        sourceUrl:
          "https://techcrunch.com/2018/05/25/eric-schmidt-musk-exactly-wrong/",
      },
    ],
    sources: [
      {
        title: "Eric Schmidt biography",
        publisher: "Eric Schmidt",
        url: "https://ericschmidt.com/bio/",
      },
      {
        title: "Epstein files and technology elites",
        publisher: "WIRED",
        url: "https://www.wired.com/story/epstein-files-tech-elites-gates-thiel-musk/",
      },
    ],
  },
  {
    id: "eric-schmidt",
    name: "Eric Schmidt",
    initials: "ES",
    role: "Former CEO, Google · Founder, Schmidt Futures",
    category: "Technology / national security",
    centrality: 0.64,
    portrait: "/portraits/eric-schmidt.jpg",
    summary:
      "Former Google chief whose post-corporate work combines philanthropy, AI policy, defense innovation, and access to government.",
    politics:
      "Centrist-liberal and establishment-oriented, historically close to Democratic administrations while advocating aggressive U.S. technological competition.",
    tendency: 35,
    dialogStatus: "confirmed",
    epsteinStatus: "none-found",
    evidence: [
      {
        status: "confirmed",
        label: "Dialog referral role",
        detail:
          "Historical invitation material says Palihapitiya nominated Ian Osborne for Dialog, demonstrating active participation in its referral network.",
        sourceUrl:
          "https://epstein.media/files/house_oversight_013484/",
      },
      {
        status: "reported",
        label: "Musk alliance",
        detail:
          "Palihapitiya has described Musk as a friend and publicly favored him as a steward of advanced AI; both later moved into Trump's Silicon Valley coalition.",
      },
      {
        status: "none-found",
        label: "Direct Epstein connection",
        detail:
          "The reviewed evidence supports an indirect invitation chain through Ian Osborne, not direct correspondence, a meeting, travel, or a financial relationship.",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Dialog invitation forwarded to Jeffrey Epstein",
        publisher: "House Oversight archive",
        url: "https://epstein.media/files/house_oversight_013484/",
      },
      {
        title: "Why tech's leading men went all-in on Trump",
        publisher: "GQ",
        url: "https://www.gq.com/story/why-techs-leading-men-went-all-in-on-trump-according-to-chamath-palihapitiya",
      },
    ],
  },
  {
    id: "lawrence-summers",
    name: "Lawrence Summers",
    initials: "LS",
    role: "Former U.S. Treasury Secretary · Harvard professor",
    category: "Government / economics",
    centrality: 0.66,
    portrait: "/portraits/lawrence-summers.jpg",
    summary:
      "Economist and former senior Democratic official with influence across universities, finance, technology policy, and macroeconomic debate.",
    politics:
      "Centrist Democratic and market-oriented, often critical of both progressive economic policy and populist protectionism.",
    tendency: 38,
    dialogStatus: "reported",
    epsteinStatus: "confirmed",
    evidence: [
      {
        status: "confirmed",
        label: "Long-running Epstein relationship",
        detail:
          "Public records describe institutional donations to Harvard, a 2005 flight and island visit before Epstein's first arrest, and extensive post-conviction meetings and correspondence through 2019.",
        sourceUrl:
          "https://www.thecrimson.com/article/2025/11/13/summers-epstein-messages/",
      },
      {
        status: "confirmed",
        label: "Professional fallout",
        detail:
          "After correspondence became public, Summers said he was deeply ashamed, resigned from OpenAI's board, withdrew from public commitments, and later retired from Harvard.",
        sourceUrl:
          "https://www.harvardmagazine.com/university-news/larry-summers-retire-harvard-epstein-probe-kennedy-school",
      },
      {
        status: "none-found",
        label: "Participation in abuse",
        detail:
          "The reviewed record does not establish that Summers participated in or knew about Epstein's sexual abuse or trafficking.",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Summers and Epstein messages",
        publisher: "The Harvard Crimson",
        date: "2025",
        url: "https://www.thecrimson.com/article/2025/11/13/summers-epstein-messages/",
      },
      {
        title: "Summers retires amid Epstein review",
        publisher: "Harvard Magazine",
        date: "2026",
        url: "https://www.harvardmagazine.com/university-news/larry-summers-retire-harvard-epstein-probe-kennedy-school",
      },
    ],
  },
  {
    id: "peter-attia",
    name: "Peter Attia",
    initials: "PA",
    role: "Physician · Founder, Early Medical",
    category: "Medicine / media",
    centrality: 0.5,
    portrait: "/portraits/peter-attia.jpg",
    summary:
      "Physician, author, and longevity-media figure. Released records show a sustained, friendly post-conviction relationship with Jeffrey Epstein that was substantially closer than a passing professional contact.",
    politics:
      "No stable partisan identity established here. Public work is primarily medical and entrepreneurial; any political characterization should remain narrow.",
    tendency: 50,
    dialogStatus: "reported",
    epsteinStatus: "confirmed",
    evidence: [
      {
        status: "confirmed",
        label: "Large post-conviction document trail",
        detail:
          "The 2026 release contains more than 1,700 references to Attia and years of emails from 2015–2018. Attia acknowledged roughly seven or eight meetings at Epstein's Manhattan residence.",
        sourceUrl:
          "https://www.theatlantic.com/health/2026/02/peter-attia-epstein-files-wellness/685861/",
      },
      {
        status: "confirmed",
        label: "He called it a friendship",
        detail:
          "In a released email, Attia described becoming Epstein's friend and said Epstein's life was so “outrageous” that he could not tell anyone about it. The exchange occurred years after Epstein's 2008 conviction.",
        sourceUrl:
          "https://www.justice.gov/epstein/files/DataSet%2011/EFTA02496403.pdf",
      },
      {
        status: "confirmed",
        label: "Sexual banter and “JE withdrawal”",
        detail:
          "The emails include Attia saying he went into “JE withdrawal” when he did not see Epstein, joking that female anatomy was “low carb,” and discussing extending Epstein's life for more sex.",
        sourceUrl:
          "https://www.theatlantic.com/health/2026/02/peter-attia-epstein-files-wellness/685861/",
      },
      {
        status: "reported",
        label: "Meeting request during son's medical crisis",
        detail:
          "Attia's own book says his infant son suffered cardiac arrest on July 11, 2017 while Attia stayed in New York. Released emails show Attia arranging a July 13 meeting with Epstein and offering to come earlier. The correspondence does not prove the meeting occurred.",
        sourceUrl:
          "https://nypost.com/2026/02/02/us-news/cbs-news-star-hire-peter-attia-made-plans-to-meet-with-epstein-as-his-infant-son-fought-for-his-life-in-the-hospital/",
      },
      {
        status: "confirmed",
        label: "Access, referrals, and medical help",
        detail:
          "The correspondence reportedly includes patient referrals, health testing and advice, hiring discussions, introductions, and Attia staying in an empty Upper East Side apartment owned by Epstein.",
        sourceUrl:
          "https://www.theatlantic.com/health/2026/02/peter-attia-epstein-files-wellness/685861/",
      },
      {
        status: "confirmed",
        label: "Professional fallout",
        detail:
          "After the emails became public, Attia left CBS News and stepped down from corporate advisory roles. CBS had already pulled a planned rerun of his 60 Minutes segment.",
        sourceUrl:
          "https://apnews.com/article/428aacc5f6ba7dc3f441047e37d351c6",
      },
      {
        status: "confirmed",
        label: "Attia's response",
        detail:
          "Attia denied visiting Epstein's island, flying on his aircraft, witnessing abuse, or participating in criminal activity. He accepted responsibility for poor judgment and indefensible emails.",
        sourceUrl: "https://x.com/PeterAttiaMD/status/2018350892395774116",
      },
      {
        status: "none-found",
        label: "Participation in crimes",
        detail:
          "The reviewed sources do not establish Attia's participation in Epstein's abuse or trafficking.",
      },
    ],
    quotes: [
      {
        text: "I go into JE withdrawal when I don't see him.",
        about: "Jeffrey Epstein",
        context: "Email describing his desire to see Epstein again",
        date: "2016",
        sourceUrl:
          "https://www.theatlantic.com/health/2026/02/peter-attia-epstein-files-wellness/685861/",
      },
      {
        text: "The life you lead is so outrageous, and yet I can't tell a soul.",
        about: "Jeffrey Epstein",
        context: "Email describing the problem with their friendship",
        date: "2015",
        sourceUrl:
          "https://www.justice.gov/epstein/files/DataSet%2011/EFTA02496403.pdf",
      },
      {
        text: "Pussy is, indeed, low carb.",
        about: "Jeffrey Epstein",
        context: "Sexual joke in a released email",
        date: "2016",
        sourceUrl:
          "https://www.justice.gov/epstein/files/DataSet%2011/EFTA02471177.pdf",
      },
    ],
    sources: [
      {
        title: "Peter Attia statement",
        publisher: "Peter Attia",
        date: "2026",
        url: "https://x.com/PeterAttiaMD/status/2018350892395774116",
      },
      {
        title: "The longevity influencer who went into 'withdrawal' without Jeffrey Epstein",
        publisher: "The Atlantic",
        date: "2026",
        url: "https://www.theatlantic.com/health/2026/02/peter-attia-epstein-files-wellness/685861/",
      },
      {
        title: "Released Attia–Epstein email chain (EFTA02496403)",
        publisher: "U.S. Department of Justice",
        date: "2026",
        url: "https://www.justice.gov/epstein/files/DataSet%2011/EFTA02496403.pdf",
      },
      {
        title: "Meeting request during son's hospitalization",
        publisher: "New York Post",
        date: "2026",
        url: "https://nypost.com/2026/02/02/us-news/cbs-news-star-hire-peter-attia-made-plans-to-meet-with-epstein-as-his-infant-son-fought-for-his-life-in-the-hospital/",
      },
      {
        title: "Peter Attia exits CBS after Epstein disclosures",
        publisher: "The Washington Post",
        date: "2026",
        url: "https://www.washingtonpost.com/business/2026/02/23/peter-attia-exits-cbs-epstein/",
      },
    ],
  },
  {
    id: "sam-harris",
    name: "Sam Harris",
    initials: "SH",
    role: "Author · Host, Making Sense",
    category: "Media / public intellectual",
    centrality: 0.5,
    portrait: "/portraits/sam-harris.jpg",
    summary:
      "Author and podcaster associated with the post-9/11 New Atheist movement and later debates about free speech, polarization, Trump, and institutional trust.",
    politics:
      "Liberal but strongly anti-Trump; heterodox on speech, religion, policing, and identity politics, while defending mainstream institutions against populism.",
    tendency: 37,
    dialogStatus: "reported",
    epsteinStatus: "none-found",
    evidence: [
      {
        status: "none-found",
        label: "Epstein connection",
        detail:
          "No direct correspondence, meeting, invitation, flight, property visit, payment, or friendship was established. Reporting on Epstein is not an Epstein relationship.",
      },
      {
        status: "confirmed",
        label: "Sam Harris dispute",
        detail:
          "Klein and Harris held a hostile but substantive public debate about Charles Murray, race, IQ, identity, and journalistic responsibility.",
        sourceUrl:
          "https://www.vox.com/2018/4/9/17210248/sam-harris-ezra-klein-charles-murray-transcript-podcast",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Peter Thiel interview",
        publisher: "Vox",
        date: "2014",
        url: "https://www.vox.com/2014/11/14/7213833/peter-thiel-palantir-paypal",
      },
      {
        title: "Sam Harris–Ezra Klein debate transcript",
        publisher: "Vox",
        date: "2018",
        url: "https://www.vox.com/2018/4/9/17210248/sam-harris-ezra-klein-charles-murray-transcript-podcast",
      },
    ],
  },
  {
    id: "ezra-klein",
    name: "Ezra Klein",
    initials: "EK",
    role: "Columnist and podcast host, The New York Times",
    category: "Media / policy",
    centrality: 0.5,
    portrait: "/portraits/ezra-klein.jpg",
    summary:
      "Policy journalist and commentator focused on institutions, polarization, governance, and the intellectual structure of American politics.",
    politics:
      "Liberal and Democratic-aligned, with a technocratic and institution-focused approach that is sometimes critical of progressive movement strategy.",
    tendency: 22,
    dialogStatus: "reported",
    epsteinStatus: "none-found",
    evidence: [
      {
        status: "none-found",
        label: "Epstein connection",
        detail:
          "A public Stephens column was forwarded to Epstein by another person. That is not evidence of communication or a relationship with its author.",
      },
      {
        status: "confirmed",
        label: "Musk criticism",
        detail:
          "Stephens has compared Musk's political and media behavior to Donald Trump's, supporting a public-criticism edge rather than a claim of private enmity.",
        sourceUrl: "https://www.axios.com/2018/05/26/elon-musk-silicon-valleys-trump",
      },
    ],
    quotes: [],
    sources: [
      {
        title: "Elon Musk, Silicon Valley's Trump",
        publisher: "Axios",
        date: "2018",
        url: "https://www.axios.com/2018/05/26/elon-musk-silicon-valleys-trump",
      },
      {
        title: "Bret Stephens biography",
        publisher: "SAPIR",
        url: "https://sapirjournal.org/authors/bret-stephens/",
      },
    ],
  },
  {
    id: "bret-stephens",
    name: "Bret Stephens",
    initials: "BS",
    role: "Opinion columnist, The New York Times",
    category: "Media / conservative",
    centrality: 0.46,
    portrait: "/portraits/bret-stephens.jpg",
    summary:
      "Conservative opinion writer associated with interventionist foreign policy, market economics, and anti-Trump Republicanism.",
    politics:
      "Center-right, neoconservative, and anti-Trump; supportive of markets and assertive U.S. foreign policy while critical of populist nationalism.",
    tendency: 64,
    dialogStatus: "reported",
    epsteinStatus: "confirmed",
    evidence: [
      {
        status: "confirmed",
        label: "Limited Epstein contact",
        detail:
          "Harris says he encountered Epstein once at a TED-associated event. A short 2015 email exchange shows Epstein proposing a dinner; no evidence reviewed establishes that it happened.",
        sourceUrl:
          "https://www.samharris.org/podcasts/making-sense-episodes/457-more-from-sam-the-epstein-files-the-newsom-factor-don-lemons-arrest-ai-market-disruption-and-more",
      },
      {
        status: "confirmed",
        label: "Musk friendship and rupture",
        detail:
          "Harris describes more than a decade of friendship followed by a public rupture over COVID claims, misinformation, conspiracy theories, and attacks on critics.",
        sourceUrl: "https://samharris.substack.com/p/the-trouble-with-elon",
      },
      {
        status: "none-found",
        label: "Substantive Epstein relationship",
        detail:
          "No completed private dinner, flight, property visit, financial tie, close friendship, or knowledge of Epstein's crimes was established.",
      },
    ],
    quotes: [
      {
        text: "He really is the greatest entrepreneur of our generation.",
        about: "Elon Musk",
        context: "Praise embedded within a lengthy denunciation of Musk's conduct",
        date: "2025-01-15",
        sourceUrl: "https://samharris.substack.com/p/the-trouble-with-elon",
      },
    ],
    sources: [
      {
        title: "The Trouble With Elon",
        publisher: "Sam Harris",
        date: "2025",
        url: "https://samharris.substack.com/p/the-trouble-with-elon",
      },
      {
        title: "More from Sam: the Epstein files",
        publisher: "Making Sense",
        date: "2026",
        url: "https://www.samharris.org/podcasts/making-sense-episodes/457-more-from-sam-the-epstein-files-the-newsom-factor-don-lemons-arrest-ai-market-disruption-and-more",
      },
    ],
  },
];

export const relations: Relation[] = [
  {
    id: "thiel-musk-paypal",
    source: "peter-thiel",
    target: "elon-musk",
    kind: "business",
    status: "confirmed",
    label: "Co-founders turned rivals",
    detail:
      "Their companies merged to form PayPal. They clashed over leadership and strategy, but remained connected through the PayPal alumni network.",
  },
  {
    id: "thiel-auren-dialog",
    source: "peter-thiel",
    target: "auren-hoffman",
    kind: "dialog",
    status: "confirmed",
    label: "Dialog founders",
    detail:
      "Public descriptions identify Thiel and Hoffman as founders of the invitation-only Dialog forum.",
  },
  {
    id: "thiel-lonsdale-palantir",
    source: "peter-thiel",
    target: "joe-lonsdale",
    kind: "business",
    status: "confirmed",
    label: "Palantir co-founders",
    detail:
      "Lonsdale was part of the founding team of Palantir, one of the core companies in Thiel’s network.",
  },
  {
    id: "thiel-reid-paypal",
    source: "peter-thiel",
    target: "reid-hoffman",
    kind: "business",
    status: "confirmed",
    label: "PayPal network",
    detail:
      "Hoffman served as a senior PayPal executive and remained part of the influential PayPal alumni network despite diverging politically from Thiel.",
  },
  {
    id: "thiel-kushner-trump",
    source: "peter-thiel",
    target: "jared-kushner",
    kind: "political",
    status: "reported",
    label: "Trump transition orbit",
    detail:
      "Both operated in the Trump political orbit, with Thiel advising on technology and personnel and Kushner serving in the White House.",
  },
  {
    id: "thiel-leo-right",
    source: "peter-thiel",
    target: "leonard-leo",
    kind: "political",
    status: "reported",
    label: "Conservative infrastructure",
    detail:
      "They occupy overlapping donor, policy, and institutional networks on the American right.",
  },
  {
    id: "musk-thiel-politics",
    source: "elon-musk",
    target: "peter-thiel",
    kind: "political",
    status: "reported",
    label: "Silicon Valley’s right turn",
    detail:
      "Former PayPal rivals later became two of the most visible technology figures aligned with right-populist politics.",
  },
  {
    id: "musk-kushner-trump",
    source: "elon-musk",
    target: "jared-kushner",
    kind: "political",
    status: "reported",
    label: "Trump network",
    detail:
      "Their influence intersected through Trump-world politics, technology policy, and elite political events.",
  },
  {
    id: "reid-epstein",
    source: "reid-hoffman",
    target: "jeffrey-epstein",
    kind: "epstein",
    status: "confirmed",
    label: "Post-conviction meetings",
    detail:
      "Hoffman acknowledged meeting Epstein after Epstein’s 2008 conviction and apologized. Reporting documented planned and actual interactions.",
  },
  {
    id: "summers-epstein",
    source: "lawrence-summers",
    target: "jeffrey-epstein",
    kind: "epstein",
    status: "confirmed",
    label: "Harvard and personal contact",
    detail:
      "Epstein donated to Harvard and maintained contact with Summers across years. The exact scope and context should be read in the linked evidence.",
  },
  {
    id: "attia-epstein",
    source: "peter-attia",
    target: "jeffrey-epstein",
    kind: "epstein",
    status: "confirmed",
    label: "Sustained post-conviction friendship",
    detail:
      "Years of released emails show meetings, medical advice, referrals, access to an Epstein-owned apartment, sexual banter, and Attia saying he experienced “JE withdrawal.” This establishes closeness, not participation in Epstein’s crimes.",
    sourceUrl:
      "https://www.theatlantic.com/health/2026/02/peter-attia-epstein-files-wellness/685861/",
  },
  {
    id: "musk-epstein",
    source: "elon-musk",
    target: "jeffrey-epstein",
    kind: "epstein",
    status: "disputed",
    label: "Photograph, claims, and denials",
    detail:
      "Musk was photographed with Ghislaine Maxwell and has denied meaningful ties to Epstein. Various reported claims remain contested.",
  },
  {
    id: "schmidt-reid-tech",
    source: "eric-schmidt",
    target: "reid-hoffman",
    kind: "business",
    status: "confirmed",
    label: "Technology and policy network",
    detail:
      "Both are prominent technology investors and Democratic-network participants with overlapping institutional and policy circles.",
  },
  {
    id: "chamath-musk",
    source: "chamath-palihapitiya",
    target: "elon-musk",
    kind: "media",
    status: "confirmed",
    label: "Public advocacy and commentary",
    detail:
      "Palihapitiya has repeatedly discussed and defended Musk’s companies and political significance in public commentary.",
  },
  {
    id: "harris-musk",
    source: "sam-harris",
    target: "elon-musk",
    kind: "critical",
    status: "confirmed",
    label: "Public criticism",
    detail:
      "Harris has criticized Musk’s political conduct and handling of X, despite earlier intellectual and social overlap.",
  },
  {
    id: "harris-epstein",
    source: "sam-harris",
    target: "jeffrey-epstein",
    kind: "epstein",
    status: "confirmed",
    label: "Brief encounter and email",
    detail:
      "Harris reports one in-person encounter and a limited email exchange. A proposed dinner is not established to have happened.",
  },
  {
    id: "attia-harris",
    source: "peter-attia",
    target: "sam-harris",
    kind: "media",
    status: "confirmed",
    label: "Podcast collaborators",
    detail:
      "They have appeared repeatedly on each other's podcasts discussing meditation, COVID, health, and longevity.",
  },
  {
    id: "harris-klein",
    source: "sam-harris",
    target: "ezra-klein",
    kind: "critical",
    status: "confirmed",
    label: "Public intellectual antagonism",
    detail:
      "Their 2018 debate over Charles Murray, race, IQ, and identity became a sustained dispute about evidence, history, and journalistic responsibility.",
  },
  {
    id: "klein-thiel",
    source: "ezra-klein",
    target: "peter-thiel",
    kind: "media",
    status: "confirmed",
    label: "Subject of political analysis",
    detail:
      "Klein has analyzed Thiel’s ideology and influence as part of broader reporting on the American right and technology politics.",
  },
  {
    id: "stephens-musk",
    source: "bret-stephens",
    target: "elon-musk",
    kind: "critical",
    status: "confirmed",
    label: "Conservative criticism",
    detail:
      "Stephens has criticized aspects of Musk’s politics and conduct from an anti-populist center-right position.",
  },
  {
    id: "dialog-reid-auren",
    source: "auren-hoffman",
    target: "reid-hoffman",
    kind: "dialog",
    status: "reported",
    label: "Alleged Dialog roster",
    detail:
      "Reid Hoffman appears on the alleged roster extracted from archived Dialog site code. This is not independently confirmed membership.",
  },
  {
    id: "dialog-schmidt-auren",
    source: "auren-hoffman",
    target: "eric-schmidt",
    kind: "dialog",
    status: "reported",
    label: "Alleged Dialog roster",
    detail:
      "Eric Schmidt appears on the alleged roster extracted from archived Dialog site code. This is not independently confirmed membership.",
  },
  {
    id: "dialog-allin",
    source: "chamath-palihapitiya",
    target: "joe-lonsdale",
    kind: "political",
    status: "reported",
    label: "Venture-right ecosystem",
    detail:
      "They participate in an overlapping ecosystem of venture capital, podcasts, political giving, and technology-policy advocacy.",
  },
];

export const relationColors: Record<RelationKind, string> = {
  business: "#949aa3",
  political: "#949aa3",
  social: "#949aa3",
  dialog: "#949aa3",
  critical: "#747a83",
  epstein: "#747a83",
  media: "#949aa3",
};

export const statusColors: Record<EvidenceStatus, string> = {
  confirmed: "#34383f",
  reported: "#737983",
  disputed: "#555a63",
  speculative: "#9297a0",
  "none-found": "#a5a9b0",
};

export const mismatches: Mismatch[] = [
  {
    id: "musk-reid",
    people: ["elon-musk", "reid-hoffman"],
    title: "Public enemies, durable access",
    publicStory:
      "Musk and Hoffman have publicly attacked one another over Trump, OpenAI, and each other's Epstein contacts.",
    privateOverlap:
      "They share the PayPal alumni network, appeared in Dialog records, participated in early OpenAI circles, and attended overlapping elite technology events.",
    interpretation:
      "The feud appears real. The more interesting point is that elite conflict does not necessarily revoke elite access.",
    status: "confirmed",
    sources: [
      {
        title: "Dialog roster investigation",
        publisher: "WIRED",
        url: "https://www.wired.com/story/leak-exposes-members-of-peter-thiels-secretive-dialog-society/",
      },
      {
        title: "Musk and Hoffman reignite Epstein feud",
        publisher: "The Wall Street Journal",
        url: "https://www.wsj.com/business/epstein-island-emails-reignite-feud-between-elon-musk-and-reid-hoffman-a48703ff",
      },
    ],
  },
  {
    id: "thiel-reid",
    people: ["peter-thiel", "reid-hoffman"],
    title: "Old allies, opposite political machines",
    publicStory:
      "Thiel became a central financier of the populist right while Hoffman became a major Democratic and anti-Trump donor.",
    privateOverlap:
      "Their relationship stretches from Stanford and PayPal through LinkedIn financing, Silicon Valley institutions, and Dialog records.",
    interpretation:
      "Political polarization can coexist with personal familiarity and shared institutional terrain.",
    status: "confirmed",
    sources: [
      {
        title: "Thiel and Hoffman's political divergence",
        publisher: "The Atlantic",
        url: "https://www.theatlantic.com/politics/archive/2023/11/peter-thiel-2024-election-politics-investing-life-views/675946/",
      },
    ],
  },
  {
    id: "musk-harris",
    people: ["elon-musk", "sam-harris"],
    title: "A friendship became content",
    publicStory:
      "Harris now accuses Musk of spreading misinformation and conspiracy theories; Musk responded with a personal insult.",
    privateOverlap:
      "Harris describes more than a decade of friendship, private social contact, and assistance with Musk's security before their rupture.",
    interpretation:
      "This is not hidden collusion. It demonstrates how quickly private trust can become public antagonism without erasing the history between them.",
    status: "confirmed",
    sources: [
      {
        title: "The Trouble With Elon",
        publisher: "Sam Harris",
        url: "https://samharris.substack.com/p/the-trouble-with-elon",
      },
    ],
  },
  {
    id: "harris-klein",
    people: ["sam-harris", "ezra-klein"],
    title: "Intellectual adversaries in the same directory",
    publicStory:
      "Their 2018 debate over race, IQ, identity, and journalistic responsibility became openly hostile.",
    privateOverlap:
      "Both appear in the exposed Dialog directory, a forum advertised as ideologically diverse and off the record.",
    interpretation:
      "Dialog's value may be precisely that it retains people whose public brands depend on opposing one another.",
    status: "reported",
    sources: [
      {
        title: "Harris–Klein debate transcript",
        publisher: "Vox",
        url: "https://www.vox.com/2018/4/9/17210248/sam-harris-ezra-klein-charles-murray-transcript-podcast",
      },
      {
        title: "Dialog roster investigation",
        publisher: "WIRED",
        url: "https://www.wired.com/story/leak-exposes-members-of-peter-thiels-secretive-dialog-society/",
      },
    ],
  },
  {
    id: "bipartisan-room",
    people: ["leonard-leo", "ezra-klein", "jared-kushner", "reid-hoffman"],
    title: "The coalition is access, not ideology",
    publicStory:
      "The directory spans conservative legal infrastructure, Democratic megadonors, Trump family power, journalists, and government officials.",
    privateOverlap:
      "Dialog explicitly describes itself as bipartisan and off the record, while leaked material suggests it ranks and maps participants.",
    interpretation:
      "The strongest supported theory is not a single political program. It is private social infrastructure for people with unusually high institutional leverage.",
    status: "reported",
    sources: [
      {
        title: "How Dialog secretly ranks its members",
        publisher: "WIRED",
        url: "https://www.wired.com/story/how-peter-thiels-private-dialog-club-secretly-ranks-its-members/",
      },
    ],
  },
  {
    id: "himes-lonsdale",
    people: ["jim-himes", "joe-lonsdale"],
    title: "The overseer and the contractor",
    publicStory:
      "Jim Himes serves on congressional intelligence oversight while Palantir operates deeply inside intelligence, defense, policing, and immigration systems.",
    privateOverlap:
      "Himes confirmed attending one Dialog conference around 2016; Palantir co-founder Joe Lonsdale appears in historical Dialog material.",
    interpretation:
      "There is no evidence of improper discussion. The transparency concern is that overseers and powerful contractors share off-the-record social space unavailable to ordinary stakeholders.",
    status: "reported",
    sources: [
      {
        title: "Jim Himes confirms one Dialog conference",
        publisher: "CT Insider",
        url: "https://www.ctinsider.com/news/article/jim-himes-dialog-leaked-membership-list-thiel-22309787.php",
      },
    ],
  },
  {
    id: "status-paradox",
    people: ["auren-hoffman", "peter-thiel"],
    title: "A room that bans status signaling—and scores status",
    publicStory:
      "Moderator guidance reportedly asks participants to avoid status signaling and keep contributions concise and nonobvious.",
    privateOverlap:
      "Leaked systems allegedly grade wealth, fame, usefulness, political leanings, and relationships, affecting seating, introductions, pricing, and future invitations.",
    interpretation:
      "This is the strongest institutional contradiction in the leak: anti-status rhetoric wrapped around explicit quantification of elite value.",
    status: "reported",
    sources: [
      {
        title: "How Dialog secretly ranks its members",
        publisher: "WIRED",
        url: "https://www.wired.com/story/how-peter-thiels-private-dialog-club-secretly-ranks-its-members/",
      },
    ],
  },
  {
    id: "bush-thiel",
    people: ["sophia-bush", "peter-thiel"],
    title: "A guest who says she would avoid the founder",
    publicStory:
      "Sophia Bush said her values sharply oppose Thiel's and that she could not be paid to share a room with him.",
    privateOverlap:
      "She confirmed attending Dialog as a guest/speaker to discuss AI-generated sexual abuse and said Thiel was absent and not discussed.",
    interpretation:
      "“Peter Thiel's club” is incomplete shorthand. Dialog can recruit countervoices whose participation is issue-specific rather than ideological allegiance.",
    status: "confirmed",
    sources: [
      {
        title: "Sophia Bush explains Dialog attendance",
        publisher: "Entertainment Weekly",
        url: "https://ew.com/sophia-bush-defends-attending-peter-thiel-linked-secret-society-event-12003015",
      },
    ],
  },
];

export const allegedDirectory = [
  "Immaad Akhund",
  "Turki Al Faisal Al Saud",
  "Reema Al-Saud",
  "John Arnold",
  "Susan Athey",
  "Peter Attia",
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
  "Joseph Gordon-Levitt",
  "Adam Grant",
  "Severin Hacker",
  "Jonathan Haidt",
  "Peggy Hamburg",
  "Sam Harris",
  "Jim Himes",
  "Auren Hoffman",
  "Reid Hoffman",
  "Rob Hur",
  "Bob Jain",
  "Bryan Johnson",
  "Kaja Kallas",
  "Gaurav Kapadia",
  "Karen Karniol-Tambour",
  "Garry Kasparov",
  "Neal Katyal",
  "Shahid Khaqan Abbasi",
  "Ezra Klein",
  "Tarō Kōno",
  "Henry Kravis",
  "Jared Kushner",
  "Jason Kwon",
  "Leonard Leo",
  "Jon Levin",
  "Howie Liu",
  "Joe Lonsdale",
  "Micky Malka",
  "Stan McChrystal",
  "Neal Mohan",
  "Lisa Monaco",
  "Wes Moore",
  "Elon Musk",
  "Demet Mutlu",
  "Vas Narasimhan",
  "Grover Norquist",
  "Mike Novogratz",
  "Jim O’Neill",
  "Chamath Palihapitiya",
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
  "Eric Schmidt",
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
  "Bret Stephens",
  "Lawrence Summers",
  "Astro Teller",
  "Peter Thiel",
  "Nick Thompson",
  "John Townsend",
  "Tom Tugendhat",
  "Tim Urban",
  "Rick Warren",
  "Strauss Zelnick",
  "Shivon Zilis",
] as const;

export const newlySurfaced = [
  {
    name: "Alexus Grynkewich",
    status: "2026 registrant",
    note: "Records reportedly show attendance since 2021.",
  },
  {
    name: "Randy Kroszner",
    status: "2026 registrant",
    note: "Former Federal Reserve governor.",
  },
  {
    name: "Hallie Hoffman",
    status: "2026 registrant",
    note: "Former DEA general counsel and acting chief of staff.",
  },
  {
    name: "Jonathan Greenblatt",
    status: "2026 registrant",
    note: "CEO, Anti-Defamation League.",
  },
  {
    name: "Peter Goettler",
    status: "2026 registrant",
    note: "President, Cato Institute.",
  },
  {
    name: "Ryan Stowers",
    status: "2026 registrant",
    note: "Executive director, Charles Koch Foundation.",
  },
  {
    name: "Roger Myerson",
    status: "2026 registrant",
    note: "Nobel economist; also present in older Dialog records.",
  },
  {
    name: "Tom Lue",
    status: "2026 registrant",
    note: "Google DeepMind global-affairs executive.",
  },
  {
    name: "Souad Mekhennet",
    status: "2026 organizer / registrant",
    note: "Journalist and author.",
  },
  {
    name: "Josh Brolin",
    status: "prospect / first-timer",
    note: "Current dossier reportedly records no prior retreats.",
  },
  {
    name: "Reihan Salam",
    status: "current dossier",
    note: "President, Manhattan Institute.",
  },
  {
    name: "Shmuel Abramzon",
    status: "2026 participant profile",
    note: "Chief economist, Israeli Ministry of Finance.",
  },
  {
    name: "Lisa Gevelber",
    status: "active member",
    note: "The strongest explicit newly public membership label.",
  },
  {
    name: "Isaac Lee",
    status: "current leaked material",
    note: "Media executive.",
  },
  {
    name: "Eva Price",
    status: "current leaked material",
    note: "Theater producer.",
  },
  {
    name: "Teresa Hsiao",
    status: "current dossier",
    note: "Writer and producer; reportedly assigned an internal grade.",
  },
  {
    name: "Zach Shields",
    status: "current leaked material",
    note: "Writer and producer.",
  },
] as const;
