import {
	AbstractSkillViewController,
	ViewControllerOptions,
	SkillView,
	CardViewController,
	SkillViewControllerLoadOptions,
	Router,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
	public static id = 'root'
	protected cardVc: CardViewController
	private router: Router

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.CardVc()
	}

	private CardVc(): CardViewController {
		
		return this.Controller('card', {
			id: 'controls',
			header: {
				title: 'Controls',
			},
			body: this.renderBody()
			})
	}

	private renderBody() {
		return {
			sections: [
				{
					buttons: [
						{
							id: 'button1',
							label: 'Button 1',
							onClick: () => {},
						},
						{
							id: 'button2',
							label: 'Button 2',
							onClick: () => {},
						},
						{
							id: 'button3',
							label: 'Button 3',
							onClick: () => {},
						}
					]
				}
			]
		}
	}

	public render(): SkillView {
		return {
			layouts: [
				{
					cards: [this.cardVc.render()],
				},
			],
		}
	}

	public async load(options: SkillViewControllerLoadOptions<Record<string, any>>): Promise<void> {
		const { router } = options
		this.router = router
	}
}
