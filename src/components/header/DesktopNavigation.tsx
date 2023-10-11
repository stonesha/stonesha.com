import NavItem from "~/components/header/NavItem";

export default function DesktopNavigation(
  props: React.ComponentPropsWithoutRef<"nav">
) {
  const routes = [
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/work", label: "Work" },
  ];
  return (
    <nav {...props}>
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
