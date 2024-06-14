document.getElementById('viewSample').addEventListener('click', sampleView)

function sampleView() {
    const captionText = document.getElementById('enteredCaption').value;
    console.log(captionText)
    document.getElementById('caption').innerText = captionText
}