import { Publisher, OrderCreatedEvent, Subjects } from '@ensembletech/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
