import Avatar from "~/components/header/Avatar";
import DesktopNavigation from "~/components/header/DesktopNavigation";
import ThemeToggle from "~/components/header/ThemeToggle";
import MobileNavigation from "~/components/header/MobileNavigation";

export default function Header() {
  const routes = [
    { href: "/", label: "Home" },
    { href: "/snippets", label: "Snippets" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
  ];
  return (
    <header className="p-4">
      <div className="flex mx-auto max-w-2xl md:max-w-5xl justify-between">
        <Avatar />
        <DesktopNavigation routes={routes} />
        <MobileNavigation routes={routes} />
        <ThemeToggle />
      </div>
    </header>
  );
}
