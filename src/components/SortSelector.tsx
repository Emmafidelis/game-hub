import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        order by: Relevance
      </MenuButton>
      <MenuList>
        <MenuItem>a</MenuItem>
        <MenuItem>b</MenuItem>
        <MenuItem>c</MenuItem>
        <MenuItem>d</MenuItem>
        <MenuItem>e</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
