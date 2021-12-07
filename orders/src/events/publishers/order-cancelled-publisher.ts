import { Subjects, Publisher, OrderCancelledEvent } from '@ensembletech/common';

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  subject: Subjects.OrderCancelled = Subjects.OrderCancelled;
}
