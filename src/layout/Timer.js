import React from "react";
import {useSelector} from "react-redux";
import SevenSegmentDisplay from "../components/SevenSegmentDisplay";

const Timer = () => {
    const isTimeOn = useSelector(state => state.timer.isTimeOn)
    const isReset = useSelector(state => state.timer.isReset)
    const [time, setTime] = React.useState(0);

    React.useEffect(() => {
        let interval = null;

        if (isTimeOn) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime + 10);
            }, 50);
        } else if (!isTimeOn) {
            clearInterval(interval);
        }
        if (isReset) {
            setTime(0)
        }
        return () => clearInterval(interval);
    }, [isTimeOn, isReset]);

    let hours = ("0" + Math.floor((time / 60000) % 60)).slice(-2)
    let minutes = ("0" + Math.floor((time / 1000) % 60)).slice(-2)
    let seconds = ("0" + ((time / 10) % 100)).slice(-2)

    return (
        <>
            <div className={"flex justify-center items-center gap-4 text-6xl"}>
                <SevenSegmentDisplay digits={[hours.charAt(0), hours.charAt(1)]}/>
                :
                <SevenSegmentDisplay digits={[minutes.charAt(0), minutes.charAt(1)]}/>
                :
                <SevenSegmentDisplay digits={[seconds.charAt(0), seconds.charAt(1)]}/>
            </div>
        </>
    )
}

export default Timer;


