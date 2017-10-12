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
var Welcome = (function (_super) {
    __extends(Welcome, _super);
    function Welcome() {
        var _this = _super.call(this) || this;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createGameScene, _this);
        return _this;
    }
    Welcome.prototype.createGameScene = function () {
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
        person.width = stageW * .42;
        person.height = stageW * .42 * .61;
        person.x = stageW * .29;
        person.y = stageH * 0.40;
        var lighting = this.createBitmapByName("lighting_png");
        this.addChild(lighting);
        lighting.width = stageW * 0.2;
        lighting.height = stageH;
        lighting.x = stageW * 0.27;
        lighting.y = 0;
        lighting.alpha = 0;
        var spr1 = new egret.Sprite();
        spr1.graphics.beginFill(0xffffff, 0);
        spr1.graphics.drawRect(0, 0, stageW * 0.42 / 3, 100);
        spr1.graphics.endFill();
        spr1.x = stageW * 0.28;
        spr1.y = stageH * 0.46;
        this.addChild(spr1);
        console.log(stageH, stageW);
        var spr2 = new egret.Sprite();
        spr2.graphics.beginFill(0xffffff, 0);
        spr2.graphics.drawRect(0, 0, stageW * 0.42 / 3, 100);
        spr2.graphics.endFill();
        spr2.x = stageW * 0.28 + stageW * 0.42 / 3;
        spr2.y = stageH * 0.46;
        this.addChild(spr2);
        var spr3 = new egret.Sprite();
        spr3.graphics.beginFill(0xffffff, 0);
        spr3.graphics.drawRect(0, 0, stageW * 0.42 / 3, 120);
        spr3.graphics.endFill();
        spr3.x = stageW * 0.28 + stageW * 0.42 / 3 * 2;
        spr3.y = stageH * 0.40;
        this.addChild(spr3);
        var startButton = this.createBitmapByName("stage_button_png");
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
            lighting.x = stageW * 0.53;
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
        var logo = this.createBitmapByName("logo_png");
        this.addChild(logo);
        logo.width = stageW * 0.4;
        logo.height = stageW * 0.08;
        logo.x = stageW * 0.3;
        logo.y = stageH * 0.1;
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
            var videoX = document.getElementById(videoID);
            var img = document.getElementById('img1');
            img.style.display = 'block';
            videoX.style.display = 'block';
            videoX.play();
            that.selectNumber += 1;
            function videoXEnd() {
                stopBtn.style.display = "block";
                console.log('第一段播放完成', that.selectNumber);
            }
            videoX.addEventListener('ended', videoXEnd, false);
            // 视频暂停时按钮
            function nextvideoXPlay() {
                // 移除第一段视频监听
                videoX.removeEventListener('ended', videoXEnd, false);
                var nextVideoID = "v" + that.selectNumber;
                console.log('播放', nextVideoID);
                var nextvideoX = document.getElementById(nextVideoID);
                videoX.style.display = "none";
                stopBtn.style.display = 'none';
                nextvideoX.style.display = "block";
                nextvideoX.play();
                img.style.display = 'none';
                that.stage.addChild(new End(that.selectNumber));
                that.stage.removeChild(that);
                function nextvideoXEnd() {
                    console.log('第二段播放完成');
                    vBox.style.display = "none";
                    nextvideoX.style.display = "none";
                    // 移除点击和第二视频监听
                    stopBtn.removeEventListener("touchstart", nextvideoXPlay, false);
                    nextvideoX.removeEventListener('ended', nextvideoXEnd, false);
                }
                nextvideoX.addEventListener('ended', nextvideoXEnd, false);
            }
            stopBtn.addEventListener("touchstart", nextvideoXPlay, false);
        }, this);
    };
    Welcome.prototype.buttonAnimation = function (startButton) {
        var startButtonAnimation = egret.Tween.get(startButton);
        startButtonAnimation.to({ alpha: 1 }, 100)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: 10 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: 8 }, 200)
            .to({ scaleX: 1, scaleY: 1, rotation: 0 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: -10 }, 200)
            .to({ scaleX: 1.2, scaleY: 1.2, rotation: -8 }, 200)
            .to({ scaleX: 1, scaleY: 1, rotation: 0 }, 200);
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    Welcome.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return Welcome;
}(egret.Sprite));
__reflect(Welcome.prototype, "Welcome");
