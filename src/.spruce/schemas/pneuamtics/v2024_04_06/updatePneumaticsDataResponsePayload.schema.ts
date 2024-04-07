import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updatePneumaticsDataResponsePayloadSchema: SpruceSchemas.Pneuamtics.v2024_04_06.UpdatePneumaticsDataResponsePayloadSchema  = {
	id: 'updatePneumaticsDataResponsePayload',
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

SchemaRegistry.getInstance().trackSchema(updatePneumaticsDataResponsePayloadSchema)

export default updatePneumaticsDataResponsePayloadSchema
