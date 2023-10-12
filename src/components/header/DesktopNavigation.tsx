import NavItem from "~/components/header/NavItem";

type DesktopNavigationProps = {
  routes: {
    href: string;
    label: string;
  }[];
};

export default function DesktopNavigation({ routes }: DesktopNavigationProps) {
  return (
    <nav className="pointer-events-auto hidden md:block">
      <ul className="flex rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10">
        {routes.map((route, index) => (
          <NavItem key={index} href={route.href}>
            {route.label}
          </NavItem>
        ))}
      </ul>
    </nav>
  );
}
