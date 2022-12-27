import React from 'react';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import { Button } from '@twilio-paste/core/button';
import { DeleteIcon as PasteDeleteIcon } from "@twilio-paste/icons/esm/DeleteIcon";
import { Stack } from '@twilio-paste/core/stack';

const CustomTaskList = () => {

  return (
    <Stack orientation='horizontal'>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <Button variant='destructive' size='icon'>
        <PasteDeleteIcon decorative={false} title="delete" />
      </Button>
    </Stack>
  );
};

export default CustomTaskList;
