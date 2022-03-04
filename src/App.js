import Button from './components/Button';
import Timer from "./layout/Timer";
import {useSelector} from "react-redux";
import ColorHandler from "./components/ColorHandler";
import TimerRecordDisplay from "./layout/TimerRecordDisplay";

const App = () => {
    const isTimeOn = useSelector(state => state.timer.isTimeOn)

    return (
        <div className="h-screen flex justify-center items-center flex-col gap-10">
            <Timer/>
            <div className={"mt-12 flex justify-center items-center gap-4"}>
                <Button text={"Start"}/>
                <Button text={"Pause"}/>
                {!isTimeOn && <Button text={"Reset"}/>}
            </div>
            <div className={"mt-4 text-2xl"}>Change Color Scheme</div>
            <div className={"mt-4"}>
                <ColorHandler color={"blue"}/>
                <ColorHandler color={"red"}/>
                <ColorHandler color={"green"}/>
            </div>
            <TimerRecordDisplay/>
        </div>
    );
}

export default App;
