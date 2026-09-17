import { SaveIcon } from 'lucide-react';

import {
  Button,
  Kbd,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>Add to library</p>
        </TooltipContent>
      </Tooltip>

      <div className="flex flex-wrap gap-2">
        {(['left', 'top', 'bottom', 'right'] as const).map((side) => (
          <Tooltip key={side}>
            <TooltipTrigger
              render={
                <Button variant="outline" className="w-fit capitalize">
                  {side}
                </Button>
              }
            />
            <TooltipContent side={side}>
              <p>Add to library</p>
            </TooltipContent>
          </Tooltip>
        ))}
      </div>

      <Tooltip>
        <TooltipTrigger
          render={
            <Button variant="outline" size="icon-sm">
              <SaveIcon />
            </Button>
          }
        />
        <TooltipContent>
          Save Changes <Kbd>S</Kbd>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger
          render={
            <span className="inline-block w-fit">
              <Button variant="outline" disabled>
                Disabled
              </Button>
            </span>
          }
        />
        <TooltipContent>
          <p>This feature is currently unavailable</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
