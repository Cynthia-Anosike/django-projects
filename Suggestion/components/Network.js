import SignalCellularConnectedNoInternet0BarIcon from '@mui/icons-material/SignalCellularConnectedNoInternet0Bar';
const size = "200px"
const Network = () => {
    return (
        <>
        <div className="w-screen h-screen bg-black flex flex-col items-center justify-center">
            <SignalCellularConnectedNoInternet0BarIcon fontSize="large" color='warning'/>
            <h1 className="text-4xl text-white">No Internet Connection</h1>
        </div>
        </>
    )
}

export default Network
