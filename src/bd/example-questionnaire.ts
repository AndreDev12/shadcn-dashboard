interface QuestionnaireItems {
  name: string;
  required: boolean;
  prompt: string;
  description: string;
  choices: {
    value: string;
    label: string;
    description?: string;
  }[];
  input?: {
    label: string;
    placeholder: string;
  };
}

interface MultipleSelectionItems {
  choices: { value: string }[];
  name: string;
  required: boolean;
}

export const questionnaireItems: QuestionnaireItems[] = [
  {
    name: 'direction',
    required: true,
    prompt: 'What should we prototype next?',
    description: 'Choose a direction or write your own.',
    choices: [
      {
        value: 'delegation',
        label: 'Delegation',
        description: 'Show how work moves to a specialist.',
      },
      {
        value: 'questions',
        label: 'Question prompts',
        description: 'Show choices while the interface waits.',
      },
      { value: 'both', label: 'Both together' },
    ],
    input: { label: 'Another answer', placeholder: 'Type another answer…' },
  },
  {
    name: 'detail',
    required: false,
    prompt: 'How much detail should it include?',
    description: 'Skip this if you are not sure yet.',
    choices: [
      { value: 'focused', label: 'Focused' },
      { value: 'complete', label: 'Complete flow' },
    ],
  },
];

export const multipleSelectionItems: MultipleSelectionItems[] = [
  {
    choices: [
      { value: 'source' },
      { value: 'tests' },
      { value: 'docs' },
      { value: 'history' },
    ],
    name: 'context',
    required: true,
  },
] as const;
