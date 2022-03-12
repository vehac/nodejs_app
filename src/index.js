const app = require('./app');

async function main() {
    await app.listen(8001);
    console.log('Server up...');
}

main();