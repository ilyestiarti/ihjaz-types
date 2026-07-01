import { z } from "zod";

export const IdSchema = z.string();
export type Id = z.infer<typeof IdSchema>;

export const GoogleCalendarTokensSchema = z.object({
  accessToken: z.string(),
  refreshToken: z.string(),
  expiryDate: z.number(),
});
export type GoogleCalendarTokens = z.infer<typeof GoogleCalendarTokensSchema>;

export const UserSchema = z.object({
  _id: IdSchema,
  name: z.string(),
  photo: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  phone: z.string(),
  passwordHash: z.string().optional(),
  googleId: z.string().nullable().optional(),
  blocked: z.boolean(),
  permissions: z.array(z.string()).optional(),
  verified: z.boolean().optional(),
  googleCalendarTokens: GoogleCalendarTokensSchema.nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  failedLoginAttempts: z.number().optional(),
  lockedUntil: z.string().nullable().optional(),
  lastFailedLoginAt: z.string().nullable().optional(),
  tokenVersion: z.number().optional(),
});
export type User = z.infer<typeof UserSchema>;

export const BusinessProfileSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  certificates: z.array(z.string()),
  status: z.enum(["pending", "approved", "rejected"]),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type BusinessProfile = z.infer<typeof BusinessProfileSchema>;

export const TimeSlotSchema = z.object({
  open: z.string(),
  close: z.string(),
  maxAppointments: z.number().nullable().optional(),
  enableGuest: z.boolean().nullable().optional(),
  requireName: z.boolean().nullable().optional(),
  requirePhone: z.boolean().nullable().optional(),
});
export type TimeSlot = z.infer<typeof TimeSlotSchema>;

export const DayScheduleSchema = z.object({
  day: z.number().min(0).max(6),
  slots: z.array(TimeSlotSchema),
  enabled: z.boolean().optional().default(true),
});
export type DaySchedule = z.infer<typeof DayScheduleSchema>;

export const OpeningHoursSchema = z.array(DayScheduleSchema);
export type OpeningHours = z.infer<typeof OpeningHoursSchema>;

export const PlaceSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  photo: z.string(),
  name: z.string(),
  latitude: z.number(),
  longitude: z.number(),
  address: z.string().nullable().optional(),
  type: z.string().nullable().optional(),
  openingHours: OpeningHoursSchema.nullable().optional(),
  subscriptionId: IdSchema.optional(),
  hasActiveSubscription: z.boolean(),
  averageRating: z.number().nullable().optional(),
  reviewCount: z.number().optional(),
  ratingSum: z.number().optional(),
  isBlocked: z.boolean().optional().default(false),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Place = z.infer<typeof PlaceSchema>;

export const GeocodedPlaceSchema = PlaceSchema.omit({ userId: true, openingHours: true }).extend({
  isGeocoded: z.literal(true),
  displayName: z.string(),
  geocodingType: z.string(),
  geocodingClass: z.string(),
  importance: z.number(),
  address: z.string(),
});
export type GeocodedPlace = z.infer<typeof GeocodedPlaceSchema>;

export const BlockingSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  placeId: IdSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Blocking = z.infer<typeof BlockingSchema>;

export const BlockingWithUserSchema = BlockingSchema.extend({
  user: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string().nullable().optional(),
    phone: z.string(),
  }),
});
export type BlockingWithUser = z.infer<typeof BlockingWithUserSchema>;

export const AppointmentStatusSchema = z.enum([
  "pending",
  "confirmed",
  "cancelled",
  "completed",
  "no_show",
  "expired",
]);
export type AppointmentStatus = z.infer<typeof AppointmentStatusSchema>;

export const AppointmentSchema = z.object({
  _id: IdSchema,
  userId: IdSchema.nullable(),
  placeId: IdSchema,
  slotId: IdSchema.nullable().optional(),
  scheduledDate: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  status: AppointmentStatusSchema,
  requestedBy: z.enum(["business", "user"]),
  requestExpiresAt: z.string().nullable().optional(),
  notes: z.string().nullable().optional(),
  guest: z.object({
    name: z.string().nullable().optional(),
    phone: z.string().nullable().optional(),
  }).nullable().optional(),
  calendarEventId: z.string().nullable().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
  user: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string().nullable().optional(),
    phone: z.string(),
  }).optional(),
  place: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string(),
    address: z.string().nullable().optional(),
  }).optional(),
  business: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string().nullable().optional(),
    phone: z.string(),
  }).optional(),
});
export type Appointment = z.infer<typeof AppointmentSchema>;

export const AppointmentWithUserSchema = AppointmentSchema.extend({
  user: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string().nullable().optional(),
    phone: z.string(),
  }),
});
export type AppointmentWithUser = z.infer<typeof AppointmentWithUserSchema>;

export const TimeLineSlotSchema = z.object({
  _id: IdSchema,
  placeId: IdSchema,
  date: z.string(),
  startTime: z.string(),
  endTime: z.string(),
  isBooked: z.boolean(),
  appointmentId: IdSchema.nullable().optional(),
  createdAt: z.string(),
});
export type TimeLineSlot = z.infer<typeof TimeLineSlotSchema>;

export const OtpRecordSchema = z.object({
  _id: IdSchema,
  identifier: z.string(),
  code: z.string(),
  purpose: z.enum(["register", "login", "email_change", "phone_change", "forgot_password"]),
  used: z.boolean(),
  expiresAt: z.string(),
  createdAt: z.string(),
});
export type OtpRecord = z.infer<typeof OtpRecordSchema>;

export const SubscriptionPlanSchema = z.object({
  _id: IdSchema,
  name: z.enum(["basic", "standard", "premium"]),
  displayName: z.string(),
  description: z.string().optional(),
  features: z.array(z.string()),
  monthlyPrice: z.number(),
  yearlyPrice: z.number(),
  appointmentLimit: z.number().nullable(),
  isActive: z.boolean(),
  most: z.boolean(),
  hasFreeTrial: z.boolean().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type SubscriptionPlan = z.infer<typeof SubscriptionPlanSchema>;

export const PlaceSubscriptionSchema = z.object({
  _id: IdSchema,
  placeId: IdSchema,
  userId: IdSchema,
  planId: IdSchema,
  status: z.enum(["active", "inactive", "cancelled", "expired", "trial"]),
  billingCycle: z.enum(["monthly", "yearly"]),
  currentPeriodStart: z.string(),
  currentPeriodEnd: z.string(),
  appointmentCount: z.number(),
  chargilyCheckoutId: z.string().optional(),
  cancelledAt: z.string().optional(),
  trialEndsAt: z.string().optional(),
  wasTrial: z.boolean().optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type PlaceSubscription = z.infer<typeof PlaceSubscriptionSchema>;

export const PaymentTransactionSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  placeSubscriptionId: IdSchema,
  placeId: IdSchema,
  amount: z.number(),
  currency: z.string(),
  status: z.enum(["pending", "completed", "failed", "refunded"]),
  chargilyCheckoutId: z.string(),
  paymentMethod: z.string(),
  metadata: z.record(z.union([z.string(), z.number(), z.boolean()])),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type PaymentTransaction = z.infer<typeof PaymentTransactionSchema>;

export const NotificationSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  title: z.string(),
  detail: z.string(),
  photo: z.string().nullable().optional(),
  readed: z.boolean(),
  meta: z.record(z.union([z.array(z.string()), z.number(), z.string(), z.boolean()])).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Notification = z.infer<typeof NotificationSchema>;

export const PushSubscriptionSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  endpoint: z.string(),
  p256dh: z.string(),
  auth: z.string(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type PushSubscription = z.infer<typeof PushSubscriptionSchema>;

export const InvoiceSchema = z.object({
  _id: IdSchema,
  photo: z.string(),
  description: z.string(),
  amount: z.number(),
  approvalLink: z.string(),
  createdBy: IdSchema,
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Invoice = z.infer<typeof InvoiceSchema>;

export const InvoiceWithCreatorSchema = InvoiceSchema.extend({
  creator: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string().nullable().optional(),
  }),
});
export type InvoiceWithCreator = z.infer<typeof InvoiceWithCreatorSchema>;

export const ReviewSchema = z.object({
  _id: IdSchema,
  userId: IdSchema,
  placeId: IdSchema,
  rating: z.number().min(1).max(5),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type Review = z.infer<typeof ReviewSchema>;

export const ReviewWithUserSchema = ReviewSchema.extend({
  user: z.object({
    _id: IdSchema,
    name: z.string(),
    photo: z.string().nullable().optional(),
  }),
});
export type ReviewWithUser = z.infer<typeof ReviewWithUserSchema>;

export const NotificationsResponseSchema = z.object({
  notifications: z.array(NotificationSchema),
  unreadCount: z.number(),
  total: z.number().optional(),
});
export type NotificationsResponse = z.infer<typeof NotificationsResponseSchema>;

export const InfiniteNotificationsDataSchema = z.object({
  pages: z.array(NotificationsResponseSchema),
  pageParams: z.array(z.number()),
});
export type InfiniteNotificationsData = z.infer<typeof InfiniteNotificationsDataSchema>;

export const AdminStatsSchema = z.object({
  stats: z.object({
    users: z.number(),
    business: z.object({
      total: z.number(),
      pending: z.number(),
      approved: z.number(),
      rejected: z.number(),
    }),
    places: z.number(),
    appointments: z.object({
      total: z.number(),
      pending: z.number(),
      confirmed: z.number(),
      completed: z.number(),
      cancelled: z.number(),
      no_show: z.number(),
    }),
    expenses: z.number(),
    revenue: z.object({
      total: z.number(),
      byPlan: z.array(
        z.object({
          planId: z.string(),
          planName: z.string(),
          amount: z.number(),
        }),
      ),
    }),
    expensesTotal: z.number(),
    netBenefit: z.number(),
    activeSubscriptions: z.number(),
  }),
});
export type AdminStats = z.infer<typeof AdminStatsSchema>;

export const AdminUserSchema = z.object({
  _id: IdSchema,
  name: z.string(),
  photo: z.string().nullable().optional(),
  email: z.string().nullable().optional(),
  phone: z.string(),
  blocked: z.boolean(),
  verified: z.boolean().optional(),
  permissions: z.array(z.string()).optional(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type AdminUser = z.infer<typeof AdminUserSchema>;

export const PlaceTypeSchema = z.object({
  _id: IdSchema,
  displayName: z.string(),
  photo: z.string(),
  isActive: z.boolean(),
  createdAt: z.string(),
  updatedAt: z.string(),
});
export type PlaceType = z.infer<typeof PlaceTypeSchema>;
