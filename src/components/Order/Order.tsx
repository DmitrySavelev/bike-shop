import { Field, Form, Formik } from "formik";
import turnBack from "../../assets/turnBack.png";
import {
  StyledAllOptions,
  StyledArticle,
  StyledBack,
  StyledBackImage,
  StyledButton,
  StyledDeliveryOptions,
  StyledFlex,
  StyledForm,
  StyledLabel,
  StyledPersonalInfo,
} from "./Order.styles";
import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();

  return (
    <StyledForm>
      <StyledArticle>Оформление заказа</StyledArticle>
      <StyledBack onClick={() => navigate("/cart")}>
        <StyledBackImage src={turnBack} />
      </StyledBack>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          deliveryMethod: "pickup",
          paymentMethod: "online",
        }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <StyledFlex>
            <StyledPersonalInfo>
              <label htmlFor="name">ФИО</label>
              <Field id="name" name="name" />
              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <label htmlFor="phone">Номер телефона</label>
              <Field id="phone" name="phone" />
              <label htmlFor="address">Адрес доставки</label>
              <Field id="address" name="address" />
            </StyledPersonalInfo>
            <StyledAllOptions>
              <StyledDeliveryOptions
                role="group"
                aria-labelledby="deliveryMethod"
              >
                <label>Способ доставки:</label>
                <StyledLabel htmlFor="pickup">
                  <Field
                    id="pickup"
                    name="deliveryMethod"
                    type="radio"
                    value="pickup"
                  />
                  Самовывоз
                </StyledLabel>
                <StyledLabel htmlFor="delivery">
                  <Field
                    id="delivery"
                    name="deliveryMethod"
                    type="radio"
                    value="delivery"
                  />
                  Курьер
                </StyledLabel>
                <StyledLabel htmlFor="post">
                  <Field
                    id="post"
                    name="deliveryMethod"
                    type="radio"
                    value="post"
                  />
                  Почта
                </StyledLabel>
              </StyledDeliveryOptions>
              <StyledDeliveryOptions
                role="group"
                aria-labelledby="paymentMethod"
              >
                <label>Выбор способа оплаты:</label>
                <StyledLabel htmlFor="online">
                  <Field
                    id="online"
                    name="paymentMethod"
                    type="radio"
                    value="online"
                  />
                  Онлайн
                </StyledLabel>
                <StyledLabel htmlFor="cash">
                  <Field
                    id="cash"
                    name="paymentMethod"
                    type="radio"
                    value="cash"
                  />
                  Наличными при получении
                </StyledLabel>

                <StyledLabel htmlFor="card">
                  <Field
                    id="card"
                    name="paymentMethod"
                    type="radio"
                    value="card"
                  />
                  Картой при получении
                </StyledLabel>
              </StyledDeliveryOptions>
            </StyledAllOptions>

            <StyledButton type="submit">Оформить заказ</StyledButton>
          </StyledFlex>
        </Form>
      </Formik>
    </StyledForm>
  );
};

export default Order;

// 3. Оформление заказа

// Форма с валидацией для ввода данных покупателя:
// ФИО
// Email
// Телефон
// Адрес доставки

// Выбор способа доставки:
// Самовывоз
// Курьерская доставка
// Почта России

// Выбор способа оплаты:
// Онлайн
// Наличными при получении
// Картой при получении
