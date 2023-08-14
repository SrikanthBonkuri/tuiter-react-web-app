import { updateTuitThunk } from "../services/tuits-thunks";
import { useDispatch } from "react-redux";
import { faHeart } from "@fortawesome/free-solid-svg-icons";


const TuitStats = ({props}) => {
    const dispatch = useDispatch();

    return (
        <div>
            <faHeart className="text-danger"
                onClick={() => dispatch(updateTuitThunk({ ...props, likes: props.likes + 1 }))}
            />
            <span className="ms-2">{props.likes}</span>
        </div>
    );
}

export default TuitStats;