import Avatar from "~/components/header/Avatar";
import DesktopNavigation from "~/components/header/DesktopNavigation";
import ThemeToggle from "~/components/header/ThemeToggle";

export default function Header() {
  return (
    <header className="p-4">
      <div className="flex mx-auto max-w-2xl md:max-w-5xl justify-between">
        <Avatar />
        <DesktopNavigation />
        <ThemeToggle />
      </div>
    </header>
  );
}
