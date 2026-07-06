'use client';

import { useDirection } from '@/components/ui';

export default function Page() {
  const direction = useDirection();
  return <div>Current direction: {direction}</div>;
}
