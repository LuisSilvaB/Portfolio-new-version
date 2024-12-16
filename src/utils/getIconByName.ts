import { iconNodes } from "@/assets/icons/icons";
import type { iconType } from "@/types/icon.type";

export const getIconByName = (iconName: iconType) => {
  return iconNodes[iconName];
};

