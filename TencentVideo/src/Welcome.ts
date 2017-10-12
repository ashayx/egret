class Welcome extends egret.Sprite{
    constructor(){
        super();
        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.createGameScene, this);
    }

    /**
     * 创建游戏场景
     * Create a game scene
     */
    private selectNumber

    private createGameScene() {

        console.log(this.selectNumber)
        let vBox: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("vBox"));
        let stopBtn: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("stop_btn"));

        let stageW = this.stage.stageWidth;
        let stageH = this.stage.stageHeight;
        let that = this

        let stageOne = this.createBitmapByName("stage_png");
        this.addChild(stageOne);
        stageOne.width = stageW;
        stageOne.height = stageH;
        stageOne.anchorOffsetX = stageW / 2;
        stageOne.anchorOffsetY = stageH / 2;
        stageOne.x += stageW / 2;
        stageOne.y += stageH / 2;

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
        stageTop.width = stageW;
        stageTop.height = stageH / 5;
        stageTop.x = 0;
        stageTop.y = 0;

        let person = this.createBitmapByName("person_png");
        this.addChild(person);
        person.width = stageW * .42;
        person.height = stageW * .42 * .61;
        person.x = stageW * .29;
        person.y = stageH * 0.40;

        let lighting = this.createBitmapByName("lighting_png");
        this.addChild(lighting);
        lighting.width = stageW * 0.2;
        lighting.height = stageH;
        lighting.x = stageW * 0.27;
        lighting.y = 0;
        lighting.alpha = 0;

        var spr1: egret.Sprite = new egret.Sprite();
        spr1.graphics.beginFill(0xffffff, 0);
        spr1.graphics.drawRect(0, 0, stageW * 0.42 / 3, 100);
        spr1.graphics.endFill();
        spr1.x = stageW * 0.28;
        spr1.y = stageH * 0.46;
        this.addChild(spr1);
        console.log(stageH, stageW)

        var spr2: egret.Sprite = new egret.Sprite();
        spr2.graphics.beginFill(0xffffff, 0);
        spr2.graphics.drawRect(0, 0, stageW * 0.42 / 3, 100);
        spr2.graphics.endFill();
        spr2.x = stageW * 0.28 + stageW * 0.42 / 3;
        spr2.y = stageH * 0.46;
        this.addChild(spr2);

        var spr3: egret.Sprite = new egret.Sprite();
        spr3.graphics.beginFill(0xffffff, 0);
        spr3.graphics.drawRect(0, 0, stageW * 0.42 / 3, 120);
        spr3.graphics.endFill();
        spr3.x = stageW * 0.28 + stageW * 0.42 / 3 * 2;
        spr3.y = stageH * 0.40;
        this.addChild(spr3);

        let startButton = this.createBitmapByName("stage_button_png");
        this.addChild(startButton);
        startButton.x = stageW * 0.4;
        startButton.y = stageH * 0.85;
        startButton.width = stageW * 0.2;
        startButton.height = stageW * 0.2 * 0.43;
        startButton.anchorOffsetX = stageW * 0.1;
        startButton.anchorOffsetY = stageW * 0.2 * 0.43 / 2;
        startButton.x += stageW * 0.1;
        startButton.y += stageW * 0.2 * 0.43 / 2;
        startButton.alpha = 0;

        spr1.touchEnabled = true;
        spr1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lighting.x = stageW * 0.27;
            lighting.alpha = 1;
            this.buttonAnimation(startButton)
            this.selectNumber = 1
            console.log(this.selectNumber)
            // ss();
        }, this);

        spr2.touchEnabled = true;
        spr2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lighting.x = stageW * 0.4;
            lighting.alpha = 1;
            this.buttonAnimation(startButton)
            this.selectNumber = 3
            console.log(this.selectNumber)
        }, this);

        spr3.touchEnabled = true;
        spr3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lighting.x = stageW * 0.53;
            lighting.alpha = 1;
            this.buttonAnimation(startButton)
            this.selectNumber = 5
            console.log(this.selectNumber)
        }, this);



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
        curtainTop.width = stageW;
        curtainTop.height = stageH / 5;
        curtainTop.x = 0;
        curtainTop.y = 0;

        let logo = this.createBitmapByName("logo_png");
        this.addChild(logo);
        logo.width = stageW * 0.4;
        logo.height = stageW * 0.08;
        logo.x = stageW * 0.3;
        logo.y = stageH * 0.1;


        let curtainLeftAnimation = egret.Tween.get(curtainLeft)
        curtainLeftAnimation.to({ x: -stageW / 2 }, 2500).call(function () {
            that.removeChild(curtainLeft);
        })

        let curtainRightAnimation = egret.Tween.get(curtainRight)
        curtainRightAnimation.to({ x: stageW }, 2500).call(function () {
            that.removeChild(curtainRight);
        })

        let curtainTopAnimation = egret.Tween.get(curtainTop)
        curtainTopAnimation.to({ y: -stageH / 5 }, 2500).call(function () {
            that.removeChild(curtainTop);
        })



        startButton.touchEnabled = true;
        startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            vBox.style.display = "block"
            let videoID = `v${this.selectNumber}`

            let videoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(videoID))
            let img: HTMLVideoElement = (<HTMLVideoElement>document.getElementById('img1'))
            img.style.display = 'block'
            videoX.style.display = 'block'
            videoX.play();
            that.selectNumber += 1


            function videoXEnd() {
                stopBtn.style.display = "block"
                console.log('第一段播放完成', that.selectNumber)
            }
            videoX.addEventListener('ended', videoXEnd,false)

            // 视频暂停时按钮
            
            function nextvideoXPlay() {
                // 移除第一段视频监听
                videoX.removeEventListener('ended', videoXEnd, false)

                let nextVideoID = `v${that.selectNumber}`
                console.log('播放', nextVideoID)
                let nextvideoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(nextVideoID))


                videoX.style.display = "none"
                stopBtn.style.display = 'none'
                nextvideoX.style.display = "block"


                nextvideoX.play();
                img.style.display = 'none'


                that.stage.addChild(new End(that.selectNumber));
                that.stage.removeChild(that);

                function nextvideoXEnd() {
                    console.log('第二段播放完成')
                    vBox.style.display = "none"
                    nextvideoX.style.display = "none";
                    // 移除点击和第二视频监听
                    stopBtn.removeEventListener("touchstart", nextvideoXPlay, false);\
                    nextvideoX.removeEventListener('ended', nextvideoXEnd, false)
                }
                nextvideoX.addEventListener('ended', nextvideoXEnd, false)

            }
            stopBtn.addEventListener("touchstart", nextvideoXPlay, false);

        }, this);
    }

    private buttonAnimation(startButton) {
        let startButtonAnimation = egret.Tween.get(startButton)
        startButtonAnimation.to({ alpha: 1 }, 100)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: 10 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: 8 }, 200)
            .to({ scaleX: 1, scaleY: 1, rotation: 0 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: -10 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: -8 }, 200)
            .to({ scaleX: 1, scaleY: 1, rotation: 0 }, 200)
    }


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