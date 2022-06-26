import { NoOpQueryService, QueryService } from "@nestjs-query/core";
import { ImagesEntity } from "./images.entity";

@QueryService(ImagesEntity)
export class ImagesResolver extends NoOpQueryService<ImagesEntity> {}
