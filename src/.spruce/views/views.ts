import RootSkillViewController from '../../skillViewControllers/Root.svc'

import '@sprucelabs/heartwood-view-controllers'

const vcs = {
    RootSkillViewController,
}

export const pluginsByName = {
}

type LoadOptions<Args extends Record<string,any>[]> = Args[0]['args'] extends Record<string, any> ? Args[0]['args'] : Record<never, any>

declare module '@sprucelabs/heartwood-view-controllers/build/types/heartwood.types' {
	interface SkillViewControllerMap {
		'pneumatics.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'pneumatics.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'pneumatics.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
	}

	interface ViewControllerPlugins {
	}
}

//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs, pluginsByName) }

export default vcs
