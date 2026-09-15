// import { Loader2Icon } from 'lucide-react';
import { LoaderIcon } from 'lucide-react';

import { cn } from '@/lib';

function Spinner({ className, ...props }: React.ComponentProps<'svg'>) {
  return (
    <LoaderIcon
      data-slot="spinner"
      role="status"
      aria-label="Loading"
      className={cn('size-4 animate-spin', className)}
      {...props}
    />
    // <Loader2Icon
    //   data-slot="spinner"
    //   role="status"
    //   aria-label="Loading"
    //   className={cn('size-4 animate-spin', className)}
    //   {...props}
    // />
  );
}

export { Spinner };
