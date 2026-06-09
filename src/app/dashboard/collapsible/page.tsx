'use client';

import { useState } from 'react';
import { ChevronDownIcon } from 'lucide-react';

import {
  Button,
  Card,
  CardContent,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui';

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4 justify-items-center">
      <Collapsible>
        <CollapsibleTrigger>Can I use this in my project?</CollapsibleTrigger>
        <CollapsibleContent>
          Yes. Free to use for personal and commercial projects. No attribution
          required.
        </CollapsibleContent>
      </Collapsible>

      <Collapsible open={open} onOpenChange={setOpen}>
        <CollapsibleTrigger>Toggle</CollapsibleTrigger>
        <CollapsibleContent>Content</CollapsibleContent>
      </Collapsible>

      <Card className="mx-auto w-full max-w-sm">
        <CardContent>
          <Collapsible className="rounded-md data-[state=open]:bg-muted">
            <CollapsibleTrigger asChild>
              <Button variant="ghost" className="group w-full">
                Product details
                <ChevronDownIcon className="ml-auto group-data-[state=open]:rotate-180" />
              </Button>
            </CollapsibleTrigger>
            <CollapsibleContent className="flex flex-col items-start gap-2 p-2.5 pt-0 text-sm">
              <div>
                This panel can be expanded or collapsed to reveal additional
                content.
              </div>
              <Button size="xs">Learn More</Button>
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
}
