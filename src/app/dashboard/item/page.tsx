import Image from 'next/image';
import Link from 'next/link';
import {
  ChevronRightIcon,
  ExternalLinkIcon,
  HomeIcon,
  InboxIcon,
  Plus,
  PlusIcon,
  ShieldAlertIcon,
} from 'lucide-react';

import {
  Item,
  ItemMedia,
  ItemContent,
  ItemTitle,
  ItemDescription,
  Button,
  ItemActions,
  Avatar,
  AvatarFallback,
  AvatarImage,
  ItemGroup,
  ItemHeader,
} from '@/components/ui';
import { people, models } from '@/bd';

export default function Page() {
  return (
    <div className="grid grid-cols-2 gap-4">
      <div className="flex w-full max-w-md flex-col gap-6">
        <Item>
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Default Variant</ItemTitle>
            <ItemDescription>
              Transparent background with no border.
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Outline Variant</ItemTitle>
            <ItemDescription>
              Outlined style with a visible border.
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="muted">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Muted Variant</ItemTitle>
            <ItemDescription>
              Muted background for secondary content.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>

      <div className="flex w-full max-w-md flex-col gap-6">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Default Size</ItemTitle>
            <ItemDescription>
              The standard size for most use cases.
            </ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" size="sm">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Small Size</ItemTitle>
            <ItemDescription>A compact size for dense layouts.</ItemDescription>
          </ItemContent>
        </Item>
        <Item variant="outline" size="xs">
          <ItemMedia variant="icon">
            <InboxIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Extra Small Size</ItemTitle>
            <ItemDescription>The most compact size available.</ItemDescription>
          </ItemContent>
        </Item>
      </div>

      <div className="flex w-full max-w-lg flex-col gap-6">
        <Item variant="outline">
          <ItemMedia variant="icon">
            <ShieldAlertIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Security Alert</ItemTitle>
            <ItemDescription>
              New login detected from unknown device.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              Review
            </Button>
          </ItemActions>
        </Item>
      </div>

      <div className="flex w-full max-w-lg flex-col gap-6">
        <Item variant="outline">
          <ItemMedia>
            <Avatar className="size-10">
              <AvatarImage src="https://github.com/evilrabbit.png" />
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Evil Rabbit</ItemTitle>
            <ItemDescription>Last seen 5 months ago</ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button
              size="icon-sm"
              variant="outline"
              className="rounded-full"
              aria-label="Invite"
            >
              <Plus />
            </Button>
          </ItemActions>
        </Item>
        <Item variant="outline">
          <ItemMedia>
            <div className="flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:ring-background *:data-[slot=avatar]:grayscale">
              {people.map(({ email, avatar, username, avatarFallback }) => (
                <Avatar key={email} className="hidden sm:flex">
                  <AvatarImage src={avatar} alt={`@${username}`} />
                  <AvatarFallback>{avatarFallback}</AvatarFallback>
                </Avatar>
              ))}
            </div>
          </ItemMedia>
          <ItemContent>
            <ItemTitle>No Team Members</ItemTitle>
            <ItemDescription>
              Invite your team to collaborate on this project.
            </ItemDescription>
          </ItemContent>
          <ItemActions>
            <Button size="sm" variant="outline">
              Invite
            </Button>
          </ItemActions>
        </Item>
      </div>

      <ItemGroup className="max-w-sm">
        {people.map(({ username, avatar, email }) => (
          <Item key={username} variant="outline">
            <ItemMedia>
              <Avatar>
                <AvatarImage src={avatar} className="grayscale" />
                <AvatarFallback>{username.charAt(0)}</AvatarFallback>
              </Avatar>
            </ItemMedia>
            <ItemContent className="gap-1">
              <ItemTitle>{username}</ItemTitle>
              <ItemDescription>{email}</ItemDescription>
            </ItemContent>
            <ItemActions>
              <Button variant="ghost" size="icon" className="rounded-full">
                <PlusIcon />
              </Button>
            </ItemActions>
          </Item>
        ))}
      </ItemGroup>

      <div className="flex w-full max-w-xl flex-col gap-6">
        <ItemGroup className="grid grid-cols-3 gap-4">
          {models.map(({ name, image, description }) => (
            <Item key={name} variant="outline">
              <ItemHeader>
                <Image
                  src={image}
                  alt={name}
                  width={128}
                  height={128}
                  className="aspect-square w-full rounded-sm object-cover"
                  loading="eager"
                />
              </ItemHeader>
              <ItemContent>
                <ItemTitle>{name}</ItemTitle>
                <ItemDescription>{description}</ItemDescription>
              </ItemContent>
            </Item>
          ))}
        </ItemGroup>
      </div>

      <div className="flex w-full max-w-md flex-col gap-4">
        <Item
          render={
            <a href="#">
              <ItemContent>
                <ItemTitle>Visit our documentation</ItemTitle>
                <ItemDescription>
                  Learn how to get started with our components.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ChevronRightIcon className="size-4" />
              </ItemActions>
            </a>
          }
        />
        <Item
          variant="outline"
          render={
            <a href="#" target="_blank" rel="noopener noreferrer">
              <ItemContent>
                <ItemTitle>External resource</ItemTitle>
                <ItemDescription>
                  Opens in a new tab with security attributes.
                </ItemDescription>
              </ItemContent>
              <ItemActions>
                <ExternalLinkIcon className="size-4" />
              </ItemActions>
            </a>
          }
        />
        <Item render={<Link href="/" />}>
          <ItemMedia variant="icon">
            <HomeIcon />
          </ItemMedia>
          <ItemContent>
            <ItemTitle>Dashboard</ItemTitle>
            <ItemDescription>
              Overview of your account and activity.
            </ItemDescription>
          </ItemContent>
        </Item>
      </div>
    </div>
  );
}
