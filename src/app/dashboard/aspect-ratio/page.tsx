import Image from 'next/image';

import { AspectRatio } from '@/components/ui';

export default function Page() {
  return (
    <div>
      <AspectRatio ratio={1 / 1}>
        <Image
          src="https://avatar.vercel.sh/shadcn1"
          alt="Image"
          className="rounded-md object-cover"
          width={200}
          height={200}
        />
      </AspectRatio>
    </div>
  );
}
