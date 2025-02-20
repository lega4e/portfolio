import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';
import { ContactModule } from './contact/contact.module';
import { PostModule } from './post/post.module';

@Module({
  imports: [ContactModule, PostModule],
  providers: [PrismaService],
})
export class AppModule {}