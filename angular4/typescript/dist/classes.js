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
var Imovel = /** @class */ (function () {
    function Imovel(area) {
        this.area = area;
    }
    return Imovel;
}());
// O construtor acima também pode ser declarado da seguinte forma (com auto inicializacao de variaveis privadas):
var Imovel2 = /** @class */ (function () {
    function Imovel2(area) {
        this.area = area;
    }
    return Imovel2;
}());
// Herança
var Casa = /** @class */ (function (_super) {
    __extends(Casa, _super);
    function Casa(area) {
        return _super.call(this, area) || this;
    }
    return Casa;
}(Imovel2));
var Casa3 = /** @class */ (function () {
    function Casa3() {
    }
    return Casa3;
}());
