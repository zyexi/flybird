/**
 * Created by ysl on 2017/7/25.
 */
(function () {
  function Pipe(option){
    this.ctx=option.ctx;
    this.cs=option.cs;
    this.y=Math.round(Math.random()*150)+100 ;
    this.spaceX=200;
    this.spaceY=100;
    this.upImg=option.upImg;
    this.downImg=option.downImg;
    this.index=option.index;
    this.x=this.spaceX*this.index;
    this.upH=this.upImg.height;
    this.upW=this.upImg.width;
    this.downW=this.downImg.width;
    this.downH=this.downImg.height;
    this.j=0;
  };

  Pipe.prototype={
    constructor:Pipe,
    draw: function () {

      this.x-=5;
      if(this.x<-this.spaceX){
        this.x=5*this.spaceX;
        this.y=Math.round(Math.random()*150)+100 ;
      }

      this.ctx.drawImage(this.upImg,0,this.upH-this.y,this.upW,this.y,this.x,0,this.upW,this.y);

      this.ctx.drawImage(this.downImg,0,0,this.downW,this.cs.height-this.y-this.spaceY,this.x,this.y+this.spaceY,this.downW,
        this.cs.height-this.y-this.spaceY);

    }
  }

  Game.Pipe=Pipe;
})()