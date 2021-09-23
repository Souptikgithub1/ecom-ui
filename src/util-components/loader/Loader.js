import CircularProgress from "@mui/material/CircularProgress";
import './Loader.css'

const Loader = () => {
    return <div className='loader-container'>
        <CircularProgress color={"primary"} />
    </div>
}

export default Loader