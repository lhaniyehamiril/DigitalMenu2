"use client";

import { useState } from "react";
import { Button, Dialog, Slide } from "@mui/material";
import AddCategoryFormComponent from "./createCategoryForm";

const Transition = Slide as any;

export default function CategoryPageClient({menuId}:{menuId: string}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* <Button
        variant="contained"
        sx={{
          mb: 2,
          background: "linear-gradient(135deg, #1976d2, #1565c0)",
          borderRadius: "12px",
          py: 1.4,
          fontWeight: "bold"
        }}
        onClick={() => setOpen(true)}
      >
        افزودن دسته‌بندی
      </Button> */}

      {/* <Dialog
        fullWidth
        maxWidth="sm"
        open={true}
        TransitionComponent={Transition}
        transitionDuration={300}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiPaper-root": {
            borderRadius: "16px 16px 0 0",
            position: "fixed",
            bottom: 0,
            m: 0
          }
        }}
      > */}
        <AddCategoryFormComponent menuId={menuId} />
      {/* </Dialog> */}
    </>
  );
}
