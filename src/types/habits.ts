export interface Habit {
    id: string; // opaque unique identifier — use crypto.randomUUID()
    name: string; // validated at form level, not type level
    createdAt: string; // ISO 8601: "2026-06-12T10:30:00.000Z" — survives JSON round-trip
    completedDates: string[]; // ISO 8601 date strings: ["2026-06-11", "2026-06-12"]
    isArchived: boolean; // soft delete flag
}