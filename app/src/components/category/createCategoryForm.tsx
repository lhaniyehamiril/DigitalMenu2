"use client";

import { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Drawer,
} from "@mui/material";
import axios from "axios";

export default function AddCategoryFormComponent({ menuId }: { menuId: string }) {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", thumNail: "" });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    if (!form.name || !form.thumNail) return;
    setLoading(true);
    try {
      await axios.post("/api/category/add", {
        name: form.name,
        menuId,
        thumNail: form.thumNail,
      });
      setOpen(false);
      setForm({ name: "", thumNail: "" });
    } catch (err) {
      alert("خطایی رخ داد");
    }
    setLoading(false);
  };

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => setOpen(true)}
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        افزودن دسته‌بندی
      </Button>

      <Drawer anchor="bottom" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ p: 3, pb: 5 }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            افزودن دسته‌بندی جدید
          </Typography>

          <TextField
            fullWidth
            label="نام دسته‌بندی"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            sx={{ mb: 2 }}
          />

          <TextField
            fullWidth
            label="آدرس تصویر (Thumbnail)"
            value={form.thumNail}
            onChange={(e) => setForm({ ...form, thumNail: e.target.value })}
            sx={{ mb: 3 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading ? "در حال ارسال..." : "ثبت دسته‌بندی"}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}