export interface Question {
  question: string;
  difficulty: string;
  choices: string[];
}

export interface Questionnaire {
  [key: string]: Question[];
}

export const seedData: Questionnaire = {
  A: [
    {
      question:
        "Which type of volcano often erupts with a mixture of steam, ash, rock, and dust, causing a pyroclastic flow?",
      difficulty: "Remembering",
      choices: [
        "A. Lava dome",
        "B. Cinder cone",
        "C. Shield volcano",
        "D. Composite cone",
      ],
    },
    {
      question:
        "What do you call a steam-driven eruption when hot rocks mix with water and are characterized by ash columns which may cause an onset of a larger eruption?",
      difficulty: "Remembering",
      choices: ["A. Phreatic", "B. Plinian", "C. Strombolian", "D. Vulcanian"],
    },
    {
      question:
        "The most abundant type of volcanoes that are built from ejected lava fragments, have steep slopes and wide craters are known as_____________.",
      difficulty: "Remembering",
      choices: [
        "A. Lava domes",
        "B. Cinder cones",
        "C. Composite cones",
        "D. Shield volcanoes",
      ],
    },
    {
      question:
        "Which of the following characteristics of a volcano depends on its magma emission?",
      difficulty: "Remembering",
      choices: ["A. Age", "B. Location", "C. Shape", "D. Size"],
    },
    {
      question:
        "How would you classify volcanoes that have records of eruptions?",
      difficulty: "Understanding",
      choices: ["A. Active", "B. Cinder", "C. Inactive", "D. Shield"],
    },
    {
      question:
        "Shield volcanoes are formed by the accumulation of non-viscous lava that oozes out from it. How would you describe this type of volcano?",
      difficulty: "Understanding",
      choices: [
        "A. Narrow domed structure",
        "B. Large and has a narrow crater",
        "C. Broad, slightly domed structure",
        "D. Steep slope and has a wide crat",
      ],
    },
    {
      question:
        "Saddam told his grandson, Stephen, to vacate immediately after hearing the news of a possible volcanic eruption in their area. Why do you think he told his grandson to do so?",
      difficulty: "Applying",
      choices: [
        "A. Because volcanic eruption can cause lives in danger.",
        "B. Because volcanic eruption is a sight we should witness.",
        "C. Because volcanic eruption can destruct houses and properties.",
        "D. Both A and C are correct.",
      ],
    },
    {
      question:
        "What idea justifies that huge volcanic eruptions may cause the decrease of the Earth’s average temperature for a few years?",
      difficulty: "Analyzing",
      choices: [
        "A. Heat is associated with a volcanic eruption.",
        "B. Light is associated with a volcanic eruption.",
        "C. Acid rain is associated with a volcanic eruption.",
        "D. Volcanic ash is associated with a volcanic eruption.",
      ],
    },
    {
      question:
        "Magma and lava are two materials related to volcanoes, what is the difference between these two?",
      difficulty: "Evaluating",
      choices: [
        "A. Magma and lava are hot molten rocks found in the Earth’s crust.",
        "B. Magma is a molten rock that reaches the Earth’s surface while lava is stored in Earth’s crust.",
        "C. Magma is a liquid rock that has cooled and hardened while lava is a liquid rock.",
        "D. Magma is the combination of liquid rock, crystals, and gas below the surface. Lava is the same thing as magma but is on top of the surface.",
      ],
    },
    {
      question:
        "Julie, a volcanologist, is attending a large crowd activity. While having a stroll, she observed 5 out of 10 signs of an impending volcanic eruption. What will you do if you were Julie?",
      difficulty: "Creating",
      choices: [
        "A. Leave the place immediately.",
        "B. Tell only your friends about your observation.",
        "C. Inform the crowd about your observation and let them follow safety protocols.",
        "D. Keep your observation to yourself since not all signs of the impending volcanic eruption is observed.",
      ],
    },
  ],
  B: [
    {
      question:
        "Which of the following characteristics of a volcano depends on its magma emission?",
      difficulty: "Remembering",
      choices: ["A. Age", "B. Location", "C. Shape", "D. Size"],
    },
    {
      question:
        "The most abundant type of volcanoes that are built from ejected lava fragments, have steep slopes and wide craters are known as_____________.",
      difficulty: "Remembering",
      choices: [
        "A. Lava domes",
        "B. Cinder cones",
        "C. Composite cones",
        "D. Shield volcanoes",
      ],
    },
    {
      question:
        "What do you call a steam-driven eruption when hot rocks mix with water and are characterized by ash columns which may cause an onset of a larger eruption?",
      difficulty: "Remembering",
      choices: ["A. Phreatic", "B. Plinian", "C. Strombolian", "D. Vulcanian"],
    },
    {
      question:
        "Which type of volcano often erupts with a mixture of steam, ash, rock, and dust, causing a pyroclastic flow?",
      difficulty: "Remembering",
      choices: [
        "A. Lava dome",
        "B. Cinder cone",
        "C. Shield volcano",
        "D. Composite cone",
      ],
    },
    {
      question:
        "Shield volcanoes are formed by the accumulation of non-viscous lava that oozes out from it. How would you describe this type of volcano?",
      difficulty: "Understanding",
      choices: [
        "A. Narrow domed structure",
        "B. Large and has a narrow crater",
        "C. Broad, slightly domed structure",
        "D. Steep slope and has a wide crat",
      ],
    },
    {
      question:
        "Which of the following characteristics of magma mainly affects the explosiveness of a volcanic eruption?",
      difficulty: "Understanding",
      choices: ["A. Color", "B. Amount", "C. Temperature", "D. Silica content"],
    },
    {
      question:
        "Saddam told his grandson, Stephen, to vacate immediately after hearing the news of a possible volcanic eruption in their area. Why do you think he told his grandson to do so?",
      difficulty: "Applying",
      choices: [
        "A. Because volcanic eruption can cause lives in danger.",
        "B. Because volcanic eruption is a sight we should witness.",
        "C. Because volcanic eruption can destruct houses and properties.",
        "D. Both A and C are correct.",
      ],
    },
    {
      question:
        "Which of the following statements is NOT correct about how temperature affects the viscosity of the magma?",
      difficulty: "Analyzing",
      choices: [
        "A. As lava flows, it cools and begins to harden.",
        "B. The viscosity of magma increases with temperature.",
        "C. The viscosity of magma decreases with temperature.",
        "D. The lower the temperature the ability of magma to flow also decreases.",
      ],
    },
    {
      question:
        "Which details below would support that volcanic eruption has a positive effect on the environment?\nI. Volcanic eruptions can create spectacular scenery.\nII. Volcanic eruption produced rich and fertile soil for farming.\nIII. Volcanic eruption helps lessen the overpopulation issue we face.\nIV. Volcanic eruption helps people become more creative by making earthenware out of ashfall.",
      difficulty: "Evaluating",
      choices: [
        "A. I, II, IV",
        "B. I, III, IV",
        "C. I, II, III",
        "D. I, II, III, IV",
      ],
    },
    {
      question:
        "You are a volcanologist from Manila. On your way back to your hometown, you saw the destruction brought about by the eruption of Mayon Volcano. How will you create awareness among your townmates about volcanic hazards?",
      difficulty: "Creating",
      choices: [
        "A. Make a budget proposal to build evacuation shelters.",
        "B. Make a contingency plan before, during, and after a volcanic eruption.",
        "C. Ask for financial support from the local government for the emergency kit provision.",
        "D. Conduct symposiums about safety precautionary measures during volcanic eruptions.",
      ],
    },
  ],
  C: [
    {
      question:
        "Which type of volcano often erupts with a mixture of steam, ash, rock, and dust, causing a pyroclastic flow?",
      difficulty: "Remembering",
      choices: [
        "A. Lava dome",
        "B. Cinder cone",
        "C. Shield volcano",
        "D. Composite cone",
      ],
    },
    {
      question:
        "The most abundant type of volcanoes that are built from ejected lava fragments, have steep slopes and wide craters are known as_____________.",
      difficulty: "Remembering",
      choices: [
        "A. Lava domes",
        "B. Cinder cones",
        "C. Composite cones",
        "D. Shield volcanoes",
      ],
    },
    {
      question:
        "What do you call a steam-driven eruption when hot rocks mix with water and are characterized by ash columns which may cause an onset of a larger eruption?",
      difficulty: "Remembering",
      choices: ["A. Phreatic", "B. Plinian", "C. Strombolian", "D. Vulcanian"],
    },
    {
      question:
        "Which of the following characteristics of a volcano depends on its magma emission?",
      difficulty: "Remembering",
      choices: ["A. Age", "B. Location", "C. Shape", "D. Size"],
    },
    {
      question:
        "Which of the following characteristics of magma mainly affects the explosiveness of a volcanic eruption?",
      difficulty: "Understanding",
      choices: ["A. Color", "B. Amount", "C. Temperature", "D. Silica content"],
    },
    {
      question:
        "How would you classify volcanoes that have records of eruptions?",
      difficulty: "Understanding",
      choices: ["A. Active", "B. Cinder", "C. Inactive", "D. Shield"],
    },
    {
      question:
        "Saddam told his grandson, Stephen, to vacate immediately after hearing the news of a possible volcanic eruption in their area. Why do you think he told his grandson to do so?",
      difficulty: "Applying",
      choices: [
        "A. Because volcanic eruption can cause lives in danger.",
        "B. Because volcanic eruption is a sight we should witness.",
        "C. Because volcanic eruption can destruct houses and properties.",
        "D. Both A and C are correct.",
      ],
    },
    {
      question:
        "What evidence suggests that a thick layer of volcanic ash can be heavy enough to collapse the roofs of buildings?",
      difficulty: "Analyzing",
      choices: [
        "A. Volcanic ash is solid.",
        "B. Volcanic ash cannot be blown by winds.",
        "C. Volcanic ash becomes heavier as it cools.",
        "D. Volcanic ash are tiny fragments of rocks that become heavy as they pile up.",
      ],
    },
    {
      question:
        "We are aware of the negative impacts brought about by volcanic eruptions. As a student, what would you do to minimize accidents that could possibly happen during a volcanic eruption?",
      difficulty: "Evaluating",
      choices: [
        "A. Don’t panic.",
        "B. Stay out of the restricted zones",
        "C. Tie up phone lines with non-emergency calls.",
        "D. Both A and B",
      ],
    },
    {
      question:
        "Arrange the following statements to complete the process of how a phreatomagmatic volcano erupts.\nI. Base surges are observed.\nII. There’s a contact between water and magma.\nIII. Large columns of fine ash and pyroclastic are emitted.",
      difficulty: "Creating",
      choices: [
        "A. I, II, III",
        "B. II, III, I",
        "C. I, III, II",
        "D. III, II, I",
      ],
    },
  ],
};
