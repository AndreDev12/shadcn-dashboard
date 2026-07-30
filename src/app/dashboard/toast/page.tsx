'use client';

import { Button, toast } from '@/components/ui';

export default function Page() {
  function showToast() {
    const id = toast.add({
      title: 'Event created',
      description: 'Sunday, December 3 at 9:00 AM',
      actionProps: {
        children: 'Undo',
        onClick() {
          toast.close(id);
        },
      },
    });
  }
  return (
    <Button variant="outline" onClick={showToast}>
      Show Toast
    </Button>
  );
}
