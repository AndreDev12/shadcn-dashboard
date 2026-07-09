import {
  DrawerBase,
  DrawerBaseHeader,
  DrawerBaseFooter,
  DrawerBaseTrigger,
  Button,
  DrawerBaseContent,
  DrawerBaseTitle,
  DrawerBaseDescription,
  DrawerBaseClose,
} from '@/components/ui';

export default function Page() {
  return (
    <div>
      <DrawerBase>
        <DrawerBaseTrigger render={<Button variant="outline" />}>
          Open
        </DrawerBaseTrigger>
        <DrawerBaseContent>
          <DrawerBaseHeader>
            <DrawerBaseTitle>Are you absolutely sure?</DrawerBaseTitle>
            <DrawerBaseDescription>
              This action cannot be undone.
            </DrawerBaseDescription>
          </DrawerBaseHeader>
          <div className="p-4">{/* Content here */}</div>
          <DrawerBaseFooter>
            <Button>Submit</Button>
            <DrawerBaseClose render={<Button variant="outline" />}>
              Cancel
            </DrawerBaseClose>
          </DrawerBaseFooter>
        </DrawerBaseContent>
      </DrawerBase>

      <DrawerBase swipeDirection="left">
        <DrawerBaseTrigger
          render={<Button variant="secondary">Open Left Drawer</Button>}
        />
        <DrawerBaseContent>
          <DrawerBaseHeader>
            <DrawerBaseTitle>Move Goal</DrawerBaseTitle>
            <DrawerBaseDescription>
              Set your daily activity goal.
            </DrawerBaseDescription>
          </DrawerBaseHeader>
          <div className="flex-1 p-4">
            <div className="size-full rounded-2xl bg-muted" />
          </div>
          <DrawerBaseFooter>
            <DrawerBaseClose render={<Button>Close</Button>} />
          </DrawerBaseFooter>
        </DrawerBaseContent>
      </DrawerBase>
    </div>
  );
}
