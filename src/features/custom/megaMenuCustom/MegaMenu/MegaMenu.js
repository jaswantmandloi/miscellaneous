import { useState, Fragment } from "react";

import LeftMenus from "../LeftMenus/LeftMenus";
import RightMenus from "../RightMenus/RightMenus";
import TrapTap from "../../TapTrap/TrapTap";

export default function MegaMenu({ topMenus, activeTopMenu }) {
  const [activeRightMenu, setActiveRightMenu] = useState(null);
  const [isLeftMenuActive, setIsLeftMenuActive] = useState(true);

  const handleActiveLeftMenu = (event) => {
    const activeMenuId = Number(event.currentTarget.dataset.index);
    setActiveRightMenu(activeMenuId);
  };

  return (
    <>
      {topMenus.map(({ id, leftMenus }) => {
        const TabTrapper = isLeftMenuActive ? TrapTap : Fragment;

        return id === activeTopMenu ? (
          <TabTrapper key={id}>
            <LeftMenus
              activeMenuId={activeRightMenu}
              menus={leftMenus}
              onToggleMenu={handleActiveLeftMenu}
              isLeftMenuActive={isLeftMenuActive}
              setIsLeftMenuActive={setIsLeftMenuActive}
            />
          </TabTrapper>
        ) : null;
      })}

      {topMenus.map(({ id, leftMenus }) => {
        if (id !== activeTopMenu) {
          return null;
        }
        return leftMenus.map(({ id: leftMenuId, rightMenus }) => {
          if (activeRightMenu !== leftMenuId) {
            return null;
          }

          const TabTrapper = !isLeftMenuActive ? TrapTap : Fragment;

          return (
            <TabTrapper key={id}>
              <RightMenus
                menus={rightMenus}
                isLeftMenuActive={isLeftMenuActive}
              />
            </TabTrapper>
          );
        });
      })}
    </>
  );
}
