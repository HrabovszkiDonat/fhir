export const CommunicationStatuses: string[] = [
  'preparation',
  'in-progress',
  'not-done',
  'on-hold',
  'stopped',
  'completed',
  'entered-in-error',
  'unknown',
];

export const CommunicationPriorities: string[] = [
  'routine',
  'urgent',
  'asap',
  'stat',
];

export const CommunicationColumns = [
  'id',
  'patient',
  'status',
  'priority',
  'topic',
  'sent',
];
