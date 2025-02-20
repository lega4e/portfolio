import { Controller, Get, Post, Body } from '@nestjs/common';
import { PostService } from './post.service';

@Controller('api/posts')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Get()
  async getPosts() {
    return this.postService.getPosts();
  }

  @Post()
  async createPost(@Body() data: { title: string; content: string; category: string; tags: string[] }) {
    return this.postService.createPost(data);
  }
}