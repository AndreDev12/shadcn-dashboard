import { Progress, ProgressLabel, ProgressValue } from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Progress value={33} />

      <Progress value={56} className="w-full max-w-sm">
        <ProgressLabel>Upload progress</ProgressLabel>
        <ProgressValue />
      </Progress>
    </div>
  );
}
