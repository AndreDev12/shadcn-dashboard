import { Slider } from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Slider defaultValue={[33]} max={100} step={1} />

      <Slider
        defaultValue={[25, 50]}
        max={100}
        step={5}
        className="mx-auto w-full max-w-xs"
      />
    </div>
  );
}
