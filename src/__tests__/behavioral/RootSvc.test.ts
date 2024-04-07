import { fake } from '@sprucelabs/spruce-test-fixtures'
import { test, assert } from '@sprucelabs/test-utils'
import { AbstractSpruceFixtureTest } from '@sprucelabs/spruce-test-fixtures'
import RootSkillViewController from '../../skillViewControllers/Root.svc'

@fake.login()
export default class RootSvcTest extends AbstractSpruceFixtureTest {

	private static vc: SpyRootSkillView

	protected static async beforeEach() {
		await super.beforeEach()
		this.vc = this.Vc()
		await this.load()		
	}

	@test()
	protected static async canCreateRootSvc() {

		assert.isTruthy(true)
	}

	@test()
	protected static async yourNextTest() {
		assert.isTrue(true)
	}

	private static async load() {
		await this.views.load(this.vc)
	}

	private static Vc(): SpyRootSkillView {
		return this.views.Controller('pneumatics.root', {}) as SpyRootSkillView
	}
}

class SpyRootSkillView extends RootSkillViewController {
	public getCardVc() {
		return this.cardVc
	}
}

