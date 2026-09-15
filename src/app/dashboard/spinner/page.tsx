import { Button, Spinner } from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Spinner />

      <div className="flex items-center gap-6">
        <Spinner className="size-3" />
        <Spinner className="size-4" />
        <Spinner className="size-6" />
        <Spinner className="size-8" />
      </div>

      <div className="flex flex-col items-center gap-4">
        <Button disabled size="sm">
          <Spinner data-icon="inline-start" />
          Loading...
        </Button>
        <Button variant="outline" disabled size="sm">
          <Spinner data-icon="inline-start" />
          Please wait
        </Button>
        <Button variant="secondary" disabled size="sm">
          <Spinner data-icon="inline-start" />
          Processing
        </Button>
      </div>
    </div>
  );
}
