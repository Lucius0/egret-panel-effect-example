/**
 * Copyright (c) 2014,Egret-Labs.org
 * All rights reserved.
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions are met:
 *
 *     * Redistributions of source code must retain the above copyright
 *       notice, this list of conditions and the following disclaimer.
 *     * Redistributions in binary form must reproduce the above copyright
 *       notice, this list of conditions and the following disclaimer in the
 *       documentation and/or other materials provided with the distribution.
 *     * Neither the name of the Egret-Labs.org nor the
 *       names of its contributors may be used to endorse or promote products
 *       derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY EGRET-LABS.ORG AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
 * WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
 * DISCLAIMED. IN NO EVENT SHALL EGRET-LABS.ORG AND CONTRIBUTORS BE LIABLE FOR ANY
 * DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
 * (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
 * LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
 * ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
 * SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
 */
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.Panel
         * @classdesc
         * 带有标题，内容区域的面板组件
         * @extends egret.gui.SkinnableContainer
         */
        var Panel = (function (_super) {
            __extends(Panel, _super);
            /**
             * 构造函数
             * @method egret.gui.Panel#constructor
             */
            function Panel() {
                _super.call(this);
                this._title = "";
                this.hostComponentKey = "egret.gui.Panel";
                this.touchEnabled = false;
            }
            Object.defineProperty(Panel.prototype, "title", {
                /**
                 * 标题文本内容
                 * @member egret.gui.Panel#title
                 */
                get: function () {
                    return this._title;
                },
                set: function (value) {
                    this._title = value;
                    if (this.titleDisplay)
                        this.titleDisplay.text = this.title;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * @method egret.gui.Panel#partAdded
             * @param partName {string}
             * @param instance {any}
             */
            Panel.prototype.partAdded = function (partName, instance) {
                _super.prototype.partAdded.call(this, partName, instance);
                if (instance == this.titleDisplay) {
                    this.titleDisplay.text = this.title;
                }
            };
            return Panel;
        })(gui.SkinnableContainer);
        gui.Panel = Panel;
        Panel.prototype.__class__ = "gui.Panel";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
