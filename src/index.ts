import moment from 'moment';
import { Command } from 'commander'
import { PLATFORMS, getBreakingNews } from './options';
import { isNumeric } from './lib/utils';
import figlet from 'figlet';

const chalk = require('chalk')

const program = new Command();
const print = console.log

program
  .version("1.0.0")
  .description("Indonesian breaking news CLI")
  .option("-h, --help", "show this help page")
  .option("-p, --platform [value]", "choose specific platform [cnn | cnbc | republika | tempo | kumparan | okezone | bbc | tribun | vice | suara | voa], default is cnn")
  .option("-c, --count <value>", "option for showing specific numbers of news [1-10], default is 5")
  .parse(process.argv);

const options = program.opts();

async function main() {
  const platform = options?.platform
  const count = options?.count

  if (options.help) {
    print(
      chalk.dim(
        figlet.textSync("Newsid", {
          font: "Speed",
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        }))
    )

    program.outputHelp()
    return
  }

  if (platform) {
    if (!PLATFORMS.includes(platform)) {
      console.error(chalk.red(`Platform option '${platform}' is not registered in this app`))
      return
    }
  }
  if (count) {
    if (!isNumeric(count)) {
      console.error(chalk.red(`Count option must be an integer of [1-10] range`))
      return
    }
    if (count < 1 || count > 10) {
      console.error(chalk.red(`Count option could not be outside of [1-10] range`))
      return
    }
  }

  const data = await getBreakingNews(platform, count ? Math.round(count) : undefined)


  data?.forEach((news: any) => {
    const postTime = moment(new Date(news.isoDate)).locale('id')
    print(
      `${news.title} ${chalk.dim(postTime.fromNow())}\n${chalk.underline.blue(news.link)}\n`)
  });

}

main()
