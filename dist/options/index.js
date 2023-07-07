var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import axios from "axios";
import newsAPI from "../const/news.api";
export function getBreakingNews() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = newsAPI.cnn;
        const data = yield axios.get(url).then((res) => {
            var _a;
            const result = res.data;
            if (result.code === 200) {
                const news = (_a = res.data) === null || _a === void 0 ? void 0 : _a.data;
                return news === null || news === void 0 ? void 0 : news.slice(0, 5);
            }
            return result;
        });
        return data;
    });
}
//# sourceMappingURL=index.js.map