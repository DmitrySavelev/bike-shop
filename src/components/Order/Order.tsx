import { ErrorMessage, Field, Form, Formik } from "formik";
import turnBack from "../../assets/turnBack.png";
import {
  StyledAllOptions,
  StyledArticle,
  StyledBack,
  StyledBackImage,
  StyledButton,
  StyledDeliveryOptions,
  StyledErrorMessage,
  StyledFlex,
  StyledForm,
  StyledLabel,
  StyledPayment,
  StyledPersonalInfo,
} from "./Order.styles";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { validationSchema } from "@/validation";

const Order = () => {
  const navigate = useNavigate();
  const newPrice = useSelector((state: RootState) => state.bikes.newPrice);
  const readyPrice = Math.floor(Number(newPrice)).toLocaleString();

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
        validationSchema={validationSchema}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <StyledFlex>
            <StyledPayment>К оплате: {readyPrice} ₽</StyledPayment>
            <StyledPersonalInfo>
              <label htmlFor="name">ФИО</label>
              <Field id="name" name="name" />
              <StyledErrorMessage name="name" component="div" />

              <label htmlFor="email">Email</label>
              <Field id="email" name="email" type="email" />
              <StyledErrorMessage name="email" component="div" />

              <label htmlFor="phone">Номер телефона</label>
              <Field id="phone" name="phone" />
              <StyledErrorMessage name="phone" component="div" />

              <label htmlFor="address">Адрес доставки</label>
              <Field id="address" name="address" />
              <StyledErrorMessage name="address" component="div" />
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
