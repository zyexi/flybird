/**
 * Created by ysl on 2017/7/25.
 */
(function () {
  function Land(option){
    this.ctx=option.ctx;
    this.cs=option.cs;
    this.img=option.img;
    this.w=this.img.width;
    this.h=this.img.height;
    this.x=0;
    this.y=this.cs.height-this.h;
    this.count=Math.ceil(this.cs.width/this.w) +1;
    this.j=0//设置大地的移动

  };

  Land.prototype={
    constructor:Land,
    draw: function () {

      for(var i=0;i<this.count;i++){
        this.x=this.w*i-this.j;
        if(this.x<-this.w){
            this.x=this.w*this.count;
        }
        this.ctx.drawImage(this.img,0,0,this.w,this.h,this.x,this.y,this.w,this.h);
      }

      this.j+=5;
      if(this.j>this.w){
          this.j=0;
      }

    }
  }

  Game.Land=Land;
})(Game)