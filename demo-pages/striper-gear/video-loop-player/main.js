const videos = [
    { title: "Striper Gear Lures Loop", source: "https://player.vimeo.com/video/791946958?h=4c4f60c3d4&byline=0&portrait=0&autoplay=1", runtime: 107000 },
    // { title: 'parachute jig with narration', source: "https://player.vimeo.com/video/774478796?h=d8804d54d0&autoplay=1", runtime: 46000 },
    // { title: "3D Jig with Narration", source: "https://player.vimeo.com/video/795004851?h=7554d85614&byline=0&portrait=0&autoplay=1", runtime: 94000 },
    // { title: "Floating Rocket With Narration", source: "https://player.vimeo.com/video/780881695?h=8a0fd492b3&byline=0&portrait=0&autoplay=1", runtime: 55000 },
    // { title: "Long Cast Rocket with Narration", source: "https://player.vimeo.com/video/780767226?h=26726eff97&byline=0&portrait=0&autoplay=1", runtime: 107000 },
    // { title: "Minnow with Narration", source: "https://player.vimeo.com/video/780922642?h=8d3af93f0d&autoplay=1&byline=0&portrait=0", runtime: 74000 },
    // { title: "Mad Popper with Narration", source: "https://player.vimeo.com/video/780871141?h=9f1c8046cd&autoplay=1&byline=0&portrait=0", runtime: 82000 }
    { title: "Mad Popper-black", source: "https://player.vimeo.com/video/774480267?h=e76fdfd7ef&autoplay=1&byline=0&portrait=0", runtime: 20000},
    { title: "Mad Popper-orange", source: "https://player.vimeo.com/video/774480575?h=c0e920a8c8&autoplay=1&byline=0&portrait=0", runtime: 25000 },
    { title: 'Mad Popper-mack', source: "https://player.vimeo.com/video/774480984?h=91651b8511&autoplay=1&byline=0&portrait=0", runtime: 40000},
    { title: 'Mad Popper-squid', source: "https://player.vimeo.com/video/774481534?h=d7135598b1&autoplay=1&byline=0&portrait=0", runtime: 36000},
    { title: "3D Magic-black", source: "https://player.vimeo.com/video/774473294?h=36a66f2756&autoplay=1&byline=0&portrait=0", runtime: 43000},
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
    // { title: , source: , runtime: },
];



document.getElementById('startVideos').addEventListener('click', startVideoLoop)
document.getElementById('stopVideos').addEventListener('click', stopVideos)
document.getElementById('previousVideo').addEventListener('click', previousVideo)
document.getElementById('nextVideo').addEventListener('click', nextVideo)

const iframe = document.getElementById('videoPlayer');
const title = document.getElementById('videoTitle')

let currentIndex = 0;

function playFirstVideo() {
    iframe.src = videos[0].source
    console.log(currentIndex)
    title.innerText = videos[currentIndex].title
    currentIndex++
    const firstVideoTimer = setTimeout(startVideoLoop, videos[0].runtime)
}

function startVideoLoop() {
    const currentVideoTimer = setTimeout(playVideos, videos[currentIndex].runtime)
    function playVideos() {
        iframe.src = videos[currentIndex].source;
        title.innerText = videos[currentIndex].title
        currentIndex === videos.length - 1 ? currentIndex = 0 : currentIndex++
        startVideoLoop()
    }
}

function playVideos() {
    iframe.src = videos[currentIndex].source;
    title.innerText = videos[currentIndex].title
    currentIndex === videos.length - 1 ? currentIndex = 0 : currentIndex++
    startVideoLoop()
}

function previousVideo() {
    if (currentIndex <= 0) {
        currentIndex = videos.length - 1
    } else {
        currentIndex-=2
    }
    playVideos()
}

function nextVideo() {
    playVideos()
}

function stopVideos() {
    currentIndex = videos.length + 1
}

playFirstVideo();


