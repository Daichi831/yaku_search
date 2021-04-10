#! /usr/bin/env node

const Enquirer = require('enquirer');

const hannsuu1 = ['門前自摸', '立直', '一発', '断么', '平和', '一盃口', '役牌', '槍槓', '嶺上開花', '海底', '河底'];
const hannsuu2 = ['ダブリー', '七対子', '連風牌', '対々和', '三暗刻', '三色同刻', '三色同順', '混老頭', '一気通貫', '混全帯么九', '小三元', '三槓子'];
const hannsuu3 = ['混一色', '純全帯么九', '二盃口'];
const hannsuu6 = ['清一色'];
const hannsuu13 = ['国士無双', '四暗刻', '大三元', '字一色', '小四喜', '緑一色', '清老頭', '九蓮宝燈', '天和', '地和'];
const hannsuuW = ['大四喜', '四槓子', '純正九蓮宝燈', '国士無双十三面待ち'];

(async () => {
    const list = [ '1翻', '2翻', '3翻', '6翻', '役満', 'W役満' ];
    const hannsuu = {
        type: 'select',
        name: 'hannsuu',
        message: '翻数に応じた麻雀役を表示します：翻数を選択してください',
        choices: list
    };

    const answer = await Enquirer.prompt(hannsuu)
    return answer.hannsuu
})().then(answer => {
    if (answer === '1翻'){
        console.log(hannsuu1.join(','))
    }
    else if (answer === '2翻'){
        console.log(hannsuu2.join(','))
    }
    else if (answer === '3翻'){
        console.log(hannsuu3.join(','))
    }
    else if (answer === '6翻'){
        console.log(hannsuu6.join(','))
    }
    else if (answer === '役満'){
        console.log(hannsuu13.join(','))
    }
    else if (answer === 'W役満'){
        console.log(hannsuuW.join(','))
    }
})
.catch(error => {
    console.log(error)
});
