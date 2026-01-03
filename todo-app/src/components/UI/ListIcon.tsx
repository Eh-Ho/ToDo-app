import {
  BriefcaseIcon,
  HomeIcon,
  AcademicCapIcon,
  ShoppingCartIcon,
  HeartIcon,
  ListBulletIcon,
  RocketLaunchIcon,
  SunIcon,
  MoonIcon,
  UserGroupIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/solid";
import React from "react";

interface ListIconProps {
  iconName: string;
  color?: string;
}

const ListIcon = ({ iconName, color }: ListIconProps) => {
  const iconMap: Record<string, React.ElementType> = {
    work: BriefcaseIcon,
    office: BriefcaseIcon,
    business: BriefcaseIcon,
    
    home: HomeIcon,
    personal: HomeIcon,
    house: HomeIcon,

    school: AcademicCapIcon,
    study: AcademicCapIcon,
    learning: AcademicCapIcon,

    groceries: ShoppingCartIcon,
    shopping: ShoppingCartIcon,
    market: ShoppingCartIcon,

    health: HeartIcon,
    wellness: HeartIcon,
    fitness: HeartIcon,

    projects: RocketLaunchIcon,
    startup: RocketLaunchIcon,
    
    morning: SunIcon,
    evening: MoonIcon,
    
    social: UserGroupIcon,
    meeting: UserGroupIcon,
    
    finance: BuildingLibraryIcon,
    bank: BuildingLibraryIcon,
  };

  const normalizeName = iconName.toLowerCase();
  const IconComponent = iconMap[normalizeName] || ListBulletIcon;

  return <IconComponent className={`size-5 ${color}`} />;
};

export default ListIcon;