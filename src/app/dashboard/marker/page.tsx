'use client';

import { CheckIcon, GitBranchIcon, RotateCcwIcon } from 'lucide-react';

import {
  Marker,
  MarkerIcon,
  MarkerContent,
  Spinner,
  toast,
} from '@/components/ui';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <Marker>
        <MarkerIcon>
          <CheckIcon />
        </MarkerIcon>
        <MarkerContent>Explored 4 files</MarkerContent>
      </Marker>

      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Marker role="status">
          <MarkerIcon>
            <Spinner />
          </MarkerIcon>
          <MarkerContent>Compacting conversation</MarkerContent>
        </Marker>
        <Marker variant="separator" role="status">
          <MarkerIcon>
            <Spinner />
          </MarkerIcon>
          <MarkerContent>Running tests</MarkerContent>
        </Marker>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Marker role="status">
          <MarkerContent className="shimmer">Thinking...</MarkerContent>
        </Marker>
        <Marker variant="separator" role="status">
          <MarkerContent className="shimmer">Reading 4 files</MarkerContent>
        </Marker>
      </div>

      <div className="flex w-full max-w-sm flex-col gap-8 py-12">
        <Marker
          render={
            <a href="#links-and-buttons">
              <MarkerIcon>
                <GitBranchIcon />
              </MarkerIcon>
              <MarkerContent>View the pull request</MarkerContent>
            </a>
          }
        />
        <Marker
          render={
            <button
              type="button"
              className="transition-colors hover:text-foreground"
              onClick={() =>
                toast.add({ description: 'You clicked the revert button' })
              }
            >
              <MarkerIcon>
                <RotateCcwIcon />
              </MarkerIcon>
              <MarkerContent>Revert this change</MarkerContent>
            </button>
          }
        />
      </div>
    </div>
  );
}
