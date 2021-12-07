import { Subjects, Publisher, PaymentCreatedEvent } from '@ensembletech/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
