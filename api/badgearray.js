export default async function handler(request, res) {

    const badgelist = 
    [
      {
        "name": "Bryan",
        "line2": "head honcho",
        "line3": "visual thinkery",
        "media": "Media",
        "mainimage": "https://static.wikia.nocookie.net/632dfc9a-96d9-4fbc-971a-8fc70c9ed338/scale-to-width/755",
        "secimage": "https://i.seadn.io/gae/2hDpuTi-0AMKvoZJGd-yKWvK4tKdQr_kLIpB_qSeMau2TNGCNidAosMEvrEXFO9G6tmlFlPQplpwiqirgrIPWnCKMvElaYgI-HiVvXc?auto=format&w=1000",
        "sepia": false,
        "bw": true,
        "tvcolor": "#c63d49",
        "topcolor1": "#bf00bf",
        "topcolor2": "#00bfbf",
        "topcolor3": "#0000bf",
        "topcolor4": "#bfbfbf",
        "topcolor5": "#bfbf00",
        "topcolor6": "#bf0000",
        "topcolor7": "#00bf00",
        "bottomcolor1": "#0000bf",
        "bottomcolor2": "#00bfbf",
        "bottomcolor3": "#bf00bf",
        "bottomcolor4": "#bfbfbf",
        "bottomcolor5": "#000000",
        "bottomcolor6": "#000000",
        "bottomcolor7": "#000000",
        "backgroundcolor": "#f2f2f2",
        "knobscolor": "#cbcaca",
        "fontcolor": "#000000",
      },
      {
        "name": "Harry Styles",
        "line2": "Wizard",
        "line3": "wingardium leviosuuh",
        "media": "pottah",
        "mainimage": "https://i2-prod.mirror.co.uk/incoming/article12524733.ece/ALTERNATES/s615b/EMB-PAY-EXCLUSIVE-Daniel-Radcliffe-looking-menacing-while-shooting-guns-and-wearing-tiger-feet.jpg",
        "secimage": "https://i.ytimg.com/vi/0N6ZphWhqkw/maxresdefault.jpg",
        "sepia": true,
        "bw": false,
        "tvcolor": "#A020F0",
        "topcolor1": "#bf00bf",
        "topcolor2": "#00bfbf",
        "topcolor3": "#0000bf",
        "topcolor4": "#bfbfbf",
        "topcolor5": "#bfbf00",
        "topcolor6": "#bf0000",
        "topcolor7": "#00bf00",
        "bottomcolor1": "#0000bf",
        "bottomcolor2": "#00bfbf",
        "bottomcolor3": "#bf00bf",
        "bottomcolor4": "#bfbfbf",
        "bottomcolor5": "#000000",
        "bottomcolor6": "#000000",
        "bottomcolor7": "#000000",
        "backgroundcolor": "#f2f2f2",
        "knobscolor": "#cbcaca",
        "fontcolor": "#000000",
      },
      {
        "name": "Hulk",
        "line2": "Strong Man",
        "line3": "Avenger",
        "media": "Hulk",
        "mainimage": "https://i.pinimg.com/originals/c8/28/07/c828078ea77b538c0f189236fae10a23.jpg",
        "secimage": "https://i.pinimg.com/originals/c8/28/07/c828078ea77b538c0f189236fae10a23.jpg",
        "sepia": false,
        "bw": false,
        "tvcolor": "#9b5f9b",
        "topcolor1": "#bf00bf",
        "topcolor2": "#00bfbf",
        "topcolor3": "#cd4aad",
        "topcolor4": "#bfbfbf",
        "topcolor5": "#bfbf00",
        "topcolor6": "#cd4aad",
        "topcolor7": "#00bf00",
        "bottomcolor1": "#0000bf",
        "bottomcolor2": "#00bfbf",
        "bottomcolor3": "#bf00bf",
        "bottomcolor4": "#cd4aad",
        "bottomcolor5": "#000000",
        "bottomcolor6": "#000000",
        "bottomcolor7": "#cd4aad",
        "backgroundcolor": "#aaed4f",
        "knobscolor": "#ab7c81",
        "fontcolor": "#f36bcb",
      },
      {
        "name": "Thanos",
        "line2": "Purple Man",
        "line3": "Not an avenger",
        "media": "Bad",
        "mainimage": "https://pbs.twimg.com/media/D6jHPIyW4AE4Ald.jpg",
        "secimage": "https://preview.redd.it/b1u4r90hphk11.jpg?width=640&crop=smart&auto=webp&s=7a764fcddf06d32aaacc68ac483eedbd0edaac43",
        "sepia": false,
        "bw": false,
        "tvcolor": "#5edba0",
        "topcolor1": "#bf00bf",
        "topcolor2": "#00bfbf",
        "topcolor3": "#136f27",
        "topcolor4": "#bfbfbf",
        "topcolor5": "#bfbf00",
        "topcolor6": "#136f27",
        "topcolor7": "#00bf00",
        "bottomcolor1": "#136f27",
        "bottomcolor2": "#00bfbf",
        "bottomcolor3": "#bf00bf",
        "bottomcolor4": "#136f27",
        "bottomcolor5": "#000000",
        "bottomcolor6": "#136f27",
        "bottomcolor7": "#8e0f2e",
        "backgroundcolor": "#d1c979",
        "knobscolor": "#c7032c",
        "fontcolor": "#442817",
      },
      {
        "name": "Patrick Star",
        "line2": "Pinhead",
        "line3": "Bikini Bottom",
        "media": "Patrick",
        "mainimage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQgvfwM5AmiwBD23lm_EBS6Opg_ia0h2aKw&usqp=CAU",
        "secimage": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScQgvfwM5AmiwBD23lm_EBS6Opg_ia0h2aKw&usqp=CAU",
        "sepia": false,
        "bw": false,
        "tvcolor": "#817e56",
        "topcolor1": "#bf00bf",
        "topcolor2": "#292ef2",
        "topcolor3": "#0000bf",
        "topcolor4": "#292ef2",
        "topcolor5": "#bfbf00",
        "topcolor6": "#292ef2",
        "topcolor7": "#00bf00",
        "bottomcolor1": "#0000bf",
        "bottomcolor2": "#8a7748",
        "bottomcolor3": "#bf00bf",
        "bottomcolor4": "#8a7748",
        "bottomcolor5": "#000000",
        "bottomcolor6": "#8a7748",
        "bottomcolor7": "#000000",
        "backgroundcolor": "#8350e2",
        "knobscolor": "#b778c5",
        "fontcolor": "#009513",
      },
    ];
  
    res.setHeader('Cache-Control', 'max-age=0, s-maxage=1800');
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET,OPTIONS,PATCH,DELETE,POST,PUT");
    res.setHeader("Access-Control-Allow-Headers", "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version");
    res.json(badgelist);
  }