/**
 * Created by ysl on 2017/7/25.
 */
(function (Game) {
  function Bird(option){
    this.ctx=option.ctx;
    this.cs=option.cs;
    this.img=option.img;
    this.w=52;
    this.h=45;
    this.x=option.x||100;
    this.y=option.y||50;
    //�������������
    this.a=0.0005;
    this.speed=0;
    this.angle=0;
    this.maxSpeed=0.3;
    this.maxAngle=45;
    this.index=0;
  };

  Bird.prototype={
    constructor:Bird,
    draw: function (Dvalue) {

      this.speed += this.a*Dvalue;
      this.y+=this.speed*Dvalue+1/2*this.a*Dvalue*Dvalue;
      //�޶�����ٶ�
      if(this.speed>=this.maxSpeed){
          this.speed=this.maxSpeed;
      }
      //���ݱ���������ת�Ƕ�
      this.angle=this.speed/this.maxSpeed*this.maxAngle*Math.PI/180;
      //������������
      this.ctx.save();
      //�ı�����
      this.ctx.translate(this.x,this.y);
      this.ctx.rotate(this.angle);
      //���»�С��
      this.ctx.drawImage(this.img,this.index*this.w,0,this.w,this.h,-this.w/2,-this.h/2,this.w,this.h);
      //�ָ���������
      this.ctx.restore();
      this.index++;
      this.index%=3;
    }
  }
  Game.Bird=Bird;
})(Game)