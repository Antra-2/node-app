const http = require('http');

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'Content-Type': 'text/html'
    });

    res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>My First Node.js App</title>

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
                    background: linear-gradient(135deg, #667eea, #764ba2);
                }

                .card {
                    width: 520px;
                    padding: 50px;
                    text-align: center;
                    background: white;
                    border-radius: 20px;
                    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.25);
                }

                .icon {
                    font-size: 55px;
                    margin-bottom: 15px;
                }

                h1 {
                    margin: 0 0 15px;
                    font-size: 36px;
                    color: #333;
                }

                h1 span {
                    color: #667eea;
                }

                p {
                    color: #666;
                    font-size: 18px;
                    line-height: 1.6;
                }

                .status {
                    display: inline-block;
                    margin-top: 15px;
                    padding: 12px 25px;
                    border-radius: 25px;
                    background: #667eea;
                    color: white;
                    font-weight: bold;
                    box-shadow: 0 5px 12px rgba(102, 126, 234, 0.4);
                }

                .footer {
                    margin-top: 25px;
                    font-size: 14px;
                    color: #999;
                }
            </style>
        </head>

        <body>

            <div class="card">

                <div class="icon">🚀</div>

                <h1>
                    My First App Using <span>Node.js</span>
                </h1>

                <p>
                    Welcome to my first Node.js application!
                </p>

                <p>
                    This application is running successfully
                    on Ubuntu.
                </p>

                <div class="status">
                    ✓ Node.js Application Running
                </div>

                <div class="footer">
                    Powered by Node.js • Ubuntu
                </div>

            </div>

        </body>
        </html>
    `);
});

server.listen(3000, () => {
    console.log('My First Node.js App is running on port 3000');
});
