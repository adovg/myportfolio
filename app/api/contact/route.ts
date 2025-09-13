import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Валидация данных
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Все поля обязательны для заполнения" },
        { status: 400 }
      );
    }

    // Проверка email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Некорректный email адрес" },
        { status: 400 }
      );
    }

    // Создаем транспортер для отправки email
    // ЗАМЕНИТЕ эти настройки на ваши реальные данные SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail", // или другой email сервис
      auth: {
        user: process.env.EMAIL_USER, // ваш email
        pass: process.env.EMAIL_PASSWORD, // ваш пароль приложения
      },
    });

    // Настройки email
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // куда отправлять (ваш email)
      subject: `Сообщение с портфолио: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333;">Новое сообщение с формы обратной связи</h2>
          <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px;">
            <p><strong>Имя:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Тема:</strong> ${subject}</p>
            <p><strong>Сообщение:</strong></p>
            <div style="background-color: white; padding: 15px; border-left: 4px solid #0066FF; margin-top: 10px;">
              ${message.replace(/\n/g, "<br>")}
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            Это сообщение отправлено с формы обратной связи вашего портфолио.
          </p>
        </div>
      `,
    };

    // Отправляем email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Сообщение успешно отправлено!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Ошибка отправки email:", error);
    return NextResponse.json(
      { error: "Произошла ошибка при отправке сообщения" },
      { status: 500 }
    );
  }
}
