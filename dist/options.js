"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getBreakingNews = exports.PLATFORMS = void 0;
const axios_1 = __importDefault(require("axios"));
const news_api_1 = __importDefault(require("./const/news.api"));
exports.PLATFORMS = [
    "cnn", "cnbc", "republika", "tempo", "kumparan", "okezone", "bbc", "tribun", "vice", "suara", "voa"
];
function getBreakingNews(platform, count, debug) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = platform ? news_api_1.default[platform] : news_api_1.default.cnn;
        const data = yield axios_1.default.get(url).then((res) => {
            const result = res.data;
            if (result.code === 200) {
                const news = result.data;
                return news === null || news === void 0 ? void 0 : news.slice(0, count !== null && count !== void 0 ? count : 5);
            }
            return result;
        });
        return data;
    });
}
exports.getBreakingNews = getBreakingNews;
//# sourceMappingURL=options.js.map