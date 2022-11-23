import { PluginDescriptor } from '@craftercms/studio-ui';
import Dialog from './App';
import OpenSmartCopyPanelButton from './components/OpenSmartCopyPanelButton';
import OpenSmartCopyToolbarButton from './components/OpenSmartCopyToolbarButton';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.smartcopy',
  widgets: {
    'org.rd.plugin.smartcopy.dialog': Dialog,
    'org.rd.plugin.smartcopy.openSmartCopyPanelButton': OpenSmartCopyPanelButton,
    'org.rd.plugin.smartcopy.openSmartCopyToolbarButton': OpenSmartCopyToolbarButton
  }
};

export { Dialog, OpenSmartCopyPanelButton, OpenSmartCopyToolbarButton };

export default plugin;
