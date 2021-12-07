import { Publisher, Subjects, TicketUpdatedEvent } from '@ensembletech/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
