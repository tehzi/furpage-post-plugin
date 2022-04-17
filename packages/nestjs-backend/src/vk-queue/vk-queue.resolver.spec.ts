import { Test, TestingModule } from "@nestjs/testing";
import { VkQueueResolver } from "./vk-queue.resolver";

describe("VkQueueResolver", () => {
    let resolver: VkQueueResolver;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [VkQueueResolver],
        }).compile();

        resolver = module.get<VkQueueResolver>(VkQueueResolver);
    });

    it("should be defined", () => {
        expect(resolver).toBeDefined();
    });
});
