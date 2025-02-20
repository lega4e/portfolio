import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  async createContact(data: { name: string; email: string; message: string }) {
    return this.prisma.contact.create({ data });
  }
}