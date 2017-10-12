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
        isLoad = false
        let index= 0
            $('#ani').css('display','block')
            var timer = setInterval(function() {            
                index ++
                let src = `./resource/assets/curtain_${index}.png`
                $('#ani>img').attr('src', src)
            },100)

            setTimeout(()=> {
                clearTimeout(timer)
                $('#ani').css('visibility', 'hidden')
            },2500)
         welcomePage = () => {
             
            let vBox: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("vBox"));
            let stopBtn: HTMLVideoElement = (<HTMLVideoElement>document.getElementById("stop_btn"));

            let stageW = this.stage.stageWidth;
            let stageH = this.stage.stageHeight;
            let that = this
            console.log(stageW, stageH)

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

            let click = this.createBitmapByName("click_png");
            this.addChild(click);
            click.width = stageH * 0.1;
            click.height = stageH * 0.1;
            click.x = stageW * 0.34;
            click.y = stageH * 0.6;
            click.alpha = 0;

             let clickAnimation = egret.Tween.get(click)
             clickAnimation.wait(2500)
                            .to({ scaleX: 1.2,scaleY: 1.2,alpha:1 }, 600)
                            .to({ scaleX: 1,scaleY: 1 }, 600)
                            .to({ scaleX: 1.2,scaleY: 1.2 }, 600)
                            .to({ scaleX: 1,scaleY: 1,alpha:0 }, 600)
            

            var spr1: egret.Sprite = new egret.Sprite();
            spr1.graphics.beginFill(0xffffff, 0);
            spr1.graphics.drawRect(0, 0, stageW * 0.42 / 3, stageW * .19);
            spr1.graphics.endFill();
            spr1.x = stageW * 0.28;
            spr1.y = stageH * 0.46;
            this.addChild(spr1);
            

            var spr2: egret.Sprite = new egret.Sprite();
            spr2.graphics.beginFill(0xffffff, 0);
            spr2.graphics.drawRect(0, 0, stageW * 0.42 / 3, stageW * .19);
            spr2.graphics.endFill();
            spr2.x = stageW * 0.28 + stageW * 0.42 / 3;
            spr2.y = stageH * 0.46;
            this.addChild(spr2);

            var spr3: egret.Sprite = new egret.Sprite();
            spr3.graphics.beginFill(0xffffff, 0);
            spr3.graphics.drawRect(0, 0, stageW * 0.42 / 3, stageW * .40/2);
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
            	clickCtrl = 1
                lighting.x = stageW * 0.27;
                lighting.alpha = 1;
                this.buttonAnimation(startButton)
                this.selectNumber = 1
                console.log(this.selectNumber)
                // ss();
            }, this);

            spr2.touchEnabled = true;
            spr2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            	clickCtrl = 2
                lighting.x = stageW * 0.4;
                lighting.alpha = 1;
                this.buttonAnimation(startButton)
                this.selectNumber = 3
                console.log(this.selectNumber)
            }, this);

            spr3.touchEnabled = true;
            spr3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            	clickCtrl = 3
                lighting.x = stageW * 0.53;
                lighting.alpha = 1;
                this.buttonAnimation(startButton)
                this.selectNumber = 5
                console.log(this.selectNumber)
            }, this);
            
           
            let logo = this.createBitmapByName("logo_png");
            this.addChild(logo);
            logo.width = stageW * 0.4;
            logo.height = stageW * 0.08;
            logo.x = stageW * 0.3;
            logo.y = stageH * 0.1;

            let v1 = this.createBitmapByName("interview_stop_png");
            v1.width = stageW;
            v1.height = stageH;
            v1.x = 20;
            v1.y = 40;

            let v3 = this.createBitmapByName("recruit_stop_png");
            v3.width = stageW;
            v3.height = stageH;
            v3.x = 0;
            v3.y = 0;

            let v5 = this.createBitmapByName("swim_stop_png");
            v5.width = stageW;
            v5.height = stageH;
            v5.x = 0;
            v5.y = 0;

            // let zhenguanData = RES.getRes("clicktip_json");
            // let zhenguanTxtr = RES.getRes("clicktip_png");
            // let zhenguanFactory = new egret.MovieClipDataFactory(zhenguanData, zhenguanTxtr);
            // let zhenguan = new egret.MovieClip(zhenguanFactory.generateMovieClipData("zhenguan"));
            // zhenguan.y = 111;
            // zhenguan.x = 111;
            // zhenguan.width = 100;
            // zhenguan.height = 100;
            // this.addChild(zhenguan);
            // zhenguan.gotoAndPlay(0,1);
            // console.log(zhenguan)
            
            

            startButton.touchEnabled = true;
            startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                
                vBox.style.display = "block"
                let videoID = `v${this.selectNumber}`

                let videoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(videoID))

                videoX.style.display = 'block'
                videoX.play();

                that.selectNumber += 1

                setTimeout(function() {
                    if(that.selectNumber == 2) {
                        that.addChild(v1);
                    }else if(that.selectNumber == 4) {
                        that.addChild(v3);
                    }else if(that.selectNumber == 6) {
                        that.addChild(v5);
                    }

                    let nextVideoID = `v${that.selectNumber}`
                    console.log('准备播放', nextVideoID)
                    let nextvideoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(nextVideoID))
                    nextvideoX.style.display = "block"
                    
                },3000)
                

                function videoXEnd() {
                    stopBtn.style.display = "block"
                    console.log('第一段播放完成', that.selectNumber)
                    videoX.style.display = "none"
                }
                videoX.addEventListener('ended', videoXEnd,false)

                // 视频暂停时按钮
                
                function nextvideoXPlay() {
                    // 移除第一段视频监听
                    welcomePage = null;
                    
                    console.log('welcomePage', welcomePage)

                    videoX.removeEventListener('ended', videoXEnd, false)

                    
                    stopBtn.style.display = 'none'

                    let nextVideoID = `v${that.selectNumber}`
                    console.log('播放', nextVideoID)
                    let nextvideoX: HTMLVideoElement = (<HTMLVideoElement>document.getElementById(nextVideoID))
                    nextvideoX.play();

                    setTimeout(function() {
                        that.stage.addChild(new End(that.selectNumber));
                        that.stage.removeChild(that);
                        l = 2;
                    },3000)
                    

                    function nextvideoXEnd() {
                        console.log('第二段播放完成')
                        vBox.style.display = "none"
                        nextvideoX.style.display = "none";
                        // 移除点击和第二视频监听
                        stopBtn.removeEventListener("touchstart", nextvideoXPlay, false);
                        nextvideoX.removeEventListener('ended', nextvideoXEnd, false)
                    }
                    nextvideoX.addEventListener('ended', nextvideoXEnd, false)

                }
                stopBtn.addEventListener("touchstart", nextvideoXPlay, false);

            }, this);

         };
         welcomePage()
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
declare let $: any;
declare let welcomePage: any;
declare let clickCtrl: any;