var dustObj=function () {
    this.x=[];
    this.y=[];
    this.amp=[];//振幅
    this.NO=[];//选择图片

    this.alpha=0;
}
dustObj.prototype.num=30;
dustObj.prototype.init=function () {

        for(var i=0;i<this.num;i++){
            this.x[i]=Math.random()*canW;
            this.y[i]=Math.random()*canH;
            this.amp[i]=20+Math.random()*25;
            this.NO[i]=Math.floor(Math.random()*7);
        }
}
    // this.alpha=0;


dustObj.prototype.draw=function () {
    // this.alpha
    this.alpha+=deltatime*0.0008;
    var l=Math.sin(this.alpha);

    for(var i=0;i<this.num;i++){
        var no=this.NO[i];
        ctx1.drawImage(dustp[no],this.x[i]+this.amp[i]*l,this.y[i]);
    }

}