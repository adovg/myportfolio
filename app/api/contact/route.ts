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
    // ДЕБАГ: Проверяем наличие переменных окружения
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Отсутствуют переменные окружения:");
      console.error("EMAIL_USER:", process.env.EMAIL_USER);
      console.error(
        "EMAIL_PASSWORD:",
        process.env.EMAIL_PASSWORD ? "установлен" : "отсутствует"
      );
      return NextResponse.json(
        { error: "Ошибка конфигурации сервера" },
        { status: 500 }
      );
    }

    console.log("Настройки email (только для разработки):");
    console.log("Service: gmail");
    console.log("User:", process.env.EMAIL_USER);
    console.log("Password length:", process.env.EMAIL_PASSWORD?.length);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
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

    // Детальная информация об ошибке для дебаггинга
    let errorMessage = "Произошла ошибка при отправке сообщения";
    let errorDetails = "";

    if (error instanceof Error) {
      errorDetails = error.message;

      // Специфичные ошибки Nodemailer
      if (errorDetails.includes("Invalid login")) {
        errorMessage = "Ошибка аутентификации email. Проверьте логин и пароль.";
      } else if (errorDetails.includes("Connection timeout")) {
        errorMessage = "Таймаут подключения к email серверу.";
      } else if (errorDetails.includes("Authentication failed")) {
        errorMessage = "Ошибка аутентификации. Проверьте настройки email.";
      }
    }

    return NextResponse.json(
      {
        error: errorMessage,
        details:
          process.env.NODE_ENV === "development" ? errorDetails : undefined,
      },
      { status: 500 }
    );
  }
}
