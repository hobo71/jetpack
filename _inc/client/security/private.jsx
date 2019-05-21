/**
 * External dependencies
 */
import React, { Component } from 'react';
import { translate as __ } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import { FEATURE_PRIVATE_JETPACK } from 'lib/plans/constants';
import { ModuleToggle } from 'components/module-toggle';
import SettingsCard from 'components/settings-card';
import SettingsGroup from 'components/settings-group';
import { withModuleSettingsFormHelpers } from 'components/module-settings/with-module-settings-form-helpers';

export const Private = withModuleSettingsFormHelpers(
	class extends Component {
		render() {
			return (
				<SettingsCard
					{ ...this.props }
					module="private"
					feature={ FEATURE_PRIVATE_JETPACK }
					hideButton
				>
					<SettingsGroup
						hasChild
						module={ { module: 'private' } }
						support={ {
							text: __(
								"This option is great if you're still working on your site and aren't quite ready to show it off to the rest of the internet yet, or if you're publishing things you'd like to keep private or make available only to specific people. You can make your site public whenever you'd like (or vice versa)."
							),
							link: 'https://jetpack.com/support/private',
						} }
					>
						<p>
							{ __(
								'Private sites can only be seen by you and other users who are members of this site.'
							) }{' '}
						</p>

						<ModuleToggle
							slug="private"
							compact
							activated={ module_enabled }
							toggling={ this.props.isSavingAnyOption( 'private' ) }
							toggleModule={ this.props.toggleModuleNow }
						>
							{ __( 'Make your site private' ) }
						</ModuleToggle>
					</SettingsGroup>
				</SettingsCard>
			);
		}
	}
);
