export interface Communication {
  identifier: number; // ID - UNIQUE - PRIMARY KEY
  patient: string;
  status:
    | 'preparation'
    | 'in-progress'
    | 'not-done'
    | 'on-hold'
    | 'stopped'
    | 'completed'
    | 'entered-in-error'
    | 'unknown'; // R!  preparation | in-progress | not-done | on-hold | stopped | completed | entered-in-error | unknown
  priority: 'routine' | 'urgent' | 'asap' | 'stat'; // routine | urgent | asap | stat
  topic: string; // Hivatkozik egy Patient-re
  sent: string;
}

export interface Patient {
  identifier: number;
  name: string;
  gender: 'male' | 'female' | 'other';
  birthDate: string;
}
