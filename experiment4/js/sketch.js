// sketch.js - Dance
// Author: Samuel Liao
// Date: 9/8/2024

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js
// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}
var webcamStartTime;
var videos = [];

var currentIndex = 0;

var gifPositions = {
  0: { size: [150, 200], position: [300, 150] }, // done
  1: { size: [105, 140], position: [450, 300] }, // done
  2: { size: [150, 200], position: [300, 300] }, // done
  3: { size: [150, 300], position: [300, 200] }, // done
  4: { size: [75, 150], position: [200, 200] },  // done
  5: { size: [150, 300], position: [500, 200] }, // done
  6: { size: [135, 180], position: [300, 300] }, // done
  
  7: { size: [150, 200], position: [300, 200] }, // move left
  
  8: { size: [300, 400], position: [80, 60] },//webcam
  
  9: { size: [150, 200], position: [300, 200] }, // resize
  10: { size: [105, 140], position: [300, 160] }, // make much smaller and have it move with oceanresize
  11: { size: [135, 180], position: [130, 150] },//make it slight smaller
  12: { size: [90, 120], position: [130, 300] },//move left and up make very small on the rainy road
  13: { size: [150, 200], position: [300, 300] },//done
  14: { size: [75, 150], position: [350, 255] },// move back or up and make small to stand on beam
  15: { size: [150, 300], position: [100, 205] },//make smaller and put on the left hand corner
  16: { size: [30, 40], position: [290, 200] },//make small and move to left to be on the shore
  17: { size: [135, 180], position: [300, 200] },//done maybe make smaller
  18: { size: [150, 300], position: [300, 200] },//done
  19: { size: [135, 180], position: [400, 240] },//make smaller and move to right and corner
  20: { size: [105, 140], position: [350, 155] },//make smaller and move to center of tunnel
  21: { size: [135, 180], position: [320, 150] }, //make medium size and move up to sun
  22: { size: [150, 300], position: [300, 200] }, //done
  // Add more entries as needed for other videos 
  
};

function preload() {
  
  //videos
  
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Galaxy.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/CityDrives.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/LizardDance.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/tekken.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/HomerDancing.mp4'));
  
  videos.push(createVideo('https://saliao.github.io/p5.js-files/KidDancing.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/PoohDance.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/DancingMan.mp4'));
  var webcamVideo = createCapture(VIDEO);
  webcamVideo.hide();
  videos.push(webcamVideo);
  videos.push(createVideo('https://saliao.github.io/p5.js-files/HetsuDance.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Ocean.mp4'));
  
  videos.push(createVideo('https://saliao.github.io/p5.js-files/GrandCanyon.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Rain.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Minecraft.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/NightTraffic.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/CatsDancing.mp4'));
  
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Beach.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Kid2Dancing.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Matrix.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/JojosDance.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Tunnel.mp4'));
  
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Sun.mp4'));
  videos.push(createVideo('https://saliao.github.io/p5.js-files/Rollercoaster2.mp4'));
 // ...

  



  music = createAudio('https://saliao.github.io/p5.js-files/Aaron_Smith_-_Dancin_KRONO_Remix__Naijamusics.com.mp3');
  
  
  
  //Girl Dancing Gif
  gif = loadImage("dance-hat-in-time.gif");
  gif = createImg("https://saliao.github.io/p5.js-files/dance-hat-in-time.gif");
  
}

function setup() {
  //
  canvasContainer("#canvas-container");
  let canvas = createCanvas(Container.width(), canvas.parent("canvas-container"));
  $(window).resize(function(){
     console.log("Resizing...");
     resizeCanvas(canvasContainer.width(),canvasContainer.height());
  });
  background(0);
  createCanvas(800, 600);

  videos.forEach(video => video.size(800, 600));
  videos.forEach(video => video.hide());
  videos.forEach(video => video.position(0, 0));
  
  
  videos[currentIndex].position(0,0);
  
  videos[currentIndex].show();
  videos[currentIndex].play();
  music.loop()
  videos.forEach(video => video.onended(nextVid));
  

  
  
  
}

function draw() {
  background(0);

  var size = gifPositions[currentIndex].size;
  var position = gifPositions[currentIndex].position;
  if (currentIndex === 8) {
    if (millis() - webcamStartTime > 15000) {
      nextVid();
      return;
    }
  }
  var currentFrame = videos[currentIndex].get();

  var videoBrightness = getAverageBrightness(currentFrame);

  gif.position(position[0], position[1]);
  gif.size(size[0], size[1]);

  var adjustedBrightness = map(videoBrightness, 0, 255, 0.1, 1.5); 
  gif.style("filter", "brightness(" + adjustedBrightness + ")");
  
 
}

function getAverageBrightness(img) {
  img.loadPixels();
  var totalBrightness = 0;

  for (var i = 0; i < img.pixels.length; i += 4) {
    var r = img.pixels[i];
    var g = img.pixels[i + 1];
    var b = img.pixels[i + 2];
  
    var brightness = 0.299 * r + 0.587 * g + 0.114 * b;

    totalBrightness += brightness;
  }

  var avgBrightness = totalBrightness / (img.pixels.length / 10);
  return avgBrightness;
}


function nextVid() {
  videos[currentIndex].hide();
  currentIndex++;

  if (currentIndex < videos.length) {

    videos[currentIndex].position(0, 0);
    videos[currentIndex].show();
    videos[currentIndex].play();
    if (currentIndex === 8) {
      webcamStartTime = millis();
    }
  } else {
    videos.forEach((video) => video.hide());
    currentIndex = 0;
    videos[currentIndex].show();
    videos[currentIndex].position(0, 0);
    videos[currentIndex].play();
    if (currentIndex === 8) {
      webcamStartTime = millis();
    }
  }
}

