const functions = require("./functions")
const me = {
  summary: `
  A confident Design Director with over 22 years' experience
  of optimising creative and technical assets for performance.
  `,
  about: [
    {
      title: "Brand: my understanding",
      body: `
        To deliver real value, brand needs to be a cherished investment -
        not a resented expense. Applied without faith as a superficial after-thought,
        it will be a self-fulfilling prophecy of inadequate commitment, inadequate results.
        Some think they can't afford to apply brand properly,
        others know they can't afford not to.`
    },
    {
      title: "What helped on the way",
      body: `
        I've been Editor of a construction industry analysis journal,
        directed creative media for an international &pound;32m turnover company,
        founded a new clothing brand from scratch,
        and freelanced for 9 years helping businesses get more from pixels and print. I have designed user journeys and built API dashboards, websites, and PDF documents with NPM and javascript.
        I value data-driven decisions, respect the purity of non-repetitive coding and enjoy orchestrating brand assets that deliver measurable value.`
    },
    {
      title: "Interests",
      body: `
        Anything to do with motorbikes, beaches (winter, summer, rain or shine).
        Badminton, squash, and kickboxing: W-2 L-1 D-0 (my remaining knee cartilage demands these should be pursued with reduced ferocity) PlayStation games rob me of a few hours: I'm currently mesmerised by Assassin's Creed: Odyssey, and truly astonished by the attention to detail, especially the lighting effects.
        Trying to imagine how I'd even begin programming behavioural light algorithms makes my eyes swap sockets.
        I've also developed a fascination with e-vehicles and genetics.`
    }
  ],
  software: [
    {
      title: "Balsamiq",
      body: ""
    },
    {
      title: "Bootstrap",
      body: ""
    },
    {
      title: "CSS",
      body: ""
    },
    {
      title: "Figma",
      body: ""
    },
    {
      title: "HTML",
      body: ""
    },
    {
      title: "InDesign",
      body: ""
    },
    {
      title: "GitHub",
      body: ""
    },
    {
      title: "Illustrator",
      body: ""
    },
    {
      title: "jQuery",
      body: ""
    },
    {
      title: "JavaScript",
      body: ""
    },
    {
      title: "Less",
      body: ""
    },
    {
      title: "NPM",
      body: ""
    },
    {
      title: "Photoshop",
      body: ""
    },
    {
      title: "PHP",
      body: ""
    },
    {
      title: "Sass",
      body: ""
    },
    {
      title: "SketchBook",
      body: ""
    },
    {
      title: "WordPress",
      body: ""
    }
  ],
  careersData: {
    "Policy Expert": {
      title: 'Lead Designer',
      subtitle: 'Policy Expert',
      url: "https://www.policyexpert.co.uk",
      body: [
        "Govern brand across product documents, emails, websites, UI and UX design, wireframing, configuring assets and code repositories for shared use of brand digital assets. Direct UI team and support assistant web developers.",
        functions.render_bullets({
          class: "",
          bullets: [
            "Research user data and proven design principles",
            "Design UI and UX wireframes",
            "Build branded prototype web apps for user testing",
            "Design and build branded media from core assets and protocols",
            "Direct brand consistency across company media",
            "Build API dashboards for testing / asset management" 
          ]
        }),
        "Assessed current user journey and marketing data - then prepared an improved prototype web app in my own time and demonstrated this to the Operations Director. It was developed into the operational web app which went live in Spring 2019 and returned improved click-to-sale by 2.5% over a 12 month period."
      ],
      end: {
        month: 'May',
        year: '2021'
      },
      start: {
        month: 'Oct',
        year: '2011'
      },
      stats: [
        {"Web design": 25},
        {"UX": 25},
        {"Web development": 20},
        {"Brand": 15},
        {"UI": 15}
      ]
    },
    "DBA Design Services": {
      title: 'Director',
      subtitle: 'DBA Design Services Ltd',
      url: "",
      body: [
        "Offering contracted on and off-site services including: brand, graphic and web design and web build.",
        functions.render_bullets({
          class: "",
          bullets: [
            "Lead UI developer for 'Barclaycard' web portal (Via client agency)",
            "Lead UI developer for 'Very' website (Via client agency)",
            "Lead UI developer for 'Chubb' intranet (Via client agency)"
          ]
        })
      ],
      end: {
        month: 'Sep',
        year: '2011'
      },
      start: {
        month: 'Jun',
        year: '2002'
      },
      stats: [
        {"Web design": 25},
        {"Graphic design": 20},
        {"Brand": 20},
        {"Web development": 15},
        {"UI": 15},
        {"UX": 5}
      ]
    },
    "MadJester": {
      title: 'Director',
      subtitle: 'MadJester Clothing',
      url: "https://www.madjester.co.uk/",
      body: [
        "Founded new clothing business focused on unique branded quality clothing; suitable as both leisurewear and practical use with bike gear - the latter demanding use of sturdy, resilient fabrics.",
        functions.render_bullets({
          class: "",
          bullets: [
            "Brand and design including identity conception and development",
            "Fabric performance research and sourcing",
            "Website design and build, exhibition graphics, handouts, brochureware"
          ]
        })
      ],
      start: {
        month: 'Dec',
        year: '2004'
      },
      end: {
        month: 'Today',
        year: '2021'
      },
      stats: [
        {"Brand": 50},
        {"Graphic design": 30},
        {"Web design": 10},
        {"UI": 5},
        {"Web development": 5}
      ]
    },
    "Triangle": {
      title: 'Creative Director',
      subtitle: 'Triangle Group',
      url: "",
      body: [
        "The Graphic Designer role for this key IBM Business Partner quickly developed to Creative Director, reporting direct to the Managing Director and guiding a team of one assistant and one developer to maintain company communications across all channels.",
        functions.render_bullets({
          class: "",
          bullets: [
            "Design brand assets for &pound;multimillion IT systems provider",
            "Manage identity across five offices in three international locations",
            "Ensure all company media communicated core values with templated features and clear call-to-action"
          ]
        })
      ],
      end: {
        month: 'Aug',
        year: '2002'
      },
      start: {
        month: 'May',
        year: '1998'
      },
      stats: [
        {"Brand": 50},
        {"Graphic design": 30},
        {"Web design": 10},
        {"UI": 5},
        {"Web development": 5}
      ]
    }
  }
}

module.exports = me
