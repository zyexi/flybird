(function (w) {
  function Game(option){
    this.ctx=option.ctx;
    this.cs=option.cs;
    this.startTime=new Date();
    this.endTime=0;
    this.Dvalue=0;
    this.imgs=['birds','land','sky','pipe1','pipe2'];
    this.isRun=false;
    this.roles=[];
    this.hero=null;
  };


  Game.prototype={
    constructor:Game,
    start: function () {
       this.isRun=true;
      var that=this;
      this.loadImg(function (imgList) {
        console.log(imgList);
        that.initGame(imgList);
        that.render();
        that.control();
      })
    },
    gameOver: function () {
      this.isRun=true;
    },
    loadImg: function (callback) {
      var imgList={};
      var count=0;
      var len=this.imgs.length
      for(var i=0;i<len;i++){
        var obj=this.imgs[i];
        var img=new Image();
        img.src='imgs/'+obj+'.png'
        imgList[obj]=img;
        img.onload= function () {
          count++;
          if(count==len){
            callback&&callback(imgList);
          }
        }
      }
    },
    initGame:function(imgs){//创建角色功能函数
    //创建天空对象
      var sky=new Game.Sky({
        ctx:this.ctx,
        img:imgs['sky'],
        cs:this.cs
      });
      this.roles.push(sky);

    //创建柱子
      for(var i=0;i<6;i++){
        var pipe=new Game.Pipe({
          ctx:this.ctx,
          cs:this.cs,
          upImg:imgs['pipe2'],
          downImg:imgs['pipe1'],
          index:i+1
        });
        this.roles.push(pipe);
      }


      //创建大地
      var land=new Game.Land({
        ctx:this.ctx,
        cs:this.cs,
        img:imgs['land']
      });
      this.roles.push(land);

    //创建小鸟
      var bird=new Game.Bird({
        ctx:this.ctx,
        img:imgs['birds'],
        cs:this.cs
      });
      this.hero=bird;
      this.roles.push(bird);

    },
    render: function () {
      var timer=null;
      var that=this;
      timer=setInterval(function () {
        if(that.isRun){
          that.ctx.clearRect(0,0,that.cs.width,that.cs.height);
          that.ctx.beginPath();
          //计算时间差
          that.endTime=new Date();
          that.Dvalue=that.endTime-that.startTime;
          that.startTime=that.endTime;
          //遍历所有创建的对象进行渲染
          that.roles.forEach(function (v) {
            v.draw(that.Dvalue);
          })
        }


      },50)
    },

    control: function () {
      var that=this;
      this.cs.onclick= function () {
        that.hero.speed=-0.3;
      };

      document.onkeyup= function (e) {
        if(e.keyCode==32){
            that.hero.speed=-0.3;
        }
      }
    }
  }


  w.Game=Game;
})(window)
