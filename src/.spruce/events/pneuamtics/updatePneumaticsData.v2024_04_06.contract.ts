import '#spruce/permissions/permissions.types'
import updatePneumaticsDataEmitTargetAndPayloadSchema from '#spruce/schemas/pneuamtics/v2024_04_06/updatePneumaticsDataEmitTargetAndPayload.schema'
import updatePneumaticsDataResponsePayloadSchema from '#spruce/schemas/pneuamtics/v2024_04_06/updatePneumaticsDataResponsePayload.schema'
import { buildEventContract } from '@sprucelabs/mercury-types'


const updatePneumaticsDataEventContract = buildEventContract({
    eventSignatures: {
        'pneuamtics.update-pneumatics-data::v2024_04_06': {
            
            
            
            emitPayloadSchema: updatePneumaticsDataEmitTargetAndPayloadSchema,
            responsePayloadSchema: updatePneumaticsDataResponsePayloadSchema,
            
            
        }
    }
})
export default updatePneumaticsDataEventContract

export type UpdatePneumaticsDataEventContract = typeof updatePneumaticsDataEventContract