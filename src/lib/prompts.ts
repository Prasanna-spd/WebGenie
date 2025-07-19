export const gymPrompt=()=>
    `Generate complete gym/fitness website content in JSON format with the following fields:
    
    {
    "title": "Main heading for the website",
    "subtitle": "Brief supporting text under the title",
    "cta": "Call-to-action phrase for signup or trial",
    "about": "Short description of the gym, its mission, or story",
    "heroTagLine": "Motivational phrase split-able into multiple lines (overall keep it 5 words only)",
    "stickerBelowName": "Small caption or label under gym mascot/sticker (overall keep it 5 words only)",
    "wildProgramDetails": [
      { "tag": "Program name", "desc": "Short program description" },
      { "tag": "Program name", "desc": "Short program description" },
      { "tag": "Program name", "desc": "Short program description" },
      { "tag": "Program name", "desc": "Short program description" }
    ],
    "services": [
      { "tag": "Service name", "desc": "Short description" },
      { "tag": "Service name", "desc": "Short description" },
      { "tag": "Service name", "desc": "Short description" },
      { "tag": "Service name", "desc": "Short description" }
    ],
    "plans": [
      {
        "price": "Rs XXXX",
        "tag": "Plan name",
        "desc": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
      },
      {
        "price": "Rs XXXX",
        "tag": "Plan name",
        "desc": ["Feature 1", "Feature 2", "Feature 3", "Feature 4"]
      }
    ],
    "gymDetails": {
      "name": "Gym name",
      "phNum": "Contact number",
      "email": "Contact email"
    }
  }
  `