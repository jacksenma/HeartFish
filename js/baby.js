var babyObj=function () {
    this.x;
    this.y;
    this.angle;
    this.eye=new Image();
    this.body=new Image();
    this.tail=new Image();

    this.tailTimer=0;
    this.tailCount=0;

    this.eyeTimer=0;
    this.eyeCount=0;
    this.eyeInterval=1000;

    this.babyBodyTimer=0;
    this.babyBodyCounter=0;


    
}
babyObj.prototype.init=function () {
    this.x=canW*0.5-50;
    this.y=canH*0.5+50;
    this.angle=0;
    // this.eye.src="./src/babyEye0.png";
    this.body.src="./src/babyFade0.png";
    // this.tail.src="./src/babyTail0.png";

}
babyObj.prototype.draw=function () {
    //ctx1
    this.x=lerpDistance(mom.x,this.x,0.98);
    this.y=lerpDistance(mom.y,this.y,0.98);

    var deltaY=mom.y-this.y;
    var deltaX=mom.x-this.x;
    var beta=Math.atan2(deltaY,deltaX)+Math.PI;

    //lerp angle
    this.angle=lerpAngle(beta,this.angle,0.6);

    this.tailTimer+=deltatime;
    if(this.tailTimer>50){
        this.tailCount=(this.tailCount+1)%8;
        this.tailTimer%=50;
    }

    //baby eye眨眼睛
    this.eyeTimer+=deltatime;
    if(this.eyeTimer>this.eyeInterval){
        this.eyeCount=(this.eyeCount+1)%2;//切换图片
        this.eyeTimer%=this.eyeInterval;//计时器归零

        if(this.eyeCount==0){//此时睁眼状态
            this.eyeInterval=Math.random()*1500+2000;//设置距离播放下一幅图片的时间，也就是距离闭眼的时间，也就是眼睛睁着的时间
        }else{
            this.eyeInterval=200;
        }
    }

    //baby body
    this.babyBodyTimer+=deltatime;
    if(this.babyBodyTimer>300){
        this.babyBodyCounter=(this.babyBodyCounter+1);
        this.babyBodyTimer%=300;//每过300ms播放一张图片，没有这句则一下子变白
        if(this.babyBodyCounter>19){
            this.babyBodyCounter=19;
            //game over
            data.gameover=true;
        }
    }




    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);

    var count=this.tailCount;
    var eyeC=this.eyeCount;
    var bodycount=this.babyBodyCounter;
    ctx1.drawImage(babyTail[count],-babyTail[count].width*0.5+25,-babyTail[count].height*0.5);
    ctx1.drawImage(babyBody[bodycount],-babyBody[bodycount].width*0.5,-babyBody[bodycount].height*0.5);
    ctx1.drawImage(babyEye[eyeC],-babyEye[eyeC].width*0.5,-babyEye[eyeC].height*0.5);

    ctx1.restore();
}