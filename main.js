function preload() {
  postimg.cc/jn4qVHcN
}

function setup() {
    canvas.center();
}

function draw() {
    
}

function gotPoses(results){
    if(results.length > 0){
      console.log(results);
      x = results[0].pose.nose.x;
      y = results[0].pose.nose.y;
      
      }
  }

  function modelLoaded() {
    console.log('PoseNet foi inicializado');
 }