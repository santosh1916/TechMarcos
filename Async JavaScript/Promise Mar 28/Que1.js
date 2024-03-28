const fileUrls = [
    'https://testfile.org/files-5GB-zip'
];

// Function to download a file
function downloadFile(url) {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = 'blob';

        xhr.onprogress = function (event) {
            if (event.lengthComputable) {
                const percentComplete = (event.loaded / event.total) * 100;
                console.log(`${url} - Progress: ${percentComplete.toFixed(2)}%`);
                updateProgress(url, percentComplete);
            }
        };

        xhr.onload = function () {
            if (xhr.status === 200) {
                const blob = xhr.response;
                resolve(blob);
            } else {
                reject(new Error(`Failed to download ${url}. Status: ${xhr.status}`));
            }
        };

        xhr.onerror = function () {
            reject(new Error(`Failed to download ${url}.`));
        };

        xhr.send();
    });
}

// Function to update progress on the page
function updateProgress(url, progress) {
    const progressBar = document.getElementById(url);
    progressBar.style.width = `${progress}%`;
}

// Function to handle concurrent file downloads
function downloadFiles(urls) {
    const promises = urls.map(url => downloadFile(url));

    Promise.all(promises)
        .then(() => {
            console.log('All files downloaded successfully.');
            // Optionally, you can add code here to handle successful downloads.
        })
        .catch(error => {
            console.error('Failed to download files:', error);
            // Optionally, you can add code here to handle download failures.
        });
}

// Event listener for download button click
document.getElementById('downloadBtn').addEventListener('click', function () {
    console.log('Downloading files...');
    downloadFiles(fileUrls);
});
