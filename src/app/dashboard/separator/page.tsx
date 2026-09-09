import { Separator } from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex max-w-sm flex-col gap-4 text-sm">
        <div className="flex flex-col gap-1.5">
          <div className="leading-none font-medium">shadcn/ui</div>
          <div className="text-muted-foreground">
            The Foundation for your Design System
          </div>
        </div>
        <Separator />
        <div>
          A set of beautifully designed components that you can customize,
          extend, and build on.
        </div>
      </div>

      <div className="flex h-5 items-center gap-4 text-sm">
        <div>Blog</div>
        <Separator orientation="vertical" />
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
      </div>

      <div className="flex items-center gap-2 text-sm md:gap-4">
        <div className="flex flex-col gap-1">
          <span className="font-medium">Settings</span>
          <span className="text-xs text-muted-foreground">
            Manage preferences
          </span>
        </div>
        <Separator orientation="vertical" />
        <div className="flex flex-col gap-1">
          <span className="font-medium">Account</span>
          <span className="text-xs text-muted-foreground">
            Profile & security
          </span>
        </div>
        <Separator orientation="vertical" className="hidden md:block" />
        <div className="hidden flex-col gap-1 md:flex">
          <span className="font-medium">Help</span>
          <span className="text-xs text-muted-foreground">Support & docs</span>
        </div>
      </div>
    </div>
  );
}
