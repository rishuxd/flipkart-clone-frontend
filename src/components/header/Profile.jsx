import styled from "styled-components";
import { Menu, MenuItem } from "@mui/material";
import { useState } from "react";

const Profile = (props) => {
  const [open, setOpen] = useState(false);

  const handleClick = (e) => {
    setOpen(e.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logout = () => {
    props.setAccount("");
  };

  return (
    <>
      <Username onClick={handleClick}>
        <a>Hi, {props.account}</a>
      </Username>
      <Menu anchorEl={open} open={Boolean(open)} onClose={handleClose}>
        <MenuItem
          onClick={() => {
            handleClose();
            logout();
          }}
        >
          <Logout>Logout</Logout>
        </MenuItem>
      </Menu>
    </>
  );
};

const Username = styled.div`
  align-items: center;
  max-width: 150px;
  margin: 0 20px;
  display: flex;
  flex: 0 0 auto;
  cursor: pointer;
  a {
    font-size: 16px;
    line-height: 20px;
    text-decoration: none;
    color: #fff;
    font-weight: 500;
  }
`;

const Logout = styled.div`
  font-size: 14px;
`;

export default Profile;
