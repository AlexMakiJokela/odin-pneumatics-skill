import {
	AbstractSkillViewController,
	ViewControllerOptions,
	SkillView,
	CardViewController,
	buildActiveRecordCard,
	SkillViewControllerLoadOptions,
	CardSection,
	ListViewController,
	buildActiveRecordList,
	ListRow,
} from '@sprucelabs/heartwood-view-controllers'

export default class RootSkillViewController extends AbstractSkillViewController {
	public static id = 'root'
	protected cardVc: CardViewController
	protected listVc: ListViewController
	private fillBallastLabel: string = 'Fill Ballast'

	public constructor(options: ViewControllerOptions) {
		super(options)
		this.listVc = this.ListVc()
		this.cardVc = this.CardVc()
	}

	private ListVc(): ListViewController {
		return this.Controller(
			'active-record-list',
			buildActiveRecordList({
				eventName: 'pneuamtics.update-pneumatics-data::v2024_04_06',
				rowTransformer: this.renderRow.bind(this),
				responseKey: 'yarrrr',
				columnWidths: ['content', 'fill'],
			})
		)
		// 	id: 'controls',
		// 	header: {
		// 		title: 'Controls',
		// 	},
		// 	body: sections,
		// })
	}

	private CardVc(): CardViewController {
		return this.Controller('card', {
			id: 'controls',
			header: {
				title: 'Controls',
			},
			body: {
				sections: [
					{
						list: this.listVc.render(),
					},
				],
			},
		})
	}

	private renderRow(shockAssembly: ShockAssembly): ListRow {
		return {
			id: 'thingy',
			cells: [
				{
					text: { content: `Ballast: ${shockAssembly.ballastPressure}` },
				},
				{
					text: { content: `Shock: ${shockAssembly.shockPressure}` },
				},
				{
					button: {
						id: 'fillBallast',
						label: shockAssembly.ballastFillValveState,
						onClick: this.handleFillBallast.bind(this),
					},
				},
				{
					button: {
						id: 'fillShock',
						label: shockAssembly.shockFillValveState,
						onClick: this.handleFillShock.bind(this),
					},
				},
				{
					button: {
						id: 'ventShock',
						label: shockAssembly.shockVentValveState,
						onClick: this.handleVentShock.bind(this),
					},
				},
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

export type ShockAssembly = {
	id: string
	ballastPressure: number
	shockPressure: number
	ballastFillValveState: ValveState
	shockFillValveState: ValveState
	shockVentValveState: ValveState
}

export type ValveState = 'Open' | 'Closed'
