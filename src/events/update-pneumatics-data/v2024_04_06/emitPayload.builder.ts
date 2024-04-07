import {
	buildSchema
} from '@sprucelabs/schema'

const updatePneumaticsDataEmitPayloadBuilder = buildSchema({
    id: 'updatePneumaticsDataEmitPayload',
    fields: {
        aTextField: {
            type: 'text',
            label: 'Update me',
        }
    }
})

export default updatePneumaticsDataEmitPayloadBuilder
