import Avatar from "~/components/header/Avatar";
import DesktopNavigation from "~/components/header/DesktopNavigation";
import ThemeToggle from "~/components/header/ThemeToggle";

export default function Header() {
  const routes = [
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
  ];
  return (
    <header className="p-4">
      <div className="flex mx-auto max-w-2xl md:max-w-5xl justify-between">
        <Avatar />
        <DesktopNavigation routes={routes} />
        <ThemeToggle />
      </div>
    </header>
  );
}
