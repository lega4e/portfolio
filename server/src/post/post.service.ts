import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async getPosts() {
    return this.prisma.post.findMany();
  }

  async createPost(data: { title: string; content: string; category: string; tags: string[] }) {
    return this.prisma.post.create({ data });
  }
}