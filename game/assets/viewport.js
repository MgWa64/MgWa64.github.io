function Viewport(w=320, h=480, loc=document.body){
    this.canvas = document.createElement('canvas');
    this.canvas.style = 'position: absolute; top: 0px; left: 0px; border: 0px solid black;';
    this.canvas.width = w;
    this.canvas.height = h;
    this.context = this.canvas.getContext('2d');
    this.width = w;
    this.height = h;
    this.clear = function(){
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.fillStyle = '#99A';
        this.context.fillRect(0, 0, Screen.width, Screen.height);
    };
    this.sprite = function(image, src, spr){
        this.context.drawImage(image, src.x, src.y, src.w, src.h, spr.x, spr.y, spr.w, spr.h);
    }
    this.keys = [];
    var keys = this.keys;
    for(i=0;i<256;i++)
        keys[i] = false;
    window.onkeydown = function(e){
        e.preventDefault();
        keys[e.keyCode] = true;
    }
    window.onkeyup = function(e){
        e.preventDefault();
    }
    loc.appendChild(this.canvas);
}
function loop(update = function(dt){}){
    var now = performance.now();
    var lastTime = now;
    let f = function(){
        now = performance.now();
        let dt = (now - lastTime) / 1000;
        lastTime = now;
        update(dt);
        setTimeout(f, 1000 / 60);
    }
    setTimeout(f, 1);
}