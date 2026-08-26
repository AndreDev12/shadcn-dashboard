'use client';

import { useState } from 'react';
import { RotateCwIcon } from 'lucide-react';

import {
  Bubble,
  BubbleContent,
  Button,
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Marker,
  MarkerContent,
  Message,
  MessageContent,
  MessageHeader,
  MessageScroller,
  MessageScrollerButton,
  MessageScrollerContent,
  MessageScrollerItem,
  MessageScrollerProvider,
  MessageScrollerViewport,
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui';
import {
  type GroupChatMarkerProps,
  type GroupChatMessageProps,
  type RockyTurn,
  currentUser,
  initialItems,
  rockyMarker,
  rockyMessage,
} from '@/bd';

export default function Page() {
  const [demoKey, setDemoKey] = useState(0);
  const [rockyTurn, setRockyTurn] = useState<RockyTurn>('idle');

  const items =
    rockyTurn === 'message'
      ? [...initialItems, rockyMarker, rockyMessage]
      : rockyTurn === 'marker'
        ? [...initialItems, rockyMarker]
        : initialItems;
  const buttonLabel =
    rockyTurn === 'idle' ? 'Add Rocky' : 'Send Message as Rocky';
  const isComplete = rockyTurn === 'message';

  return (
    <div className="grid grid-cols-2 gap-4">
      {/* <MessageScrollerProvider> */}
      <div className="relative flex flex-col gap-4">
        <Card className="mx-auto h-140 w-full max-w-sm gap-0">
          <CardHeader className="gap-1 border-b">
            <CardTitle>Group Chat</CardTitle>
            <CardDescription>
              A group chat with several participants and an assistant. The
              Marker is marked as a turn.
            </CardDescription>
            <CardAction>
              <Tooltip>
                <TooltipTrigger
                  render={
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      aria-label="Reset conversation"
                      disabled={rockyTurn === 'idle'}
                      onClick={() => {
                        setRockyTurn('idle');
                        setDemoKey((key) => key + 1);
                      }}
                    >
                      <RotateCwIcon />
                    </Button>
                  }
                />
                <TooltipContent>
                  <p>Reset</p>
                </TooltipContent>
              </Tooltip>
            </CardAction>
          </CardHeader>
          <CardContent className="min-h-0 flex-1 p-0">
            <MessageScrollerProvider>
              <MessageScroller key={demoKey}>
                <MessageScrollerViewport>
                  <MessageScrollerContent className="p-(--card-spacing)">
                    {items.map((item) =>
                      item.type === 'message' ? (
                        <GroupChatMessage key={item.id} item={item} />
                      ) : (
                        <GroupChatMarker
                          key={item.id}
                          item={item}
                          scrollAnchor={item.scrollAnchor}
                        />
                      ),
                    )}
                  </MessageScrollerContent>
                </MessageScrollerViewport>
                <MessageScrollerButton />
              </MessageScroller>
            </MessageScrollerProvider>
          </CardContent>
          <CardFooter className="flex flex-col items-center gap-2 border-t">
            <Button
              type="button"
              disabled={isComplete}
              onClick={() =>
                setRockyTurn((turn) => (turn === 'idle' ? 'marker' : 'message'))
              }
              className="w-full"
              variant="secondary"
            >
              {buttonLabel}
            </Button>
            <p className="text-xs text-muted-foreground">
              {rockyTurn === 'idle'
                ? 'This will create a marker and make it the anchor'
                : "Now send Rocky's reply into the conversation"}
            </p>
          </CardFooter>
        </Card>
        <div className="mx-auto max-w-sm px-0.5 text-center text-xs text-balance text-muted-foreground">
          When a user joins, a marker is created. scrollAnchor on the marker
          marks it as the next turn
        </div>
      </div>
      {/* </MessageScrollerProvider> */}
    </div>
  );
}

function GroupChatMessage({ item }: GroupChatMessageProps) {
  const isCurrentUser = item.sender === currentUser;
  const variant = isCurrentUser
    ? 'muted'
    : item.role === 'assistant'
      ? 'ghost'
      : 'tinted';

  return (
    <MessageScrollerItem messageId={item.id} scrollAnchor={item.scrollAnchor}>
      <Message align={isCurrentUser ? 'end' : 'start'}>
        <MessageContent>
          {!isCurrentUser && <MessageHeader>{item.sender}</MessageHeader>}
          <Bubble variant={variant}>
            <BubbleContent>{item.text}</BubbleContent>
          </Bubble>
        </MessageContent>
      </Message>
    </MessageScrollerItem>
  );
}

function GroupChatMarker({ item, scrollAnchor = false }: GroupChatMarkerProps) {
  return (
    <MessageScrollerItem scrollAnchor={scrollAnchor}>
      <Marker variant="separator">
        <MarkerContent>{item.text}</MarkerContent>
      </Marker>
    </MessageScrollerItem>
  );
}
