import { SchemaRegistry } from '@sprucelabs/schema'
import { SpruceSchemas } from '../../schemas.types'

import eventSourceSchema_v2021_09_13 from '#spruce/schemas/spruceEventUtils/v2021_09_13/eventSource.schema'
import updatePneumaticsDataEmitTargetSchema_v2024_04_06 from '#spruce/schemas/pneuamtics/v2024_04_06/updatePneumaticsDataEmitTarget.schema'
import updatePneumaticsDataEmitPayloadSchema_v2024_04_06 from '#spruce/schemas/pneuamtics/v2024_04_06/updatePneumaticsDataEmitPayload.schema'

const updatePneumaticsDataEmitTargetAndPayloadSchema: SpruceSchemas.Pneuamtics.v2024_04_06.UpdatePneumaticsDataEmitTargetAndPayloadSchema  = {
	id: 'updatePneumaticsDataEmitTargetAndPayload',
	version: 'v2024_04_06',
	namespace: 'Pneuamtics',
	name: '',
	    fields: {
	            /** Source. */
	            'source': {
	                label: 'Source',
	                type: 'schema',
	                options: {schema: eventSourceSchema_v2021_09_13,}
	            },
	            /** . */
	            'target': {
	                type: 'schema',
	                options: {schema: updatePneumaticsDataEmitTargetSchema_v2024_04_06,}
	            },
	            /** . */
	            'payload': {
	                type: 'schema',
	                options: {schema: updatePneumaticsDataEmitPayloadSchema_v2024_04_06,}
	            },
	    }
}

SchemaRegistry.getInstance().trackSchema(updatePneumaticsDataEmitTargetAndPayloadSchema)

export default updatePneumaticsDataEmitTargetAndPayloadSchema
