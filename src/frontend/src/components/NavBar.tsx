import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useQueryClient } from "@tanstack/react-query";
import {
  BookOpen,
  GraduationCap,
  LayoutDashboard,
  LogIn,
  LogOut,
  Menu,
  Settings,
  X,
} from "lucide-react";
import { useState } from "react";
import type { AppPage } from "../App";
import type { UserProfile } from "../backend.d";
import { useInternetIdentity } from "../hooks/useInternetIdentity";

interface NavBarProps {
  currentPage: AppPage;
  isAdmin: boolean;
  isAuthenticated: boolean;
  userProfile: UserProfile | null;
  navigateTo: (page: AppPage) => void;
}

export default function NavBar({
  currentPage,
  isAdmin,
  isAuthenticated,
  userProfile,
  navigateTo,
}: NavBarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { login, clear, loginStatus } = useInternetIdentity();
  const queryClient = useQueryClient();
  const isLoggingIn = loginStatus === "logging-in";

  const handleAuth = async () => {
    if (isAuthenticated) {
      await clear();
      queryClient.clear();
      navigateTo({ name: "home" });
    } else {
      try {
        await login();
      } catch (error: unknown) {
        if (
          error instanceof Error &&
          error.message === "User is already authenticated"
        ) {
          await clear();
          setTimeout(() => login(), 300);
        }
      }
    }
    setMobileOpen(false);
  };

  const navLinks = [
    {
      label: "Home",
      page: { name: "home" } as AppPage,
      icon: <BookOpen size={16} />,
    },
    ...(isAuthenticated
      ? [
          {
            label: "My Progress",
            page: { name: "dashboard" } as AppPage,
            icon: <LayoutDashboard size={16} />,
          },
        ]
      : []),
    ...(isAdmin
      ? [
          {
            label: "Admin",
            page: { name: "admin" } as AppPage,
            icon: <Settings size={16} />,
          },
        ]
      : []),
  ];

  const isActive = (link: AppPage) => currentPage.name === link.name;
  const initials = userProfile?.displayName
    ? userProfile.displayName.slice(0, 2).toUpperCase()
    : "ME";

  return (
    <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border shadow-xs">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <button
          type="button"
          onClick={() => {
            navigateTo({ name: "home" });
            setMobileOpen(false);
          }}
          className="flex items-center gap-2.5 group"
        >
          <div className="w-9 h-9 rounded-xl bg-primary flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
            <GraduationCap size={20} className="text-primary-foreground" />
          </div>
          <span className="font-display font-700 text-foreground text-lg leading-none hidden sm:block">
            Speak<span className="text-primary">30</span>
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => navigateTo(link.page)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-body font-600 transition-all ${
                isActive(link.page)
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
        </div>

        {/* Auth + Profile */}
        <div className="hidden md:flex items-center gap-3">
          {isAuthenticated && userProfile && (
            <div className="flex items-center gap-2">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-accent text-accent-foreground text-xs font-display font-600">
                  {initials}
                </AvatarFallback>
              </Avatar>
              <span className="text-sm font-body font-600 text-foreground max-w-[120px] truncate">
                {userProfile.displayName}
              </span>
            </div>
          )}
          <Button
            onClick={handleAuth}
            disabled={isLoggingIn}
            variant={isAuthenticated ? "outline" : "default"}
            size="sm"
            className="font-body font-600"
          >
            {isLoggingIn ? (
              "Logging in..."
            ) : isAuthenticated ? (
              <>
                <LogOut size={15} className="mr-1.5" />
                Logout
              </>
            ) : (
              <>
                <LogIn size={15} className="mr-1.5" />
                Login
              </>
            )}
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg text-muted-foreground hover:bg-accent transition-colors"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-card px-4 py-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => {
                navigateTo(link.page);
                setMobileOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-3 rounded-lg text-sm font-body font-600 transition-all text-left ${
                isActive(link.page)
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent"
              }`}
            >
              {link.icon}
              {link.label}
            </button>
          ))}
          <div className="pt-2 border-t border-border mt-1">
            {isAuthenticated && userProfile && (
              <div className="flex items-center gap-2 mb-3 px-2">
                <Avatar className="w-7 h-7">
                  <AvatarFallback className="bg-accent text-accent-foreground text-xs font-display font-600">
                    {initials}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm font-body font-600">
                  {userProfile.displayName}
                </span>
              </div>
            )}
            <Button
              onClick={handleAuth}
              disabled={isLoggingIn}
              variant={isAuthenticated ? "outline" : "default"}
              size="sm"
              className="w-full font-body font-600"
            >
              {isLoggingIn
                ? "Logging in..."
                : isAuthenticated
                  ? "Logout"
                  : "Login"}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
