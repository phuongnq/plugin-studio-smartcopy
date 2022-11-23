import * as React from 'react';
import ContentPasteOutlined from '@mui/icons-material/ContentPasteOutlined';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function OpenSmartCopyToolbarButton(props) {
  const buttonLabel = props.title ? props.title : 'Smart Copy';

  const dispatch = useDispatch();
  return (
    <Tooltip title={buttonLabel}>
      <IconButton
        size="large"
        onClick={() =>
          dispatch(
            showWidgetDialog({
              title: buttonLabel,
              extraProps: props,
              widget: {
                id: 'org.rd.plugin.smartcopy.dialog'
              }
            })
          )
        }
      >
        <ContentPasteOutlined />
      </IconButton>
    </Tooltip>
  );
}

export default OpenSmartCopyToolbarButton;
