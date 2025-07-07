
import { Link, useLocation } from "react-router-dom";
import { Home, Search, Book, Wrench, MessageCircle } from "lucide-react";

const BottomNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    {
      path: "/",
      icon: Home,
      label: "Home"
    },
    {
      path: "/rtk-service-providers",
      icon: Search,
      label: "Providers"
    },
    {
      path: "/rtk-hardware",
      icon: Wrench,
      label: "Hardware"
    },
    {
      path: "/blog",
      icon: Book,
      label: "Blog"
    },
    {
      path: "/contact",
      icon: MessageCircle,
      label: "Contact"
    }
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return currentPath === "/";
    }
    return currentPath.startsWith(path);
  };

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-50 md:hidden">
      <div className="flex justify-around items-center py-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const active = isActive(item.path);
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center py-2 px-4 text-xs ${
                active 
                  ? "text-blue-600" 
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              <Icon className={`h-5 w-5 mb-1 ${active ? "text-blue-600" : ""}`} />
              <span className={active ? "font-medium" : ""}>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
