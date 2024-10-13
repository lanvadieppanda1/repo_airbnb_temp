import z from 'zod'

// Hàm kiểm tra định dạng ngày (YYYY-MM-DD)
const isValidDate = (date: string) => {
  // Kiểm tra định dạng chuỗi ngày (YYYY-MM-DD) bằng regex
  const regex = /^\d{4}-\d{2}-\d{2}$/;
  if (!regex.test(date)) {
    return false;
  }

  // Kiểm tra ngày có hợp lệ hay không
  const parsedDate = new Date(date);
  return !isNaN(parsedDate.getTime());
};

// Validation và quy định kiểu dữ liệu trả về của Form tương ứng vs schema
export const RegisterSchema = z.object({
    id: z.number().int("ID phải là số nguyên"),
    name: z.string().min(1, "Tên không được để trống"),
    email: z.string().email("Email không đúng định dạng"),
    password: z.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự"),
    phone: z.string().min(10, "Số điện thoại phải có ít nhất 10 chữ số"),
    birthday: z.string().refine(isValidDate, {
      message: "Ngày sinh phải có định dạng YYYY-MM-DD và hợp lệ",
    }),
    gender: z.string().refine((val: string) => ["male", "female", "other"].includes(val), {
      message: "Giới tính phải là 'male', 'female' hoặc 'other'",
    }),
    role: z.string().refine((val: string) => ["user", "admin"].includes(val), {
      message: "Vai trò phải là 'user' hoặc 'admin'",
    }),
  });

export type RegisterSchemaType = z.infer<typeof RegisterSchema>
