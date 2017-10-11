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
var End = (function (_super) {
    __extends(End, _super);
    function End(selectNumber) {
        var _this = _super.call(this) || this;
        _this.selectNumber = selectNumber;
        _this.addEventListener(egret.Event.ADDED_TO_STAGE, _this.createEndPage, _this);
        return _this;
    }
    End.prototype.createEndPage = function () {
        var selectNumber = this.selectNumber;
        console.log('跳转到', selectNumber);
        var stageW = this.stage.stageWidth;
        var stageH = this.stage.stageHeight;
        if (selectNumber == 2) {
            var endPage = this.createBitmapByName("endpage_1_png");
            this.addChild(endPage);
            endPage.width = stageW;
            endPage.height = stageH;
            endPage.anchorOffsetX = stageW / 2;
            endPage.anchorOffsetY = stageH / 2;
            endPage.x += stageW / 2;
            endPage.y += stageH / 2;
            var endPageWord1 = this.createBitmapByName("endpage_1_word1_png");
            this.addChild(endPageWord1);
            endPageWord1.x = stageW * 0.05;
            endPageWord1.y = stageH * 0.1;
            endPageWord1.width = stageW * 0.7;
            endPageWord1.height = stageW * 0.1;
            console.log(stageH, stageW);
            var endPageWord2 = this.createBitmapByName("endpage_1_word2_png");
            this.addChild(endPageWord2);
            endPageWord2.x = stageW * 0.05;
            endPageWord2.y = stageH * 0.3;
            endPageWord2.width = stageW * 0.7;
            endPageWord2.height = stageW * 0.07;
            var endPageTitle = this.createBitmapByName("endpage_title_png");
            this.addChild(endPageTitle);
            endPageTitle.x = stageW * 0.08;
            endPageTitle.y = stageH * 0.45;
            endPageTitle.width = stageW * 0.5;
            endPageTitle.height = stageW * 0.5 / 10;
            var endPageSpr = this.createBitmapByName("endpage_spr_1_png");
            this.addChild(endPageSpr);
            endPageSpr.x = stageW * .9;
            endPageSpr.y = stageH * 0.1;
            endPageSpr.width = stageW * 0.1;
            endPageSpr.height = stageW * 0.1 * 1.675;
            var backButton = this.createBitmapByName("back_1_png");
            this.addChild(backButton);
            backButton.x = stageW * 0.65;
            backButton.y = stageH * 0.05;
            backButton.width = stageW * 0.2;
            backButton.height = stageW * 0.2 * .58;
            var endPageButton = this.createBitmapByName("endpage_button_png");
            this.addChild(endPageButton);
            endPageButton.x = stageW * 0.4;
            endPageButton.y = stageH * 0.85;
            endPageButton.width = stageW * 0.2;
            endPageButton.height = stageH * 0.12;
            endPageButton.anchorOffsetX = stageW * 0.1;
            endPageButton.anchorOffsetY = stageH * 0.06;
            endPageButton.x += stageW * 0.1;
            endPageButton.y += stageH * 0.06;
            endPageButton.alpha = 1;
            backButton.touchEnabled = true;
            backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                this.stage.addChild(new Welcome);
                this.stage.removeChild(this);
            }, this);
            endPageButton.touchEnabled = true;
            endPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                window.location.href = 'baidu.com';
            }, this);
        }
        else if (selectNumber == 4) {
            var endPage = this.createBitmapByName("endpage_2_png");
            this.addChild(endPage);
            endPage.width = stageW;
            endPage.height = stageH;
            endPage.anchorOffsetX = stageW / 2;
            endPage.anchorOffsetY = stageH / 2;
            endPage.x += stageW / 2;
            endPage.y += stageH / 2;
            var endPageWord1 = this.createBitmapByName("endpage_2_word1_png");
            this.addChild(endPageWord1);
            endPageWord1.x = stageW * 0.25;
            endPageWord1.y = stageH * 0.1;
            endPageWord1.width = stageW * 0.7;
            endPageWord1.height = stageW * 0.1;
            console.log(stageH, stageW);
            var endPageWord2 = this.createBitmapByName("endpage_2_word2_png");
            this.addChild(endPageWord2);
            endPageWord2.x = stageW * 0.25;
            endPageWord2.y = stageH * 0.3;
            endPageWord2.width = stageW * 0.7;
            endPageWord2.height = stageW * 0.07;
            var endPageTitle = this.createBitmapByName("endpage_title_png");
            this.addChild(endPageTitle);
            endPageTitle.x = stageW * 0.48;
            endPageTitle.y = stageH * 0.45;
            endPageTitle.width = stageW * 0.5;
            endPageTitle.height = stageW * 0.5 / 10;
            var endPageSpr = this.createBitmapByName("endpage_spr_2_png");
            this.addChild(endPageSpr);
            endPageSpr.x = 0;
            endPageSpr.y = stageH * 0.1;
            endPageSpr.width = stageW * 0.1;
            endPageSpr.height = stageW * 0.1 * 1.675;
            var backButton = this.createBitmapByName("back_2_png");
            this.addChild(backButton);
            backButton.x = stageW * 0.1;
            backButton.y = stageH * 0.05;
            backButton.width = stageW * 0.2;
            backButton.height = stageW * 0.2 * .58;
            var endPageButton = this.createBitmapByName("endpage_button_png");
            this.addChild(endPageButton);
            endPageButton.x = stageW * 0.4;
            endPageButton.y = stageH * 0.85;
            endPageButton.width = stageW * 0.2;
            endPageButton.height = stageH * 0.12;
            endPageButton.anchorOffsetX = stageW * 0.1;
            endPageButton.anchorOffsetY = stageH * 0.06;
            endPageButton.x += stageW * 0.1;
            endPageButton.y += stageH * 0.06;
            endPageButton.alpha = 1;
            backButton.touchEnabled = true;
            backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                this.stage.addChild(new Welcome);
                this.stage.removeChild(this);
            }, this);
            endPageButton.touchEnabled = true;
            endPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                window.location.href = 'baidu.com';
            }, this);
        }
        else if (selectNumber == 6) {
            //endpage3
            var endPage = this.createBitmapByName("endpage_3_png");
            this.addChild(endPage);
            endPage.width = stageW;
            endPage.height = stageH;
            endPage.anchorOffsetX = stageW / 2;
            endPage.anchorOffsetY = stageH / 2;
            endPage.x += stageW / 2;
            endPage.y += stageH / 2;
            var endPageWord1 = this.createBitmapByName("endpage_3_word1_png");
            this.addChild(endPageWord1);
            endPageWord1.x = stageW * 0.25;
            endPageWord1.y = stageH * 0.1;
            endPageWord1.width = stageW * 0.7;
            endPageWord1.height = stageW * 0.1;
            console.log(stageH, stageW);
            var endPageWord2 = this.createBitmapByName("endpage_3_word2_png");
            this.addChild(endPageWord2);
            endPageWord2.x = stageW * 0.25;
            endPageWord2.y = stageH * 0.3;
            endPageWord2.width = stageW * 0.7;
            endPageWord2.height = stageW * 0.07;
            var endPageTitle = this.createBitmapByName("endpage_title_png");
            this.addChild(endPageTitle);
            endPageTitle.x = stageW * 0.48;
            endPageTitle.y = stageH * 0.45;
            endPageTitle.width = stageW * 0.5;
            endPageTitle.height = stageW * 0.5 / 10;
            var endPageSpr = this.createBitmapByName("endpage_spr_3_png");
            this.addChild(endPageSpr);
            endPageSpr.x = 0;
            endPageSpr.y = stageH * 0.1;
            endPageSpr.width = stageW * 0.1;
            endPageSpr.height = stageW * 0.1 * 1.675;
            var backButton = this.createBitmapByName("back_2_png");
            this.addChild(backButton);
            backButton.x = stageW * 0.1;
            backButton.y = stageH * 0.05;
            backButton.width = stageW * 0.2;
            backButton.height = stageW * 0.2 * .58;
            var endPageButton = this.createBitmapByName("endpage_button_png");
            this.addChild(endPageButton);
            endPageButton.x = stageW * 0.4;
            endPageButton.y = stageH * 0.85;
            endPageButton.width = stageW * 0.2;
            endPageButton.height = stageH * 0.12;
            endPageButton.anchorOffsetX = stageW * 0.1;
            endPageButton.anchorOffsetY = stageH * 0.06;
            endPageButton.x += stageW * 0.1;
            endPageButton.y += stageH * 0.06;
            endPageButton.alpha = 1;
            backButton.touchEnabled = true;
            backButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                this.stage.addChild(new Welcome);
                this.stage.removeChild(this);
            }, this);
            endPageButton.touchEnabled = true;
            endPageButton.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
                window.location.href = 'baidu.com';
            }, this);
        }
    };
    /**
     * 根据name关键字创建一个Bitmap对象。name属性请参考resources/resource.json配置文件的内容。
     * Create a Bitmap object according to name keyword.As for the property of name please refer to the configuration file of resources/resource.json.
     */
    End.prototype.createBitmapByName = function (name) {
        var result = new egret.Bitmap();
        var texture = RES.getRes(name);
        result.texture = texture;
        return result;
    };
    return End;
}(egret.Sprite));
__reflect(End.prototype, "End");
