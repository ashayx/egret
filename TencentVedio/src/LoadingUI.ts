class LoadingUI extends egret.Sprite {

   public constructor() {
        super();
        this.createView();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private textField:egret.TextField;
    private loadingBg:egret.Bitmap;

    private createView():void {
        // 百分比进度
        this.textField = new egret.TextField();
        this.textField.textColor = 0x336699;
        this.textField.x = 100;
        this.textField.y = 600;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    }

    public setProgress(current:number, total:number):void {
        // this.textField.text = `Loading...${current}/${total}`;
        let loadScore:any = `${current/total}`;
        let score = Math.floor( loadScore *100);
        this.textField.text = `loading...${score}%`
    }

    private onAddToStage(event:egret.Event) {
        RES.getResByUrl('resource/assets/stage.png',this.onComplete,this,RES.ResourceItem.TYPE_IMAGE);
    }

    private onComplete(event:any):void {
        var img: egret.Texture = <egret.Texture>event;
        var bitmap: egret.Bitmap = new egret.Bitmap(img);
        bitmap.x = 0;
        bitmap.y = 0;
        bitmap.width = 640;
        bitmap.height = 1136;
        this.addChild(bitmap);
        this.addChild(this.textField);
    }
}
