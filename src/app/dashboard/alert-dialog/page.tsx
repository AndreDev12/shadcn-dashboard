'use client';

import { useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from '@/components/ui';

export default function Page() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 gap-4">
      <AlertDialog
        // onOpenChange={(open) => console.log(open)}
        onOpenChange={setDialogOpen}
        open={dialogOpen}
      >
        <AlertDialogTrigger asChild>
          <Button variant="outline">Show Dialog</Button>
        </AlertDialogTrigger>
        <AlertDialogContent size="sm">
          <AlertDialogHeader>
            <AlertDialogTitle>Allow accessory to connect?</AlertDialogTitle>
            <AlertDialogDescription>
              Do you want to allow the USB accessory to connect to this device?
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel onClick={() => console.log("Don't allow")}>
              Don&apos;t allow
            </AlertDialogCancel>
            <AlertDialogAction onClick={() => console.log('Allow')}>
              Allow
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>

      <Button onClick={() => setDialogOpen(true)}>Open dialog manually</Button>
    </div>
  );
}
