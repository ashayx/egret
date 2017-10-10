var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Main = (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    Main.prototype.onAddToStage = function (event) {
        egret.lifecycle.addLifecycleListener(function (context) {
            // custom lifecycle plugin
            context.onUpdate = function () {
                // console.log('hello,world')
            };
        });
        egret.lifecycle.onPause = function () {
            egret.ticker.pause();
        };
        egret.lifecycle.onResume = function () {
            egret.ticker.resume();
        };
        //设置加载进度界面
        //Config to load process interface
        this.loadingView = new LoadingUI();
        this.stage.addChild(this.loadingView);
        //初始化Resource资源加载库
        //initiate Resource loading library
        RES.addEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.loadConfig("resource/default.res.json", "resource/");
    };
    /**
     * 配置文件加载完成,开始预加载preload资源组。
     * configuration file loading is completed, start to pre-load the preload resource group
     */
    Main.prototype.onConfigComplete = function (event) {
        RES.removeEventListener(RES.ResourceEvent.CONFIG_COMPLETE, this.onConfigComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
        RES.addEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
        RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
        RES.loadGroup("preload");
    };
    /**
     * preload资源组加载完成
     * Preload resource group is loaded
     */
    Main.prototype.onResourceLoadComplete = function (event) {
        if (event.groupName == "preload") {
            this.stage.removeChild(this.loadingView);
            RES.removeEventListener(RES.ResourceEvent.GROUP_COMPLETE, this.onResourceLoadComplete, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_LOAD_ERROR, this.onResourceLoadError, this);
            RES.removeEventListener(RES.ResourceEvent.GROUP_PROGRESS, this.onResourceProgress, this);
            RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR, this.onItemLoadError, this);
            this.createGameScene();
        }
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onItemLoadError = function (event) {
        console.warn("Url:" + event.resItem.url + " has failed to load");
    };
    /**
     * 资源组加载出错
     *  The resource group loading failed
     */
    Main.prototype.onResourceLoadError = function (event) {
        //TODO
        console.warn("Group:" + event.groupName + " has failed to load");
        //忽略加载失败的项目
        //Ignore the loading failed projects
        this.onResourceLoadComplete(event);
    };
    /**
     * preload资源组加载进度
     * Loading process of preload resource group
     */
    Main.prototype.onResourceProgress = function (event) {
        if (event.groupName == "preload") {
            this.loadingView.setProgress(event.itemsLoaded, event.itemsTotal);
        }
    };
    Main.prototype.createGameScene = function () {
        console.log(this.selectNumber);
        var vBox = document.getElementById("vBox");
        var stopBtn = document.getElementById("stop_btn");
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var that = this;
        var stageOne = this.createBitmapByName("stage_png");
        this.addChild(stageOne);
        stageOne.width = stageW;
        stageOne.height = stageH;
        stageOne.anchorOffsetX = stageW / 2;
        stageOne.anchorOffsetY = stageH / 2;
        stageOne.x += stageW / 2;
        stageOne.y += stageH / 2;
        var stageLeft = this.createBitmapByName("stage_left_png");
        this.addChild(stageLeft);
        stageLeft.width = stageW / 2;
        stageLeft.height = stageH;
        stageLeft.x = 0;
        stageLeft.y = 0;
        var stageRight = this.createBitmapByName("stage_right_png");
        this.addChild(stageRight);
        stageRight.width = stageW / 2;
        stageRight.height = stageH;
        stageRight.x = stageW * 0.5;
        stageRight.y = 0;
        var stageTop = this.createBitmapByName("curtain_top_png");
        this.addChild(stageTop);
        stageTop.width = stageW;
        stageTop.height = stageH / 5;
        stageTop.x = 0;
        stageTop.y = 0;
        var person = this.createBitmapByName("person_png");
        this.addChild(person);
        person.width = stageW;
        person.height = stageH / 2;
        person.x = 0;
        person.y = stageH * 0.35;
        var lighting = this.createBitmapByName("lighting_png");
        this.addChild(lighting);
        lighting.width = stageW * 0.2;
        lighting.height = stageH;
        lighting.x = stageW * 0.24;
        lighting.y = 0;
        lighting.alpha = 0;
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0xffffff, 0);
        spr1.graphics.drawRect(0, 0, 90, 100);
        spr1.graphics.endFill();
        spr1.x = stageW * 0.27;
        spr1.y = stageH * 0.46;
        this.addChild(spr1);
        console.log(stageH, stageW);
        var spr2 = new egret.Sprite();
        spr2.graphics.beginFill(0xffffff, 0);
        spr2.graphics.drawRect(0, 0, 90, 100);
        spr2.graphics.endFill();
        spr2.x = stageW * 0.27 + 100;
        spr2.y = stageH * 0.46;
        this.addChild(spr2);
        var spr3 = new egret.Sprite();
        spr3.graphics.beginFill(0xffffff, 0);
        spr3.graphics.drawRect(0, 0, 90, 120);
        spr3.graphics.endFill();
        spr3.x = stageW * 0.27 + 200;
        spr3.y = stageH * 0.40;
        this.addChild(spr3);
        var startButton = this.createBitmapByName("stage_button_png");
        this.addChild(startButton);
        startButton.x = stageW * 0.4;
        startButton.y = stageH * 0.85;
        startButton.width = stageW * 0.2;
        startButton.height = stageH * 0.12;
        startButton.anchorOffsetX = stageW * 0.1;
        startButton.anchorOffsetY = stageH * 0.06;
        startButton.x += stageW * 0.1;
        startButton.y += stageH * 0.06;
        startButton.alpha = 0;
        spr1.touchEnabled = true;
        spr1.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lighting.x = stageW * 0.24;
            lighting.alpha = 1;
            this.buttonAnimation(startButton);
            this.selectNumber = 1;
            console.log(this.selectNumber);
            // ss();
        }, this);
        spr2.touchEnabled = true;
        spr2.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lighting.x = stageW * 0.4;
            lighting.alpha = 1;
            this.buttonAnimation(startButton);
            this.selectNumber = 3;
            console.log(this.selectNumber);
        }, this);
        spr3.touchEnabled = true;
        spr3.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            lighting.x = stageW * 0.55;
            lighting.alpha = 1;
            this.buttonAnimation(startButton);
            this.selectNumber = 5;
            console.log(this.selectNumber);
        }, this);
        var curtainLeft = this.createBitmapByName("curtain_left_png");
        this.addChild(curtainLeft);
        curtainLeft.width = stageW / 2;
        curtainLeft.height = stageH;
        curtainLeft.x = 0;
        curtainLeft.y = 0;
        var curtainRight = this.createBitmapByName("curtain_right_png");
        this.addChild(curtainRight);
        curtainRight.width = stageW / 2;
        curtainRight.height = stageH;
        curtainRight.x = stageW / 2;
        curtainRight.y = 0;
        var curtainTop = this.createBitmapByName("curtain_top_png");
        this.addChild(curtainTop);
        curtainTop.width = stageW;
        curtainTop.height = stageH / 5;
        curtainTop.x = 0;
        curtainTop.y = 0;
        var curtainLeftAnimation = egret.Tween.get(curtainLeft);
        curtainLeftAnimation.to({ x: -stageW / 2 }, 2500).call(function () {
            that.removeChild(curtainLeft);
        });
        var curtainRightAnimation = egret.Tween.get(curtainRight);
        curtainRightAnimation.to({ x: stageW }, 2500).call(function () {
            that.removeChild(curtainRight);
        });
        var curtainTopAnimation = egret.Tween.get(curtainTop);
        curtainTopAnimation.to({ y: -stageH / 5 }, 2500).call(function () {
            that.removeChild(curtainTop);
        });
        startButton.touchEnabled = true;
        startButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            vBox.style.display = "block";
            var videoID = "v" + this.selectNumber;
            this.selectNumber += 1;
            console.log(this.selectNumber);
            var videoX = document.getElementById(videoID);
            videoX.style.display = 'block';
            videoX.play();
            videoX.onended = function () {
                console.log('第一段播放完成');
                stopBtn.style.display = "block";
            };
            // 视频暂停时按钮
            stopBtn.addEventListener("touchstart", function (e) {
                var nextVideoID = "v" + that.selectNumber;
                console.log(nextVideoID);
                var nextvideoX = document.getElementById(nextVideoID);
                videoX.style.display = "none";
                stopBtn.style.display = 'none';
                nextvideoX.style.display = "block";
                nextvideoX.play();
                nextvideoX.onended = function () {
                    console.log('第二段播放完成');
                    vBox.style.display = "none";
                    nextvideoX.style.display = "none";
                    that.createEndPage(that.selectNumber);
                };
            }, true);
        }, this);
    };
    Main.prototype.buttonAnimation = function (startButton) {
        var startButtonAnimation = egret.Tween.get(startButton);
        startButtonAnimation.to({ alpha: 1 }, 100)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: 10 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: 8 }, 200)
            .to({ scaleX: 1, scaleY: 1, rotation: 0 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: -10 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: -8 }, 200)
            .to({ scaleX: 1, scaleY: 1, rotation: 0 }, 200);
    };
    Main.prototype.createEndPage = function (selectNumber) {
        console.log(selectNumber);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var endPage = this.createBitmapByName("stage_png");
        this.addChild(endPage);
        endPage.width = stageW;
        endPage.height = stageH;
        endPage.anchorOffsetX = stageW / 2;
        endPage.anchorOffsetY = stageH / 2;
        endPage.x += stageW / 2;
        endPage.y += stageH / 2;
        var backButton = this.createBitmapByName("stage_button_png");
        this.addChild(backButton);
        backButton.x = stageW * 0.4;
        backButton.y = stageH * 0.85;
        backButton.width = stageW * 0.2;
        backButton.height = stageH * 0.12;
        backButton.anchorOffsetX = stageW * 0.1;
        backButton.anchorOffsetY = stageH * 0.06;
        backButton.x += stageW * 0.1;
        backButton.y += stageH * 0.06;
        backButton.touchEnabled = true;
        backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            this.removeChild(backButton);
            this.removeChild(endPage);
        }, this);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Main.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
