import Image from 'next/image';

import { ScrollArea, ScrollBar } from '@/components/ui';
import { works } from '@/bd';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <ScrollArea className="h-[200px] w-[350px] rounded-md border p-4">
        Your scrollable content here.
      </ScrollArea>

      <ScrollArea className="w-96 rounded-md border whitespace-nowrap">
        <div className="flex w-max space-x-4 p-4">
          {works.map(({ artist, art }) => (
            <figure key={artist} className="shrink-0">
              <div className="overflow-hidden rounded-md">
                <Image
                  src={art}
                  alt={`Photo by ${artist}`}
                  className="aspect-[3/4] h-fit w-fit object-cover"
                  width={300}
                  height={400}
                  loading="eager"
                />
              </div>
              <figcaption className="pt-2 text-xs text-muted-foreground">
                Photo by{' '}
                <span className="font-semibold text-foreground">{artist}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
