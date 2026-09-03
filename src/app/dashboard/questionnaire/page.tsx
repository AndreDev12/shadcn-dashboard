'use client';

import { questionnaireItems as items, multipleSelectionItems } from '@/bd';
import {
  Questionnaire,
  QuestionnaireProgress,
  QuestionnaireItem,
  QuestionnaireTitle,
  QuestionnaireDescription,
  QuestionnaireChoices,
  QuestionnaireChoice,
  QuestionnaireInput,
  QuestionnaireError,
  QuestionnaireActions,
  QuestionnairePrevious,
  QuestionnaireSkip,
  QuestionnaireNext,
  QuestionnaireSubmit,
  toast,
} from '@/components/ui';

export default function Page() {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const answers = new FormData(event.currentTarget);
    // answers.get("direction"), answers.getAll(...) for multiple items.
    console.log('Submitted answers:', Object.fromEntries(answers));
  }

  function handleMultipleSelectionSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();
    const context = new FormData(event.currentTarget).getAll('context');
    // toast('Context selected', {
    //   description: `Context: ${context.join(', ') || 'None'}`,
    // });
    toast.add({
      title: 'Context selected',
      description: `Context: ${context.join(', ') || 'None'}`,
    });
  }

  return (
    <div className="grid grid-cols-2 gap-4">
      <Questionnaire items={items} onSubmit={handleSubmit}>
        <QuestionnaireProgress />
        {items.map((question) => {
          const { name, required, prompt, description, choices, input } =
            question;

          return (
            <QuestionnaireItem key={name} name={name} required={required}>
              <QuestionnaireTitle>{prompt}</QuestionnaireTitle>
              <QuestionnaireDescription>{description}</QuestionnaireDescription>
              <QuestionnaireChoices>
                {choices.map((choice) => {
                  const { value, label, description } = choice;

                  return (
                    <QuestionnaireChoice key={value} value={value}>
                      <span className="font-medium">{label}</span>
                      {'description' in choice ? (
                        <span className="text-muted-foreground">
                          {description}
                        </span>
                      ) : null}
                    </QuestionnaireChoice>
                  );
                })}
                {'input' in question ? (
                  <QuestionnaireInput
                    aria-label={input?.label}
                    placeholder={input?.placeholder}
                  />
                ) : null}
              </QuestionnaireChoices>
              <QuestionnaireError />
            </QuestionnaireItem>
          );
        })}
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext />
          <QuestionnaireSubmit />
        </QuestionnaireActions>
      </Questionnaire>

      <Questionnaire
        className="mx-auto max-w-md"
        items={multipleSelectionItems}
        shortcuts="letters"
        onSubmit={handleMultipleSelectionSubmit}
      >
        <QuestionnaireItem name="context" multiple required>
          <QuestionnaireTitle>
            What context should the agent inspect?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Select every source that may affect the implementation.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="source">
              Relevant source files
            </QuestionnaireChoice>
            <QuestionnaireChoice value="tests">
              Existing tests
            </QuestionnaireChoice>
            <QuestionnaireChoice value="docs">
              Architecture documentation
            </QuestionnaireChoice>
            <QuestionnaireChoice value="history">
              Recent commit history
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Share context</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
}
