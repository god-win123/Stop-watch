let [seconds,minutes,hour] = [0,0,0];
        let num = document.getElementById("watch");
        timer = null;

        function stopwatch(){
            seconds++;
            if(seconds == 60){
                seconds = 0;
                minutes++;
                if (minutes == 60){
                    minutes = 0;
                    hour++;
                } 
            }
            let h = hour<10 ? "0" + hour:hour;
            let m = minutes<10 ? "0" + minutes:minutes;
            let s = seconds<10 ? "0" + seconds:seconds;
            num.innerHTML = h + ":" + m + ":" + s;
        // now we have to update the html element

        }
        // now we have to execute this function every second
        // time interval function

        function startwatch(){
            if (timer!=null)
            {
                clearInterval(timer);
            }
            timer = setInterval(stopwatch,1000);
        }

        function stop_the_watch(){
            clearInterval(timer)
        }
        function reset_watch(){
            clearInterval(timer);
            [seconds,minutes,hour] = [0,0,0];
            num.innerHTML = "00:00:00";
        }
