class Main extends egret.DisplayObjectContainer {

    /**
     * 加载进度界面
     * Process interface loading
     */
    private loadingView: LoadingUI;
    private _video:egret.Video;

    public constructor() {
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {

        egret.lifecycle.addLifecycleListener((context) => {
            // custom lifecycle plugin

            context.onUpdate = () => {
                // console.log('hello,world')
            }
        })

        egret.lifecycle.onPause = () => {
            egret.ticker.pause();
        }

        egret.lifecycle.onResume = () => {
            egret.ticker.resume();
        }


        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);

        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    private onConfigComplete(event: RES.ResourceEvent): void {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    }

    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    private onResourceLoadComplete(event: RES.ResourceEvent) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onItemLoadError(event: RES.ResourceEvent) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    }

    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    private onResourceLoadError(event: RES.ResourceEvent) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    }

    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    private onResourceProgress(event: RES.ResourceEvent) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    }

    private textfield: egret.TextField;

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private selectNumber

    private createGameScene() {
        
        console.log(this.selectNumber)
        let vBox: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("vBox"));
        let v1: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("v1"));
        let v2: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("v2"));
        let stopBtn: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("stop_btn"));
        
        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        let that = this
        
        
        let stageOne = this.createBitmapByName("stage_png");
        this.addChild(stageOne);
        stageOne.width = stageW;
        stageOne.height = stageH;
        stageOne.anchorOffsetX = stageW /2;
        stageOne.anchorOffsetY = stageH /2;
        stageOne.x += stageW /2;
        stageOne.y += stageH /2;

        let stageLeft = this.createBitmapByName("stage_left_png");
        this.addChild(stageLeft);
        stageLeft.width = stageW / 2;
        stageLeft.height = stageH;
        stageLeft.x = 0;
        stageLeft.y = 0;

        let stageRight = this.createBitmapByName("stage_right_png");
        this.addChild(stageRight);
        stageRight.width = stageW / 2;
        stageRight.height = stageH;
        stageRight.x = stageW * 0.5;
        stageRight.y = 0; 
        
        let stageTop = this.createBitmapByName("curtain_top_png");
        this.addChild(stageTop);
        stageTop.width = stageW ;
        stageTop.height = stageH / 5;
        stageTop.x = 0;
        stageTop.y = 0; 

        let person = this.createBitmapByName("person_png");
        this.addChild(person);
        person.width = stageW;
        person.height = stageH / 2;
        person.x = 0;
        person.y = stageH * 0.35; 

        let lighting = this.createBitmapByName("lighting_png");
        this.addChild(lighting);
        lighting.width = stageW * 0.2;
        lighting.height = stageH ;
        lighting.x = stageW * 0.24;
        lighting.y = 0;
        lighting.alpha = 0;

        var spr1:egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0xffffff, 0);
        spr1.graphics.drawRect(0, 0, 90, 100);
        spr1.graphics.endFill();
        spr1.x = stageW * 0.27;
        spr1.y = stageH * 0.46;
        this.addChild( spr1 );
        console.log(stageH,stageW)

        var spr2:egret.Sprite = new egret.Sprite();
        spr2.graphics.beginFill(0xffffff, 0);
        spr2.graphics.drawRect(0, 0, 90, 100);
        spr2.graphics.endFill();
        spr2.x = stageW * 0.27 + 100;
        spr2.y = stageH * 0.46;
        this.addChild( spr2 );

        var spr3:egret.Sprite = new egret.Sprite();
        spr3.graphics.beginFill(0xffffff, 0);
        spr3.graphics.drawRect(0, 0, 90, 120);
        spr3.graphics.endFill();
        spr3.x = stageW * 0.27 + 200;
        spr3.y = stageH * 0.40;
        this.addChild( spr3 );   
        
        let startButton = this.createBitmapByName("stage_button_png");
        this.addChild(startButton);
        startButton.x =  stageW * 0.4;
        startButton.y = stageH * 0.85;
        startButton.width = stageW * 0.2; 
        startButton.height =  stageH * 0.12;
        startButton.anchorOffsetX = stageW * 0.1; 
        startButton.anchorOffsetY =  stageH * 0.06;
        startButton.x +=  stageW * 0.1;
        startButton.y += stageH * 0.06;
        startButton.alpha = 0;

        spr1.touchEnabled = true;
        spr1.addEventListener( egret.TouchEvent.TOUCH_TAP, function() {
            lighting.x = stageW * 0.24;
            lighting.alpha = 1;
            this.buttonAnimation(startButton)
            this.selectNumber = 1
            console.log(this.selectNumber )
            // ss();
        }, this );
        
        spr2.touchEnabled = true;
        spr2.addEventListener( egret.TouchEvent.TOUCH_TAP, function() {
            lighting.x = stageW * 0.4;
            lighting.alpha = 1;
            this.buttonAnimation(startButton)
            this.selectNumber = 3
            console.log(this.selectNumber )
        }, this );

        spr3.touchEnabled = true;
        spr3.addEventListener( egret.TouchEvent.TOUCH_TAP, function() {
            lighting.x = stageW * 0.55;
            lighting.alpha = 1;
            this.buttonAnimation(startButton)
            this.selectNumber = 5
            console.log(this.selectNumber )
        }, this );

        

        let curtainLeft = this.createBitmapByName("curtain_left_png");
        this.addChild(curtainLeft);
        curtainLeft.width = stageW / 2;
        curtainLeft.height = stageH;
        curtainLeft.x = 0;
        curtainLeft.y = 0;

        let curtainRight = this.createBitmapByName("curtain_right_png");
        this.addChild(curtainRight);
        curtainRight.width = stageW / 2;
        curtainRight.height = stageH;
        curtainRight.x = stageW / 2;
        curtainRight.y = 0; 

        let curtainTop = this.createBitmapByName("curtain_top_png");
        this.addChild(curtainTop);
        curtainTop.width = stageW ;
        curtainTop.height = stageH / 5;
        curtainTop.x = 0;
        curtainTop.y = 0; 
        
        
        let curtainLeftAnimation = egret.Tween.get( curtainLeft )
        curtainLeftAnimation.to( {x : -stageW / 2}, 2500 ).call(function() {
            that.removeChild(curtainLeft);
        })

        let curtainRightAnimation = egret.Tween.get( curtainRight )
        curtainRightAnimation.to( {x : stageW}, 2500 ).call(function() {
            that.removeChild(curtainRight);
        })

        let curtainTopAnimation = egret.Tween.get( curtainTop )
        curtainTopAnimation.to( {y : -stageH / 5}, 2500 ).call(function() {
            that.removeChild(curtainTop);
        })

        

        
        // vBox.style.display = "block" 
        // v1.play();
        

        startButton.touchEnabled = true;
        startButton.addEventListener( egret.TouchEvent.TOUCH_TAP, function() {
             vBox.style.display = "block" 
             let videoID:any = `v${this.selectNumber}`
             this.selectNumber += 1
             console.log(this.selectNumber)

             let videoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(videoID))
             console.log(videoID) 
             videoX.style.display = 'block'
             videoX.play();

              videoX.onended = function() {
                console.log('播放完成')
                stopBtn.style.display = "block"
              };

            // 视频暂停时按钮
            stopBtn.addEventListener("touchstart", function (e) {
                let nextVideoID = `v${that.selectNumber}`
                console.log(nextVideoID)
                let nextvideoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(nextVideoID))

                videoX.style.display = "none"
                stopBtn.style.display = 'none'
                nextvideoX.style.display = "block"
                nextvideoX.play();

                nextvideoX.onended = function() {
                    console.log('播放完成2')
                };   

            }, true);
        
           
        }, this );

       
        
    }

    private buttonAnimation(startButton) {
        let startButtonAnimation = egret.Tween.get( startButton )
        startButtonAnimation.to({alpha:1},100)
                            .to( {scaleX :1.2,scaleY :1.2,rotation:10}, 200 )
                            .to( {scaleX :1.2,scaleY :1.2,rotation:8}, 200 )
                            .to( {scaleX :1,scaleY :1,rotation:0}, 200)
                            .to( {scaleX :1.2,scaleY :1.2,rotation:-10}, 200 )
                            .to( {scaleX :1.2,scaleY :1.2,rotation:-8}, 200 )
                            .to( {scaleX :1,scaleY :1,rotation:0}, 200)
    }

    private endPage
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    private createBitmapByName(name: string) {
        let result = new egret.Bitmap();
        let texture: egret.Texture = RES.getRes(name);
        result.texture = texture;
        return result;
    }
   
}
declare let ss:Function;


