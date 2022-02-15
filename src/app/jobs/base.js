import { queue } from "@core/jobs";
import { redis } from '@config'
export default class Base {
    constructor(name) {
        if (new.target === Base) {
            throw new TypeError("Cannot construct Base instances directly");
        }
        this.queue_name = redis.queue_perfix + name
    }

    async add(data = null) {
        this.queue = queue(this.queue_name)
        return await this.queue.add(data, this.options())
    }

    async process() {
        this.queue = queue(this.queue_name)
        this.queue.process(async (job, done) => await this.define(job, done))
        if (this.options()?.repeat) {
            this.add()
        }
    }
}