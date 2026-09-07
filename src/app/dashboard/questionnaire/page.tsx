'use client';

import * as React from 'react';
import type { QuestionnaireItemStatus } from '@shadcn/react/questionnaire';

import {
  questionnaireItems as items,
  multipleSelectionItems,
  freeFormItems,
  explicitSkipItems,
} from '@/bd';
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
  const [constraintStatus, setConstraintStatus] =
    React.useState<QuestionnaireItemStatus>('unanswered');

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

  function handleFreeFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const approach = new FormData(event.currentTarget).get('approach');
    // toast('Approach selected', {
    //   description: `Approach: ${approach ?? 'None'}`,
    // });
    toast.add({
      title: 'Approach selected',
      description: `Approach: ${approach ?? 'None'}`,
    });
  }

  function handleExplicitSkipSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const answers = {
      task: formData.get('task'),
      constraints: formData.get('constraints'),
      constraintStatus,
      review: formData.get('review'),
    };
    // toast('Agent brief submitted', {
    //   description: `Task: ${answers.task ?? 'None'} · Constraints: ${
    //     answers.constraintStatus === 'skipped'
    //       ? 'Skipped'
    //       : (answers.constraints ?? 'None')
    //   } · Review: ${answers.review ?? 'None'}`,
    // });
    toast.add({
      title: 'Agent brief submitted',
      description: `Task: ${answers.task ?? 'None'} · Constraints: ${
        answers.constraintStatus === 'skipped'
          ? 'Skipped'
          : (answers.constraints ?? 'None')
      } · Review: ${answers.review ?? 'None'}`,
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

      <Questionnaire
        className="mx-auto max-w-md"
        items={freeFormItems}
        shortcuts="letters"
        onSubmit={handleFreeFormSubmit}
      >
        <QuestionnaireItem name="approach" required>
          <QuestionnaireTitle>
            How should the agent approach this refactor?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Choose a strategy or write a more specific instruction.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="incremental">
              Make the smallest safe change
            </QuestionnaireChoice>
            <QuestionnaireChoice value="module">
              Refactor one module at a time
            </QuestionnaireChoice>
            <QuestionnaireChoice value="rewrite">
              Replace the implementation completely
            </QuestionnaireChoice>
            <QuestionnaireInput
              aria-label="Another refactoring approach"
              placeholder="Describe another approach…"
            />
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnaireSubmit>Use this approach</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>

      <Questionnaire
        className="mx-auto max-w-md"
        defaultItem="task"
        items={explicitSkipItems}
        onSubmit={handleExplicitSkipSubmit}
      >
        <QuestionnaireProgress />
        <QuestionnaireItem name="task" required>
          <QuestionnaireTitle>What kind of change is this?</QuestionnaireTitle>
          <QuestionnaireDescription>
            Choose the category that best describes the work.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="feature">
              New feature
            </QuestionnaireChoice>
            <QuestionnaireChoice value="fix">Bug fix</QuestionnaireChoice>
            <QuestionnaireChoice value="refactor">Refactor</QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireItem
          name="constraints"
          onStatusChange={setConstraintStatus}
        >
          <QuestionnaireTitle>
            Are there any implementation constraints?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Answer if needed, or intentionally skip this question.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="no-dependencies">
              Do not add dependencies
            </QuestionnaireChoice>
            <QuestionnaireChoice value="no-migrations">
              Do not change the database
            </QuestionnaireChoice>
            <QuestionnaireChoice value="preserve-api">
              Preserve the public API
            </QuestionnaireChoice>
            <QuestionnaireInput
              aria-label="Another implementation constraint"
              placeholder="Describe another constraint…"
            />
          </QuestionnaireChoices>
        </QuestionnaireItem>
        <QuestionnaireItem name="review" required>
          <QuestionnaireTitle>
            How should the work be reviewed?
          </QuestionnaireTitle>
          <QuestionnaireDescription>
            Choose the checks the agent should complete before handoff.
          </QuestionnaireDescription>
          <QuestionnaireChoices>
            <QuestionnaireChoice value="tests">
              Run the test suite
            </QuestionnaireChoice>
            <QuestionnaireChoice value="diff">
              Review the final diff
            </QuestionnaireChoice>
            <QuestionnaireChoice value="both">
              Tests and diff review
            </QuestionnaireChoice>
          </QuestionnaireChoices>
          <QuestionnaireError />
        </QuestionnaireItem>
        <QuestionnaireActions>
          <QuestionnairePrevious />
          <QuestionnaireSkip />
          <QuestionnaireNext>Next</QuestionnaireNext>
          <QuestionnaireSubmit>Submit brief</QuestionnaireSubmit>
        </QuestionnaireActions>
      </Questionnaire>
    </div>
  );
}
