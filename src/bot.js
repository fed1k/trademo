// utils/telegram.js
export async function sendTelegramMessage(message = "Hello") {
    const token = "7613252901:AAFH3t3WgX39jxcpTjTddUJg_35l3aXYm6U";  // Store this in .env.local
    const chatId = 7571378434;  // Chat ID or Group ID
    
    const url = `https://api.telegram.org/bot${token}/sendMessage`;
    const body = {
        chat_id: chatId,
        text: message,
    };

    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(body),
    });

    if (!res.ok) {
        throw new Error('Failed to send message via Telegram');
    }

    return await res.json();
}