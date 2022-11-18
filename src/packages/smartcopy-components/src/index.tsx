import { PluginDescriptor } from '@craftercms/studio-ui';
import Dialog from './components/Dialog';
import OpenSmartCopyPanelButton from './components/OpenSmartCopyPanelButton';

const plugin: PluginDescriptor = {
  locales: undefined,
  scripts: undefined,
  stylesheets: undefined,
  id: 'org.rd.plugin.smartcopy',
  widgets: {
    'org.rd.plugin.smartcopy.openSmartCopyPanelButton': OpenSmartCopyPanelButton,
    'org.rd.plugin.smartcopy.dialog': Dialog
  }
};

export { OpenSmartCopyPanelButton, Dialog };

export default plugin;
