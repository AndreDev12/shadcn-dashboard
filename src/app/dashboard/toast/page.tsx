'use client';

import { Button, toast } from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast.add({ description: 'Event has been created.' })}
        >
          Default
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: 'success',
              description: 'Event has been created.',
            })
          }
        >
          Success
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: 'info',
              description: 'Arrive 10 minutes before the event.',
            })
          }
        >
          Info
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: 'warning',
              description: 'The event cannot start before 8:00 AM.',
            })
          }
        >
          Warning
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.add({
              type: 'error',
              description: 'The event could not be created.',
              priority: 'high',
            })
          }
        >
          Error
        </Button>
      </div>

      <Button
        size="sm"
        className="w-fit"
        variant="outline"
        onClick={() => {
          const id = toast.add({
            title: 'Event created',
            actionProps: {
              children: 'Undo',
              onClick() {
                toast.close(id);
              },
            },
          });
        }}
      >
        Example
      </Button>
    </div>
  );
}
