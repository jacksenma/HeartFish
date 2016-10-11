var waveObj=function () {
    this.x=[];
    this.y=[];
    this.alive=[];
    this.r=[];//半径
    // this.alpha=0;

}
waveObj.prototype.num=10;
waveObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.r[i]=0;

    }
}

waveObj.prototype.draw=function () {

    ctx1.save();
    ctx1.lineWidth=2;
    ctx1.shadowBlur=10;
    ctx1.shadowColor="white";
    for(var i=0;i<this.num;i++){
        if(this.alive[i]){
            this.r[i]+=deltatime*0.05;
            if(this.r[i]>60){
                this.alive[i]=false;
                break;
            }


            var alpha=1-this.r[i]/60;
            //draw wave
            ctx1.beginPath();
            // ctx1.strokeStyle="black";
            ctx1.arc(this.x[i],this.y[i],this.r[i],0,2*Math.PI);
            // ctx1.stroke();
            ctx1.closePath();
            ctx1.strokeStyle="rgba(255,255,255,"+alpha+")";
            ctx1.stroke();

        }
    }
    ctx1.restore();
}

waveObj.prototype.born=function (x,y) {
    for(var i=0;i<this.num;i++){
        if(!this.alive[i]){
            //born
            console.log('born');
            this.alive[i]=true;
            this.r[i]=10;
            this.x[i]=x;
            this.y[i]=y;
            return;//important　生出来一个就可以返回，否则所有的都会生成。
        }
    }
}