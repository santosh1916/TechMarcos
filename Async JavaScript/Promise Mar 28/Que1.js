// Develop a function to download multiple files concurrently using Promise.all(). Handle successful downloads, download failures, and progress updates for each file.
const fileUrls = [
    'https://testfile.org/files-5GB-zip'
];



async function downloadFile(url) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`Failed to download ${url}. Status: ${response.status}`);
    }
    return await response.blob();
}


async function downloadFiles(urls) {
    try {
        await Promise.all(urls.map(url => downloadFile(url)));
        console.log('All files downloaded successfully.');

    } catch (error) {
        console.error('Failed to download files:', error);
    }
}

document.getElementById('downloadBtn').addEventListener('click', () => {
    console.log('Downloading files...');
    downloadFiles(fileUrls);
});


