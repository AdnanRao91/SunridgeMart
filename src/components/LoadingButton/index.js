import { CircularProgress } from "@mui/material"

const LoadingButton = ({ handleSubmit, style, title, isLoading }) => {
    return (
        <button onClick={handleSubmit} style={style} className="w-full bg-red-500 text-white p-2 rounded hover:bg-red-600 transition">
            {
                isLoading ?
                    <CircularProgress sx={{ color: "#fff" }} size={22} />
                    :
                    title
            }
        </button>
    )
}

export default LoadingButton