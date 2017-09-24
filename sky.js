/**
 * Created by ysl on 2017/7/25.
 */
(function () {
  function Sky(option){
    this.ctx=option.ctx;
    this.cs=option.cs;
    this.img=option.img;
    this.x=0;
    this.y=0;
    this.h=this.cs.height;
    this.w=this.cs.width/this.cs.height*this.img.height;
    this.count=Math.ceil(this.cs.width/this.w)+1;
    this.off=0;
  };

  Sky.prototype={
    constructor:Sky,

    draw: function () {
      
      for(var i=0;i<this.count;i++){
        this.x=this.w*i-this.off;
        if(this.x<-this.w){
            this.x=this.w*this.count;
        }
        this.ctx.drawImage(this.img,this.x,this.y,this.w,this.h);
      }
      this.off+=10;
      if(this.off>this.w){
          this.off=0;
      }
    }
  }

  Game.Sky=Sky;
})(Game)