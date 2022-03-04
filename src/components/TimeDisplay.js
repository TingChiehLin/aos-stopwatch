const TimeDisplay = ({id, hours, minutes, seconds}) => {

    return (
        <div className={"flex items-center justify-center gap-1"}>
            <div>Number: {id}</div>
            <div className={"ml-12"}>{hours}</div>
            <div>{minutes}</div>
            <div>{seconds}</div>
        </div>
    )
}

export default TimeDisplay;
