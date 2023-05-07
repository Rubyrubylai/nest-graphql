import { Module } from "@nestjs/common";
import { DateScalar } from "./scalar";

@Module({
	providers: [DateScalar],
})
export class CommonModule {}
