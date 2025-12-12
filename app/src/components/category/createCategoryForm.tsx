
import { useState, useEffect } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  Drawer,
} from "@mui/material";
import axios from "axios";

interface CategoryFormData {
  id?: string;
  name: string;
  image?: string;
}

interface Props {
  menuId?: string;
  created: () => void;
  type: "create" | "update";
  data?: CategoryFormData;
}

export default function CategoryFormDialog({ menuId, created, type, data }: Props) {
  const [open, setOpen] = useState(false);
  const [actionType, setActionType] = useState<"create" | "update">("create")
  const [actionHelper, setactionHelper] = useState("ایجاد دسته")
  const [form, setForm] = useState<CategoryFormData>({
    name: "",
    image: "",
    ...data,
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (type === "update" && data) {
      setActionType(type);
      setForm(data);
      setOpen(!!data);
    }
  }, [type, data]);

  const handleSubmit = async () => {
    if (!form.name) return alert("لطفاً نام دسته‌بندی را وارد کنید");

    setLoading(true);
    try {
      if (actionType === "create") {
        await axios.post("/api/category/add", {
          name: form.name,
          menuId,
          image: form.image,
        });
      } else if (actionType === "update") {
        if (!form.id) throw new Error("ID is required for update");
        await axios.patch("/api/category/update", {
          id: form.id,
          changes: {
            name: form.name,
            image: form.image,
          },
        });
      }

      setOpen(false);
      created();
      if (type === "create") {
        setForm({ name: "", image: "" });
      }
    } catch (err) {
      alert("خطایی رخ داد: " + (err instanceof Error ? err.message : err));
    }
    setLoading(false);
  };

  useEffect(() => {
    if (!open) {
      setactionHelper("افزودن دسته‌بندی");
      setActionType("create");
      return;
    } else {
      setActionType(type);
      type === "create" ? "افزودن دسته‌بندی" : "ویرایش دسته‌بندی";
      return;
    }
  }, [type, open])

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={() => {
          setForm({ name: "", image: "", });
          setOpen(true)
        }}
        sx={{ position: "fixed", bottom: 20, right: 20 }}
      >
        {actionHelper}
      </Button>

      <Drawer
        PaperProps={{
          sx: {
            maxWidth: 500,
            width: '100%',
            mx: 'auto',
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            p: 3,
          },
        }}
        anchor="bottom" open={open} onClose={() => {
          setOpen(false);
        }}>
        <Box sx={{ p: 3, pb: 5, width: '100%', maxWidth: 500, mx: 'auto' }}>
          <Typography variant="h6" sx={{ mb: 3, fontWeight: "bold" }}>
            {actionHelper}
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
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            sx={{ mb: 2 }}
          />

          <Button
            fullWidth
            variant="contained"
            onClick={handleSubmit}
            disabled={loading}
          >
            {loading
              ? "در حال ارسال..."
              : type === "create"
                ? "ثبت دسته‌بندی"
                : "ذخیره تغییرات"}
          </Button>
        </Box>
      </Drawer>
    </>
  );
}
