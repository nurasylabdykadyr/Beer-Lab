export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { address, phone, comment, cart, totalPrice } = req.body;

  if (!address || !phone || !cart || !cart.length) {
    return res.status(400).json({ error: "Missing order data" });
  }

  const BOT_TOKEN = process.env.BOT_TOKEN;
  const CHAT_ID = process.env.CHAT_ID;

  const orderDetails = cart
    .map(
      (item) => `▪️ ${item.name} x${item.count} = ${item.price * item.count} ₸`,
    )
    .join("\n");

  const message = `
🔥 Новый заказ!
📍 Адрес: ${address}
📞 Телефон: ${phone}
💬 Комментарий: ${comment || "Нет"}

🛒 Корзина:
${orderDetails}

💰 Итого к оплате: ${totalPrice} ₸
  `;

  try {
    const tgResponse = await fetch(
      `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: CHAT_ID, text: message }),
      },
    );

    if (!tgResponse.ok) {
      return res.status(502).json({ error: "Telegram send failed" });
    }

    return res.status(200).json({ success: true });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
}
