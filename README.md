
# Newsid

Breaking news in your terminal, here and now.

## Description
Newsid is a terminal (CLI) application that displays a list of breaking news from various platforms in Indonesia, such as CNN, CNBC, Kumparan, Tribun, and more. It simply presents a list of breaking news with their titles, post times, and relevant links to the respective platform's website. This application utilizes the open-source API called [Berita Indo API](https://github.com/satyawikananda/berita-indo-api.git) developed by [satyawikananda](https://github.com/satyawikananda).


## Installation

Install this project with npm

```shell
npm install -g newsid
```

## Usage/Examples
#### Show Help
```shell
newsid --help
```
```shell
Usage: newsid [options]

Indonesian breaking news CLI

Options:
  -V, --version           output the version number
  -h, --help              show this help page
  -p, --platform [value]  choose specific platform [cnn | cnbc | republika | tempo | kumparan | okezone | bbc | tribun | vice | suara | voa], default is cnn
  -c, --count <value>     option for showing specific numbers of news [1-10], default is 5
  ```

#### Default (no option)
```shell
newsid
```
```shell
Kisah Sedih Joao Felix: Tak Dibeli Chelsea, Nomor 7 Atletico Lenyap 4 menit yang lalu
https://www.cnnindonesia.com/olahraga/20230707155505-142-970810/kisah-sedih-joao-felix-tak-dibeli-chelsea-nomor-7-atletico-lenyap

TNI Ikut Bangun Pesantren di Kediri untuk Pelajar Semua Agama 19 menit yang lalu
https://www.cnnindonesia.com/nasional/20230707232115-20-970956/tni-ikut-bangun-pesantren-di-kediri-untuk-pelajar-semua-agama

NATO Pantau Keberadaan Bos Wagner usai Disebut Kembali ke Rusia 34 menit yang lalu
https://www.cnnindonesia.com/internasional/20230707154821-134-970807/nato-pantau-keberadaan-bos-wagner-usai-disebut-kembali-ke-rusia

Dua Juru Parkir Blok M Square Dipecat Buntut Pungutan Liar sejam yang lalu
https://www.cnnindonesia.com/nasional/20230708014203-20-970968/dua-juru-parkir-blok-m-square-dipecat-buntut-pungutan-liar

Piala Asia: Timnas Indonesia Pilih Tempa Diri Tiga Pekan di Turki sejam yang lalu
https://www.cnnindonesia.com/olahraga/20230707200440-142-970911/piala-asia-timnas-indonesia-pilih-tempa-diri-tiga-pekan-di-turki
```

The default command will show the breaking news from CNN platform with the default count is 5, you can override the options of platform using -p or --platform followed by tha value. To override the news count use the -c or --count option in the range of 1-10.


## License

[MIT](https://choosealicense.com/licenses/mit/)

