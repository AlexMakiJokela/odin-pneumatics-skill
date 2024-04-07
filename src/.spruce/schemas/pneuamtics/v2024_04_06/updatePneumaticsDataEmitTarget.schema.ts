import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'



const updatePneumaticsDataEmitTargetSchema: SpruceSchemas.Pneuamtics.v2024_04_06.UpdatePneumaticsDataEmitTargetSchema  = {
	id: 'updatePneumaticsDataEmitTarget',
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

SchemaRegistry.getInstance().trackSchema(updatePneumaticsDataEmitTargetSchema)

export default updatePneumaticsDataEmitTargetSchema
