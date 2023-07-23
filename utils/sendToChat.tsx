const token = '5664840269:AAFWTzYL0JiqbNOIP_Jgu-RxnwW_31V4kaM';
const chatId = '-647173923';

export const sendChatData = async (data: ISendChatData) => {
  const { name, tel, message, quantity, date } = data;
  const txt = `Заказ на: ${message}%0AИмя: ${name}%0AТелефон: ${tel}${
    quantity ? '%0AКоличество:' + quantity : ''
  }${date ? '%0AДата:' + date : ''}`;
  const response = await fetch(
    `https://api.telegram.org/bot${token}/sendMessage?chat_id=${chatId}&parse_mode=html&text=${txt}`
  );
  return response;
};
