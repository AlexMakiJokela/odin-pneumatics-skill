import {
	AbstractSkillViewController,
	ViewControllerOptions,
	SkillView,
	CardViewController,
	SkillViewControllerLoadOptions,
	CardSection,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
	public static id = 'root'
	protected cardVc: CardViewController
	private fillBallastLabel: string = 'Fill Ballast'

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.cardVc = this.CardVc()
	}

	// private CardVc(): CardViewController {
	// 	const sections: CardSection[] = [
	// 		{
	// 			shouldBePadded: false,
	// 			list: this.renderList(),
	// 		},
	// 	]
	// }

	private CardVc(): CardViewController {
		return this.Controller('card', {
			id: 'controls',
			header: {
				title: 'Controls',
			},
			body: this.renderBody(),
		})
	}

	private renderBody() {
		return {
			sections: [
				{
					list: {
						rows: [
							{
								id: 'ballastPressure',
								height: 'content',
								cells: [
									{
										lineIcon: 'start',
									},
									{
										text: { content: 'Ballast Pressure: ' },
									},
									{
										text: { content: '0 psi' },
									},
									{
										button: {
											id: 'fillBallast',
											label: this.fillBallastLabel,
											onClick: this.handleFillBallast.bind(this),
										},
									},
								],
							},
							{
								id: 'shockPressure',
								height: 'content',
								cells: [
									{
										lineIcon: 'start',
									},
									{
										text: { content: 'Shock Pressure: ' },
									},
									{
										text: { content: '0 psi' },
									},
									{
										button: {
											id: 'fillShock',
											label: 'Fill Shock',
											onClick: this.handleFillShock.bind(this),
										},
									},
									{
										button: {
											id: 'ventShock',
											label: 'Vent Shock',
											onClick: this.handleVentShock.bind(this),
										},
									},
								],
							},
						],
					},
				},
				// {
				// 	buttons: [
				// 		{
				// 			id: 'fillBallast',
				// 			label: this.fillBallastLabel,
				// 			onClick: this.handleFillBallast.bind(this),
				// 		},
				// 		{
				// 			id: 'fillShock',
				// 			label: 'Fill Shock',
				// 			onClick: this.handleFillShock.bind(this),
				// 		},
				// 		{
				// 			id: 'ventShock',
				// 			label: 'Vent Shock',
				// 			onClick: this.handleVentShock.bind(this),
				// 		},
				// 	],
				// },
			],
		}
	}

	private async handleFillBallast() {
		this.fillBallastLabel = 'Close Valve!'

		console.log('Filling Ballast')
	}

	private async handleFillShock() {
		console.log('Filling Shock')
	}

	private async handleVentShock() {
		console.log('Venting Shock')
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
}
