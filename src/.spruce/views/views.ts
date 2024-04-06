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
		'pneuamtics.root': RootSkillViewController
	}

	interface SkillViewControllerArgsMap {
		'pneuamtics.root': LoadOptions<Parameters<RootSkillViewController['load']>>
	}

	interface ViewControllerMap {
		'pneuamtics.root': RootSkillViewController
	}

    interface ViewControllerOptionsMap {
	}

	interface ViewControllerPlugins {
	}
}

//@ts-ignore
if(typeof heartwood === 'function') { heartwood(vcs, pluginsByName) }

export default vcs
