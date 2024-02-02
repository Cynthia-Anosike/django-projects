//this is the general loading state for all pages
import CircularProgress from '@mui/material/CircularProgress';

export default function Load() {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress />
    </div>
  ) 
}
