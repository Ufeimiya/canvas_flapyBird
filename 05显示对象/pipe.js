// 管子的构造函数
function Pipe(x, speed, img2, img1, ctx) {
    this.x = x;
    this.speed = speed;
    this.pipeImg1 = img1;
    this.pipeImg2 = img2;
    this.ctx = ctx;

    // 上管子的高度
    this.pipeHight = 50 + Math.random() * 200;
}

Pipe.prototype.update = function (dt) {
    this.x = this.x + this.speed * dt;
    if(this.x <= -52){
        this.x += 200 * 5;
    }
};

Pipe.prototype.render = function () {

    this.ctx.drawImage(this.pipeImg1, this.x, -(420 - this.pipeHight));
    this.ctx.drawImage(this.pipeImg2, this.x, this.pipeHight + 150);
};