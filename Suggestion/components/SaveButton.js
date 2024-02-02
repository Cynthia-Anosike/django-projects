"use client";

import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useState } from 'react';

export default function SaveButton() {
  const [loading, setLoading] = useState(false);
  function handleClick() {
    setLoading(true | false);
  }

  return (
    <div>
     

        <LoadingButton
          color="secondary"
          onClick={handleClick}
          loading={loading}
          loadingPosition="start"
          startIcon={<SaveIcon />}
          variant="contained"
        >
          <span>Save</span>
        </LoadingButton>

    </div>
  );
}