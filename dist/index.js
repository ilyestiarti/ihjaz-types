"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceTypeSchema = exports.AdminUserSchema = exports.AdminStatsSchema = exports.InfiniteNotificationsDataSchema = exports.NotificationsResponseSchema = exports.ReviewWithUserSchema = exports.ReviewSchema = exports.InvoiceWithCreatorSchema = exports.InvoiceSchema = exports.PushSubscriptionSchema = exports.NotificationSchema = exports.PaymentTransactionSchema = exports.PlaceSubscriptionSchema = exports.SubscriptionPlanSchema = exports.OtpRecordSchema = exports.TimeLineSlotSchema = exports.AppointmentWithUserSchema = exports.AppointmentSchema = exports.AppointmentStatusSchema = exports.BlockingWithUserSchema = exports.BlockingSchema = exports.GeocodedPlaceSchema = exports.PlaceSchema = exports.OpeningHoursSchema = exports.DayScheduleSchema = exports.TimeSlotSchema = exports.BusinessProfileSchema = exports.UserSchema = exports.GoogleCalendarTokensSchema = exports.IdSchema = void 0;
const zod_1 = require("zod");
exports.IdSchema = zod_1.z.string();
exports.GoogleCalendarTokensSchema = zod_1.z.object({
    accessToken: zod_1.z.string(),
    refreshToken: zod_1.z.string(),
    expiryDate: zod_1.z.number(),
});
exports.UserSchema = zod_1.z.object({
    _id: exports.IdSchema,
    name: zod_1.z.string(),
    photo: zod_1.z.string().nullable().optional(),
    email: zod_1.z.string().nullable().optional(),
    phone: zod_1.z.string(),
    passwordHash: zod_1.z.string().optional(),
    googleId: zod_1.z.string().nullable().optional(),
    blocked: zod_1.z.boolean(),
    permissions: zod_1.z.array(zod_1.z.string()).optional(),
    verified: zod_1.z.boolean().optional(),
    googleCalendarTokens: exports.GoogleCalendarTokensSchema.nullable().optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    failedLoginAttempts: zod_1.z.number().optional(),
    lockedUntil: zod_1.z.string().nullable().optional(),
    lastFailedLoginAt: zod_1.z.string().nullable().optional(),
    tokenVersion: zod_1.z.number().optional(),
});
exports.BusinessProfileSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    certificates: zod_1.z.array(zod_1.z.string()),
    status: zod_1.z.enum(["pending", "approved", "rejected"]),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.TimeSlotSchema = zod_1.z.object({
    open: zod_1.z.string(),
    close: zod_1.z.string(),
    maxAppointments: zod_1.z.number().nullable().optional(),
    enableGuest: zod_1.z.boolean().nullable().optional(),
    requireName: zod_1.z.boolean().nullable().optional(),
    requirePhone: zod_1.z.boolean().nullable().optional(),
});
exports.DayScheduleSchema = zod_1.z.object({
    day: zod_1.z.number().min(0).max(6),
    slots: zod_1.z.array(exports.TimeSlotSchema),
    enabled: zod_1.z.boolean().optional().default(true),
});
exports.OpeningHoursSchema = zod_1.z.array(exports.DayScheduleSchema);
exports.PlaceSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    photo: zod_1.z.string(),
    name: zod_1.z.string(),
    latitude: zod_1.z.number(),
    longitude: zod_1.z.number(),
    address: zod_1.z.string().nullable().optional(),
    type: zod_1.z.string().nullable().optional(),
    openingHours: exports.OpeningHoursSchema.nullable().optional(),
    subscriptionId: exports.IdSchema.optional(),
    hasActiveSubscription: zod_1.z.boolean(),
    averageRating: zod_1.z.number().nullable().optional(),
    reviewCount: zod_1.z.number().optional(),
    ratingSum: zod_1.z.number().optional(),
    isBlocked: zod_1.z.boolean().optional().default(false),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.GeocodedPlaceSchema = exports.PlaceSchema.omit({ userId: true, openingHours: true }).extend({
    isGeocoded: zod_1.z.literal(true),
    displayName: zod_1.z.string(),
    geocodingType: zod_1.z.string(),
    geocodingClass: zod_1.z.string(),
    importance: zod_1.z.number(),
    address: zod_1.z.string(),
});
exports.BlockingSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    placeId: exports.IdSchema,
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.BlockingWithUserSchema = exports.BlockingSchema.extend({
    user: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string().nullable().optional(),
        phone: zod_1.z.string(),
    }),
});
exports.AppointmentStatusSchema = zod_1.z.enum([
    "pending",
    "confirmed",
    "cancelled",
    "completed",
    "no_show",
    "expired",
]);
exports.AppointmentSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema.nullable(),
    placeId: exports.IdSchema,
    slotId: exports.IdSchema.nullable().optional(),
    scheduledDate: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    status: exports.AppointmentStatusSchema,
    requestedBy: zod_1.z.enum(["business", "user"]),
    requestExpiresAt: zod_1.z.string().nullable().optional(),
    notes: zod_1.z.string().nullable().optional(),
    guest: zod_1.z.object({
        name: zod_1.z.string().nullable().optional(),
        phone: zod_1.z.string().nullable().optional(),
    }).nullable().optional(),
    calendarEventId: zod_1.z.string().nullable().optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
    user: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string().nullable().optional(),
        phone: zod_1.z.string(),
    }).optional(),
    place: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string(),
        address: zod_1.z.string().nullable().optional(),
    }).optional(),
    business: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string().nullable().optional(),
        phone: zod_1.z.string(),
    }).optional(),
});
exports.AppointmentWithUserSchema = exports.AppointmentSchema.extend({
    user: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string().nullable().optional(),
        phone: zod_1.z.string(),
    }),
});
exports.TimeLineSlotSchema = zod_1.z.object({
    _id: exports.IdSchema,
    placeId: exports.IdSchema,
    date: zod_1.z.string(),
    startTime: zod_1.z.string(),
    endTime: zod_1.z.string(),
    isBooked: zod_1.z.boolean(),
    appointmentId: exports.IdSchema.nullable().optional(),
    createdAt: zod_1.z.string(),
});
exports.OtpRecordSchema = zod_1.z.object({
    _id: exports.IdSchema,
    identifier: zod_1.z.string(),
    code: zod_1.z.string(),
    purpose: zod_1.z.enum(["register", "login", "email_change", "phone_change", "forgot_password"]),
    used: zod_1.z.boolean(),
    expiresAt: zod_1.z.string(),
    createdAt: zod_1.z.string(),
});
exports.SubscriptionPlanSchema = zod_1.z.object({
    _id: exports.IdSchema,
    name: zod_1.z.string(),
    displayName: zod_1.z.string(),
    description: zod_1.z.string().optional(),
    features: zod_1.z.array(zod_1.z.string()),
    monthlyPrice: zod_1.z.number(),
    yearlyPrice: zod_1.z.number(),
    appointmentLimit: zod_1.z.number().nullable(),
    isActive: zod_1.z.boolean(),
    most: zod_1.z.boolean(),
    hasFreeTrial: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.PlaceSubscriptionSchema = zod_1.z.object({
    _id: exports.IdSchema,
    placeId: exports.IdSchema,
    userId: exports.IdSchema,
    planId: exports.IdSchema,
    status: zod_1.z.enum(["active", "inactive", "cancelled", "expired", "trial"]),
    billingCycle: zod_1.z.enum(["monthly", "yearly"]),
    currentPeriodStart: zod_1.z.string(),
    currentPeriodEnd: zod_1.z.string(),
    appointmentCount: zod_1.z.number(),
    chargilyCheckoutId: zod_1.z.string().optional(),
    cancelledAt: zod_1.z.string().optional(),
    trialEndsAt: zod_1.z.string().optional(),
    wasTrial: zod_1.z.boolean().optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.PaymentTransactionSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    placeSubscriptionId: exports.IdSchema,
    placeId: exports.IdSchema,
    amount: zod_1.z.number(),
    currency: zod_1.z.string(),
    status: zod_1.z.enum(["pending", "completed", "failed", "refunded"]),
    chargilyCheckoutId: zod_1.z.string(),
    paymentMethod: zod_1.z.string(),
    metadata: zod_1.z.record(zod_1.z.union([zod_1.z.string(), zod_1.z.number(), zod_1.z.boolean()])),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.NotificationSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    title: zod_1.z.string(),
    detail: zod_1.z.string(),
    photo: zod_1.z.string().nullable().optional(),
    readed: zod_1.z.boolean(),
    meta: zod_1.z.record(zod_1.z.union([zod_1.z.array(zod_1.z.string()), zod_1.z.number(), zod_1.z.string(), zod_1.z.boolean()])).optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.PushSubscriptionSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    endpoint: zod_1.z.string(),
    p256dh: zod_1.z.string(),
    auth: zod_1.z.string(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.InvoiceSchema = zod_1.z.object({
    _id: exports.IdSchema,
    photo: zod_1.z.string(),
    description: zod_1.z.string(),
    amount: zod_1.z.number(),
    approvalLink: zod_1.z.string(),
    createdBy: exports.IdSchema,
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.InvoiceWithCreatorSchema = exports.InvoiceSchema.extend({
    creator: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string().nullable().optional(),
    }),
});
exports.ReviewSchema = zod_1.z.object({
    _id: exports.IdSchema,
    userId: exports.IdSchema,
    placeId: exports.IdSchema,
    rating: zod_1.z.number().min(1).max(5),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.ReviewWithUserSchema = exports.ReviewSchema.extend({
    user: zod_1.z.object({
        _id: exports.IdSchema,
        name: zod_1.z.string(),
        photo: zod_1.z.string().nullable().optional(),
    }),
});
exports.NotificationsResponseSchema = zod_1.z.object({
    notifications: zod_1.z.array(exports.NotificationSchema),
    unreadCount: zod_1.z.number(),
    total: zod_1.z.number().optional(),
});
exports.InfiniteNotificationsDataSchema = zod_1.z.object({
    pages: zod_1.z.array(exports.NotificationsResponseSchema),
    pageParams: zod_1.z.array(zod_1.z.number()),
});
exports.AdminStatsSchema = zod_1.z.object({
    stats: zod_1.z.object({
        users: zod_1.z.number(),
        business: zod_1.z.object({
            total: zod_1.z.number(),
            pending: zod_1.z.number(),
            approved: zod_1.z.number(),
            rejected: zod_1.z.number(),
        }),
        places: zod_1.z.number(),
        appointments: zod_1.z.object({
            total: zod_1.z.number(),
            pending: zod_1.z.number(),
            confirmed: zod_1.z.number(),
            completed: zod_1.z.number(),
            cancelled: zod_1.z.number(),
            no_show: zod_1.z.number(),
        }),
        expenses: zod_1.z.number(),
        revenue: zod_1.z.object({
            total: zod_1.z.number(),
            byPlan: zod_1.z.array(zod_1.z.object({
                planId: zod_1.z.string(),
                planName: zod_1.z.string(),
                amount: zod_1.z.number(),
            })),
        }),
        expensesTotal: zod_1.z.number(),
        netBenefit: zod_1.z.number(),
        activeSubscriptions: zod_1.z.number(),
    }),
});
exports.AdminUserSchema = zod_1.z.object({
    _id: exports.IdSchema,
    name: zod_1.z.string(),
    photo: zod_1.z.string().nullable().optional(),
    email: zod_1.z.string().nullable().optional(),
    phone: zod_1.z.string(),
    blocked: zod_1.z.boolean(),
    verified: zod_1.z.boolean().optional(),
    permissions: zod_1.z.array(zod_1.z.string()).optional(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
exports.PlaceTypeSchema = zod_1.z.object({
    _id: exports.IdSchema,
    displayName: zod_1.z.string(),
    photo: zod_1.z.string(),
    isActive: zod_1.z.boolean(),
    createdAt: zod_1.z.string(),
    updatedAt: zod_1.z.string(),
});
//# sourceMappingURL=index.js.map