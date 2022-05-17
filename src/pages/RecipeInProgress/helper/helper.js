export const setCheckedRecipes = (checkBox, checked, setChecked) => {
  const newList = [];
  if (checked) {
    [...checkBox].map((item) => {
      const filteredItem = checked.filter((ingredient) => ingredient.includes(item.name));
      newList.push(...filteredItem);
      return item;
    });
  }
  setChecked(newList);
};

export const verifyChecked = (ingredient, checked) => {
  if (checked) {
    return checked.some((item) => item.includes(ingredient));
  }
};
