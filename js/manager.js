'use strict';

module.exports = function (oAppData) {
	var
		TextUtils = require('%PathToCoreWebclientModule%/js/utils/Text.js'),
		Ajax = require('%PathToCoreWebclientModule%/js/Ajax.js'),
		App = require('%PathToCoreWebclientModule%/js/App.js')
	;
	
	if (App.getUserRole() === Enums.UserRole.NormalUser)
	{
		return {
			start: function (ModulesManager) {
				App.subscribeEvent('MailWebclient::AddAllAttachmentsDownloadMethod', function (fAddAllAttachmentsDownloadMethod) {
					fAddAllAttachmentsDownloadMethod({
						'Text': TextUtils.i18n('%MODULENAME%/ACTION_SAVE_ATTACHMENTS_TO_FILES'),
						'Handler': function (iAccountId, aHashes) {
							Ajax.send('%ModuleName%', 'Save', {
								'AccountID': iAccountId,
								'Attachments': aHashes
							});
						}
					});
				});
			}
		};
	}
	
	return null;
};
