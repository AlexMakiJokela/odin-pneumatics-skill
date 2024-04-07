import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updatePneumaticsDataEmitPayloadSchema: SpruceSchemas.Pneuamtics.v2024_04_06.UpdatePneumaticsDataEmitPayloadSchema  = {
	id: 'updatePneumaticsDataEmitPayload',
	version: 'v2024_04_06',
	namespace: 'Pneuamtics',
	name: '',
	    fields: {
	            /** Update me. */
	            'aTextField': {
	                label: 'Update me',
	                type: 'text',
	                options: undefined
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePneumaticsDataEmitPayloadSchema)

export default updatePneumaticsDataEmitPayloadSchema
