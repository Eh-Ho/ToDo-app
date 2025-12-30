import { useState, useRef, useEffect } from "react";
import {
  UserIcon,
  Cog6ToothIcon,
  ArrowRightStartOnRectangleIcon,
} from "@heroicons/react/24/outline";
import userAvatar from "../../assets/user.png";
import Button from "./Button";
import Anchor from "./Anchor";

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative mx-2" ref={menuRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`flex cursor-pointer items-center justify-center rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary/50 ${
          isOpen ? "ring-2 ring-primary" : ""
        }`}
      >
        <img
          src={userAvatar}
          alt="User Profile"
          className="h-10 w-10 rounded-full object-cover border border-muted hover:border-primary transition-colors"
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-56 origin-top-right rounded-xl bg-surface border border-muted shadow-xl z-50 py-1 animation-fade-in">
          <div className="px-4 py-3 border-b border-muted">
            <p className="text-sm text-content font-medium">Jane Doe</p>
            <p className="text-xs text-tertiary truncate">jane@example.com</p>
          </div>

          <div className="py-2 px-1 flex flex-col gap-1">
            <Anchor href="/profile">
              <UserIcon className="h-4 w-4" />
              <span>My Profile</span>
            </Anchor>
            <Anchor href="/settings">
              <Cog6ToothIcon className="h-4 w-4" />
              <span>Settings</span>
            </Anchor>
          </div>

          <div className="py-1 px-1 border-t border-muted">
            <Button onClick={() => console.log("Logout")}>
              <ArrowRightStartOnRectangleIcon className="h-4 w-4" />
              Sign out
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProfileDropdown;
