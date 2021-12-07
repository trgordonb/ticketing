import { Publisher, Subjects, TicketCreatedEvent } from '@ensembletech/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
