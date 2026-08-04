import {
  CheckIcon,
  CopyIcon,
  CreditCardIcon,
  EyeOffIcon,
  FileCodeIcon,
  InfoIcon,
  MailIcon,
  SearchIcon,
  StarIcon,
} from 'lucide-react';

import {
  InputGroup,
  InputGroupInput,
  InputGroupAddon,
  Field,
  FieldLabel,
  FieldDescription,
  FieldGroup,
  InputGroupButton,
  InputGroupText,
  InputGroupTextarea,
} from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Field className="max-w-sm">
        <FieldLabel htmlFor="inline-start-input">Input</FieldLabel>
        <InputGroup>
          <InputGroupInput id="inline-start-input" placeholder="Search..." />
          <InputGroupAddon align="inline-start">
            <SearchIcon className="text-muted-foreground" />
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Icon positioned at the start.</FieldDescription>
      </Field>

      <Field className="max-w-sm">
        <FieldLabel htmlFor="inline-end-input">Input</FieldLabel>
        <InputGroup>
          <InputGroupInput
            id="inline-end-input"
            type="password"
            placeholder="Enter password"
          />
          <InputGroupAddon align="inline-end">
            <EyeOffIcon />
          </InputGroupAddon>
        </InputGroup>
        <FieldDescription>Icon positioned at the end.</FieldDescription>
      </Field>

      <FieldGroup className="max-w-sm">
        <Field>
          <FieldLabel htmlFor="block-start-input">Input</FieldLabel>
          <InputGroup className="h-auto">
            <InputGroupInput
              id="block-start-input"
              placeholder="Enter your name"
            />
            <InputGroupAddon align="block-start">
              <InputGroupText>Full Name</InputGroupText>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Header positioned above the input.
          </FieldDescription>
        </Field>
        <Field>
          <FieldLabel htmlFor="block-start-textarea">Textarea</FieldLabel>
          <InputGroup>
            <InputGroupTextarea
              id="block-start-textarea"
              placeholder="console.log('Hello, world!');"
              className="font-mono text-sm"
            />
            <InputGroupAddon align="block-start">
              <FileCodeIcon className="text-muted-foreground" />
              <InputGroupText className="font-mono">script.js</InputGroupText>
              <InputGroupButton size="icon-xs" className="ml-auto">
                <CopyIcon />
                <span className="sr-only">Copy</span>
              </InputGroupButton>
            </InputGroupAddon>
          </InputGroup>
          <FieldDescription>
            Header positioned above the textarea.
          </FieldDescription>
        </Field>
      </FieldGroup>

      <div className="grid w-full max-w-sm gap-6">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput type="email" placeholder="Enter your email" />
          <InputGroupAddon>
            <MailIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon>
            <CreditCardIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <CheckIcon />
          </InputGroupAddon>
        </InputGroup>
        <InputGroup>
          <InputGroupInput placeholder="Card number" />
          <InputGroupAddon align="inline-end">
            <StarIcon />
            <InfoIcon />
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
