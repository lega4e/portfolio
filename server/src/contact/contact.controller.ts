import { Controller, Post, Body } from '@nestjs/common';
import { ContactService } from './contact.service';

@Controller('api/contact')
export class ContactController {
  constructor(private readonly contactService: ContactService) {}

  @Post()
  async create(@Body() data: { name: string; email: string; message: string }) {
    return this.contactService.createContact(data);
  }
}