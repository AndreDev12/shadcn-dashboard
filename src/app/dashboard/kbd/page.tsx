import { SearchIcon } from 'lucide-react';

import {
  KbdGroup,
  Kbd,
  Button,
  ButtonGroup,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-col items-center gap-4">
        <KbdGroup>
          <Kbd>⌘</Kbd>
          <Kbd>⇧</Kbd>
          <Kbd>⌥</Kbd>
          <Kbd>⌃</Kbd>
        </KbdGroup>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span>+</span>
          <Kbd>B</Kbd>
        </KbdGroup>
      </div>

      <div className="flex flex-col items-center gap-4">
        <p className="text-sm text-muted-foreground">
          Use{' '}
          <KbdGroup>
            <Kbd>Ctrl + B</Kbd>
            <Kbd>Ctrl + K</Kbd>
          </KbdGroup>{' '}
          to open the command palette
        </p>
      </div>

      <Button variant="outline">
        Accept{' '}
        <Kbd data-icon="inline-end" className="translate-x-0.5">
          ⏎
        </Kbd>
      </Button>

      <div className="flex flex-wrap gap-4 justify-center">
        <ButtonGroup>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Save</Button>} />
            <TooltipContent>
              Save Changes <Kbd>S</Kbd>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger render={<Button variant="outline">Print</Button>} />
            <TooltipContent>
              Print Document{' '}
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <Kbd>P</Kbd>
              </KbdGroup>
            </TooltipContent>
          </Tooltip>
        </ButtonGroup>
      </div>

      <div className="flex w-full max-w-xs flex-col gap-6">
        <InputGroup>
          <InputGroupInput placeholder="Search..." />
          <InputGroupAddon>
            <SearchIcon />
          </InputGroupAddon>
          <InputGroupAddon align="inline-end">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
          </InputGroupAddon>
        </InputGroup>
      </div>
    </div>
  );
}
