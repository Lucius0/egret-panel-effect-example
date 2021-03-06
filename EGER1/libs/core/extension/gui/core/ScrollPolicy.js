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
var egret;
(function (egret) {
    var gui;
    (function (gui) {
        /**
         * @class egret.gui.ScrollPolicy
         * @classdesc
         * 滚动条显示策略常量
         */
        var ScrollPolicy = (function () {
            function ScrollPolicy() {
            }
            /**
             * 如果子项超出父级的尺寸，则允许滚动，反之不允许滚动。
             * @constant egret.gui.ScrollPolicy.AUTO
             */
            ScrollPolicy.AUTO = "auto";
            /**
             * 从不允许滚动。
             * @constant egret.gui.ScrollPolicy.OFF
             */
            ScrollPolicy.OFF = "off";
            /**
             * 总是允许滚动。
             * @constant egret.gui.ScrollPolicy.ON
             */
            ScrollPolicy.ON = "on";
            return ScrollPolicy;
        })();
        gui.ScrollPolicy = ScrollPolicy;
        ScrollPolicy.prototype.__class__ = "gui.ScrollPolicy";
    })(gui = egret.gui || (egret.gui = {}));
})(egret || (egret = {}));
