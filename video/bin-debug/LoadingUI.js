var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    // private bg
    LoadingUI.prototype.createView = function () {
        // 百分比进度
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        var loadScore = "" + current / total;
        var score = Math.floor(loadScore * 100);
        this.textField.text = score + "%";
    };
    LoadingUI.prototype.onAddToStage = function (event) {
        var _this = this;
        loadingPage = function () {
            RES.getResByUrl('resource/assets/loading_bg.png', _this.onComplete, _this, RES.ResourceItem.TYPE_IMAGE);
        };
        loadingPage();
    };
    LoadingUI.prototype.onComplete = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var bg = new egret.Bitmap(img);
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
        RES.getResByUrl('resource/assets/loading_title.png', this.title, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.title = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var title = new egret.Bitmap(img);
        title.x = stageW * .35;
        title.y = stageH * .1;
        title.width = stageW * .3;
        title.height = stageW * .3 * .39;
        this.addChild(title);
        RES.getResByUrl('resource/assets/loading_1.png', this.L, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.L = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var L = new egret.Bitmap(img);
        L.width = 40;
        L.height = 48;
        L.x = stageW * 0.35;
        L.y = stageH * .35;
        this.addChild(L);
        var LAni = egret.Tween.get(L, { loop: true });
        LAni.to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(3500);
        RES.getResByUrl('resource/assets/loading_2.png', this.O, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.O = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var O = new egret.Bitmap(img);
        O.width = 40;
        O.height = 48;
        O.x = stageW * 0.35 + 40;
        O.y = stageH * .35;
        this.addChild(O);
        var OAni = egret.Tween.get(O, { loop: true });
        OAni.wait(500).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(3000);
        RES.getResByUrl('resource/assets/loading_3.png', this.A, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.A = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var A = new egret.Bitmap(img);
        A.width = 40;
        A.height = 48;
        A.x = stageW * 0.35 + 80;
        A.y = stageH * .35;
        this.addChild(A);
        var AAni = egret.Tween.get(A, { loop: true });
        AAni.wait(1000).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(2500);
        RES.getResByUrl('resource/assets/loading_4.png', this.D, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.D = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var D = new egret.Bitmap(img);
        D.width = 40;
        D.height = 48;
        D.x = stageW * 0.35 + 120;
        D.y = stageH * .35;
        this.addChild(D);
        var DAni = egret.Tween.get(D, { loop: true });
        DAni.wait(1500).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(2000);
        RES.getResByUrl('resource/assets/loading_5.png', this.I, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.I = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var I = new egret.Bitmap(img);
        I.width = 40;
        I.height = 48;
        I.x = stageW * 0.35 + 160;
        I.y = stageH * .35;
        this.addChild(I);
        var IAni = egret.Tween.get(I, { loop: true });
        IAni.wait(2000).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(1500);
        RES.getResByUrl('resource/assets/loading_6.png', this.N, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.N = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var N = new egret.Bitmap(img);
        N.width = 40;
        N.height = 48;
        N.x = stageW * 0.35 + 200;
        N.y = stageH * .35;
        this.addChild(N);
        var NAni = egret.Tween.get(N, { loop: true });
        NAni.wait(2500).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(1000);
        RES.getResByUrl('resource/assets/loading_7.png', this.G, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.G = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var G = new egret.Bitmap(img);
        G.width = 40;
        G.height = 48;
        G.x = stageW * 0.35 + 240;
        G.y = stageH * .35;
        this.addChild(G);
        var GAni = egret.Tween.get(G, { loop: true });
        GAni.wait(3000).to({ y: stageH * .35 - 20 }, 500).to({ y: stageH * .35 }, 500).wait(500);
        RES.getResByUrl('resource/assets/loading_tip.png', this.tip, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.tip = function (event) {
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        var img = event;
        var tip = new egret.Bitmap(img);
        tip.width = stageW * 0.5;
        tip.height = stageW * 0.5 * .15;
        tip.x = stageW * 0.25;
        tip.y = stageH * .7;
        this.addChild(tip);
        var tipANi = egret.Tween.get(tip);
        tipANi.wait(1000).to({ alpha: 0 });
        RES.loadGroup("preload");
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
