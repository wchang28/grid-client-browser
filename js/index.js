"use strict";
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
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var $browser = require("rest-browser");
var grid_client_core_1 = require("grid-client-core");
var GridSession = (function (_super) {
    __extends(GridSession, _super);
    function GridSession() {
        return _super.call(this, $browser.get({ EventSource: global['EventSource'] }), null, null) || this;
    }
    GridSession.prototype.logout = function () {
        return new Promise(function (resolve, reject) {
            var path = "/logout";
            window.location.href = path;
            resolve({});
        });
    };
    return GridSession;
}(grid_client_core_1.SessionBase));
var GridClient = (function () {
    function GridClient() {
    }
    GridClient.getSession = function () {
        return new GridSession();
    };
    return GridClient;
}());
exports.GridClient = GridClient;
__export(require("grid-client-core"));
