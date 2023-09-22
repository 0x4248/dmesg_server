/* Dmesg server
 * A web server for viewing dmesg output.
 * Github: https://www.github.com/lewisevans2007/dmesg_server
 * License: GNU General Public License v3.0
 * By: Lewis Evans
*/

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function update() {
    fetch('/status')
        .then(response => response.json())
        .then(data => {
            const mainDiv = document.getElementById('main');
            mainDiv.innerHTML = '';

            const table = document.createElement('table');
            const tbody = document.createElement('tbody');

            data.dmesg.forEach(item => {
                const row = document.createElement('tr');
                // Add a class based on log level
                row.classList.add(`log-level-${item.pri}`);

                const priCell = document.createElement('td');
                priCell.textContent = item.pri;
                row.appendChild(priCell);

                const timeCell = document.createElement('td');
                timeCell.textContent = item.time;
                row.appendChild(timeCell);

                const msgCell = document.createElement('td');
                msgCell.textContent = item.msg;
                row.appendChild(msgCell);

                msgCell.classList.add('msg');

                tbody.appendChild(row);
            });

            table.appendChild(tbody);
            mainDiv.appendChild(table);
        })
        .catch(error => console.error('Error fetching data:', error));
}

async function main() {
    while (true) {
        await update();
        await sleep(5000);
    }
}

main();