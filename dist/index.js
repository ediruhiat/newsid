#! /usr/bin/env node
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
const moment_1 = __importDefault(require("moment"));
const commander_1 = require("commander");
const options_1 = require("./options");
const utils_1 = require("./lib/utils");
const figlet_1 = __importDefault(require("figlet"));
const chalk = require('chalk');
const program = new commander_1.Command();
const print = console.log;
program
    .version("1.0.0")
    .description("Indonesian breaking news CLI")
    .option("-h, --help", "show this help page")
    .option("-p, --platform [value]", "choose specific platform [cnn | cnbc | republika | tempo | kumparan | okezone | bbc | tribun | vice | suara | voa], default is cnn")
    .option("-c, --count <value>", "option for showing specific numbers of news [1-10], default is 5")
    .parse(process.argv);
const options = program.opts();
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const platform = options === null || options === void 0 ? void 0 : options.platform;
        const count = options === null || options === void 0 ? void 0 : options.count;
        if (options.help) {
            print(chalk.dim(figlet_1.default.textSync("Newsid", {
                font: "Speed",
                horizontalLayout: "default",
                verticalLayout: "default",
                width: 80,
                whitespaceBreak: true,
            })));
            program.outputHelp();
            return;
        }
        if (platform) {
            if (!options_1.PLATFORMS.includes(platform)) {
                console.error(chalk.red(`Platform option '${platform}' is not registered in this app`));
                return;
            }
        }
        if (count) {
            if (!(0, utils_1.isNumeric)(count)) {
                console.error(chalk.red(`Count option must be an integer of [1-10] range`));
                return;
            }
            if (count < 1 || count > 10) {
                console.error(chalk.red(`Count option could not be outside of [1-10] range`));
                return;
            }
        }
        const data = yield (0, options_1.getBreakingNews)(platform, count ? Math.round(count) : undefined);
        data === null || data === void 0 ? void 0 : data.forEach((news) => {
            const postTime = (0, moment_1.default)(new Date(news.isoDate)).locale('id');
            print(`${news.title} ${chalk.dim(postTime.fromNow())}\n${chalk.underline.blue(news.link)}\n`);
        });
    });
}
main();
//# sourceMappingURL=index.js.map