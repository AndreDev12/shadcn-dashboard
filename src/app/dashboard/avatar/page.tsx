import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarGroupCount,
  AvatarImage,
} from '@/components/ui';

const avatarData = [
  {
    id: 0,
    src: 'https://github.com/shadcn.png',
    alt: '@shadcn',
    fallback: 'CN',
  },
  {
    id: 1,
    src: 'https://github.com/maxleiter.png',
    alt: '@maxleiter',
    fallback: 'LR',
  },
  {
    id: 2,
    src: 'https://github.com/evilrabbit.png',
    alt: '@evilrabbit',
    fallback: 'ER',
  },
];

export default function Page() {
  const avatarDataCount = avatarData.length;

  return (
    <div className="flex justify-around">
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>

      <AvatarGroup className="grayscale">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/maxleiter.png"
            alt="@maxleiter"
          />
          <AvatarFallback>LR</AvatarFallback>
        </Avatar>
        <Avatar>
          <AvatarImage
            src="https://github.com/evilrabbit.png"
            alt="@evilrabbit"
          />
          <AvatarFallback>ER</AvatarFallback>
        </Avatar>
      </AvatarGroup>

      <AvatarGroup>
        {avatarData.map(({ id, src, fallback, alt }) => (
          <Avatar key={id}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback>{fallback}</AvatarFallback>
          </Avatar>
        ))}
        <AvatarGroupCount>+{avatarDataCount}</AvatarGroupCount>
      </AvatarGroup>
    </div>
  );
}
