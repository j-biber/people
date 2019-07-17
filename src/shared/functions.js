export const passingTime = (start) => {
    let millis = Date.now() - start;
    let output;

    if (millis < 60000) {
        output = 'Less than minute';
    }
    if (millis < 3600000) {
        const minutes = Math.floor(millis / 60000);
        if (minutes < 2) output = '1 minute';
        else output = `${minutes} minutes`;
    }
    if (millis < 86400000) {
        const hours = Math.floor(millis / 3600000);
        if (hours < 2) output = 'Over an hour';
        else output = `${hours} hours`;
    }
    if (millis < 604800000) {
        const days = Math.floor(millis / 86400000);
        if (days < 2) output = 'Over a day';
        else output = `${days} days`;
    }
    if (millis < 2678400000) {
        output = 'Over a week';
    }
    else output = 'Over a month';

    this.setState({
        timePassedSinceLastFetch: output,
    });
}


/*
    1.000 ms = 1s
    60.000 ms = 60s = 1min
    3.600.000 ms = 60min = 1hr
    86.400.000 ms = 24hr = 1day
    604.800.000 ms = 7day = 1week
    2.678.400.000 ms = 31day = 1month
*/