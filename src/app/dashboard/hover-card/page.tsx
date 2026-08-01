import {
  HoverCard,
  HoverCardTrigger,
  HoverCardContent,
  Button,
} from '@/components/ui';

const HOVER_CARD_SIDES = ['left', 'top', 'bottom', 'right'] as const;

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <HoverCard>
        <HoverCardTrigger
          delay={10}
          closeDelay={100}
          render={<Button variant="link">Hover Here</Button>}
        />
        <HoverCardContent className="flex w-64 flex-col gap-0.5">
          <div className="font-semibold">@nextjs</div>
          <div>The React Framework – created and maintained by @vercel.</div>
          <div className="mt-1 text-xs text-muted-foreground">
            Joined December 2021
          </div>
        </HoverCardContent>
      </HoverCard>

      <div className="flex flex-wrap justify-center gap-2">
        {HOVER_CARD_SIDES.map((side) => (
          <HoverCard key={side}>
            <HoverCardTrigger
              delay={100}
              closeDelay={100}
              render={
                <Button variant="outline" className="capitalize">
                  {side}
                </Button>
              }
            />
            <HoverCardContent side={side}>
              <div className="flex flex-col gap-1">
                <h4 className="font-medium">Hover Card</h4>
                <p>
                  This hover card appears on the {side} side of the trigger.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        ))}
      </div>
    </div>
  );
}
