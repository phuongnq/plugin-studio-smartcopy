import * as React from 'react';
import ToolsPanelListItemButton from '@craftercms/studio-ui/components/ToolsPanelListItemButton';
import { showWidgetDialog } from '@craftercms/studio-ui/state/actions/dialogs';
import { useDispatch } from 'react-redux';

export function Foo(props) {
  const buttonLabel = props.title ? props.title : 'Smart Copy';
  const buttonIcon = props.icon && props.icon.id ? props.icon.id : '@mui/icons-material/ContentPasteOutlined';

  const dispatch = useDispatch();
  return (
    <ToolsPanelListItemButton
      icon={{ id: buttonIcon }}
      title={buttonLabel}
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
    />
  );
}

export default Foo;
