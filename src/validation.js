import * as Yup from "yup";

export const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[А-Яа-яA-Za-z\s]+$/, "Допустимы только буквы")
    .min(2, "Слишком короткое имя")
    .required("Поле обязательно"),

  email: Yup.string()
    .email("Неверный формат email")
    .required("Поле обязательно"),

  phone: Yup.string()
    .transform((value) => value.replace(/\s+/g, "")) // Убираем все пробелы
    .matches(/^\+?\d{10,15}$/, "Некорректный номер телефона")
    .required("Поле обязательно"),

  address: Yup.string()
    .min(5, "Адрес слишком короткий")
    .required("Поле обязательно"),

  deliveryMethod: Yup.string().required("Выберите способ доставки"),
  paymentMethod: Yup.string().required("Выберите способ оплаты"),
});
