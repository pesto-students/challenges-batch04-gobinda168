const updateInventory = (oldInventory, freshInventory) => {
  const mainInventory = [...oldInventory, ...freshInventory];
  const mainInventoryEntry = [
    ...new Set(mainInventory.map(([, inventoryItem]) => inventoryItem)),
  ];
  mainInventoryEntry.sort();

  const tempInv = [];
  mainInventoryEntry.forEach((item) => {
    const allCountsForItem = mainInventory
      .filter(([, inventoryItem]) => inventoryItem === item)
      .map(([count]) => count);
    tempInv.push([
      allCountsForItem.reduce(
        (itemTotalCount, itemCount) => itemTotalCount + itemCount,
      ),
      item,
    ]);
  });

  return tempInv;
};

export { updateInventory };
