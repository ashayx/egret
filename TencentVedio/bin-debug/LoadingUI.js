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
var LoadingUI = (function (_super) {
    __extends(LoadingUI, _super);
    function LoadingUI() {
        var _this = _super.call(this) || this;
        _this.createView();
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.onAddToStage, _this);
        return _this;
    }
    LoadingUI.prototype.createView = function () {
        // 百分比进度
        this.textField = new egret.TextField();
        this.textField.textColor = 0x336699;
        this.textField.x = 100;
        this.textField.y = 600;
        this.textField.width = 480;
        this.textField.height = 100;
        this.textField.textAlign = "center";
    };
    LoadingUI.prototype.setProgress = function (current, total) {
        // this.textField.text = `Loading...${current}/${total}`;
        var loadScore = "" + current / total;
        var score = Math.floor(loadScore * 100);
        this.textField.text = "loading..." + score + "%";
    };
    LoadingUI.prototype.onAddToStage = function (event) {
        RES.getResByUrl('resource/assets/stage.png', this.onComplete, this, RES.ResourceItem.TYPE_IMAGE);
    };
    LoadingUI.prototype.onComplete = function (event) {
        var img = event;
        var bitmap = new egret.Bitmap(img);
        bitmap.x = 0;
        bitmap.y = 0;
        bitmap.width = 640;
        bitmap.height = 1136;
        this.addChild(bitmap);
        this.addChild(this.textField);
    };
    return LoadingUI;
}(egret.Sprite));
__reflect(LoadingUI.prototype, "LoadingUI");
