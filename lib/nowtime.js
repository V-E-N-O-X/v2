function getGreetingByTime(time) {
    let nowtime = '';

    if (time < "05:00:00") {
        nowtime = 'Good night 🏙';
    } else if (time < "11:00:00") {
        nowtime = 'Good morning 🌅';
    } else if (time < "15:00:00") {
        nowtime = 'Good afternoon 🏞';
    } else if (time < "18:00:00") {
        nowtime = 'Good evening 🌇';
    } else if (time < "19:00:00") {
        nowtime = 'Good evening 🌆';
    } else {
        nowtime = 'Good night 🌌';
    }

    return nowtime;
}

module.exports = getGreetingByTime;
