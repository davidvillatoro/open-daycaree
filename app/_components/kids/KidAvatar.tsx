type KidAvatarProps = {
  avatarColor: string;
  initials: string;
  initialsColor: string;
  className?: string;
};

export function KidAvatar({
  avatarColor,
  initials,
  initialsColor,
  className,
}: KidAvatarProps) {
  const size = className ?? "h-[48px] w-[48px] text-[19px]";
  return (
    <div
      className={`flex ${size} shrink-0 items-center justify-center rounded-full font-display font-semibold`}
      style={{ backgroundColor: avatarColor, color: initialsColor }}
    >
      {initials}
    </div>
  );
}
