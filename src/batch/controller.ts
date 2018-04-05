import { JsonController, Get, NotFoundError, Param, Post, Body, Put } from "routing-controllers";
import Batch from './entity'


@JsonController()
export default class BatchController {

    @Get('/batch')
    async getAllBatchs() {
        const batch =  await Batch.find()
        return batch
    }
    @Get('/batch/:id([0-9]+)')
         getSingleBatch(
        @Param("id") id: number
    ) {
        return Batch.findOneById(id)
        // if (!batch) throw new NotFoundError("No batch found")
        // return batch
    }

    @Post('/batch')
    async createBatch(
        @Body() body: Batch
    ) {
        const batch = await Batch.create(body).save()
        return batch
    }

    @Put('/batch/:id([0-9]+)')
    async updateBatch(
        @Param("id") id: number,
        @Body() update: Partial<Batch>
    ) {
        const batch = await Batch.findOneById(id)
        if (!batch) throw new NotFoundError("Batch not found")

        return Batch.merge(batch, update).save()
    }
}