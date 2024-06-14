let captionText = document.getElementById('enteredCaption').value;

document.getElementById('viewSample').addEventListener('click', viewSample)

function viewSample() {
    console.log(captionText)
    document.getElementById('caption').innerText = captionText
}