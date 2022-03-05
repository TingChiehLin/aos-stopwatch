import Button from './components/Button';
import Timer from "./layout/Timer";
import {useSelector} from "react-redux";
import ColorHandler from "./components/ColorHandler";
import TimerRecordDisplay from "./layout/TimerRecordDisplay";

const App = () => {
    const isTimeOn = useSelector(state => state.timer.isTimeOn)

    return (
        <div className="w-[64rem] mx-auto">
            <Timer/>
            <div className={"flex justify-center items-center gap-4"}>
                <Button text={"Start"}/>
                <Button text={"Pause"}/>
                {!isTimeOn && <Button text={"Reset"}/>}
            </div>
            <div className={"my-12 mx-auto"}>
                <div className={"text-2xl text-center"}>Change Color Scheme</div>
                <div className={"mt-12 flex justify-center items-center gap-4"}>
                    <ColorHandler color={"blue"}/>
                    <ColorHandler color={"red"}/>
                    <ColorHandler color={"green"}/>
                </div>
            </div>
            <TimerRecordDisplay/>
        </div>
    );
}

export default App;
