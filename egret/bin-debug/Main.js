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
    /**
     * 创建游戏场景
     * Create a game scene
     */
    Main.prototype.createGameScene = function () {
        // document.getElementById("preloading").style.display = "none";
        // 背景
        var pageOneBg = this.createBitmapByName("p_one_bg_png");
        this.addChild(pageOneBg);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        pageOneBg.width = stageW;
        pageOneBg.height = stageH;
        pageOneBg.anchorOffsetX = stageW / 2;
        pageOneBg.anchorOffsetY = stageH / 2;
        pageOneBg.x += stageW / 2;
        pageOneBg.y += stageH / 2;
        console.log(pageOneBg);
        // 地球
        var earth = this.createBitmapByName("p_one_footer_png");
        this.addChild(earth);
        earth.width = stageW;
        earth.x = 0;
        earth.y = 590;
        // 边角
        var angular = this.createBitmapByName("p_one_angular_png");
        this.addChild(angular);
        angular.width = stageW;
        angular.height = stageH * 0.95;
        angular.y = 40;
        angular.anchorOffsetX = stageW / 2;
        angular.anchorOffsetY = stageH / 2;
        angular.x += stageW / 2;
        angular.y += stageH / 2;
        // 标题文字
        var title = this.createBitmapByName("p_one_title_png");
        this.addChild(title);
        title.width = stageW * 0.9;
        title.height = 350;
        // title.x = 20;
        title.y = 40;
        // 内容边框
        var wordContainer = this.createBitmapByName("p_one_wordContainer_png");
        this.addChild(wordContainer);
        wordContainer.width = stageW * 0.6;
        wordContainer.height = stageW * 0.6;
        wordContainer.x = stageW * 0.2;
        wordContainer.y = 400;
        // 内容文字
        // let word = this.createBitmapByName("p_one_word_png");
        // this.addChild(word);
        // word.width = stageW * 0.6;
        // word.height = stageW * 0.8;
        // // word.x = stageW * 0.2;
        // word.y = 350;
        // music
        var musicon = this.createBitmapByName("music_on_png");
        this.addChild(musicon);
        musicon.width = 50;
        musicon.height = 50;
        musicon.x = 500;
        musicon.y = 20;
        // 动画
        var earthAni = egret.Tween.get(earth, { loop: true });
        earthAni.to({ y: 600 }, 2000).to({ y: 550 }, 3000).to({ y: 590 }, 3000);
        var angularAni = egret.Tween.get(angular, { loop: true });
        angularAni.to({ scaleX: 1, scaleY: 1 }, 500).to({ scaleX: 0.95, scaleY: 0.95 }, 500).to({ scaleX: 1, scaleY: 1 }, 500);
        var wordContainerAni = egret.Tween.get(wordContainer, { loop: true });
        wordContainerAni.to({ alpha: 1 }, 800).to({ alpha: 0.5 }, 800).to({ alpha: 1 }, 800);
        var titleAni = egret.Tween.get(title);
        titleAni.to({ x: -1000, alpha: 0 }, 500).to({ x: 20, alpha: 1 }, 500);
        // var wordAni = egret.Tween.get( word );
        // wordAni.to( {x:-1000}, 100, egret.Ease.backInOut ).to( {x:stageW * 0.2},1000, egret.Ease.backOut)
        var idTimeout = egret.setTimeout(function (arg) {
            console.log("timeout:", arg);
        }, this, 3000, "egret");
        console.log("start setTimeout");
        // 打字一
        this.wordOne = new egret.TextField;
        this.wordOne.size = 54;
        this.wordOne.textColor = 0xffffff;
        this.wordOne.fontFamily = "KaiTi";
        this.wordOne.lineSpacing = 10;
        this.wordOne.multiline = true;
        this.wordOne.x = 278;
        this.wordOne.y = 350;
        this.addChild(this.wordOne);
        // 打字二
        this.wordTwo = new egret.TextField;
        this.wordTwo.size = 34;
        this.wordTwo.textColor = 0xffffff;
        this.wordTwo.lineSpacing = 20;
        this.wordTwo.multiline = true;
        this.wordTwo.x = 128;
        this.wordTwo.y = 450;
        this.addChild(this.wordTwo);
        // 打字三
        this.wordThree = new egret.TextField;
        this.wordThree.size = 34;
        this.wordThree.textColor = 0xffffff;
        this.wordThree.lineSpacing = 20;
        this.wordThree.multiline = true;
        this.wordThree.x = 368;
        this.wordThree.y = 450;
        this.addChild(this.wordThree);
        var self = this;
        self.isComplete = true;
        var backFun = function () {
            self.isComplete = true;
        };
        /*** 本示例关键代码段开始 ***/
        if (self.isComplete) {
            self.isComplete = false;
            this.typerEffect(this.wordTwo, "当比你们\n聪明\n一万倍\n的我们", 100, backFun);
            egret.setTimeout(function () {
                this.typerEffect(this.wordThree, "比你们更\n努力\n一万倍", 100, backFun);
            }, this, 1200);
            egret.setTimeout(function () {
                this.typerEffect(this.wordOne, "你\n们\n还\n能\n干\n什\n么\n？", 100, backFun);
            }, this, 2100);
        }
        /*** 本示例关键代码段结束 ***/
        this.stage.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('dianji');
            egret.Tween.get(title).to({ x: -1000, alpha: 0 }, 500);
            egret.Tween.get(earth).to({ x: -1000, alpha: 0 }, 500);
            egret.Tween.get(wordContainer).to({ x: -1000, alpha: 0 }, 500);
            egret.Tween.get(angular).to({ scaleX: 1.3, scaleY: 1.3, alpha: 0 }, 500);
            egret.Tween.get(this.wordOne).to({ x: -1000, alpha: 0 }, 500);
            egret.Tween.get(this.wordThree).to({ x: 1000, alpha: 0 }, 500);
            egret.Tween.get(this.wordTwo).to({ x: 1000, alpha: 0 }, 500);
            self.pageTwoScene();
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
    /**
    * 文字打字机效果
    * obj           文本对象
    * content       文字
    * interval      打字间隔 毫秒
    */
    Main.prototype.typerEffect = function (obj, content, interval, backFun) {
        if (content === void 0) { content = ""; }
        if (interval === void 0) { interval = 200; }
        if (backFun === void 0) { backFun = null; }
        var strArr = content.split("");
        var len = strArr.length;
        var sound = RES.getRes("7571_wav");
        var self = this;
        for (var i = 0; i < len; i++) {
            egret.setTimeout(function () {
                obj.appendText(strArr[Number(this)]);
                sound.play(0, 1);
                console.log('打字');
                if ((Number(this) >= len - 1) && (backFun != null)) {
                    backFun();
                }
            }, i, interval * i);
        }
    };
    /**
    * 第二页
    */
    Main.prototype.pageTwoScene = function () {
        // 边角
        var pageTwoAngular = this.createBitmapByName("p_two_angular_png");
        this.addChild(pageTwoAngular);
        pageTwoAngular.width = 640;
        pageTwoAngular.height = 1136 * 0.95;
        pageTwoAngular.x = -20;
        pageTwoAngular.y = 40;
        pageTwoAngular.anchorOffsetX = 320;
        pageTwoAngular.anchorOffsetY = 568;
        pageTwoAngular.x += 320;
        pageTwoAngular.y += 568;
        // 表盘
        var circle = this.createBitmapByName("p_two_midcircle_png");
        this.addChild(circle);
        circle.width = 600;
        circle.height = 600;
        circle.x = 20;
        circle.y = 60;
        circle.anchorOffsetX = 300;
        circle.anchorOffsetY = 300;
        circle.x += 300;
        circle.y += 300;
        // egret.Tween.get(circle, {loop:true}).to( {rotation : 360}, 10000 )  
        // 表针
        var arrow = this.createBitmapByName("p_two_arrow_png");
        this.addChild(arrow);
        arrow.width = 600;
        arrow.height = 600;
        arrow.x = 20;
        arrow.y = 60;
        // arrow.rotation = -90;
        arrow.anchorOffsetX = 300;
        arrow.anchorOffsetY = 300;
        arrow.x += 300;
        arrow.y += 300;
        egret.Tween.get(arrow, { loop: true, onChange: funcChange, onChangeObj: this }).to({ rotation: 360 }, 10000);
        var funcChange = function () {
            console.log(this.rotation);
            console.log('ssss');
        };
        // 表刻度
        // 12点机器人
        var robot = this.createBitmapByName("p_two_robot_1_png");
        this.addChild(robot);
        robot.width = 150;
        robot.height = 150;
        robot.x = 245;
        robot.y = 50;
        robot.anchorOffsetX = 75;
        robot.anchorOffsetY = 75;
        robot.x += 75;
        robot.y += 75;
        // 3点
        var personOne = this.createBitmapByName("p_two_person_1_png");
        this.addChild(personOne);
        personOne.width = 150;
        personOne.height = 150;
        personOne.x = 470;
        personOne.y = 280;
        personOne.anchorOffsetX = 75;
        personOne.anchorOffsetY = 75;
        personOne.x += 75;
        personOne.y += 75;
        var robotOne = this.createBitmapByName("p_two_robot_2_png");
        this.addChild(robotOne);
        robotOne.width = 150;
        robotOne.height = 150;
        robotOne.x = 470;
        robotOne.y = 280;
        robotOne.anchorOffsetX = 75;
        robotOne.anchorOffsetY = 75;
        robotOne.x += 75;
        robotOne.y += 75;
        robotOne.alpha = 0;
        // 6点
        var personTwo = this.createBitmapByName("p_two_person_2_png");
        this.addChild(personTwo);
        personTwo.width = 150;
        personTwo.height = 150;
        personTwo.x = 245;
        personTwo.y = 550;
        personTwo.anchorOffsetX = 75;
        personTwo.anchorOffsetY = 75;
        personTwo.x += 75;
        personTwo.y += 75;
        var robotTwo = this.createBitmapByName("p_two_robot_3_png");
        this.addChild(robotTwo);
        robotTwo.width = 150;
        robotTwo.height = 150;
        robotTwo.x = 245;
        robotTwo.y = 550;
        robotTwo.anchorOffsetX = 75;
        robotTwo.anchorOffsetY = 75;
        robotTwo.x += 75;
        robotTwo.y += 75;
        robotTwo.alpha = 0;
        // 9点
        var personThree = this.createBitmapByName("p_two_person_3_png");
        this.addChild(personThree);
        personThree.width = 150;
        personThree.height = 150;
        personThree.x = 20;
        personThree.y = 280;
        personThree.anchorOffsetX = 75;
        personThree.anchorOffsetY = 75;
        personThree.x += 75;
        personThree.y += 75;
        var robotThree = this.createBitmapByName("p_two_robot_4_png");
        this.addChild(robotThree);
        robotThree.width = 150;
        robotThree.height = 150;
        robotThree.x = 20;
        robotThree.y = 280;
        robotThree.anchorOffsetX = 75;
        robotThree.anchorOffsetY = 75;
        robotThree.x += 75;
        robotThree.y += 75;
        robotThree.alpha = 0;
        var timer = new egret.Timer(1000 / 30, 0);
        var timeAni = true;
        var circleNumber = -1;
        timer.addEventListener(egret.TimerEvent.TIMER, function () {
            // console.log(arrow.rotation);
            // console.log(circleNumber);
            if (arrow.rotation > -10 && arrow.rotation < 10 && timeAni) {
                console.log('12点');
                timeAni = false;
                egret.Tween.get(robot).to({ scaleX: 1.5, scaleY: 1.5 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                    timeAni = true;
                    circleNumber += 1;
                });
            }
            else if (arrow.rotation > 80 && arrow.rotation < 100 && timeAni) {
                console.log('3点');
                timeAni = false;
                // 第一圈显示人，第二圈显示机器人
                if (circleNumber == 0) {
                    egret.Tween.get(personOne).to({ scaleX: 1.5, scaleY: 1.5 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                        timeAni = true;
                    });
                }
                else {
                    egret.Tween.get(personOne).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 480);
                    egret.Tween.get(robotOne).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                        timeAni = true;
                    });
                }
            }
            else if (arrow.rotation > -180 && arrow.rotation < -165 && timeAni) {
                console.log('6点');
                timeAni = false;
                // 第一圈显示人，第二圈显示机器人
                if (circleNumber == 0) {
                    egret.Tween.get(personTwo).to({ scaleX: 1.5, scaleY: 1.5 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                        timeAni = true;
                    });
                }
                else {
                    egret.Tween.get(personTwo).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 480);
                    egret.Tween.get(robotTwo).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                        timeAni = true;
                    });
                }
            }
            else if (arrow.rotation > -95 && arrow.rotation < -75 && timeAni) {
                console.log('9点');
                timeAni = false;
                // 第一圈显示人，第二圈显示机器人
                if (circleNumber == 0) {
                    egret.Tween.get(personThree).to({ scaleX: 1.5, scaleY: 1.5 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                        timeAni = true;
                    });
                }
                else {
                    egret.Tween.get(personThree).to({ scaleX: 1.5, scaleY: 1.5, alpha: 0 }, 480);
                    egret.Tween.get(robotThree).to({ scaleX: 1.5, scaleY: 1.5, alpha: 1 }, 480).wait(1480).to({ scaleX: 1, scaleY: 1 }, 480).call(function () {
                        timeAni = true;
                    });
                }
            }
        }, this);
        timer.start();
        // 问题
        var pageTwoWord = this.createBitmapByName("p_two_word_png");
        this.addChild(pageTwoWord);
        pageTwoWord.width = 576;
        // pageTwoWord.height = 576;
        pageTwoWord.x = 32;
        pageTwoWord.y = 650;
        //按钮
        var pageTwoBUtton = this.createBitmapByName("p_two_button_png");
        this.addChild(pageTwoBUtton);
        pageTwoBUtton.width = 400;
        // pageTwoBUtton.height = 576;
        pageTwoBUtton.x = 120;
        pageTwoBUtton.y = 900;
        pageTwoBUtton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            console.log('第三页');
        }, this);
    };
    return Main;
}(egret.DisplayObjectContainer));
__reflect(Main.prototype, "Main");
