var fruitObj=function () {
    this.alive=[];//bool
    this.x=[];
    this.y=[];
    this.aneNO=[];
    this.l=[];//果实大小
    this.speed=[];//漂浮速度
    this.type=[];//果实类型
    this.orange=new Image();
    this.blue=new Image();
}

fruitObj.prototype.num=30;
fruitObj.prototype.init=function () {
    for(var i=0;i<this.num;i++){
        this.alive[i]=false;
        this.x[i]=0;
        this.y[i]=0;
        this.speed[i]=Math.random()*0.017+0.003;
        this.type[i]="";
        this.aneNO[i]=0;
        // this.born(i);
    }
    this.orange.src="./src/fruit.png";
    this.blue.src="./src/blue.png";
}
fruitObj.prototype.draw=function () {
    for(var i=0;i<this.num;i++){
        //draw
        //find an ane,grow,fly up
        if(this.alive[i]){
            // var pic=new Image();
            var pic;
            if(this.type[i]=="blue"){
                 pic=this.blue;
            }else
                pic=this.orange;
            if(this.l[i]<=14){//grow
                this.x[i]=ane.headx[this.aneNO[i]];
                this.y[i]=ane.heady[this.aneNO[i]];
                this.l[i]+=this.speed[i]*deltatime;
            }else{
                this.y[i]-=this.speed[i]*7*deltatime*Math.random();
            }
            ctx2.drawImage(pic,this.x[i]-this.l[i]*0.5,this.y[i]-this.l[i]*0.5,this.l[i],this.l[i]);
            if(this.y[i]<10){
                this.alive[i]=false;
            }
        }

    }
}
fruitObj.prototype.dead=function (i) {
    this.alive[i]=false;
}
fruitObj.prototype.update=function () {
    var num=0;
    for(var i=0;i<this.num;i++){
        if(this.alive[i])
            num++;
    }
}

fruitObj.prototype.born=function (i) {
    // var aneID =Math.floor(Math.random()*ane.num);
    // this.x[i]=ane.headx[aneID];
    // this.y[i]=ane.heady[aneID];
    this.aneNO[i]=Math.floor(Math.random()*ane.num);
    this.l[i]=0;

    this.alive[i]=true;
    var ran=Math.random();
    if(ran<0.3){
        this.type[i]='blue';
    }else{
        this.type[i]='orange';
    }


}
function fruitMonitor() {
    var num=0;
    // console.log(fruit.num);
    for(var i=0;i<fruit.num;i++){//注意这里是fruit.num=30=this.num
        if(fruit.alive[i])
            num++;

    }
    if(num<15){
        //send fruit
        sendFruit();
        return;
    }
}

function sendFruit() {
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]==false){
            fruit.born(i);
            return ;
        }
    }
}