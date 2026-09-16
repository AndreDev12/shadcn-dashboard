import { Field, FieldLabel, FieldDescription, Textarea } from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Field>
        <FieldLabel htmlFor="textarea-message">Message</FieldLabel>
        <FieldDescription>Enter your message below.</FieldDescription>
        <Textarea id="textarea-message" placeholder="Type your message here." />
      </Field>

      <Field data-disabled>
        <FieldLabel htmlFor="textarea-disabled">Message</FieldLabel>
        <Textarea
          id="textarea-disabled"
          placeholder="Type your message here."
          disabled
        />
      </Field>
    </div>
  );
}
