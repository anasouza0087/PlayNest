import { useState } from "react";
import { Drawer, IconButton, Typography } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../styles/style.css";

export const MenuNavigation = () => {
  const [openCloseDrawer, setOpenCloseDrawer] = useState<boolean>(true);

  return (
    <>
      <Drawer
        variant="permanent"
        open={openCloseDrawer}
        PaperProps={{
          sx: {
            width: openCloseDrawer ? "250px" : "60px",
            transition: "width 0.3s ease-in-out",
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
          },
        }}
      >
        <IconButton
          onClick={() => setOpenCloseDrawer(!openCloseDrawer)}
          sx={{ marginTop: "10px" }}
        >
          <GiHamburgerMenu fontSize={30} />
        </IconButton>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-start",
            marginTop: 40,
            gap: 10,
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <img src="/images/memory-game.png" className="image" />
            {openCloseDrawer && (
              <Typography fontWeight="bold">Jogo da Memória</Typography>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <img src="/images/hangman.png" className="image" />
            {openCloseDrawer && (
              <Typography fontWeight="bold">Jogo da Forca</Typography>
            )}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
            }}
          >
            <img src="/images/tic-tac-toe.png" className="image" />
            {openCloseDrawer && (
              <Typography fontWeight="bold">Jogo da Velha</Typography>
            )}
          </div>
        </div>
      </Drawer>
    </>
  );
};
