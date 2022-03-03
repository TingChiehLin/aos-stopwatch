import Button from './components/Button';
import Timer from "./layout/Timer";
import {useSelector} from "react-redux";

const App = () => {
    const isTimeOn = useSelector(state => state.timer.isTimeOn)

    return (
        <div className="h-screen flex justify-center items-center flex-col gap-10">
            <Timer/>
            <div className={"mt-24 flex justify-center items-center gap-4"}>
                <Button text={"Start"}/>
                <Button text={"Pause"}/>
                {!isTimeOn && <Button text={"Reset"}/>}
            </div>
        </div>
    );
}

export default App;
