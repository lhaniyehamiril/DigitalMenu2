"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Drawer,
  List,
  ListItemButton,
  ListItemText,
  IconButton,
  Box,
  Typography,
  Button
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useCurrentUser } from "@/providers/UserProvider";

export default function MainMenu() {
  const [open, setOpen] = useState(false);
  const currentUser = useCurrentUser();
  const toggle = () => setOpen(!open);

  return (
    <>
      <IconButton onClick={toggle}>
        <MenuIcon />
      </IconButton>

      <Drawer anchor="left" open={open} onClose={toggle}>
        <Box sx={{ width: 260, p: 2 }}>
          <Typography variant="h6" sx={{ mb: 2, textAlign: "center" }}>
            منوی من
          </Typography>

          <List>
            <ListItemButton component={Link} href="/dashboard/categories">
              <ListItemText primary="دسته‌ها" />
            </ListItemButton>

            <ListItemButton component={Link} href="/dashboard/products">
              <ListItemText primary="محصولات" />
            </ListItemButton>

            {currentUser && (
              <ListItemButton
                component={Link}
                href={`/dashboard/${currentUser.id}`}
              >
                <ListItemText primary="حساب کاربری" />
              </ListItemButton>
            )}
          </List>

          {!currentUser && (
            <Box sx={{ mt: 3 }}>
              <Button
                component={Link}
                href="/auth"
                variant="contained"
                fullWidth
                sx={{
                  py: 1.4,
                  borderRadius: "12px",
                  fontWeight: "bold",
                  fontSize: "0.95rem",
                  background:
                    "linear-gradient(135deg, #1976d2 0%, #1565c0 100%)",
                }}
              >
                ورود به حساب کاربری
              </Button>
            </Box>
          )}
        </Box>
      </Drawer>
    </>
  );
}
