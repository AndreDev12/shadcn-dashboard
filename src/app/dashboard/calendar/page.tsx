'use client';

import * as React from 'react';

import { Calendar } from '@/components/ui';

export default function Page() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [multipleDates, setMultipleDates] = React.useState<Date[] | undefined>(
    [],
  );

  const smallDate = date?.toLocaleDateString('es-ES', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
  });

  return (
    <div className="flex-col sm:flex-wrap sm:flex sm:flex-row gap-4">
      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
        disabled={(date) => date.getDay() === 0 || date.getDay() === 6}
      />

      <Calendar
        mode="single"
        selected={date}
        onSelect={setDate}
        className="rounded-lg border"
        disabled={(date) => date > new Date()}
      />

      <Calendar
        mode="multiple"
        selected={multipleDates}
        onSelect={setMultipleDates}
        className="rounded-lg border"
      />

      <div>
        <h1 className="text-3xl">Info</h1>
        <div className="border-b"></div>
        <p>{smallDate}</p>
        <p>
          {multipleDates?.map((date) => date.toLocaleDateString()).join(', ')}
        </p>
      </div>
    </div>
  );
}
