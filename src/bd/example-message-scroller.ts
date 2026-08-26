export const currentUser = 'Grace';

export const initialItems = [
  {
    id: 'group-1',
    type: 'message',
    sender: 'Grace',
    role: 'participant',
    text: '@mary, the astrophage line keeps matching Venus energy output. Can you check my math?',
  },
  {
    id: 'group-2',
    type: 'message',
    sender: 'Mary (Agent)',
    role: 'assistant',
    text: 'Yes. Confirmed. The curve points to a microorganism harvesting stellar energy and breeding near carbon dioxide. If @rocky agrees, this is the clue we need.',
  },
  {
    id: 'group-3',
    type: 'message',
    sender: 'Grace',
    role: 'participant',
    text: 'ping @rocky',
    scrollAnchor: true,
  },
] satisfies GroupChatItem[];

export const rockyMarker = {
  id: 'group-4',
  type: 'event',
  text: 'Rocky has joined the chat',
  scrollAnchor: true,
} satisfies GroupChatItem;

export const rockyMessage = {
  id: 'group-5',
  type: 'message',
  sender: 'Rocky',
  role: 'participant',
  text: 'Amaze. Astrophage eats light, makes heat, goes to carbon dioxide. Rocky has fuel model. Grace is smart.',
} satisfies GroupChatItem;

export type RockyTurn = 'idle' | 'marker' | 'message';

export type GroupChatItem =
  | {
      id: string;
      type: 'event';
      text: string;
      scrollAnchor?: boolean;
    }
  | {
      id: string;
      type: 'message';
      sender: string;
      role: 'assistant' | 'participant';
      text: string;
      scrollAnchor?: boolean;
    };

export interface GroupChatMessageProps {
  item: Extract<GroupChatItem, { type: 'message' }>;
}

export interface GroupChatMarkerProps {
  item: Extract<GroupChatItem, { type: 'event' }>;
  scrollAnchor?: boolean;
}
