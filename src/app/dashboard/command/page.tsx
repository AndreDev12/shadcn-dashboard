'use client';

import { useState } from 'react';
import {
  CalculatorIcon,
  CalendarIcon,
  CreditCardIcon,
  SettingsIcon,
  SmileIcon,
  UserIcon,
} from 'lucide-react';

import {
  Button,
  CommandDialog,
  Command,
  CommandInput,
  CommandList,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandSeparator,
  CommandShortcut,
} from '@/components/ui';

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Command className="max-w-sm rounded-lg border">
        <CommandInput placeholder="Type a command or search..." />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Suggestions">
            <CommandItem>Calendar</CommandItem>
            <CommandItem>Search Emoji</CommandItem>
            <CommandItem>Calculator</CommandItem>
          </CommandGroup>
          <CommandSeparator />
          <CommandGroup heading="Settings">
            <CommandItem>Profile</CommandItem>
            <CommandItem>Billing</CommandItem>
            <CommandItem>Settings</CommandItem>
          </CommandGroup>
        </CommandList>
      </Command>

      <div className="flex flex-col gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-fit"
        >
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>Calendar</CommandItem>
                <CommandItem>Search Emoji</CommandItem>
                <CommandItem>Calculator</CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>

      <div className="flex flex-col gap-4">
        <Button
          onClick={() => setOpen(true)}
          variant="outline"
          className="w-fit"
        >
          Open Menu
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <Command>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup heading="Suggestions">
                <CommandItem>
                  <CalendarIcon />
                  <span>Calendar</span>
                </CommandItem>
                <CommandItem>
                  <SmileIcon />
                  <span>Search Emoji</span>
                </CommandItem>
                <CommandItem>
                  <CalculatorIcon />
                  <span>Calculator</span>
                </CommandItem>
              </CommandGroup>
              <CommandSeparator />
              <CommandGroup heading="Settings">
                <CommandItem>
                  <UserIcon />
                  <span>Profile</span>
                  <CommandShortcut>⌘P</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <CreditCardIcon />
                  <span>Billing</span>
                  <CommandShortcut>⌘B</CommandShortcut>
                </CommandItem>
                <CommandItem>
                  <SettingsIcon />
                  <span>Settings</span>
                  <CommandShortcut>⌘S</CommandShortcut>
                </CommandItem>
              </CommandGroup>
            </CommandList>
          </Command>
        </CommandDialog>
      </div>
    </div>
  );
}
