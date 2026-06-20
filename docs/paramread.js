const urlParams = new URLSearchParams(window.location.search);
const version = urlParams.get('version');
const source = urlParams.get('source');

const statusElement = document.getElementById('status');
if (version) {
    let baseUrl = '';
    const sources = {
        'proxy': 'https://ghfast.top/https://raw.githubusercontent.com/mineberlin777/seecretmcpp/main/versions/',
        'github': 'https://raw.githubusercontent.com/mineberlin777/seecretmcpp/main/versions/'
    };
    if (sources[source]) {
        statusElement.innerText = "Redirecting";
        const fileUrl = sources[source] + version + '.jar';
        window.location.href = fileUrl;
    } else {
        statusElement.innerText = "Invalid";
    }
}
