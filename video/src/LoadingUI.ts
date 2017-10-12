class LoadingUI extends egret.Sprite {

   public constructor() {
        super();
        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private textField:egret.TextField;
    // private bg

    private createView():void {
        // 百分比进度
       
    }

    public setProgress(current:number, total:number):void {
        let loadScore:any = `${current/total}`;
        let score = Math.floor( loadScore *100);
        this.textField.text = `${score}%`
    }

    private onAddToStage(event:egret.Event) {
        loadingPage = () => {
            RES.getResByUrl('resource/assets/loading_bg.png',this.onComplete,this,RES.ResourceItem.TYPE_IMAGE); 
        }
        loadingPage ()
    }   

    private onComplete(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var bg: egret.Bitmap = new egret.Bitmap(img);
        bg.x = 0;
        bg.y = 0;
        bg.width = stageW;
        bg.height = stageH;

        this.textField = new egret.TextField();
        this.textField.textColor = 0xffffff;
        this.textField.x = stageW * .4;
        this.textField.y = stageH * .5;
        this.textField.width = stageW * .2;
        this.textField.height = stageW * .2 * .2;
        this.textField.textAlign = "center";
        
        this.addChild(bg);
        this.addChild(this.textField);
        RES.getResByUrl('resource/assets/loading_title.png',this.title,this,RES.ResourceItem.TYPE_IMAGE);
    }

    private title(event:any) {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var title: egret.Bitmap = new egret.Bitmap(img);
        title.x = stageW * .35;
        title.y = stageH * .1;
        title.width = stageW * .3;
        title.height = stageW * .3 * .39;
        this.addChild(title);
        RES.getResByUrl('resource/assets/loading_1.png',this.L,this,RES.ResourceItem.TYPE_IMAGE);
    }

    private L(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var L: egret.Bitmap = new egret.Bitmap(img);
        L.width = 40;
        L.height = 48;
        L.x = stageW * 0.35;
        L.y = stageH * .35;
        this.addChild(L);
        let LAni = egret.Tween.get(L, { loop:true} )
        LAni.to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(3500)
        RES.getResByUrl('resource/assets/loading_2.png',this.O,this,RES.ResourceItem.TYPE_IMAGE);
    }
    private O(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var O: egret.Bitmap = new egret.Bitmap(img);
        O.width = 40;
        O.height = 48;
        O.x = stageW * 0.35 + 40;
        O.y = stageH * .35;
        this.addChild(O);
         let OAni = egret.Tween.get(O, { loop:true} )
        OAni.wait(500).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(3000)

       
        RES.getResByUrl('resource/assets/loading_3.png',this.A,this,RES.ResourceItem.TYPE_IMAGE);
    }
    private A(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var A: egret.Bitmap = new egret.Bitmap(img);
        A.width = 40;
        A.height = 48;
        A.x = stageW * 0.35 + 80;
        A.y =  stageH * .35;
        this.addChild(A);
         let AAni = egret.Tween.get(A, { loop:true} )
        AAni.wait(1000).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(2500)

        
        RES.getResByUrl('resource/assets/loading_4.png',this.D,this,RES.ResourceItem.TYPE_IMAGE);
    }
    private D(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var D: egret.Bitmap = new egret.Bitmap(img);
        D.width = 40;
        D.height = 48;
        D.x = stageW * 0.35 + 120;
        D.y =  stageH * .35;
        this.addChild(D);
        let DAni = egret.Tween.get(D, { loop:true} )
        DAni.wait(1500).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(2000)

       
        RES.getResByUrl('resource/assets/loading_5.png',this.I,this,RES.ResourceItem.TYPE_IMAGE);
       
    }
    private I(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var I: egret.Bitmap = new egret.Bitmap(img);
        I.width = 40;
        I.height = 48;
        I.x = stageW * 0.35 + 160 ;
        I.y =  stageH * .35;
        this.addChild(I);
         let IAni = egret.Tween.get(I, { loop:true} )
        IAni.wait(2000).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(1500)

       
        RES.getResByUrl('resource/assets/loading_6.png',this.N,this,RES.ResourceItem.TYPE_IMAGE);
        
    }
    private N(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var N: egret.Bitmap = new egret.Bitmap(img);
        N.width = 40;
        N.height = 48;
        N.x = stageW * 0.35 + 200;
        N.y =  stageH * .35;
        this.addChild(N);
         let NAni = egret.Tween.get(N, { loop:true} )
        NAni.wait(2500).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(1000)

       
        RES.getResByUrl('resource/assets/loading_7.png',this.G,this,RES.ResourceItem.TYPE_IMAGE);
    }
    private G(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var G: egret.Bitmap = new egret.Bitmap(img);
        G.width = 40;
        G.height = 48;
        G.x = stageW * 0.35 + 240;
        G.y =  stageH * .35;
        this.addChild(G);
        let GAni = egret.Tween.get(G, { loop:true} )
        GAni.wait(3000).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(500)

        RES.getResByUrl('resource/assets/loading_tip.png',this.tip,this,RES.ResourceItem.TYPE_IMAGE);
    }
    private tip(event:any):void {
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;

        var img: egret.Texture = <egret.Texture>event;
        var tip: egret.Bitmap = new egret.Bitmap(img);
        tip.width = stageW * 0.5;
        tip.height = stageW * 0.5 * .15;
        tip.x = stageW * 0.25;
        tip.y =  stageH * .7;
        this.addChild(tip);

        let tipANi = egret.Tween.get(tip)
        tipANi.wait(1000).to({alpha: 0})

        RES.loadGroup("preload");
    }
    
}
declare let loadingPage: any;