// Function to toggle visibility of experience details
function toggleContent(element) {
    const description = element.querySelector('.description');
    if (description.style.display === 'block') {
        description.style.display = 'none';
    } else {
        description.style.display = 'block';
    }
}
