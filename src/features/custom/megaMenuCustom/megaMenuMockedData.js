const topMenus = [];

Array.from(Array(15).keys()).forEach((topMenu) => {
  const leftMenus = [];

  Array.from(Array(30).keys()).forEach((leftMenu) => {
    const rightMenus = [];
    Array.from(Array(9).keys()).forEach((rightMenu) => {
      const innerMenus = [];

      Array.from(Array(15).keys()).forEach((innerMenu) => {
        innerMenus.push({
          id: `${rightMenu}-${innerMenu}`,
          label: ` ${leftMenu} innerMenu ${innerMenu}`,
        });
      });

      rightMenus.push({
        id: rightMenu,
        label: `rightMenu ${rightMenu}`,
        innerMenus,
      });
    });

    leftMenus.push({
      id: leftMenu,
      label: `${topMenu} leftMenu ${leftMenu}`,
      rightMenus,
    });
  });

  topMenus.push({
    id: topMenu,
    label: `topMenu ${topMenu}`,
    leftMenus,
  });
});

export { topMenus };
