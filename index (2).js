const { WAConnection, MessageType } = require('@adiwajshing/baileys');

 function qr() {
    const conn = new WAConnection();
    conn.logger.level = 'warn';
    conn.regenerateQRIntervalMs = 30000;
    conn.on('open', async () => {
        const session = 'RAGANORK;;;' + Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString('base64')
        await conn.sendMessage(conn.user.jid, session, MessageType.text)
        console.log(session)
        process.exit(0);
    });
     conn.connect();
} qr()
