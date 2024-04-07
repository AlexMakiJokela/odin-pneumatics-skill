import {
	buildSchema
} from '@sprucelabs/schema'

const updatePneumaticsDataEmitTargetBuilder = buildSchema({
    id: 'updatePneumaticsDataEmitTarget',
    fields: {
        aTextField: {
            type: 'text',
            label: 'Update me',
        }
    }
})

export default updatePneumaticsDataEmitTargetBuilder
