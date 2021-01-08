//https://stackoverflow.com/questions/42036865/react-how-to-navigate-through-list-by-arrow-keys

import { useState } from "react";

import { topMenus } from "./megaMenuMockedData";
import TopMenus from "./TopMenus/TopMenus";
import MegaMenu from "./MegaMenu/MegaMenu";

export default function MegaMenuCustom() {
  const [activeTopMenu, setActiveTopMenu] = useState(null);
  const handleActiveTopMenu = (activeMenuId) => {
    const activeMenuState =
      activeTopMenu === activeMenuId ? null : activeMenuId;
    setActiveTopMenu(activeMenuState);
  };

  return (
    <nav>
      <TopMenus menus={topMenus} onToggleMenu={handleActiveTopMenu} />
      <MegaMenu activeTopMenu={activeTopMenu} topMenus={topMenus} />
    </nav>
  );
}
