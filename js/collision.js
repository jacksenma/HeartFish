//判断大鱼和过时的距离
function momAndFruit() {
    if(!data.gameover){
    for(var i=0;i<fruit.num;i++){
        if(fruit.alive[i]){
            var l=calLength2(fruit.x[i],fruit.y[i],mom.x,mom.y);
            if(l<300&&fruit.l[i]>=14){//距离足够近且已经长成熟
                //fruit ate
                fruit.dead(i);
                // fruit.alive[i]=false;
                data.fruitNum++;
                mom.momBodyCount++;
                if(mom.momBodyCount>=7){
                    mom.momBodyCount=7;
                }
                if(fruit.type[i]=="blue"){
                    data.double=2;
                }
                wave.born(fruit.x[i],fruit.y[i]);
            }

        }
    }
}
}

//mom baby collison
function momBabyCollision() {
    if(!data.gameover){
    if(data.fruitNum>0){
    var l =calLength2(mom.x,mom.y,baby.x,baby.y);
    if(l<500){
        //baby recover
        baby.babyBodyCounter=0;//回到第0张图片

        // data.reset();
        mom.momBodyCount=0;//颜色变0

        //score update
        data.addScore();
        wave.born(mom.x,mom.y);

    }
    }
}
}