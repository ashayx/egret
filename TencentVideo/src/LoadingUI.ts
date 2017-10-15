class LoadingUI extends egret.Sprite {

   public constructor() {
        super();
        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private textField:egret.TextField;

    private createView():void {
        // 百分比进度
        this.textField = new egret.TextField();
        this.textField.textColor = 0xffffff;
        this.textField.x = 100;
        this.textField.y = 150;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }

    public setProgress(current:number, total:number):void {
        // this.textField.text = `Loading...${current}/${total}`;
        let loadScore:any = `${current/total}`;
        let score = Math.floor( loadScore *100);
        this.textField.text = `${score}%`
    }

    private onAddToStage(event:egret.Event) {
        RES.getResByUrl('../resource/assets/loading_bg.png',this.onComplete,this,RES.ResourceItem.TYPE_IMAGE);
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
        
        this.addChild(bg);
        this.addChild(this.textField);
    }
    
}
