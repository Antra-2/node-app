const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Jenkins Node.js Deployment</title>

            <style>
                * {
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    font-family: Arial, sans-serif;
                    background: linear-gradient(135deg, #1f2937, #2563eb);
                }

                .card {
                    width: 550px;
                    padding: 50px;
                    text-align: center;
                    background: white;
                    border-radius: 18px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);
                }

                .icon {
                    font-size: 55px;
                }

                h1 {
                    color: #1f2937;
                    margin: 15px 0;
                }

                h1 span {
                    color: #2563eb;
                }

                p {
                    color: #555;
                    font-size: 17px;
                    line-height: 1.6;
                }

                .deployment {
                    margin-top: 25px;
                    padding: 12px 20px;
                    background: #16a34a;
                    color: white;
                    border-radius: 25px;
                    font-weight: bold;
                }

                .footer {
                    margin-top: 25px;
                    font-size: 14px;
                    color: #888;
                }
            </style>
        </head>

        <body>

            <div class="card">

                <div class="icon">🚀</div>

                <h1>
                    Node.js Application
                </h1>

                <h1>
                    Deployed using <span>Jenkins</span>
                </h1>

                <p>
                    This application was automatically deployed
                    using a Jenkins Pipeline.
                </p>

                <div class="deployment">
                    ✓ Deployment Successful
                </div>

                <div class="footer">
                    GitHub → Jenkins → PM2 → Node.js
                </div>

            </div>

        </body>
        </html>
    `);
});

server.listen(PORT, () => {
    console.log(`Node.js application running on port ${PORT}`);
});
