'use client';

import { toast } from 'sonner';

import {
  Bubble,
  BubbleContent,
  BubbleGroup,
  BubbleReactions,
  Button,
} from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-12">
      <Bubble className="h-fit">
        <BubbleContent>
          I checked the registry output and removed the stale route.
        </BubbleContent>
        <BubbleReactions>
          <span>👍</span>
        </BubbleReactions>
      </Bubble>

      <div className="flex w-full max-w-sm flex-col gap-12 py-12">
        <Bubble>
          <BubbleContent>This is the default primary bubble.</BubbleContent>
        </Bubble>
        <Bubble variant="secondary" align="end">
          <BubbleContent>This is the secondary variant.</BubbleContent>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            This one is muted. It uses a lower emphasis color for the chat
            bubble.
          </BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: thumbs up">
            <span>👍</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="tinted" align="end">
          <BubbleContent>
            This one is tinted. The tint is a softer color derived from the
            primary color.
          </BubbleContent>
        </Bubble>
        <Bubble variant="outline">
          <BubbleContent>We can also use an outlined variant.</BubbleContent>
        </Bubble>
        <Bubble variant="destructive" align="end">
          <BubbleContent>
            Or a destructive variant with a reaction.
          </BubbleContent>
          <BubbleReactions role="img" aria-label="Reaction: fire">
            <span>🔥</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="ghost">
          <BubbleContent>
            {`Ghost bubbles work for assistant text, **markdown**, and other content that should not be framed.
This is perfect for assistant messages that should not have a frame and can take the full width of the container. You can also render \`code\` in it.
Ghost bubbles are full width and can take the full width of the container.
`}
          </BubbleContent>
        </Bubble>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Bubble variant="muted">
          <BubbleContent>
            This bubble is aligned to the start. This is the default alignment.
          </BubbleContent>
        </Bubble>
        <Bubble align="end">
          <BubbleContent>
            This bubble is aligned to the end. Use this for user messages.
          </BubbleContent>
        </Bubble>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Bubble variant="muted">
          <BubbleContent>Can you tell me what&apos;s the issue?</BubbleContent>
        </Bubble>
        <BubbleGroup>
          <Bubble align="end">
            <BubbleContent>You tell me!</BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>It worked yesterday. You broke it!</BubbleContent>
          </Bubble>
          <Bubble align="end">
            <BubbleContent>Find the bug and fix it.</BubbleContent>
            <BubbleReactions aria-label="Reactions: eyes" align="start">
              <span>👀</span>
            </BubbleReactions>
          </Bubble>
        </BubbleGroup>
        <Bubble variant="muted">
          <BubbleContent>
            Want me to diff yesterday&apos;s you against today&apos;s you?
            It&apos;s a bit embarrassing.
          </BubbleContent>
        </Bubble>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-12 py-12">
        <Bubble variant="muted" align="end">
          <BubbleContent>
            I don&apos;t need tests, I know my code works.
          </BubbleContent>
          <BubbleReactions
            align="start"
            role="img"
            aria-label="Reactions: thumbs up, surprised"
          >
            <span>👍</span>
            <span>😮</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="muted">
          <BubbleContent>
            Bold. Fine I&apos;ll add some tests. I&apos;ll let you know when
            they&apos;re done.
          </BubbleContent>
          <BubbleReactions
            role="img"
            aria-label="Reactions: eyes, rocket, and 2 more"
          >
            <span>👀</span>
            <span>🚀</span>
            <span>+2</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="default" align="end">
          <BubbleContent>
            Tests passed on the first try. All 142 of them. Looking good!
          </BubbleContent>
          <BubbleReactions
            side="top"
            align="start"
            role="img"
            aria-label="Reactions: party popper, clapping hands"
          >
            <span>🎉</span>
            <span>👏</span>
          </BubbleReactions>
        </Bubble>
        <Bubble variant="destructive">
          <BubbleContent>Are you sure I can run this command?</BubbleContent>
          <BubbleReactions>
            <Button
              variant="ghost"
              size="xs"
              onClick={() =>
                toast.success('You clicked yes, running command...')
              }
            >
              Yes, run it
            </Button>
          </BubbleReactions>
        </Bubble>
      </div>
    </div>
  );
}
