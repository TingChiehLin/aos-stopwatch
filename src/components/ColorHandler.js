import {useDispatch} from "react-redux";
import {colorActions} from "../store/color-slice";

const ColorHandler = ({color}) => {

    const dispatch = useDispatch()
    const changeColorHandler = () => {
        dispatch(colorActions.changeColor(color))
    }

    return (
        <button className={`p-12 bg-${color}-300 rounded-full`}
                onClick={changeColorHandler}
        >
        </button>
    )
}

export default ColorHandler;
